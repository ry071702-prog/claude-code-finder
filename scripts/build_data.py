#!/usr/bin/env python3
"""data/skills/skills.jsonl → site/js/data-skills.js（window.CCF_SKILLS）を生成。

サイトの main.js はこれを base(data.js)/custom(data-custom.js) とマージして
「コミュニティSkills」カテゴリ＋★バッジ＋install コピー導線で表示する。
"""
from __future__ import annotations
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "data" / "skills" / "skills.jsonl"
OUT = ROOT / "site" / "js" / "data-skills.js"


def main():
    rows = []
    if SRC.exists():
        for line in SRC.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if line:
                rows.append(json.loads(line))

    entries = []
    for i, r in enumerate(rows):
        entries.append({
            "id": r["id"],
            "priority": 400 + i,               # 原本(1〜300台)の後ろにまとめる
            "category": "community",
            "type": "skill",
            "want": r["name"],                  # カード見出し = skill名
            "feature": f"{r['owner']}/{r['repo']}",
            "summary": r["description"],
            "commands": [r["install"]],
            "install": r["install"],            # コピー導線用
            "stars": r.get("stars", 0),
            "repoUrl": r["url"],
            "aliases": [r["slug"], r["owner"], "skill", "スキル"],
        })

    header = ("// 生成物: scripts/build_data.py が data/skills/skills.jsonl から作成。手で編集しない。\n"
              "// GitHub の Claude Code Skills を非LLMで取り込んだもの（週次 ingest-skills.yml）。\n")
    body = "window.CCF_SKILLS = " + json.dumps(entries, ensure_ascii=False, indent=0) + ";\n"
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(header + body, encoding="utf-8")
    print(f"wrote {OUT} ({len(entries)} skills)")


if __name__ == "__main__":
    main()
