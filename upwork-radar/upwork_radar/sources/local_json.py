"""手貼り用の収集元。

案件ページから拾った内容を JSON にして食わせる。API キー待ちの間に
スコアリングと提案文の質だけ先に詰めたいときに使う。

  [{"title": "...", "url": "https://www.upwork.com/jobs/~021...",
    "description": "...", "budget_type": "hourly", "budget_min": 40,
    "budget_max": 70, "skills": ["Python"], "posted_at": "2026-09-01T10:00:00Z"}]
"""

from __future__ import annotations

import json
from datetime import datetime
from pathlib import Path
from typing import Any, Iterator

from ..models import Job, fallback_id, job_id_from_url
from .base import SourceError


def _parse_dt(value: Any) -> datetime | None:
    if not value:
        return None
    if isinstance(value, datetime):
        return value
    text = str(value).replace("Z", "+00:00")
    try:
        return datetime.fromisoformat(text)
    except ValueError:
        return None


def job_from_dict(data: dict[str, Any], source: str = "local") -> Job:
    url = data.get("url", "")
    title = data.get("title", "").strip()
    if not title:
        raise SourceError(f"title の無いレコード: {data!r}")
    return Job(
        id=job_id_from_url(url) or fallback_id(title, url),
        source=source,
        title=title,
        url=url,
        description=data.get("description", ""),
        posted_at=_parse_dt(data.get("posted_at")),
        budget_type=data.get("budget_type", "unknown"),
        budget_min=data.get("budget_min"),
        budget_max=data.get("budget_max"),
        skills=list(data.get("skills", [])),
        experience_level=data.get("experience_level"),
        client_country=data.get("client_country"),
        client_total_spent=data.get("client_total_spent"),
        client_rating=data.get("client_rating"),
        client_payment_verified=data.get("client_payment_verified"),
        proposals=data.get("proposals"),
        raw=data,
    )


class LocalJsonSource:
    name = "local"

    def __init__(self, path: Path) -> None:
        self.path = Path(path)

    def available(self) -> tuple[bool, str]:
        if self.path.exists():
            return True, str(self.path)
        return False, f"{self.path} が無い。案件を JSON 配列で置く。"

    def fetch(self) -> Iterator[Job]:
        ok, why = self.available()
        if not ok:
            raise SourceError(why)
        data = json.loads(self.path.read_text(encoding="utf-8"))
        if not isinstance(data, list):
            raise SourceError(f"{self.path}: トップレベルは配列である必要がある。")
        for item in data:
            yield job_from_dict(item, source=self.name)
