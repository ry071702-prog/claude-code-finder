from upwork_radar.models import Job, fallback_id, job_id_from_url


def test_job_id_from_url_variants():
    assert (
        job_id_from_url("https://www.upwork.com/jobs/Some-Title_~021866123456789012/?ref=x")
        == "~021866123456789012"
    )
    assert (
        job_id_from_url("http://upwork.com/freelance-jobs/apply/x_~010000000000000001")
        == "~010000000000000001"
    )


def test_job_id_from_url_rejects_non_job_urls():
    assert job_id_from_url("https://example.com/~021866123456789012") is None
    assert job_id_from_url("https://www.upwork.com/nx/find-work/") is None
    assert job_id_from_url("") is None


def test_fallback_id_is_stable_and_distinct():
    assert fallback_id("a", "b") == fallback_id("a", "b")
    assert fallback_id("a", "b") != fallback_id("b", "a")


def test_unknown_budget_type_rejected():
    import pytest

    with pytest.raises(ValueError):
        Job(id="x", source="s", title="t", url="u", budget_type="weekly")


def test_rate_for_compare_prefers_max():
    job = Job(id="x", source="s", title="t", url="u", budget_min=40, budget_max=90)
    assert job.rate_for_compare() == 90
    job.budget_max = None
    assert job.rate_for_compare() == 40
