#!/usr/bin/env python3
"""公式 Claude Code の CHANGELOG.md を取得して site/js/data-changelog.js を生成する。

- 完全に非LLM（純パース）。anthropics/claude-code の CHANGELOG.md を raw で取得し、
  `## <version>` 見出しとその配下の `- ` 箇条書きを抽出する。
- 各箇条書きは先頭語（Added/Fixed/Changed/Improved/Removed…）で種別を機械分類する。
- 最新 N バージョンだけを data-changelog.js（window.CCF_CHANGELOG）に書き出す。
- 手書きの編集ハイライト（data-updates.js）はこのスクリプトでは一切触らない。

使い方:
  python scripts/fetch_updates.py              # 取得して data-changelog.js を書く
  python scripts/fetch_updates.py --dry-run    # 書かずに要約だけ
  python scripts/fetch_updates.py --limit 8    # 出力する最大バージョン数
"""
from __future__ import annotations
import argparse, json, re, sys, urllib.request, urllib.error
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "site" / "js" / "data-changelog.js"
SRC = "https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md"
SRC_HTML = "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md"
UA = "claude-code-finder-updates"

# 箇条書き先頭語 → 種別ラベル（機械分類・非LLM）
KIND_RULES = [
    ("追加", ("added", "add ", "new ", "introduc", "support for", "now support")),
    ("修正", ("fixed", "fix ", "resolve", "correct")),
    ("変更", ("changed", "renamed", "moved", "deprecat", "removed", "remove ")),
    ("改善", ("improved", "improve", "faster", "better", "enhanc", "optimi", "reduce")),
]
VER_RE = re.compile(r"^#{2,3}\s+v?(\d+\.\d+\.\d+(?:[-\w.]*)?)\s*$")
BULLET_RE = re.compile(r"^\s*[-*]\s+(.*\S)\s*$")


def fetch(url: str) -> str | None:
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "text/plain"})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return r.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e:
        print(f"  ! HTTP {e.code} {url}", file=sys.stderr)
    except Exception as e:  # noqa
        print(f"  ! err {e} {url}", file=sys.stderr)
    return None


def classify(text: str) -> str:
    low = text.lower()
    for label, keys in KIND_RULES:
        if any(k in low for k in keys):
            return label
    return "その他"


def parse(md: str, limit: int) -> list[dict]:
    versions: list[dict] = []
    cur: dict | None = None
    for line in md.splitlines():
        m = VER_RE.match(line.strip())
        if m:
            if cur:
                versions.append(cur)
            cur = {"version": m.group(1), "items": []}
            if len(versions) >= limit and cur:
                # limit+1 個目に入った時点で以降は読まない
                pass
            continue
        if cur is None:
            continue
        bm = BULLET_RE.match(line)
        if bm:
            text = re.sub(r"`([^`]*)`", r"\1", bm.group(1)).strip()  # inline code の ` を除去
            if text:
                cur["items"].append({"kind": classify(text), "text": text})
    if cur:
        versions.append(cur)
    # 箇条書きが1件以上ある版だけ、最新 limit 件
    versions = [v for v in versions if v["items"]][:limit]
    return versions


def to_js(versions: list[dict]) -> str:
    payload = {"source": SRC_HTML, "versions": versions}
    body = json.dumps(payload, ensure_ascii=False, indent=2)
    return (
        "/* =====================================================================\n"
        " *  data-changelog.js — 自動生成物（scripts/fetch_updates.py が生成）\n"
        " *  公式 anthropics/claude-code の CHANGELOG.md を非LLMでパースしたもの。\n"
        " *  手書きの編集ハイライトは data-updates.js 側にある。手で編集しない。\n"
        " * ===================================================================== */\n"
        "window.CCF_CHANGELOG = " + body + ";\n"
    )


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--limit", type=int, default=8)
    args = ap.parse_args()

    md = fetch(SRC)
    if not md:
        print("CHANGELOG を取得できませんでした（ネットワーク/URL 変更の可能性）", file=sys.stderr)
        return 1
    versions = parse(md, args.limit)
    if not versions:
        print("バージョンを抽出できませんでした（フォーマット変更の可能性）", file=sys.stderr)
        return 1

    total_items = sum(len(v["items"]) for v in versions)
    print(f"抽出: {len(versions)} バージョン / {total_items} 項目（最新 {versions[0]['version']}）")
    for v in versions[:3]:
        print(f"  - {v['version']}: {len(v['items'])} 項目")

    if args.dry_run:
        print("（--dry-run: 書き込みなし）")
        return 0

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(to_js(versions), encoding="utf-8")
    print(f"→ {OUT.relative_to(ROOT)} を更新")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
