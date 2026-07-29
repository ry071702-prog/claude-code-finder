// site/js の 3 データ(data.js=本文 / data-custom.js / data-skills.js)を
// Node 上で評価してマージし、MCP サーバが読む plugin/mcp/data.json を生成する。
// window グローバル代入形式の JS をそのまま利用（重複実装を避ける）。
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
globalThis.window = {};
for (const f of ["data.js", "data-custom.js", "data-skills.js"]) {
  const p = path.join(root, "site", "js", f);
  if (fs.existsSync(p)) {
    try { (0, eval)(fs.readFileSync(p, "utf8")); }
    catch (e) { process.stderr.write(`skip ${f}: ${e.message}\n`); }
  }
}
const w = globalThis.window;
const tag = (arr, origin) => (arr || []).map((e) => ({ ...e, origin }));
const merged = [
  ...tag(w.CCF_ENTRIES, "base"),
  ...tag(w.CCF_CUSTOM_ENTRIES, "custom"),
  ...tag(w.CCF_SKILLS, "skill"),
];
const entries = merged.map((e) => ({
  want: e.want, feature: e.feature, summary: e.summary,
  category: e.category, type: e.type,
  commands: e.commands || [], install: e.install || null,
  steps: e.steps || [], notes: e.notes || [],
  prompt: e.prompt || null,   // そのまま貼れるプロンプト（cowork 系）。サイトと MCP で同じものを出す
  stars: e.stars || null, url: e.repoUrl || null, origin: e.origin,
}));
const out = {
  generated: true,
  count: entries.length,
  categories: w.CCF_CATEGORIES || [],
  entries,
};
const dir = path.join(root, "plugin", "mcp");
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, "data.json"), JSON.stringify(out));
process.stdout.write(`wrote plugin/mcp/data.json (${entries.length} entries)\n`);

// Chrome 拡張(extension/)にも同じデータと検索ロジックを配る。
// 拡張は自ディレクトリ外を読めないので「コピーを置く」しかない。生成物なのでここで必ず上書きし、
// plugin/mcp/search.mjs を単一ソースに保つ（extension/search.mjs は直接編集しないこと）。
const ext = path.join(root, "extension");
if (fs.existsSync(ext)) {
  fs.writeFileSync(path.join(ext, "data.json"), JSON.stringify(out));
  fs.copyFileSync(path.join(dir, "search.mjs"), path.join(ext, "search.mjs"));
  process.stdout.write("synced extension/data.json + extension/search.mjs\n");
}
