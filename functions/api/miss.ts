// ヒット0件だった検索語だけを集計する Pages Function。
//
// 目的: 「探されたのに辞典に無かったもの」を貯めて、次に足す項目をデータで決める。
// プライバシー: 保存するのは正規化した検索語と回数のみ。IP・UA・識別子は一切保存しない。
//               1語1行に集約するため行数は語彙数以上に増えない。
// 読み出し: scripts/review_misses.py（管理者のみ。GET は公開しない）

interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  run(): Promise<unknown>;
}
interface D1Database { prepare(query: string): D1PreparedStatement; }
interface Env { DB: D1Database; }
interface Ctx { request: Request; env: Env; }

const MAX_LEN = 60;

function cors(request: Request): HeadersInit {
  const origin = request.headers.get("Origin");
  const self = new URL(request.url).origin;
  if (!origin || origin !== self) return {};
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST,OPTIONS",
    Vary: "Origin",
  };
}

// 表記ゆれを吸収して同じ語を1行にまとめる
function normalize(raw: string): string {
  return raw.trim().toLowerCase().replace(/\s+/g, " ").slice(0, MAX_LEN);
}

export const onRequestOptions = async ({ request }: Ctx) =>
  new Response(null, { status: 204, headers: cors(request) });

export const onRequestPost = async ({ request, env }: Ctx) => {
  // 失敗しても利用者の検索体験を壊さないため、常に 204 を返す（計測は本質でない）
  const ok = () => new Response(null, { status: 204, headers: cors(request) });
  try {
    // 同一オリジンからのみ受け付ける（外部からの水増しを防ぐ）
    const origin = request.headers.get("Origin");
    if (origin && origin !== new URL(request.url).origin) return ok();

    const body = (await request.json()) as { q?: unknown };
    const q = typeof body?.q === "string" ? normalize(body.q) : "";
    if (!q || q.length < 2) return ok();

    const now = new Date().toISOString();
    await env.DB.prepare(
      `INSERT INTO misses (q, hits, first_seen, last_seen) VALUES (?, 1, ?, ?)
       ON CONFLICT(q) DO UPDATE SET hits = hits + 1, last_seen = excluded.last_seen`
    ).bind(q, now, now).run();

    return ok();
  } catch {
    return ok();
  }
};
