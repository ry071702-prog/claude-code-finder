"""収集元によらない、正規化された案件レコード。

どの Source も最終的に Job を返す。Source ごとに埋まらないフィールドは None の
まま残す — 「0」ではなく「不明」として扱いたいため。scoring はこの区別を使う。
"""

from __future__ import annotations

import hashlib
import re
from dataclasses import dataclass, field
from datetime import datetime
from typing import Any

# Upwork の案件 URL に埋まっている ciphertext (~01xxxxxxxxxxxxxxxx)。
# 収集元が違っても同じ案件なら同じ値になるので、これを正規の ID に使う。
JOB_URL_RE = re.compile(
    r"https?://(?:www\.)?upwork\.com/(?:jobs|freelance-jobs|ab/jobs)/[^\s\"'<>]*?"
    r"(?P<cipher>~[0-9A-Za-z]{16,})"
)

BUDGET_TYPES = ("fixed", "hourly", "unknown")


def job_id_from_url(url: str) -> str | None:
    """URL から ciphertext を取り出す。見つからなければ None。"""
    m = JOB_URL_RE.search(url or "")
    return m.group("cipher") if m else None


def fallback_id(*parts: str) -> str:
    """ciphertext が取れない場合の安定 ID（重複排除のためだけに使う）。"""
    digest = hashlib.sha1("\x1f".join(p or "" for p in parts).encode()).hexdigest()
    return f"sha1:{digest[:20]}"


@dataclass(slots=True)
class Job:
    id: str
    source: str
    title: str
    url: str
    description: str = ""
    posted_at: datetime | None = None

    budget_type: str = "unknown"
    # fixed なら総額 USD、hourly なら時給 USD。
    budget_min: float | None = None
    budget_max: float | None = None

    skills: list[str] = field(default_factory=list)
    experience_level: str | None = None

    client_country: str | None = None
    client_total_spent: float | None = None
    client_rating: float | None = None
    client_payment_verified: bool | None = None

    # 応募者数。レンジ表記 ("5 to 10") は中央値を入れる。
    proposals: int | None = None

    raw: dict[str, Any] = field(default_factory=dict)

    def __post_init__(self) -> None:
        if self.budget_type not in BUDGET_TYPES:
            raise ValueError(f"unknown budget_type: {self.budget_type!r}")

    @property
    def haystack(self) -> str:
        """キーワード照合用に、題名・本文・スキルをまとめた小文字テキスト。"""
        return " ".join([self.title, self.description, " ".join(self.skills)]).lower()

    def rate_for_compare(self) -> float | None:
        """時給案件は時給、固定案件は総額を返す。単位が違うので比較側で使い分ける。"""
        if self.budget_max is not None:
            return self.budget_max
        return self.budget_min
