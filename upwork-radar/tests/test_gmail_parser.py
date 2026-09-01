from datetime import datetime, timedelta, timezone

from upwork_radar.sources.gmail_alerts import (
    parse_alert_html,
    parse_alert_text,
    parse_budget,
    parse_country,
    parse_payment_verified,
    parse_posted_at,
    parse_proposals,
    parse_skills,
)

RECEIVED = datetime(2026, 9, 1, 12, 0, tzinfo=timezone.utc)

ALERT_HTML = """
<html><body>
<h2>New jobs matching "python automation"</h2>
<table>
<tr><td>
  <a href="https://www.upwork.com/jobs/Senior-Python_~021999888777666555/?src=alert">Senior Python Automation Engineer</a>
  <p>Hourly: $45.00-$90.00 - Expert - Est. Time: 1 to 3 months</p>
  <p>Build ETL pipelines in Python and Airflow.</p>
  <p>Country: United States &nbsp; Payment verified &nbsp; Proposals: 5 to 10</p>
  <p>Skills: Python, Airflow, ETL, PostgreSQL</p>
  <p>Posted 3 hours ago</p>
</td></tr>
<tr><td>
  <a href="https://www.upwork.com/jobs/Data-Entry_~021111222333444555/">Data entry helper</a>
  <p>Fixed-price - Entry level - Est. Budget: $30</p>
  <p>Country: India &nbsp; Payment unverified &nbsp; Proposals: Less than 50</p>
  <p>Posted 20 minutes ago</p>
</td></tr>
</table>
</body></html>
"""


def test_parses_each_job_link_into_one_job():
    jobs = parse_alert_html(ALERT_HTML, RECEIVED)
    assert [j.id for j in jobs] == ["~021999888777666555", "~021111222333444555"]
    assert jobs[0].title == "Senior Python Automation Engineer"


def test_fields_are_extracted_per_block_not_leaked_across_blocks():
    first, second = parse_alert_html(ALERT_HTML, RECEIVED)
    assert (first.budget_type, first.budget_min, first.budget_max) == ("hourly", 45.0, 90.0)
    assert (second.budget_type, second.budget_min) == ("fixed", 30.0)
    assert first.client_country == "United States"
    assert second.client_country == "India"
    assert first.client_payment_verified is True
    assert second.client_payment_verified is False
    assert first.experience_level == "Expert"
    assert first.skills == ["Python", "Airflow", "ETL", "PostgreSQL"]
    # 2番目のブロックに Skills 行は無い。1番目のスキルが漏れていないこと。
    assert second.skills == []


def test_relative_posted_time_resolves_against_email_date():
    first, second = parse_alert_html(ALERT_HTML, RECEIVED)
    assert first.posted_at == RECEIVED - timedelta(hours=3)
    assert second.posted_at == RECEIVED - timedelta(minutes=20)


def test_repeated_link_to_same_job_collapses_to_one():
    html = """
    <a href="https://www.upwork.com/jobs/a_~021999888777666555/"><img src="x"></a>
    <a href="https://www.upwork.com/jobs/a_~021999888777666555/">Real Title Here</a>
    <p>Hourly: $50.00-$60.00</p>
    """
    jobs = parse_alert_html(html, RECEIVED)
    assert len(jobs) == 1
    assert jobs[0].title == "Real Title Here"


def test_non_job_email_yields_nothing():
    assert parse_alert_html("<p>Your payment was processed.</p>", RECEIVED) == []
    assert parse_alert_html("", RECEIVED) == []


def test_plain_text_alert():
    text = (
        "New jobs for you\n\n"
        "Senior Data Engineer\n"
        "https://www.upwork.com/jobs/Senior_~021999888777666555/\n"
        "Hourly: $70.00-$110.00\n"
        "Posted 1 hour ago\n"
    )
    jobs = parse_alert_text(text, RECEIVED)
    assert len(jobs) == 1
    assert jobs[0].title == "Senior Data Engineer"
    assert jobs[0].budget_max == 110.0


def test_parse_budget_forms():
    assert parse_budget("Fixed-price - Intermediate - Est. Budget: $1,000") == (
        "fixed", 1000.0, 1000.0,
    )
    assert parse_budget("Hourly: $30.00-$60.00") == ("hourly", 30.0, 60.0)
    assert parse_budget("$75/hr") == ("hourly", 75.0, 75.0)
    assert parse_budget("Hourly – Expert") == ("unknown", None, None)
    assert parse_budget("no numbers at all") == ("unknown", None, None)


def test_parse_proposals_uses_midpoint_and_pessimistic_upper_bound():
    assert parse_proposals("Proposals: 5 to 10") == 7
    assert parse_proposals("Proposals: Less than 5") == 5
    assert parse_proposals("Proposals: 20") == 20
    assert parse_proposals("no proposal info") is None


def test_parse_country_stops_at_next_field():
    assert parse_country("Country: United States Payment verified") == "United States"
    assert parse_country("country: United Arab Emirates") == "United Arab Emirates"
    assert parse_country("Location: somewhere") is None


def test_payment_and_skills_helpers():
    assert parse_payment_verified("Payment verified") is True
    assert parse_payment_verified("Payment unverified") is False
    assert parse_payment_verified("nothing here") is None
    assert parse_skills("Skills: Python, Django, AWS") == ["Python", "Django", "AWS"]
    assert parse_skills("no skills line") == []


def test_posted_at_needs_a_reference_time():
    assert parse_posted_at("Posted 3 hours ago", None) is None
