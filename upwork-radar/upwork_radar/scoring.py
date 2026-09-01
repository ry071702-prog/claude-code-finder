"""ルールベースの案件スコアリング。

LLM は使わない。理由が説明できることと、同じ入力で必ず同じ点が出ることを優先する
（提案文の生成だけが LLM の仕事）。

2 段構え:
  1. hard filter — 1 つでも違反したら除外。理由を rejections に残す。
  2. weighted score — 5 つの部分点 (0..1) を重み付けして 0..100 に丸める。

情報が無い項目は 0 ではなく NEUTRAL (0.5) にする。Gmail のアラートメールには
クライアントの支出履歴が載らないので、0 にすると「メール由来の案件は全部低評価」
になってしまう。不明だったことは reasons に明記する。
"""

from __future__ import annotations

import math
from dataclasses import dataclass, field
from datetime import datetime, timezone

from .config import Filters, Profile
from .models import Job

NEUTRAL = 0.5


@dataclass(slots=True)
class Verdict:
    job: Job
    score: int
    reasons: list[str] = field(default_factory=list)
    rejections: list[str] = field(default_factory=list)
    parts: dict[str, float] = field(default_factory=dict)

    @property
    def passed(self) -> bool:
        return not self.rejections


def _clamp(x: float) -> float:
    return max(0.0, min(1.0, x))


def _norm(text: str) -> str:
    return " ".join(text.lower().split())


def _matched_skills(job: Job, profile: Profile) -> tuple[list[str], list[str]]:
    """(題名に出たスキル, 本文どこかに出たスキル) を返す。題名一致は重く見る。"""
    title = _norm(job.title)
    body = _norm(job.haystack)
    in_title, in_body = [], []
    for skill in profile.skills:
        s = _norm(skill)
        if not s:
            continue
        if s in title:
            in_title.append(skill)
        elif s in body:
            in_body.append(skill)
    return in_title, in_body


def _skill_score(job: Job, profile: Profile, reasons: list[str]) -> float:
    if not profile.skills:
        reasons.append("プロフィールにスキル未登録のためスキル一致は中立扱い")
        return NEUTRAL
    in_title, in_body = _matched_skills(job, profile)
    if not in_title and not in_body:
        return 0.0
    # 題名に出たスキルは本文だけの一致の 2 倍に数える。上限は 3 件相当で頭打ち。
    weighted = 2 * len(in_title) + len(in_body)
    hits = ", ".join(in_title + in_body)
    reasons.append(f"スキル一致: {hits}" + (f"（うち題名: {', '.join(in_title)}）" if in_title else ""))
    return _clamp(weighted / 6.0)


def _budget_score(job: Job, filters: Filters, reasons: list[str]) -> float:
    t = filters.targets
    value = job.rate_for_compare()
    if job.budget_type == "unknown" or value is None:
        reasons.append("予算不明のため予算点は中立扱い")
        return NEUTRAL
    target = t.hourly_rate_usd if job.budget_type == "hourly" else t.fixed_budget_usd
    if target <= 0:
        return NEUTRAL
    unit = "USD/h" if job.budget_type == "hourly" else "USD"
    reasons.append(f"予算 {value:,.0f} {unit}（目標 {target:,.0f}）")
    return _clamp(value / target)


def _client_score(job: Job, reasons: list[str]) -> float:
    """決済確認・累計支出・評価の 3 点から。全部不明なら中立。"""
    signals: list[float] = []
    if job.client_payment_verified is not None:
        signals.append(1.0 if job.client_payment_verified else 0.0)
        reasons.append("決済確認済み" if job.client_payment_verified else "決済未確認")
    if job.client_total_spent is not None:
        # $0 → 0 点、$10k → 満点。対数なので $1k でも 0.75 程度は付く。
        spent = _clamp(math.log10(job.client_total_spent + 1) / 4.0)
        signals.append(spent)
        reasons.append(f"クライアント累計支出 ${job.client_total_spent:,.0f}")
    if job.client_rating is not None:
        # 5 点満点の評価。4.0 未満はほぼ 0 に落とす。
        signals.append(_clamp((job.client_rating - 4.0) / 1.0))
        reasons.append(f"クライアント評価 {job.client_rating:.2f}")
    if not signals:
        reasons.append("クライアント情報なしのため中立扱い")
        return NEUTRAL
    return sum(signals) / len(signals)


def _competition_score(job: Job, filters: Filters, reasons: list[str]) -> float:
    if job.proposals is None:
        reasons.append("応募者数不明のため競合点は中立扱い")
        return NEUTRAL
    ceiling = filters.hard.max_proposals or 50
    reasons.append(f"応募者 約{job.proposals}件")
    return _clamp(1.0 - job.proposals / max(ceiling, 1))


def _recency_score(job: Job, filters: Filters, reasons: list[str], now: datetime) -> float:
    if job.posted_at is None:
        reasons.append("掲載時刻不明のため鮮度点は中立扱い")
        return NEUTRAL
    posted = job.posted_at
    if posted.tzinfo is None:
        posted = posted.replace(tzinfo=timezone.utc)
    hours = (now - posted).total_seconds() / 3600.0
    window = max(filters.targets.recency_hours, 1e-6)
    reasons.append(f"掲載から {hours:.1f} 時間")
    return _clamp(1.0 - hours / window)


def _hard_filter(job: Job, filters: Filters) -> list[str]:
    h = filters.hard
    out: list[str] = []
    hay = job.haystack

    for kw in h.exclude_keywords:
        if kw.lower() in hay:
            out.append(f"除外キーワード「{kw}」を含む")
    if h.require_any_keywords and not any(k.lower() in hay for k in h.require_any_keywords):
        out.append("必須キーワードをどれも含まない")

    if h.require_payment_verified and job.client_payment_verified is False:
        out.append("決済未確認のクライアント")

    if h.exclude_countries and job.client_country:
        if any(c.lower() == job.client_country.lower() for c in h.exclude_countries):
            out.append(f"除外国 {job.client_country}")

    if h.min_client_spent_usd > 0 and job.client_total_spent is not None:
        if job.client_total_spent < h.min_client_spent_usd:
            out.append(
                f"クライアント累計支出 ${job.client_total_spent:,.0f} < ${h.min_client_spent_usd:,.0f}"
            )

    if h.max_proposals is not None and job.proposals is not None:
        if job.proposals > h.max_proposals:
            out.append(f"応募者 {job.proposals}件 > 上限 {h.max_proposals}件")

    value = job.rate_for_compare()
    if job.budget_type == "unknown" or value is None:
        if h.drop_when_budget_unknown:
            out.append("予算不明")
    elif job.budget_type == "hourly":
        if value < h.min_hourly_rate_usd:
            out.append(f"時給 ${value:,.0f} < 下限 ${h.min_hourly_rate_usd:,.0f}")
    elif value < h.min_fixed_budget_usd:
        out.append(f"固定予算 ${value:,.0f} < 下限 ${h.min_fixed_budget_usd:,.0f}")

    return out


def evaluate(
    job: Job,
    profile: Profile,
    filters: Filters,
    *,
    now: datetime | None = None,
) -> Verdict:
    """1 件を評価して Verdict を返す。除外された場合 score は 0。"""
    now = now or datetime.now(timezone.utc)
    rejections = _hard_filter(job, filters)
    if rejections:
        return Verdict(job=job, score=0, rejections=rejections)

    reasons: list[str] = []
    parts = {
        "skill_match": _skill_score(job, profile, reasons),
        "budget": _budget_score(job, filters, reasons),
        "client_quality": _client_score(job, reasons),
        "competition": _competition_score(job, filters, reasons),
        "recency": _recency_score(job, filters, reasons, now),
    }
    w = filters.weights
    weights = {
        "skill_match": w.skill_match,
        "budget": w.budget,
        "client_quality": w.client_quality,
        "competition": w.competition,
        "recency": w.recency,
    }
    total_weight = sum(weights.values())
    if total_weight <= 0:
        raise ValueError("filters.weights の合計が 0。少なくとも 1 つは正の値にする。")
    score = sum(parts[k] * weights[k] for k in parts) / total_weight * 100

    return Verdict(job=job, score=round(score), reasons=reasons, parts=parts)


def rank(
    jobs: list[Job],
    profile: Profile,
    filters: Filters,
    *,
    now: datetime | None = None,
) -> list[Verdict]:
    """全件評価し、通過したものをスコア降順で返す（除外分も末尾に含める）。"""
    now = now or datetime.now(timezone.utc)
    verdicts = [evaluate(j, profile, filters, now=now) for j in jobs]
    passed = sorted((v for v in verdicts if v.passed), key=lambda v: -v.score)
    dropped = [v for v in verdicts if not v.passed]
    return passed + dropped
