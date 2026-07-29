// Chrome 拡張(extension/)の壊れ検知。
// 拡張はディレクトリ外を読めないため data.json / search.mjs は「コピー」で配っている。
// build_plugin_data.mjs が同期を忘れると拡張だけ古いデータで動く（気づけない）ので、ここで固定する。
// 実行: node tests/test_extension.mjs   （依存なし）

import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { describe as omniDescribe, esc } from "../extension/omnibox.js";
import { search } from "../extension/search.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const EXT = join(ROOT, "extension");
const read = (...p) => readFileSync(join(...p), "utf8");

const tests = [];
const test = (name, fn) => tests.push({ name, fn });
const assert = (cond, msg) => { if (!cond) throw new Error(msg); };

test("manifest が参照するファイルが全部ある", () => {
  const m = JSON.parse(read(EXT, "manifest.json"));
  const refs = [
    m.background.service_worker,
    m.action.default_popup,
    ...Object.values(m.icons),
    ...Object.values(m.action.default_icon),
  ];
  for (const r of refs) assert(existsSync(join(EXT, r)), `manifest の参照切れ: ${r}`);
  assert(m.omnibox && m.omnibox.keyword === "cc", "omnibox キーワードが cc でない");
  assert(m.background.type === "module", "service worker が module でないと import が動かない");
});

test("HTML が読む js/css が全部ある", () => {
  for (const page of ["popup.html", "detail.html"]) {
    const html = read(EXT, page);
    for (const [, src] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
      assert(existsSync(join(EXT, src)), `${page} の参照切れ: ${src}`);
    }
  }
});

test("同梱データが plugin/mcp と同期している", () => {
  assert(read(EXT, "data.json") === read(ROOT, "plugin", "mcp", "data.json"),
    "extension/data.json が古い（node scripts/build_plugin_data.mjs を実行すること）");
  assert(read(EXT, "search.mjs") === read(ROOT, "plugin", "mcp", "search.mjs"),
    "extension/search.mjs が古い（単一ソースは plugin/mcp/search.mjs）");
});

test("検索が拡張側でも同じ結果を返す", () => {
  const { entries } = JSON.parse(read(EXT, "data.json"));
  assert(entries.length > 100, `件数が少なすぎる: ${entries.length}`);
  const hits = search(entries, "権限を絞りたい", 5);
  assert(hits.length > 0, "「権限を絞りたい」が0件");
  assert(search(entries, "こみっと", 5).length > 0, "ひらがな検索が0件");
});

test("omnibox の description が XML として壊れない", () => {
  const { entries } = JSON.parse(read(EXT, "data.json"));
  for (const e of entries) {
    const d = omniDescribe(e);
    // タグは <match> <dim> のみ。中身に生の < & が残っていれば候補が消える。
    const inner = d.replace(/<\/?(match|dim)>/g, "");
    assert(!/[<>]/.test(inner), `未エスケープの山括弧: ${e.want}`);
    assert(!/&(?!(amp|lt|gt|quot|apos);)/.test(inner), `未エスケープの & : ${e.want}`);
  }
  assert(esc('a&b<c>"d"') === "a&amp;b&lt;c&gt;&quot;d&quot;", "esc が期待通りでない");
});

let failed = 0;
for (const t of tests) {
  try { await t.fn(); console.log(`ok   ${t.name}`); }
  catch (e) { failed++; console.error(`FAIL ${t.name}\n     ${e.message}`); }
}
console.log(`\n${tests.length - failed}/${tests.length} passed`);
process.exit(failed ? 1 : 0);
