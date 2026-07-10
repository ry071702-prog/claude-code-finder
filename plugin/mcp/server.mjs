#!/usr/bin/env node
// cc-finder MCP サーバ（stdio・JSON-RPC 2.0・依存なし）。
// tool `lookup(query)` で Claude Code の逆引き辞典＋コミュニティSkillを引く。
// 逆引きデータは同梱の data.json（scripts/build_plugin_data.mjs が生成）。
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
let DATA = { entries: [] };
try {
  DATA = JSON.parse(fs.readFileSync(path.join(here, "data.json"), "utf8"));
} catch (e) {
  process.stderr.write(`cc-finder: data.json load failed: ${e.message}\n`);
}

const norm = (s) => String(s || "").toLowerCase().replace(/\s+/g, " ");
const textOf = (e) => norm([
  e.want, e.feature, e.summary, e.category, e.type,
  (e.commands || []).join(" "), (e.aliases || []).join(" "),
  (e.steps || []).join(" "), (e.notes || []).join(" "),
].join(" "));

// 自然文クエリを検索語に分解: 英数字ラン + CJK 2-gram（日本語は空白区切りが無いため）。
// 「したい/する」等のありふれた語尾 2-gram はノイズになるので除外。
const STOP = new Set(["した", "たい", "する", "して", "せる", "れる", "され", "この", "その", "こと", "ため", "よう", "から", "とき", "たり", "ない"]);
const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
function terms(query) {
  const q = norm(query);
  // 英数字語は語境界一致（"pr" が practices/approve に部分一致するノイズを防ぐ）
  const latin = [...new Set(q.match(/[a-z0-9]{2,}/g) || [])].map((t) => ({
    w: 3, cjk: false, re: new RegExp(`\\b${escRe(t)}\\b`),
  }));
  // 日本語は空白区切りが無いので CJK 2-gram（ありふれた語尾は除外）
  const grams = new Map();
  const cjk = q.replace(/[^぀-ヿ一-鿿ｦ-ﾟ]/g, " ");
  for (const run of cjk.split(" ")) {
    for (let i = 0; i + 2 <= run.length; i++) {
      const g = run.slice(i, i + 2);
      if (!STOP.has(g)) grams.set(g, true);
    }
  }
  const cjkTerms = [...grams.keys()].map((g) => ({ w: 1, cjk: true, term: g }));
  return [...latin, ...cjkTerms];
}

function search(query, limit) {
  const q = norm(query);
  if (!q) return [];
  const ts = terms(query);
  const scored = [];
  for (const e of DATA.entries) {
    const t = textOf(e);
    const want = norm(e.want), feat = norm(e.feature);
    let s = 0;
    if (want.includes(q)) s += 8;          // 完全一致（短い語）は最優先
    if (feat.includes(q)) s += 6;
    if (t.includes(q)) s += 4;
    for (const term of ts) {
      const inWant = term.cjk ? want.includes(term.term) : term.re.test(want);
      const inText = term.cjk ? t.includes(term.term) : term.re.test(t);
      if (inWant) s += term.w * 2;          // want での一致を重く
      else if (inText) s += term.w;
    }
    if (s > 0) scored.push({ e, s });
  }
  scored.sort((a, b) => b.s - a.s || (b.e.stars || 0) - (a.e.stars || 0));
  return scored.slice(0, limit).map((x) => x.e);
}

function render(list, query) {
  if (!list.length) return `「${query}」に該当なし。言い換えて再検索してください。`;
  const parts = list.map((e) => {
    const L = [`### ${e.want} → ${e.feature}`, e.summary];
    if (e.install) L.push(`Install: \`${e.install}\``);
    else if ((e.commands || []).length) L.push("Commands: " + e.commands.map((c) => `\`${c}\``).join("  "));
    if (e.origin === "skill" && e.url) L.push(`Repo: ${e.url}${e.stars ? ` (★${e.stars})` : ""}`);
    if ((e.steps || []).length) L.push("進め方: " + e.steps.join(" / "));
    if ((e.notes || []).length) L.push("注意: " + e.notes.join(" / "));
    return L.join("\n");
  });
  return `「${query}」の逆引き結果 ${list.length} 件:\n\n` + parts.join("\n\n");
}

const TOOLS = [{
  name: "lookup",
  description:
    "Claude Code で「〜したい」という目的から、使うべき機能・スラッシュコマンド・CLI・設定・連携、または導入できるコミュニティSkill(npx skills add)を逆引きする。Claude Code 自体の使い方に迷ったら呼ぶ。",
  inputSchema: {
    type: "object",
    properties: {
      query: { type: "string", description: 'やりたいこと。例: "PRを直したい" "権限を絞る" "MCP" "続きから再開" "並列で回す"' },
      limit: { type: "number", description: "最大件数（既定8・最大20）" },
    },
    required: ["query"],
  },
}];

const send = (msg) => process.stdout.write(JSON.stringify(msg) + "\n");
const reply = (id, result) => send({ jsonrpc: "2.0", id, result });
const errReply = (id, code, message) => send({ jsonrpc: "2.0", id, error: { code, message } });

function handle(msg) {
  const { id, method, params } = msg;
  switch (method) {
    case "initialize":
      return reply(id, {
        protocolVersion: "2024-11-05",
        capabilities: { tools: {} },
        serverInfo: { name: "cc-finder", version: "1.0.0" },
      });
    case "notifications/initialized":
      return; // 通知（応答不要）
    case "tools/list":
      return reply(id, { tools: TOOLS });
    case "tools/call": {
      const name = params && params.name;
      const args = (params && params.arguments) || {};
      if (name !== "lookup") return errReply(id, -32601, `unknown tool: ${name}`);
      const limit = Math.min(20, Math.max(1, Number(args.limit) || 8));
      const list = search(String(args.query || ""), limit);
      return reply(id, { content: [{ type: "text", text: render(list, String(args.query || "")) }] });
    }
    case "ping":
      return reply(id, {});
    default:
      if (id !== undefined) errReply(id, -32601, `unknown method: ${method}`);
  }
}

let buf = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => {
  buf += chunk;
  let i;
  while ((i = buf.indexOf("\n")) >= 0) {
    const line = buf.slice(0, i).trim();
    buf = buf.slice(i + 1);
    if (!line) continue;
    let msg;
    try { msg = JSON.parse(line); } catch { continue; }
    try { handle(msg); } catch (e) { process.stderr.write(`handle error: ${e.message}\n`); }
  }
});
process.stderr.write(`cc-finder MCP ready (${(DATA.entries || []).length} entries)\n`);
