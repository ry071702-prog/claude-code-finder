// site/data/ccf-export.json を生成する。
// MeetS (ca-sites) の AI ページが RSC サーバーフェッチで読む公開エクスポート。
//
// 設計メモ:
//  - 配信は Cloudflare Pages の静的アセット (access-control-allow-origin: * が既定)。
//    MeetS はサーバー側から fetch するので CSP connect-src / CORS を触らずに済む。
//  - 週次 ingest (ingest-skills.yml) の中で build_data.py の後に実行され、自動で最新化される。
//    新しい常駐ジョブや LLM 呼び出しは増えない。
//  - MeetS の AI ページのカテゴリチップ (Q&A / プロンプト / ツール活用 / AIニュース窓) に
//    そのまま流し込めるよう、セクション単位で整形する。
//
// 除外ルール (意図的):
//  - install コマンド (`npx skills add ...`) は一切含めない。
//  - cc-finder-* (このサイト自身のプラグイン導線) は含めない。
//  → 配布物化しないための構造的な担保であり、フィルタを外さないこと。
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

globalThis.window = {};
for (const f of ["data.js", "data-custom.js", "data-skills.js", "data-updates.js", "data-changelog.js"]) {
  const p = path.join(root, "site", "js", f);
  if (!fs.existsSync(p)) continue;
  try {
    (0, eval)(fs.readFileSync(p, "utf8"));
  } catch (e) {
    process.stderr.write(`skip ${f}: ${e.message}\n`);
  }
}
const w = globalThis.window;

const SITE = "https://claude-code-finder.pages.dev";

// 自前のプラグイン導線は出さない
const EXCLUDED_IDS = new Set(["cc-finder-plugin", "cc-finder-discover-skills", "team-xxx", "team-sample"]);
const isExcluded = (e) => EXCLUDED_IDS.has(e.id) || String(e.id || "").startsWith("cc-finder");

// install を落とし、MeetS が表示に使うフィールドだけに絞る
const toItem = (e) => ({
  id: e.id,
  title: e.want || e.feature || e.summary || "",
  feature: e.feature || "",
  summary: e.summary || "",
  category: e.category || "",
  commands: (e.commands || []).slice(0, 3),
  steps: (e.steps || []).slice(0, 5),
  url: `${SITE}/#${encodeURIComponent(e.id || "")}`,
});

const base = (w.CCF_ENTRIES || []).filter((e) => !isExcluded(e));
const custom = (w.CCF_CUSTOM_ENTRIES || []).filter((e) => !isExcluded(e));

// 「コード不要・仕事で使える」= 非エンジニアの内定者に一番刺さる
const cowork = custom.filter((e) => e.category === "cowork");
// 自作 Skill の中身ではなく「使い方のパターン」= プロンプト面の教材として出す
const patterns = custom.filter((e) => String(e.id || "").startsWith("pat-"));

// CCF_CHANGELOG = {source, versions:[{version, items:[{kind, text}]}]} (fetch_updates.py の純パース結果)
const changelogSource =
  (w.CCF_CHANGELOG && w.CCF_CHANGELOG.source) ||
  "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md";
const changelog = ((w.CCF_CHANGELOG && w.CCF_CHANGELOG.versions) || []).slice(0, 8).map((v) => ({
  id: `changelog-${v.version}`,
  title: `v${v.version}`,
  summary: (v.items || [])
    .slice(0, 3)
    .map((i) => i.text)
    .join(" / "),
  highlights: (v.items || []).slice(0, 5).map((i) => ({ kind: i.kind, text: i.text })),
  url: changelogSource,
}));

// 編集者まとめ (手書きハイライト) も「AIニュース窓」に添える
const updates = (w.CCF_UPDATES || []).slice(0, 6).map((u) => ({
  id: `update-${u.tag || u.title}`,
  title: u.title || "",
  summary: u.summary || "",
  tag: u.tag || "",
  url: (u.links && u.links[0] && u.links[0].url) || SITE + "/updates.html",
}));

const sections = [
  {
    key: "qa",
    // MeetS 側のカテゴリチップ名に対応させる
    meetsCategory: "Q&A",
    label: "やりたいこと逆引き",
    note: "「◯◯したい」から機能を引く  一次情報は公式 docs",
    items: base.slice(0, 40).map(toItem),
  },
  {
    key: "cowork",
    meetsCategory: "ツール活用",
    label: "コード不要・仕事で使える",
    note: "エンジニア以外でもそのまま使える活用例",
    items: cowork.map(toItem),
  },
  {
    key: "prompts",
    meetsCategory: "プロンプト",
    label: "頼み方のパターン",
    note: "うまくいく頼み方の型 (バグ調査 / リファクタ / テスト生成 / 解説)",
    items: patterns.map(toItem),
  },
  {
    key: "updates",
    meetsCategory: "AIニュース窓",
    label: "Claude Code の更新",
    note: "公式 CHANGELOG の機械パース + 編集者まとめ (LLM 生成ではない)",
    items: [...updates, ...changelog],
  },
];

const out = {
  schemaVersion: 1,
  source: {
    name: "claude-code-finder",
    url: SITE,
    disclaimer: "非公式のまとめ  一次情報は Anthropic 公式ドキュメントを参照",
  },
  counts: Object.fromEntries(sections.map((s) => [s.key, s.items.length])),
  sections,
};

const dir = path.join(root, "site", "data");
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, "ccf-export.json"), JSON.stringify(out, null, 1));

const total = sections.reduce((n, s) => n + s.items.length, 0);
process.stdout.write(
  `wrote site/data/ccf-export.json (${total} items: ${sections.map((s) => `${s.key}=${s.items.length}`).join(" ")})\n`
);
