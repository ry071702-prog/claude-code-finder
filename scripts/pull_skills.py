#!/usr/bin/env python3
"""レジストリ（取り込み済み＋投稿採用の Skills）から、選んだものだけを
自分の Claude Code に導入する“安全版インポータ”。

方針（ADR 0002 準拠・重要）:
- **自動/一括/こっそり導入はしない**。skill は任意コード実行なので、
  必ず 1) 出所(repo/star) を見て 2) 中身(SKILL.md)を確認して 3) 人が入れる。
- 本ツールは「候補提示」と「出所表示つきの単体導入コマンド実行」までに留める。

使い方:
  python scripts/pull_skills.py --list [keyword]     # 候補一覧（star降順）
  python scripts/pull_skills.py --show  owner/repo    # SKILL.md を表示（導入前レビュー）
  python scripts/pull_skills.py --add   owner/repo    # 出所警告のうえ npx skills add を実行
  python scripts/pull_skills.py --add   owner/repo --dry-run   # コマンドを出すだけ
"""
from __future__ import annotations
import argparse, json, subprocess, sys, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "data" / "skills" / "skills.jsonl"


def load():
    rows = []
    if SRC.exists():
        for line in SRC.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if line:
                rows.append(json.loads(line))
    return sorted(rows, key=lambda r: -r.get("stars", 0))


def find(rows, key):
    key = key.lower()
    for r in rows:
        if f"{r['owner']}/{r['repo']}".lower() == key or r["id"].lower() == key:
            return r
    hits = [r for r in rows if key in f"{r['owner']}/{r['repo']}/{r['name']}".lower()]
    return hits[0] if len(hits) == 1 else None


def cmd_list(rows, kw):
    if kw:
        rows = [r for r in rows if kw.lower() in json.dumps(r, ensure_ascii=False).lower()]
    print(f"{len(rows)} skills（star降順・導入は --add owner/repo）\n")
    for r in rows[:60]:
        print(f"  ★{r.get('stars',0):>6}  {r['owner']}/{r['repo']}@{r['slug']:<22} {r['name']}")


def cmd_show(r):
    for b in ("main", "master"):
        url = f"https://raw.githubusercontent.com/{r['owner']}/{r['repo']}/{b}/"
        # slug から SKILL.md のパスを推定できないので、リポジトリ直下 or skills/<slug>/ を試す
        for path in (f"skills/{r['slug']}/SKILL.md", f"{r['slug']}/SKILL.md", "SKILL.md"):
            try:
                with urllib.request.urlopen(url + path, timeout=15) as resp:
                    print(f"# {r['owner']}/{r['repo']} @ {b}:{path}  (★{r.get('stars',0)})\n")
                    print(resp.read().decode("utf-8", "ignore"))
                    return
            except Exception:
                continue
    print("SKILL.md を取得できませんでした。repo を直接確認してください:", r["url"])


def cmd_add(r, dry):
    install = r["install"]
    print("―" * 56)
    print(f"導入候補: {r['owner']}/{r['repo']}@{r['slug']}  ★{r.get('stars',0)}")
    print(f"出所: {r['url']}")
    print("⚠ skill は任意コード実行です。導入前に必ず中身を確認してください:")
    print(f"   python scripts/pull_skills.py --show {r['owner']}/{r['repo']}")
    print("―" * 56)
    print(f"$ {install}")
    if dry:
        print("(dry-run: 実行しません)")
        return
    ans = input("この skill を導入しますか? [y/N] ").strip().lower()
    if ans != "y":
        print("中止しました。")
        return
    subprocess.run(install.split(), check=False)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--list", nargs="?", const="", metavar="keyword")
    ap.add_argument("--show", metavar="owner/repo")
    ap.add_argument("--add", metavar="owner/repo")
    ap.add_argument("--dry-run", action="store_true")
    a = ap.parse_args()
    rows = load()
    if not rows:
        print("レジストリが空です（先に fetch_skills.py で取り込み）", file=sys.stderr)
        sys.exit(1)
    if a.show:
        r = find(rows, a.show)
        (cmd_show(r) if r else print("見つかりません:", a.show))
    elif a.add:
        r = find(rows, a.add)
        (cmd_add(r, a.dry_run) if r else print("見つかりません:", a.add))
    else:
        cmd_list(rows, a.list or "")


if __name__ == "__main__":
    main()
