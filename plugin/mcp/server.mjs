#!/usr/bin/env node
// cc-finder MCP サーバ（stdio・JSON-RPC 2.0・依存なし）。
// tool `lookup(query)` で Claude Code の逆引き辞典＋コミュニティSkillを引く。
// 逆引きデータは同梱の data.json（scripts/build_plugin_data.mjs が生成）。
// 検索ロジックは同梱の search.mjs が単一ソース（Chrome拡張もこれをコピーして使う）。
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { search as searchEntries } from "./search.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
let DATA = { entries: [] };
try {
  DATA = JSON.parse(fs.readFileSync(path.join(here, "data.json"), "utf8"));
} catch (e) {
  process.stderr.write(`cc-finder: data.json load failed: ${e.message}\n`);
}

// 検索本体は search.mjs（単一ソース）。ここはデータを渡すだけの薄いラッパー。
const search = (query, limit) => searchEntries(DATA.entries, query, limit);

function render(list, query) {
  if (!list.length) return `「${query}」に該当なし。言い換えて再検索してください。`;
  const parts = list.map((e) => {
    const L = [`### ${e.want} → ${e.feature}`, e.summary];
    if (e.install) L.push(`Install: \`${e.install}\``);
    else if ((e.commands || []).length) L.push("Commands: " + e.commands.map((c) => `\`${c}\``).join("  "));
    if (e.origin === "skill" && e.url) L.push(`Repo: ${e.url}${e.stars ? ` (★${e.stars})` : ""}`);
    if ((e.steps || []).length) L.push("進め方: " + e.steps.join(" / "));
    if (e.prompt) L.push("そのまま使えるプロンプト:\n```\n" + e.prompt + "\n```");
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
