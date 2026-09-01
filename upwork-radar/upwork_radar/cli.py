"""コマンドライン入口。

  upwork-radar sources            収集元と資格情報の状況を出す
  upwork-radar run                収集 → 選別 → 保存 → 通知 → 下書き
  upwork-radar list               保存済みの案件を新しい順に出す
  upwork-radar draft <job_id>     指定案件の下書きを作り直す
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

from .config import AppConfig, ConfigError
from .models import Job
from .proposal import generate, write_draft
from .scoring import rank
from .sources import SourceError, build_sources
from .store import Store, row_to_job
from . import notify

ALL_SOURCES = ["gmail", "api", "eml", "local"]
DEFAULT_SOURCES = ["gmail", "api"]


def _collect(config_dir: Path, names: list[str], verbose: bool) -> list[Job]:
    """使える収集元だけを回して案件を集める。

    使えない収集元は落とさず飛ばす — API キーの承認待ちの間も Gmail 側だけで
    回り続けてほしいため。全部使えなければ呼び出し側で失敗させる。
    """
    jobs: list[Job] = []
    usable = 0
    for source in build_sources(config_dir, names):
        ok, why = source.available()
        if not ok:
            print(f"[skip] {source.name}: {why}", file=sys.stderr)
            continue
        usable += 1
        try:
            found = list(source.fetch())
        except SourceError as exc:
            print(f"[warn] {exc}", file=sys.stderr)
            continue
        if verbose:
            print(f"[ok] {source.name}: {len(found)} 件", file=sys.stderr)
        jobs.extend(found)
    if usable == 0:
        raise SourceError(
            "使える収集元がひとつも無い。`upwork-radar sources` で不足を確認する。"
        )
    return jobs


def _dedupe(jobs: list[Job]) -> list[Job]:
    """同じ案件が複数の収集元から来たら、情報の多い方を残す。"""
    best: dict[str, Job] = {}
    for job in jobs:
        current = best.get(job.id)
        if current is None or _richness(job) > _richness(current):
            best[job.id] = job
    return list(best.values())


def _richness(job: Job) -> int:
    """埋まっているフィールドの数。API 由来の方が普通は多い。"""
    return sum(
        1
        for value in (
            job.description or None,
            job.posted_at,
            job.budget_min,
            job.skills or None,
            job.client_country,
            job.client_total_spent,
            job.client_rating,
            job.client_payment_verified,
            job.proposals,
        )
        if value is not None
    )


def cmd_sources(args: argparse.Namespace) -> int:
    for source in build_sources(Path(args.config), ALL_SOURCES):
        ok, why = source.available()
        print(f"{'✓' if ok else '×'} {source.name:<6} {why}")
    return 0


def cmd_run(args: argparse.Namespace) -> int:
    config = AppConfig.load(Path(args.config))
    jobs = _dedupe(_collect(Path(args.config), args.source, args.verbose))
    if not jobs:
        print("案件が 1 件も取れなかった。")
        return 0

    verdicts = rank(jobs, config.profile, config.filters)
    passed = [v for v in verdicts if v.passed]
    print(
        f"{len(jobs)} 件を収集 / {len(passed)} 件が条件通過 "
        f"/ {len(verdicts) - len(passed)} 件を除外",
        file=sys.stderr,
    )

    if args.dry_run:
        for v in verdicts[: args.limit]:
            mark = f"{v.score:>3}" if v.passed else " ×"
            print(f"{mark}  {v.job.title}")
            for line in (v.rejections or v.reasons):
                print(f"      - {line}")
        return 0

    with Store(args.db) as store:
        new, total = store.record_all(verdicts)
        print(f"新規 {new} 件 / 既知 {total - new} 件", file=sys.stderr)

        fresh = store.pending("notified_at", config.filters.notify_min_score)
        notify.print_table(fresh)
        if fresh:
            path = notify.write_digest(notify.build_digest(fresh))
            if path:
                print(f"ダイジェスト: {path}", file=sys.stderr)
            notify.post_to_slack(fresh)
            for row in fresh:
                store.mark(row["id"], "notified_at")

        if args.no_draft:
            return 0
        todo = store.pending("drafted_at", config.filters.draft_min_score)
        for row in todo[: config.filters.draft_max_per_run]:
            job = row_to_job(row)
            draft = generate(job, config.profile)
            path = write_draft(draft, job)
            store.mark(job.id, "drafted_at")
            print(f"下書き: {path}（{draft.model}）", file=sys.stderr)
    return 0


def cmd_list(args: argparse.Namespace) -> int:
    with Store(args.db) as store:
        notify.print_table(store.recent(args.limit))
    return 0


def cmd_draft(args: argparse.Namespace) -> int:
    config = AppConfig.load(Path(args.config))
    with Store(args.db) as store:
        row = store.get(args.job_id)
        if row is None:
            print(f"案件 {args.job_id} が DB に無い。", file=sys.stderr)
            return 1
        job = row_to_job(row)
        draft = generate(job, config.profile)
        path = write_draft(draft, job)
        store.mark(job.id, "drafted_at")
    print(f"下書き: {path}（{draft.model}）")
    print("送信前に必ず自分で読んで直すこと。このツールは送信しない。")
    return 0


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(prog="upwork-radar", description=__doc__)
    parser.add_argument("--config", default="config", help="設定ディレクトリ (既定: config)")
    parser.add_argument("--db", default="state.db", help="状態 DB (既定: state.db)")
    sub = parser.add_subparsers(dest="command", required=True)

    p = sub.add_parser("sources", help="収集元と資格情報の状況")
    p.set_defaults(func=cmd_sources)

    p = sub.add_parser("run", help="収集 → 選別 → 保存 → 通知 → 下書き")
    p.add_argument(
        "--source", action="append", choices=ALL_SOURCES, help="繰り返し指定可"
    )
    p.add_argument("--dry-run", action="store_true", help="保存も通知もせず結果だけ出す")
    p.add_argument("--no-draft", action="store_true", help="下書きを作らない")
    p.add_argument("--limit", type=int, default=20, help="--dry-run の表示件数")
    p.add_argument("-v", "--verbose", action="store_true")
    p.set_defaults(func=cmd_run)

    p = sub.add_parser("list", help="保存済みの案件")
    p.add_argument("--limit", type=int, default=20)
    p.set_defaults(func=cmd_list)

    p = sub.add_parser("draft", help="下書きを作り直す")
    p.add_argument("job_id")
    p.set_defaults(func=cmd_draft)
    return parser


def main(argv: list[str] | None = None) -> int:
    args = build_parser().parse_args(argv)
    if getattr(args, "source", None) is None and args.command == "run":
        args.source = DEFAULT_SOURCES
    try:
        return args.func(args)
    except (ConfigError, SourceError) as exc:
        print(f"エラー: {exc}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
