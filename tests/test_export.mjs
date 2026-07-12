// site/data/ccf-export.json (MeetS の AI ページ向け公開エクスポート) の内容を固定する。
//
// このエクスポートは外部サイト (MeetS) に配信される。
// 「自作 Skill を配布物にしない」という方針を、レビューでの目視でなく
// テストで機械的に担保する。ここが落ちれば commit も deploy もされない。
//
// 実行: node tests/test_export.mjs   （依存なし）

import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const p = join(root, "site", "data", "ccf-export.json");

let failed = 0;
const check = (name, ok, detail = "") => {
  if (ok) {
    process.stdout.write(`  ok  ${name}\n`);
  } else {
    failed++;
    process.stdout.write(`  NG  ${name}${detail ? "  → " + detail : ""}\n`);
  }
};

if (!existsSync(p)) {
  process.stderr.write("site/data/ccf-export.json がない  先に node scripts/build_ccf_export.mjs を実行する\n");
  process.exit(1);
}

const raw = readFileSync(p, "utf8");
const data = JSON.parse(raw);

// --- 配布物化しないための不変条件 (最重要) ---
check("install 導線 (npx skills add) を含まない", !raw.includes("npx skills add"));
check("プラグイン導入導線 (/plugin marketplace) を含まない", !raw.includes("plugin marketplace"));
check(
  "自前プラグインの id (cc-finder-*) を含まない",
  !data.sections.some((s) => (s.items || []).some((i) => String(i.id || "").startsWith("cc-finder")))
);
check(
  "items に install フィールドが生えていない",
  !data.sections.some((s) => (s.items || []).some((i) => "install" in i))
);

// --- MeetS 側が壊れないための構造の固定 ---
check("schemaVersion がある", data.schemaVersion === 1);
check("出典と免責がある", Boolean(data.source?.name && data.source?.url && data.source?.disclaimer));

const wantCategories = ["Q&A", "ツール活用", "プロンプト", "AIニュース窓"];
const got = (data.sections || []).map((s) => s.meetsCategory);
check(
  `MeetS の4カテゴリが揃っている (${wantCategories.join(" / ")})`,
  wantCategories.every((c) => got.includes(c)),
  `got: ${got.join(", ")}`
);
check(
  "全セクションが1件以上ある",
  (data.sections || []).every((s) => (s.items || []).length > 0),
  (data.sections || []).map((s) => `${s.key}=${(s.items || []).length}`).join(" ")
);
check(
  "全 item に id / title / url がある",
  (data.sections || []).every((s) => (s.items || []).every((i) => i.id && i.title && i.url))
);

process.stdout.write(failed === 0 ? "\nexport OK\n" : `\n${failed} 件 NG\n`);
process.exit(failed === 0 ? 0 : 1);
