"""通知。Markdown ダイジェストを書き、任意で Slack に投げる。

新着が無ければ何も送らない — 毎回届く通知は読まれなくなる。
"""

from __future__ import annotations

import json
import os
import sqlite3
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

SLACK_ENV = "UPWORK_RADAR_SLACK_WEBHOOK"


def _budget_label(row: sqlite3.Row) -> str:
    kind, lo, hi = row["budget_type"], row["budget_min"], row["budget_max"]
    if kind == "hourly" and lo:
        return f"${lo:,.0f}-${hi or lo:,.0f}/h"
    if kind == "fixed" and lo:
        return f"${lo:,.0f} 固定"
    return "予算不明"


def build_digest(rows: list[sqlite3.Row], *, now: datetime | None = None) -> str:
    now = now or datetime.now(timezone.utc)
    if not rows:
        return ""
    lines = [f"# Upwork 新着 {len(rows)} 件（{now.strftime('%Y-%m-%d %H:%M UTC')}）", ""]
    for row in rows:
        reasons = json.loads(row["reasons"] or "[]")
        lines.append(f"## {row['score']} — {row['title']}")
        lines.append("")
        lines.append(f"- {row['url']}")
        lines.append(f"- {_budget_label(row)} ・ 収集元 {row['source']}")
        for reason in reasons:
            lines.append(f"- {reason}")
        lines.append("")
    lines.append("---")
    lines.append("提案の送信は Upwork の画面で自分で行う。このツールは送信しない。")
    return "\n".join(lines) + "\n"


def write_digest(text: str, out_dir: Path = Path("digests")) -> Path | None:
    if not text:
        return None
    out_dir.mkdir(parents=True, exist_ok=True)
    path = out_dir / f"{datetime.now(timezone.utc):%Y%m%d-%H%M%S}.md"
    path.write_text(text, encoding="utf-8")
    return path


def post_to_slack(rows: list[sqlite3.Row], webhook: str | None = None) -> bool:
    """Slack に投げる。webhook 未設定なら何もせず False。"""
    webhook = webhook or os.environ.get(SLACK_ENV, "")
    if not webhook or not rows:
        return False
    lines = [f"*Upwork 新着 {len(rows)} 件*"]
    for row in rows[:10]:
        lines.append(f"• `{row['score']}` <{row['url']}|{row['title']}> — {_budget_label(row)}")
    if len(rows) > 10:
        lines.append(f"…ほか {len(rows) - 10} 件")
    payload = json.dumps({"text": "\n".join(lines)}).encode()
    req = urllib.request.Request(
        webhook, data=payload, headers={"Content-Type": "application/json"}
    )
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            return 200 <= resp.status < 300
    except (urllib.error.URLError, OSError) as exc:
        print(f"[warn] Slack 通知に失敗: {exc}")
        return False


def print_table(rows: list[sqlite3.Row]) -> None:
    if not rows:
        print("該当なし。")
        return
    width = max(len(r["title"]) for r in rows)
    width = min(max(width, 20), 60)
    print(f"{'score':>5}  {'title':<{width}}  budget")
    print("-" * (width + 22))
    for row in rows:
        title = row["title"]
        if len(title) > width:
            title = title[: width - 1] + "…"
        print(f"{row['score']:>5}  {title:<{width}}  {_budget_label(row)}")
