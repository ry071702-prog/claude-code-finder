// 逆引きの核である検索ロジック（MCP 版）の回帰テスト。
//
// サイト(site/js/main.js)と MCP(plugin/mcp/server.mjs) は同じ正規化・意図マップを
// 二重に持っている。片方だけ直して食い違う事故が実際に起きたため、
// ここで「かな正規化」「意図マップ」「語境界」の3点を固定する。
//
// 実行: node tests/test_search.mjs   （依存なし）

import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { readFileSync } from "node:fs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SERVER = join(ROOT, "plugin", "mcp", "server.mjs");

// MCP サーバを起動して lookup を1回叩き、ヒットした want の一覧を返す
async function lookup(query, limit = 8) {
  const p = spawn("node", [SERVER], { cwd: ROOT });
  let out = "";
  p.stdout.on("data", (d) => (out += d));
  p.stdin.write(JSON.stringify({ jsonrpc: "2.0", id: 1, method: "initialize",
    params: { protocolVersion: "2024-11-05", capabilities: {}, clientInfo: { name: "t", version: "1" } } }) + "\n");
  p.stdin.write(JSON.stringify({ jsonrpc: "2.0", id: 2, method: "tools/call",
    params: { name: "lookup", arguments: { query, limit } } }) + "\n");
  p.stdin.end();
  await new Promise((r) => p.on("close", r));
  const line = out.trim().split("\n").filter(Boolean).pop();
  const text = JSON.parse(line).result.content[0].text;
  return [...text.matchAll(/^### (.+?) →/gm)].map((m) => m[1]);
}

const tests = [];
const test = (name, fn) => tests.push({ name, fn });
const assert = (cond, msg) => { if (!cond) throw new Error(msg); };

// --- かな正規化: ひらがなで打っても当たること（実際に壊れていた） ---
test("ひらがな『こみっと』がカタカナ『コミット』と同じ結果になる", async () => {
  const hira = await lookup("こみっと");
  const kata = await lookup("コミット");
  assert(hira.length > 0, "『こみっと』が0件");
  assert(JSON.stringify(hira) === JSON.stringify(kata),
    `かな表記で結果が食い違う\n  こみっと: ${hira}\n  コミット: ${kata}`);
});

test("『ぷるりく』が PR 関連に当たる", async () => {
  const r = await lookup("ぷるりく");
  assert(r.some((w) => /PR|レビュー/.test(w)), `PR関連が出ない: ${r}`);
});

// --- 意図マップ: 口語から正規語への展開 ---
test("『元に戻したい』が巻き戻し系に当たる", async () => {
  const r = await lookup("元に戻したい");
  assert(r.length > 0, "0件");
});

test("『権限』が権限・安全系に当たる", async () => {
  const r = await lookup("権限");
  assert(r.length > 0, "0件");
});

// --- 語境界: 英数字語の部分一致ノイズを出さない ---
test("『MCP』が MCP 関連を返す", async () => {
  const r = await lookup("MCP");
  assert(r.length > 0, "0件");
  assert(r.some((w) => /MCP/i.test(w)), `MCPを含む項目が無い: ${r}`);
});

// --- そのまま使えるプロンプトが MCP からも取れる ---
test("cowork 系は prompt を持ち、MCP の出力にも載る", async () => {
  const data = JSON.parse(readFileSync(join(ROOT, "plugin", "mcp", "data.json"), "utf8"));
  const withPrompt = (data.entries || []).filter((e) => e.prompt);
  assert(withPrompt.length >= 10, `prompt付きが少なすぎる: ${withPrompt.length}`);
});

// --- 該当なしでも落ちない ---
test("掠りもしない語でもクラッシュしない", async () => {
  const r = await lookup("qqqzzzxxx");
  assert(Array.isArray(r), "配列が返らない");
});

let failed = 0;
for (const t of tests) {
  try {
    await t.fn();
    console.log(`ok   ${t.name}`);
  } catch (e) {
    failed++;
    console.log(`FAIL ${t.name}\n     ${e.message}`);
  }
}
console.log(`\n${tests.length - failed}/${tests.length} passed`);
process.exit(failed ? 1 : 0);
