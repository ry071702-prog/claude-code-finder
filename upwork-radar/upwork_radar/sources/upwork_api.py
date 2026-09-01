"""公式 GraphQL API 由来の収集元。

前提: Upwork に API キーを申請して承認されていること（申請から回答まで約1週間）。
承認前はこの Source は「使えない」と報告するだけで、他の収集元の邪魔をしない。

スキーマの注意: フィールド名は承認済みキーがないと検証できない。クエリ本体は
config/upwork_query.graphql に置いてあり、コードを触らずに直せる。マッパは
欠けたフィールドを None（不明）として扱うので、クエリを削っても壊れない。

この API に提案を送る口は存在しない。読み取り専用。
"""

from __future__ import annotations

import json
import os
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime
from pathlib import Path
from typing import Any, Iterator

from ..models import Job, fallback_id
from .base import SourceError

TOKEN_URL = "https://www.upwork.com/api/v3/oauth2/token"
GRAPHQL_URL = "https://api.upwork.com/graphql"
JOB_URL_TEMPLATE = "https://www.upwork.com/jobs/{ciphertext}"

DEFAULT_QUERY_FILE = "upwork_query.graphql"


def _get(data: Any, *path: str, default: Any = None) -> Any:
    """dict を辿る。途中が無い/None ならすぐ default。"""
    cur = data
    for key in path:
        if not isinstance(cur, dict) or cur.get(key) is None:
            return default
        cur = cur[key]
    return cur


def _as_float(value: Any) -> float | None:
    if value is None or value == "":
        return None
    try:
        return float(value)
    except (TypeError, ValueError):
        return None


def _as_dt(value: Any) -> datetime | None:
    if not value:
        return None
    try:
        return datetime.fromisoformat(str(value).replace("Z", "+00:00"))
    except ValueError:
        return None


def node_to_job(node: dict[str, Any]) -> Job:
    """GraphQL のノード 1 件を Job に落とす。欠けたフィールドは不明のまま。"""
    cipher = node.get("ciphertext") or node.get("id") or ""
    url = JOB_URL_TEMPLATE.format(ciphertext=cipher) if cipher else ""
    title = (node.get("title") or "").strip()

    hourly_min = _as_float(_get(node, "hourlyBudgetMin", "rawValue"))
    hourly_max = _as_float(_get(node, "hourlyBudgetMax", "rawValue"))
    fixed = _as_float(_get(node, "amount", "rawValue"))

    if hourly_min is not None or hourly_max is not None:
        budget_type, lo, hi = "hourly", hourly_min, hourly_max or hourly_min
    elif fixed:
        budget_type, lo, hi = "fixed", fixed, fixed
    else:
        budget_type, lo, hi = "unknown", None, None

    verification = _get(node, "client", "verificationStatus")
    verified: bool | None
    if verification is None:
        verified = None
    else:
        verified = str(verification).upper() in {"VERIFIED", "TRUE", "PAYMENT_VERIFIED"}

    return Job(
        id=cipher if cipher.startswith("~") else fallback_id(title, url or cipher),
        source="api",
        title=title,
        url=url,
        description=node.get("description") or "",
        posted_at=_as_dt(node.get("publishedDateTime") or node.get("createdDateTime")),
        budget_type=budget_type,
        budget_min=lo,
        budget_max=hi,
        skills=[s.get("name", "") for s in (node.get("skills") or []) if s.get("name")],
        experience_level=node.get("experienceLevel"),
        client_country=_get(node, "client", "location", "country"),
        client_total_spent=_as_float(_get(node, "client", "totalSpent", "rawValue")),
        client_rating=_as_float(_get(node, "client", "totalFeedback")),
        client_payment_verified=verified,
        proposals=node.get("totalApplicants"),
        raw=node,
    )


def _post_json(url: str, payload: bytes, headers: dict[str, str], timeout: int) -> dict:
    req = urllib.request.Request(url, data=payload, headers=headers, method="POST")
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as exc:
        body = exc.read().decode("utf-8", errors="replace")[:500]
        raise SourceError(f"[api] {url} が HTTP {exc.code}: {body}") from exc
    except urllib.error.URLError as exc:
        raise SourceError(f"[api] {url} に接続できない: {exc.reason}") from exc


class UpworkApiSource:
    """環境変数:

    UPWORK_ACCESS_TOKEN    直接アクセストークンを渡す場合（有効期限は 24 時間）
    UPWORK_CLIENT_ID       アプリのクライアント ID
    UPWORK_CLIENT_SECRET   アプリのシークレット
    UPWORK_REFRESH_TOKEN   初回の認可コードフローで得たリフレッシュトークン
    UPWORK_SEARCH_QUERY    検索語（既定 "python"）
    """

    name = "api"

    def __init__(
        self,
        *,
        config_dir: Path | None = None,
        search_query: str | None = None,
        limit: int = 50,
        timeout: int = 30,
    ) -> None:
        self.config_dir = Path(config_dir or "config")
        self.search_query = search_query or os.environ.get("UPWORK_SEARCH_QUERY", "python")
        self.limit = limit
        self.timeout = timeout
        self.access_token = os.environ.get("UPWORK_ACCESS_TOKEN", "")
        self.client_id = os.environ.get("UPWORK_CLIENT_ID", "")
        self.client_secret = os.environ.get("UPWORK_CLIENT_SECRET", "")
        self.refresh_token = os.environ.get("UPWORK_REFRESH_TOKEN", "")

    def available(self) -> tuple[bool, str]:
        if self.access_token:
            return True, "UPWORK_ACCESS_TOKEN を使う"
        if self.client_id and self.client_secret and self.refresh_token:
            return True, "リフレッシュトークンでアクセストークンを取得する"
        return False, (
            "UPWORK_ACCESS_TOKEN か、UPWORK_CLIENT_ID + UPWORK_CLIENT_SECRET + "
            "UPWORK_REFRESH_TOKEN が必要。API キーは申請・承認制（約1週間）。"
        )

    def query_text(self) -> str:
        path = self.config_dir / DEFAULT_QUERY_FILE
        if not path.exists():
            path = self.config_dir / f"{DEFAULT_QUERY_FILE.removesuffix('.graphql')}.example.graphql"
        if not path.exists():
            raise SourceError(f"[api] クエリファイルが無い: {self.config_dir}")
        lines = [ln for ln in path.read_text(encoding="utf-8").splitlines() if not ln.lstrip().startswith("#")]
        return "\n".join(lines).strip()

    def _fresh_access_token(self) -> str:
        if self.access_token:
            return self.access_token
        payload = urllib.parse.urlencode(
            {
                "grant_type": "refresh_token",
                "refresh_token": self.refresh_token,
                "client_id": self.client_id,
                "client_secret": self.client_secret,
            }
        ).encode()
        data = _post_json(
            TOKEN_URL,
            payload,
            {"Content-Type": "application/x-www-form-urlencoded"},
            self.timeout,
        )
        token = data.get("access_token")
        if not token:
            raise SourceError(f"[api] access_token が返ってこない: {data}")
        return token

    def fetch(self) -> Iterator[Job]:
        ok, why = self.available()
        if not ok:
            raise SourceError(f"[api] {why}")
        token = self._fresh_access_token()
        body = json.dumps(
            {
                "query": self.query_text(),
                "variables": {
                    "filter": {"titleExpression_eq": self.search_query},
                    "pagination": {"first": self.limit, "after": "0"},
                },
            }
        ).encode()
        data = _post_json(
            GRAPHQL_URL,
            body,
            {"Content-Type": "application/json", "Authorization": f"Bearer {token}"},
            self.timeout,
        )
        if errors := data.get("errors"):
            messages = "; ".join(e.get("message", str(e)) for e in errors)
            raise SourceError(
                f"[api] GraphQL エラー: {messages}\n"
                f"  フィールド名の不一致なら {self.config_dir / DEFAULT_QUERY_FILE} を直す。"
            )
        edges = _get(data, "data", "marketplaceJobPostingsSearch", "edges", default=[]) or []
        for edge in edges:
            node = edge.get("node") if isinstance(edge, dict) else None
            if isinstance(node, dict) and node.get("title"):
                yield node_to_job(node)
