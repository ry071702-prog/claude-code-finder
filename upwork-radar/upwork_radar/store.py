"""SQLite による重複排除と状態管理。

同じ案件は複数の収集元（アラートメールと API）から届く。ID は Upwork の
ciphertext なので、どちらから来ても同じ行に収束する。

保持するのは「もう見たか」「もう通知したか」「もう下書きを作ったか」の 3 つだけ。
応募の結果まで追いたくなったらここにテーブルを足す。
"""

from __future__ import annotations

import json
import sqlite3
from contextlib import closing
from datetime import datetime, timezone
from pathlib import Path
from typing import Iterable, Iterator

from .models import Job
from .scoring import Verdict

SCHEMA = """
CREATE TABLE IF NOT EXISTS jobs (
    id                TEXT PRIMARY KEY,
    source            TEXT NOT NULL,
    title             TEXT NOT NULL,
    url               TEXT NOT NULL,
    posted_at         TEXT,
    budget_type       TEXT,
    budget_min        REAL,
    budget_max        REAL,
    score             INTEGER,
    rejections        TEXT,
    reasons           TEXT,
    payload           TEXT NOT NULL,
    first_seen_at     TEXT NOT NULL,
    last_seen_at      TEXT NOT NULL,
    notified_at       TEXT,
    drafted_at        TEXT
);
CREATE INDEX IF NOT EXISTS jobs_score_idx ON jobs (score DESC);
CREATE INDEX IF NOT EXISTS jobs_first_seen_idx ON jobs (first_seen_at DESC);
"""


def _now() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="seconds")


def _payload(job: Job) -> str:
    return json.dumps(
        {
            "description": job.description,
            "skills": job.skills,
            "experience_level": job.experience_level,
            "client_country": job.client_country,
            "client_total_spent": job.client_total_spent,
            "client_rating": job.client_rating,
            "client_payment_verified": job.client_payment_verified,
            "proposals": job.proposals,
        },
        ensure_ascii=False,
    )


class Store:
    def __init__(self, path: Path | str = "state.db") -> None:
        self.path = Path(path)
        self.conn = sqlite3.connect(self.path)
        self.conn.row_factory = sqlite3.Row
        with closing(self.conn.cursor()) as cur:
            cur.executescript(SCHEMA)
        self.conn.commit()

    def close(self) -> None:
        self.conn.close()

    def __enter__(self) -> "Store":
        return self

    def __exit__(self, *exc: object) -> None:
        self.close()

    def is_new(self, job_id: str) -> bool:
        row = self.conn.execute("SELECT 1 FROM jobs WHERE id = ?", (job_id,)).fetchone()
        return row is None

    def record(self, verdict: Verdict) -> bool:
        """評価結果を保存する。初めて見た案件なら True。

        再登場した案件はスコアと last_seen_at を更新するが、first_seen_at と
        notified_at/drafted_at は保持する — 同じ案件を二度通知しないため。
        """
        job = verdict.job
        now = _now()
        new = self.is_new(job.id)
        self.conn.execute(
            """
            INSERT INTO jobs (id, source, title, url, posted_at, budget_type,
                              budget_min, budget_max, score, rejections, reasons,
                              payload, first_seen_at, last_seen_at)
            VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)
            ON CONFLICT(id) DO UPDATE SET
                score = excluded.score,
                rejections = excluded.rejections,
                reasons = excluded.reasons,
                payload = excluded.payload,
                last_seen_at = excluded.last_seen_at
            """,
            (
                job.id,
                job.source,
                job.title,
                job.url,
                job.posted_at.isoformat() if job.posted_at else None,
                job.budget_type,
                job.budget_min,
                job.budget_max,
                verdict.score,
                json.dumps(verdict.rejections, ensure_ascii=False),
                json.dumps(verdict.reasons, ensure_ascii=False),
                _payload(job),
                now,
                now,
            ),
        )
        self.conn.commit()
        return new

    def mark(self, job_id: str, column: str) -> None:
        if column not in {"notified_at", "drafted_at"}:
            raise ValueError(f"unknown column: {column}")
        self.conn.execute(
            f"UPDATE jobs SET {column} = ? WHERE id = ?", (_now(), job_id)
        )
        self.conn.commit()

    def pending(self, column: str, min_score: int) -> list[sqlite3.Row]:
        """まだ通知/下書きしていない、スコアが閾値以上の案件をスコア降順で返す。"""
        if column not in {"notified_at", "drafted_at"}:
            raise ValueError(f"unknown column: {column}")
        return list(
            self.conn.execute(
                f"""
                SELECT * FROM jobs
                WHERE {column} IS NULL AND score >= ? AND rejections = '[]'
                ORDER BY score DESC, first_seen_at DESC
                """,
                (min_score,),
            )
        )

    def get(self, job_id: str) -> sqlite3.Row | None:
        return self.conn.execute(
            "SELECT * FROM jobs WHERE id = ?", (job_id,)
        ).fetchone()

    def recent(self, limit: int = 20) -> list[sqlite3.Row]:
        return list(
            self.conn.execute(
                "SELECT * FROM jobs ORDER BY first_seen_at DESC LIMIT ?", (limit,)
            )
        )

    def record_all(self, verdicts: Iterable[Verdict]) -> tuple[int, int]:
        """(新規件数, 総件数) を返す。"""
        new = total = 0
        for v in verdicts:
            total += 1
            new += 1 if self.record(v) else 0
        return new, total


def row_to_job(row: "sqlite3.Row") -> Job:
    """DB の行から Job を復元する（下書き生成が案件本文を必要とするため）。"""
    payload = json.loads(row["payload"])
    posted = row["posted_at"]
    return Job(
        id=row["id"],
        source=row["source"],
        title=row["title"],
        url=row["url"],
        description=payload.get("description", ""),
        posted_at=datetime.fromisoformat(posted) if posted else None,
        budget_type=row["budget_type"] or "unknown",
        budget_min=row["budget_min"],
        budget_max=row["budget_max"],
        skills=payload.get("skills", []),
        experience_level=payload.get("experience_level"),
        client_country=payload.get("client_country"),
        client_total_spent=payload.get("client_total_spent"),
        client_rating=payload.get("client_rating"),
        client_payment_verified=payload.get("client_payment_verified"),
        proposals=payload.get("proposals"),
    )
