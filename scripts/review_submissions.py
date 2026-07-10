#!/usr/bin/env python3
"""投稿レジストリ(D1 submissions)の人間モデレート CLI（ADR 0002 の人間ゲート）。

D1 へは wrangler 経由でアクセス（ローカル wrangler 認証を使用）。

  python scripts/review_submissions.py --list                 # pending 一覧
  python scripts/review_submissions.py --approve owner/repo    # 採用→skill-sources.csv 昇格 + D1 approved
  python scripts/review_submissions.py --reject  owner/repo    # 却下→D1 rejected

採用後は次回 ingest（scripts/fetch_skills.py / 週次cron）が拾ってサイトに反映される。
"""
from __future__ import annotations
import argparse, csv, json, subprocess, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOURCES = ROOT / "config" / "skill-sources.csv"
DB = "claude-code-finder-submissions"


def d1(sql: str) -> list[dict]:
    """wrangler d1 execute --remote --json で SQL を実行し結果行を返す。"""
    cmd = ["npx", "--yes", "wrangler", "d1", "execute", DB, "--remote", "--json", "--command", sql]
    out = subprocess.run(cmd, cwd=ROOT, capture_output=True, text=True)
    if out.returncode != 0:
        print(out.stderr.strip()[-500:], file=sys.stderr)
        sys.exit(1)
    # wrangler は JSON 配列（[{results:[...]}]）を出す。前後の非JSON行を除去して読む。
    txt = out.stdout.strip()
    start = txt.find("[")
    data = json.loads(txt[start:]) if start != -1 else []
    rows = []
    for blk in data:
        rows += blk.get("results", []) or []
    return rows


def esc(s: str) -> str:
    return s.replace("'", "''")


def list_pending():
    rows = d1("SELECT owner_repo, skill_name, category, contact, note, created_at "
              "FROM submissions WHERE status='pending' ORDER BY created_at DESC")
    if not rows:
        print("pending なし")
        return
    print(f"pending: {len(rows)} 件\n")
    for r in rows:
        skill = f"@{r['skill_name']}" if r.get("skill_name") else ""
        print(f"  {r['owner_repo']}{skill}  [{r.get('category') or '-'}]  {r.get('created_at','')[:10]}")
        if r.get("note"):    print(f"      note: {r['note']}")
        if r.get("contact"): print(f"      contact: {r['contact']}")


def existing_repos() -> set[str]:
    repos = set()
    if SOURCES.exists():
        with SOURCES.open() as f:
            for row in csv.DictReader(r for r in f if not r.lstrip().startswith("#")):
                if (row.get("type") or "").strip() == "repo":
                    repos.add((row.get("value") or "").strip())
    return repos


def approve(owner_repo: str):
    rows = d1(f"SELECT owner_repo, category FROM submissions WHERE owner_repo='{esc(owner_repo)}' AND status='pending'")
    if not rows:
        print(f"pending に {owner_repo} が見つかりません")
        return
    cat = rows[0].get("category") or "community"
    if owner_repo in existing_repos():
        print(f"既に skill-sources.csv に存在: {owner_repo}（CSV追記はスキップ）")
    else:
        with SOURCES.open("a") as f:
            f.write(f"repo,{owner_repo},{cat},200,true,投稿採用\n")
        print(f"→ skill-sources.csv に追記: repo,{owner_repo}")
    d1(f"UPDATE submissions SET status='approved' WHERE owner_repo='{esc(owner_repo)}'")
    print(f"→ D1 approved: {owner_repo}")
    print("  次回 ingest（fetch_skills.py / 週次cron）で掲載されます")


def reject(owner_repo: str):
    d1(f"UPDATE submissions SET status='rejected' WHERE owner_repo='{esc(owner_repo)}' AND status='pending'")
    print(f"→ D1 rejected: {owner_repo}")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--list", action="store_true")
    ap.add_argument("--approve", metavar="owner/repo")
    ap.add_argument("--reject", metavar="owner/repo")
    a = ap.parse_args()
    if a.approve: approve(a.approve)
    elif a.reject: reject(a.reject)
    else: list_pending()


if __name__ == "__main__":
    main()
