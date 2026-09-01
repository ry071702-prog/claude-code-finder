from datetime import datetime, timedelta, timezone

from upwork_radar.config import Filters, HardFilters, Profile, Targets, Weights
from upwork_radar.models import Job
from upwork_radar.scoring import evaluate, rank

NOW = datetime(2026, 9, 1, 12, 0, tzinfo=timezone.utc)

PROFILE = Profile(name="Dev", skills=["Python", "Airflow", "PostgreSQL"])


def make_job(**kw) -> Job:
    base = dict(
        id="~021000000000000001",
        source="test",
        title="Python engineer",
        url="https://www.upwork.com/jobs/x_~021000000000000001/",
        description="Airflow pipelines",
        posted_at=NOW - timedelta(hours=1),
        budget_type="hourly",
        budget_min=80.0,
        budget_max=80.0,
        client_payment_verified=True,
        client_total_spent=10_000.0,
        client_rating=5.0,
        proposals=2,
    )
    base.update(kw)
    return Job(**base)


def test_strong_job_scores_high_and_passes():
    job = make_job(title="Python Airflow PostgreSQL engineer")
    v = evaluate(job, PROFILE, Filters(), now=NOW)
    assert v.passed
    assert v.score >= 90


def test_partial_skill_overlap_caps_the_skill_part():
    """3 スキル中 2 つ (題名 1 + 本文 1) しか当たらなければスキル点は満点にならない。
    ここが緩いと「Python と書いてあるだけ」の案件が上位に来る。"""
    v = evaluate(make_job(), PROFILE, Filters(), now=NOW)
    assert v.parts["skill_match"] == 0.5
    assert v.score < 85


def test_hard_filters_reject_and_report_every_reason():
    filters = Filters(
        hard=HardFilters(
            require_payment_verified=True,
            min_hourly_rate_usd=50,
            max_proposals=10,
            exclude_keywords=["data entry"],
        )
    )
    job = make_job(
        title="Data entry helper",
        budget_min=10.0,
        budget_max=10.0,
        client_payment_verified=False,
        proposals=40,
    )
    v = evaluate(job, PROFILE, filters, now=NOW)
    assert not v.passed
    assert v.score == 0
    assert len(v.rejections) == 4


def test_unknown_fields_are_neutral_not_zero():
    """Gmail 由来はクライアント情報も予算も欠けることがある。
    欠損を 0 点にすると、メール由来の案件が一律で沈む。"""
    sparse = make_job(
        budget_type="unknown",
        budget_min=None,
        budget_max=None,
        client_payment_verified=None,
        client_total_spent=None,
        client_rating=None,
        proposals=None,
        posted_at=None,
    )
    v = evaluate(sparse, PROFILE, Filters(), now=NOW)
    assert v.passed
    assert v.parts["budget"] == 0.5
    assert v.parts["client_quality"] == 0.5
    assert v.parts["competition"] == 0.5
    assert v.parts["recency"] == 0.5
    assert any("中立" in r for r in v.reasons)


def test_unknown_budget_can_be_dropped_when_asked():
    filters = Filters(hard=HardFilters(drop_when_budget_unknown=True))
    job = make_job(budget_type="unknown", budget_min=None, budget_max=None)
    assert not evaluate(job, PROFILE, filters, now=NOW).passed


def test_title_skill_match_outweighs_body_only_match():
    in_title = evaluate(make_job(title="Python Airflow engineer", description="x"), PROFILE, Filters(), now=NOW)
    in_body = evaluate(make_job(title="Engineer wanted", description="python airflow"), PROFILE, Filters(), now=NOW)
    assert in_title.parts["skill_match"] > in_body.parts["skill_match"]


def test_no_skill_overlap_scores_zero_on_that_part():
    v = evaluate(make_job(title="Ruby on Rails dev", description="rails"), PROFILE, Filters(), now=NOW)
    assert v.parts["skill_match"] == 0.0


def test_recency_decays_to_zero_past_the_window():
    filters = Filters(targets=Targets(recency_hours=24))
    fresh = evaluate(make_job(posted_at=NOW), PROFILE, filters, now=NOW)
    stale = evaluate(make_job(posted_at=NOW - timedelta(hours=48)), PROFILE, filters, now=NOW)
    assert fresh.parts["recency"] == 1.0
    assert stale.parts["recency"] == 0.0


def test_weights_are_normalized_not_assumed_to_sum_to_100():
    doubled = Filters(weights=Weights(80, 40, 40, 20, 20))
    assert (
        evaluate(make_job(), PROFILE, doubled, now=NOW).score
        == evaluate(make_job(), PROFILE, Filters(), now=NOW).score
    )


def test_zero_weights_are_rejected_loudly():
    import pytest

    with pytest.raises(ValueError):
        evaluate(make_job(), PROFILE, Filters(weights=Weights(0, 0, 0, 0, 0)), now=NOW)


def test_profile_without_skills_stays_neutral():
    v = evaluate(make_job(), Profile(name="x", skills=[]), Filters(), now=NOW)
    assert v.parts["skill_match"] == 0.5


def test_rank_sorts_passing_jobs_first_and_by_score():
    jobs = [
        make_job(id="~021000000000000002", title="Ruby dev", description="rails"),
        make_job(id="~021000000000000003", title="Python Airflow PostgreSQL expert"),
        make_job(id="~021000000000000004", title="unpaid intern", description="unpaid"),
    ]
    filters = Filters(hard=HardFilters(exclude_keywords=["unpaid"]))
    ranked = rank(jobs, PROFILE, filters, now=NOW)
    assert ranked[0].job.id == "~021000000000000003"
    assert ranked[-1].job.id == "~021000000000000004"
    assert not ranked[-1].passed
