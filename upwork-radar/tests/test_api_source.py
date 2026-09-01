from upwork_radar.sources.upwork_api import UpworkApiSource, node_to_job

FULL_NODE = {
    "ciphertext": "~021abcdefghijklmnop",
    "title": "ML engineer",
    "description": "Build a model",
    "experienceLevel": "EXPERT",
    "totalApplicants": 4,
    "publishedDateTime": "2026-09-01T00:00:00Z",
    "hourlyBudgetMin": {"rawValue": "50"},
    "hourlyBudgetMax": {"rawValue": "90"},
    "skills": [{"name": "Python"}, {"name": "PyTorch"}],
    "client": {
        "totalSpent": {"rawValue": "12000"},
        "verificationStatus": "VERIFIED",
        "location": {"country": "United States"},
        "totalFeedback": 4.9,
    },
}


def test_full_node_maps_every_field():
    job = node_to_job(FULL_NODE)
    assert job.id == "~021abcdefghijklmnop"
    assert job.url == "https://www.upwork.com/jobs/~021abcdefghijklmnop"
    assert (job.budget_type, job.budget_min, job.budget_max) == ("hourly", 50.0, 90.0)
    assert job.skills == ["Python", "PyTorch"]
    assert job.client_total_spent == 12000.0
    assert job.client_payment_verified is True
    assert job.client_country == "United States"
    assert job.proposals == 4


def test_missing_fields_become_unknown_not_zero():
    """クエリからフィールドを削っても壊れず、欠損は None のまま残ること。
    スキーマが変わったときに黙って 0 点を付けないための保険。"""
    job = node_to_job({"ciphertext": "~021abcdefghijklmnop", "title": "Bare"})
    assert job.budget_type == "unknown"
    assert job.budget_min is None
    assert job.client_total_spent is None
    assert job.client_payment_verified is None
    assert job.proposals is None
    assert job.skills == []


def test_fixed_price_node():
    node = dict(FULL_NODE)
    node.pop("hourlyBudgetMin")
    node.pop("hourlyBudgetMax")
    node["amount"] = {"rawValue": "2500"}
    job = node_to_job(node)
    assert (job.budget_type, job.budget_min) == ("fixed", 2500.0)


def test_unverified_client_is_false_not_none():
    node = dict(FULL_NODE)
    node["client"] = {"verificationStatus": "UNVERIFIED"}
    assert node_to_job(node).client_payment_verified is False


def test_malformed_numbers_do_not_raise():
    node = dict(FULL_NODE)
    node["hourlyBudgetMin"] = {"rawValue": "n/a"}
    node["hourlyBudgetMax"] = {"rawValue": ""}
    job = node_to_job(node)
    assert job.budget_type == "unknown"


def test_source_reports_missing_credentials(monkeypatch):
    for var in (
        "UPWORK_ACCESS_TOKEN",
        "UPWORK_CLIENT_ID",
        "UPWORK_CLIENT_SECRET",
        "UPWORK_REFRESH_TOKEN",
    ):
        monkeypatch.delenv(var, raising=False)
    ok, why = UpworkApiSource().available()
    assert ok is False
    assert "UPWORK_ACCESS_TOKEN" in why


def test_query_file_strips_comments():
    text = UpworkApiSource().query_text()
    assert text.startswith("query")
    assert "#" not in text
