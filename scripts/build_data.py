#!/usr/bin/env python3
"""data/skills/skills.jsonl → site/js/data-skills.js（window.CCF_SKILLS）を生成。

サイトの main.js はこれを base(data.js)/custom(data-custom.js) とマージして
「コミュニティSkills」カテゴリ＋Skillバッジ＋install コピー導線で表示する。

このサイトは「やりたいこと」から機能を引く逆引き辞典。SKILL.md の description は
機械（LLM）向けのトリガー文（"Use this when ..."）を含み、そのまま出すと人間向けの
カードとして読めない。そこで:
  - 日本語の見出し/要約/発動条件は overrides.ja.json（人手キュレーション層）を正とし、
  - 未登録の skill は description からトリガー文を機械的に剥がした英語にフォールバックする。
機械取得（skills.jsonl）と日本語化（overrides.ja.json）を分離しているので、週次 ingest が
skills.jsonl を書き直しても日本語は失われない。
"""
from __future__ import annotations
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "data" / "skills" / "skills.jsonl"
OVERRIDES = ROOT / "data" / "skills" / "overrides.ja.json"
OUT = ROOT / "site" / "js" / "data-skills.js"

# description 内で「発動条件」が始まる目印。人間向けカードからは剥がし、詳細の trigger に回す。
_TRIGGER_RE = re.compile(
    r"(?:^|\s)(?:Use (?:this|it)\s+when|Use when|Should be used when|This skill should be used when|Trigger[s]?[:—-])",
    re.IGNORECASE,
)


def split_trigger(desc: str) -> tuple[str, str]:
    """英語 description を「何をするか」と「いつ使うか」に割る（フォールバック用・非LLM）。"""
    desc = (desc or "").strip()
    m = _TRIGGER_RE.search(desc)
    if not m:
        return desc, ""
    what = desc[: m.start()].strip(" .,—-") + "."
    trigger = desc[m.start():].strip()
    return (what if len(what) > 1 else desc), trigger


def main():
    rows = []
    if SRC.exists():
        for line in SRC.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if line:
                rows.append(json.loads(line))

    ov = {}
    if OVERRIDES.exists():
        ov = json.loads(OVERRIDES.read_text(encoding="utf-8"))

    n_ja = 0
    entries = []
    for i, r in enumerate(rows):
        o = ov.get(r["id"]) or {}
        fb_summary, fb_trigger = split_trigger(r.get("description", ""))
        want = (o.get("want") or "").strip() or r["name"]
        summary = (o.get("summary") or "").strip() or fb_summary
        trigger = o.get("trigger") if "trigger" in o else fb_trigger
        if o.get("want") or o.get("summary"):
            n_ja += 1
        entries.append({
            "id": r["id"],
            "priority": 400 + i,               # 原本(1〜300台)の後ろにまとめる
            "category": "community",
            "type": "skill",
            "want": want,                       # カード見出し = やりたいこと（日本語）
            "feature": f"{r['owner']}/{r['repo']}",
            "summary": summary,
            "trigger": trigger,                 # 詳細モーダルの「こんなときに」欄
            "commands": [r["install"]],
            "install": r["install"],            # コピー導線用
            "stars": r.get("stars", 0),         # 注: repo の star（skill 単体の評価ではない）
            "repoUrl": r["url"],
            "aliases": [r["slug"], r["owner"], r["name"], "skill", "スキル"],
        })

    header = ("// 生成物: scripts/build_data.py が skills.jsonl + overrides.ja.json から作成。手で編集しない。\n"
              f"// GitHub の Claude Code Skills を非LLMで取り込み、日本語化 {n_ja}/{len(entries)} 件（週次 ingest-skills.yml）。\n")
    body = "window.CCF_SKILLS = " + json.dumps(entries, ensure_ascii=False, indent=0) + ";\n"
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(header + body, encoding="utf-8")
    print(f"wrote {OUT} ({len(entries)} skills)")


if __name__ == "__main__":
    main()
