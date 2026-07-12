#!/usr/bin/env python3
"""週次の差分を Slack に通知する（非LLM）。

設計上の但し書き:
  CLAUDE.md の「Slack連携は日報アプリに集約」方針に対する *明示的な例外* として、
  ユーザー判断でこのリポジトリ内に置いている（2026-07-12）。
  サイトと通知が同じリポジトリで完結することを優先した判断。

動作:
  - 前回通知した状態（data/notify_state.json）と比較し、
    「新しい CHANGELOG バージョン」「新しくSkills入りしたもの」が有る時だけ投稿する。
  - 差分が無ければ何もしない（毎週おなじ内容を流さない）。
  - 初回実行時は状態を記録するだけで投稿しない（過去分の一斉投稿を防ぐ）。
  - LLM は一切使わない。純粋な差分計算のみ。

使い方:
  python scripts/notify_slack.py --dry-run     # 投稿せず内容を確認
  SLACK_WEBHOOK_URL=https://hooks.slack.com/... python scripts/notify_slack.py
"""
from __future__ import annotations

import argparse
import json
import os
import sys
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CHANGELOG_JS = ROOT / "site" / "js" / "data-changelog.js"
SKILLS_JSONL = ROOT / "data" / "skills" / "skills.jsonl"
STATE = ROOT / "data" / "notify_state.json"
SITE = "https://claude-code-finder.pages.dev"

MAX_VERSIONS = 3      # 1回の投稿で紹介するバージョン数の上限
MAX_ITEMS = 4         # バージョンごとの項目数の上限
MAX_SKILLS = 5        # 紹介する新着Skill数の上限


def load_changelog() -> list[dict]:
    """data-changelog.js から window.CCF_CHANGELOG の JSON を取り出す。"""
    if not CHANGELOG_JS.exists():
        return []
    text = CHANGELOG_JS.read_text(encoding="utf-8")
    start = text.find("{", text.find("window.CCF_CHANGELOG"))
    if start < 0:
        return []
    end = text.rfind("}")
    if end < start:
        return []
    try:
        return json.loads(text[start : end + 1]).get("versions", [])
    except json.JSONDecodeError:
        return []


def load_skills() -> list[dict]:
    if not SKILLS_JSONL.exists():
        return []
    out = []
    for line in SKILLS_JSONL.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line:
            continue
        try:
            out.append(json.loads(line))
        except json.JSONDecodeError:
            continue
    return out


def load_state() -> dict | None:
    if not STATE.exists():
        return None
    try:
        return json.loads(STATE.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return None


def save_state(versions: list[dict], skills: list[dict]) -> None:
    STATE.parent.mkdir(parents=True, exist_ok=True)
    STATE.write_text(
        json.dumps(
            {
                "last_version": versions[0]["version"] if versions else "",
                "known_skill_ids": sorted(s["id"] for s in skills if s.get("id")),
            },
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )


def new_versions(versions: list[dict], last: str) -> list[dict]:
    """CHANGELOG は新しい順。前回通知した版に到達するまでが新着。"""
    fresh = []
    for v in versions:
        if v.get("version") == last:
            break
        fresh.append(v)
    return fresh


def build_blocks(fresh: list[dict], fresh_skills: list[dict]) -> list[dict]:
    blocks: list[dict] = [
        {
            "type": "header",
            "text": {"type": "plain_text", "text": "Claude Code 逆引き辞典 — 今週の更新"},
        }
    ]

    if fresh:
        vers = fresh[:MAX_VERSIONS]
        lines = []
        for v in vers:
            items = v.get("items", [])[:MAX_ITEMS]
            body = "\n".join(f"　• {i.get('text', '')}" for i in items)
            more = len(v.get("items", [])) - len(items)
            if more > 0:
                body += f"\n　• ほか {more} 件"
            lines.append(f"*v{v.get('version')}*\n{body}")
        extra = len(fresh) - len(vers)
        text = "\n\n".join(lines)
        if extra > 0:
            text += f"\n\n_ほか {extra} バージョン_"
        blocks.append({"type": "section", "text": {"type": "mrkdwn", "text": text}})

    if fresh_skills:
        top = sorted(fresh_skills, key=lambda s: -int(s.get("stars") or 0))[:MAX_SKILLS]
        lines = [
            f"• <{s.get('url') or SITE}|{s.get('name') or s.get('id')}> "
            f"★{s.get('stars', 0)} — {(s.get('description') or '')[:60]}"
            for s in top
        ]
        rest = len(fresh_skills) - len(top)
        text = "*新しく入ったコミュニティSkill*\n" + "\n".join(lines)
        if rest > 0:
            text += f"\n_ほか {rest} 件_"
        blocks.append({"type": "section", "text": {"type": "mrkdwn", "text": text}})

    blocks.append(
        {
            "type": "context",
            "elements": [
                {"type": "mrkdwn", "text": f"<{SITE}/updates|更新ページ> ・ <{SITE}|逆引きで探す>"}
            ],
        }
    )
    return blocks


def post(webhook: str, blocks: list[dict]) -> None:
    payload = json.dumps(
        {"text": "Claude Code 逆引き辞典 — 今週の更新", "blocks": blocks}
    ).encode("utf-8")
    req = urllib.request.Request(
        webhook, data=payload, headers={"Content-Type": "application/json"}
    )
    with urllib.request.urlopen(req, timeout=20) as res:
        body = res.read().decode("utf-8", "replace")
        if res.status != 200 or body.strip() != "ok":
            raise RuntimeError(f"Slack 応答が不正: {res.status} {body}")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true", help="投稿せず内容だけ表示")
    args = ap.parse_args()

    versions, skills = load_changelog(), load_skills()
    if not versions and not skills:
        print("データが空のため何もしない")
        return 0

    state = load_state()
    if state is None:
        save_state(versions, skills)
        print("初回のため状態を記録するだけで投稿しない")
        return 0

    fresh = new_versions(versions, state.get("last_version", ""))
    known = set(state.get("known_skill_ids", []))
    fresh_skills = [s for s in skills if s.get("id") and s["id"] not in known]

    if not fresh and not fresh_skills:
        print("新着なし（投稿しない）")
        return 0

    blocks = build_blocks(fresh, fresh_skills)
    print(f"新着: バージョン {len(fresh)} 件 / Skill {len(fresh_skills)} 件")

    if args.dry_run:
        print(json.dumps(blocks, ensure_ascii=False, indent=2))
        return 0

    webhook = os.environ.get("SLACK_WEBHOOK_URL", "").strip()
    if not webhook:
        print("SLACK_WEBHOOK_URL 未設定のため投稿をスキップ", file=sys.stderr)
        return 0

    try:
        post(webhook, blocks)
    except (urllib.error.URLError, RuntimeError) as e:
        print(f"Slack 投稿に失敗: {e}", file=sys.stderr)
        return 1

    save_state(versions, skills)
    print("投稿して状態を更新した")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
