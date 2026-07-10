// 他者からの Skill 登録申請を受け取り D1(submissions) に pending で保存する Pages Function。
// 採用は人間モデレート（scripts/review_submissions.py → config/skill-sources.csv 昇格）。
// info-collector の signup.ts パターンを踏襲した自己完結版。

interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T = Record<string, unknown>>(col?: string): Promise<T | null>;
  run(): Promise<unknown>;
}
interface D1Database { prepare(query: string): D1PreparedStatement; }
interface Env { DB: D1Database; }
interface Ctx { request: Request; env: Env; }

class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) { super(message); this.status = status; }
}

const OWNER_REPO_RE = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;
const SLUG_RE = /^[a-z0-9-]+$/;
const CATEGORIES = new Set(["community","start","understand","change","git","parallel","memory","safety","extend","platform","automation","admin","sdk","trouble"]);

function cors(request: Request): HeadersInit {
  const origin = request.headers.get("Origin");
  const self = new URL(request.url).origin;
  if (!origin || origin !== self) return {};
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    Vary: "Origin",
  };
}
function json(request: Request, data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store", ...cors(request) },
  });
}
function fail(request: Request, e: unknown): Response {
  const status = e instanceof ApiError ? e.status : 500;
  const message = e instanceof Error ? e.message : "サーバーエラー";
  return json(request, { ok: false, error: message }, status);
}

export const onRequestOptions = async ({ request }: Ctx) =>
  new Response(null, { status: 204, headers: cors(request) });

// 件数（社会的証明・公開）
export const onRequestGet = async ({ request, env }: Ctx) => {
  try {
    const total = await env.DB.prepare("SELECT COUNT(*) AS n FROM submissions").first<{ n: number }>();
    const pending = await env.DB.prepare("SELECT COUNT(*) AS n FROM submissions WHERE status='pending'").first<{ n: number }>();
    return json(request, { total: total?.n ?? 0, pending: pending?.n ?? 0 });
  } catch (e) { return fail(request, e); }
};

export const onRequestPost = async ({ request, env }: Ctx) => {
  try {
    if (!request.headers.get("Content-Type")?.includes("application/json")) {
      throw new ApiError(415, "Content-Type must be application/json");
    }
    let body: Record<string, unknown>;
    try { body = await request.json(); } catch { throw new ApiError(400, "Invalid JSON"); }
    if (!body || typeof body !== "object") throw new ApiError(400, "Invalid body");

    // ハニーポット（bot 除け・人間は空のまま）
    if (typeof body.website === "string" && body.website.trim() !== "") {
      return json(request, { ok: true }, 201); // 静かに成功扱い
    }

    const ownerRepo = typeof body.owner_repo === "string" ? body.owner_repo.trim() : "";
    if (!ownerRepo || ownerRepo.length > 140 || !OWNER_REPO_RE.test(ownerRepo)) {
      throw new ApiError(400, "owner/repo の形式で入力してください（例: anthropics/skills）");
    }
    let skillName = typeof body.skill_name === "string" ? body.skill_name.trim().toLowerCase() : "";
    if (skillName && (skillName.length > 60 || !SLUG_RE.test(skillName))) {
      throw new ApiError(400, "skill 名は英小文字・数字・ハイフンのみ");
    }
    let category = typeof body.category === "string" ? body.category.trim() : "";
    if (category && !CATEGORIES.has(category)) category = "community";
    const contact = typeof body.contact === "string" ? body.contact.slice(0, 200) : null;
    const note = typeof body.note === "string" ? body.note.slice(0, 500) : null;

    const now = new Date().toISOString();
    const cf = (request as Request & { cf?: { country?: string } }).cf;
    const country = cf?.country ?? null;
    const ua = request.headers.get("User-Agent")?.slice(0, 300) ?? null;

    // (owner_repo, skill_name) 一意。再送は静かに無視（既存 pending を維持）。
    await env.DB.prepare(
      `INSERT INTO submissions (id, owner_repo, skill_name, category, contact, note, status, country, user_agent, created_at)
       VALUES (?, ?, ?, ?, ?, ?, 'pending', ?, ?, ?)
       ON CONFLICT(owner_repo, skill_name) DO NOTHING`
    ).bind(crypto.randomUUID(), ownerRepo, skillName || "", category || "community", contact, note, country, ua, now).run();

    return json(request, { ok: true }, 201);
  } catch (e) { return fail(request, e); }
};
