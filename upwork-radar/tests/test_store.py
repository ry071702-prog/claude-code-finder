import json
from datetime import datetime, timezone

from upwork_radar.models import Job
from upwork_radar.scoring import Verdict
from upwork_radar.store import Store, row_to_job

NOW = datetime(2026, 9, 1, 12, 0, tzinfo=timezone.utc)


def make_verdict(job_id="~021000000000000001", score=90, source="gmail", **kw) -> Verdict:
    job = Job(
        id=job_id,
        source=source,
        title="Python engineer",
        url=f"https://www.upwork.com/jobs/x_{job_id}/",
        description="Airflow pipelines",
        posted_at=NOW,
        budget_type="hourly",
        budget_min=60.0,
        budget_max=90.0,
        skills=["Python"],
        client_payment_verified=True,
        proposals=4,
        **kw,
    )
    return Verdict(job=job, score=score, reasons=["スキル一致: Python"])


def test_first_insert_is_new_and_second_is_not(tmp_path):
    with Store(tmp_path / "s.db") as store:
        assert store.record(make_verdict()) is True
        assert store.record(make_verdict()) is False


def test_same_job_from_two_sources_collapses_to_one_row(tmp_path):
    with Store(tmp_path / "s.db") as store:
        store.record(make_verdict(source="gmail"))
        store.record(make_verdict(source="api", score=95))
        rows = store.recent()
        assert len(rows) == 1
        assert rows[0]["score"] == 95


def test_notified_jobs_do_not_come_back(tmp_path):
    with Store(tmp_path / "s.db") as store:
        store.record(make_verdict())
        pending = store.pending("notified_at", 60)
        assert len(pending) == 1
        store.mark(pending[0]["id"], "notified_at")
        assert store.pending("notified_at", 60) == []


def test_marking_survives_a_rescore(tmp_path):
    """再収集でスコアが変わっても、通知済みフラグは消えない
    （同じ案件を二度通知しないため）。"""
    with Store(tmp_path / "s.db") as store:
        store.record(make_verdict(score=90))
        store.mark("~021000000000000001", "notified_at")
        store.record(make_verdict(score=70))
        assert store.pending("notified_at", 60) == []
        assert store.get("~021000000000000001")["score"] == 70


def test_pending_respects_min_score_and_skips_rejected(tmp_path):
    with Store(tmp_path / "s.db") as store:
        store.record(make_verdict(job_id="~021000000000000001", score=50))
        store.record(make_verdict(job_id="~021000000000000002", score=80))
        rejected = make_verdict(job_id="~021000000000000003", score=0)
        rejected.rejections = ["除外キーワード"]
        store.record(rejected)
        ids = [r["id"] for r in store.pending("notified_at", 60)]
        assert ids == ["~021000000000000002"]


def test_row_to_job_roundtrip_keeps_scoring_inputs(tmp_path):
    with Store(tmp_path / "s.db") as store:
        original = make_verdict().job
        store.record(make_verdict())
        restored = row_to_job(store.get(original.id))
    assert restored.title == original.title
    assert restored.description == original.description
    assert restored.budget_type == original.budget_type
    assert restored.budget_max == original.budget_max
    assert restored.skills == original.skills
    assert restored.client_payment_verified is True
    assert restored.posted_at == original.posted_at


def test_mark_rejects_unknown_column(tmp_path):
    import pytest

    with Store(tmp_path / "s.db") as store:
        store.record(make_verdict())
        with pytest.raises(ValueError):
            store.mark("~021000000000000001", "id = 'x'; DROP TABLE jobs; --")
        with pytest.raises(ValueError):
            store.pending("bogus", 0)


def test_record_all_counts(tmp_path):
    with Store(tmp_path / "s.db") as store:
        verdicts = [make_verdict(job_id=f"~02100000000000000{i}") for i in range(3)]
        assert store.record_all(verdicts) == (3, 3)
        assert store.record_all(verdicts) == (0, 3)
