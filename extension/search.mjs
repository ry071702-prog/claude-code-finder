// 逆引き検索の核（正規化・語分解・意図マップ・スコアリング）。
// ここが単一ソース。plugin/mcp/server.mjs と extension/ の両方がこれを読む。
// （site/js/main.js はブラウザ用に同等ロジックを持つ。直すときは必ず両方 + tests/test_search.mjs）
// 依存なし・ESM。DOM も node API も使わないこと（拡張の service worker で動かすため）。

// カタカナ→ひらがなに寄せる。これが無いと「こみっと」が「コミット」に当たらない。
export const toHira = (s) => s.replace(/[ァ-ヶ]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0x60));
export const norm = (s) => toHira(String(s || "").toLowerCase().replace(/\s+/g, " "));

export const textOf = (e) => norm([
  e.want, e.feature, e.summary, e.category, e.type,
  (e.commands || []).join(" "), (e.aliases || []).join(" "),
  (e.steps || []).join(" "), (e.notes || []).join(" "),
].join(" "));

// 自然文クエリを検索語に分解: 英数字ラン + CJK 2-gram（日本語は空白区切りが無いため）。
// 「したい/する」等のありふれた語尾 2-gram はノイズになるので除外。
const STOP = new Set(["した", "たい", "する", "して", "せる", "れる", "され", "この", "その", "こと", "ため", "よう", "から", "とき", "たり", "ない"]);
const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export function terms(query) {
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

// 意図マップ: 口語・言い換えを本文に実在する正規語へ展開。
export const INTENT_MAP = [
  { keys: ["pr", "プルリク", "プルリクエスト", "ぷるりく"], add: ["pr", "pull request", "review", "レビュー"] },
  { keys: ["続き", "つづき", "再開", "さいかい", "レジューム", "途中から"], add: ["resume", "continue", "再開"] },
  { keys: ["権限", "けんげん", "許可", "パーミッション", "安全"], add: ["permission", "permissions", "allow", "権限"] },
  { keys: ["スマホ", "すまほ", "携帯", "モバイル", "出先", "外出"], add: ["mobile", "web", "モバイル"] },
  { keys: ["並列", "へいれつ", "同時", "パラレル", "並行"], add: ["parallel", "worktree", "subagent", "並列"] },
  { keys: ["テスト", "てすと"], add: ["test", "tests", "テスト"] },
  { keys: ["自動化", "じどうか", "フック", "自動で"], add: ["hook", "hooks", "automation", "フック"] },
  { keys: ["記憶", "きおく", "覚え", "メモリ", "忘れ"], add: ["claude.md", "memory", "記憶"] },
  { keys: ["計画", "けいかく", "プラン", "段取り"], add: ["plan", "計画"] },
  { keys: ["元に戻", "もとに戻", "巻き戻", "取り消", "やり直", "undo", "ロールバック", "戻したい"], add: ["rewind", "undo", "revert", "巻き戻"] },
  { keys: ["外部", "連携", "つなぐ", "繋ぐ", "接続", "ツール追加"], add: ["mcp", "連携", "接続"] },
  { keys: ["調べ", "理解", "把握", "読ん", "説明して", "解説"], add: ["explain", "onboard", "理解", "調べ"] },
  { keys: ["直し", "修正", "バグ", "なおし", "デバッグ"], add: ["debug", "fix", "修正", "バグ"] },
];

export function expandTerms(query) {
  const q = norm(query), out = [], seen = new Set();
  for (const m of INTENT_MAP) {
    if (!m.keys.some((k) => q.includes(norm(k)))) continue;
    for (const t of m.add) {
      const nt = norm(t);
      if (seen.has(nt)) continue;
      seen.add(nt);
      if (/^[a-z0-9 ]+$/.test(nt)) out.push({ w: 2, cjk: false, re: new RegExp(`\\b${escRe(nt.split(" ")[0])}\\b`) });
      else out.push({ w: 2, cjk: true, term: nt });
    }
  }
  return out;
}

// entries を検索してスコア順に返す（副作用なし・データは呼び出し側が持つ）。
export function search(entries, query, limit = 8) {
  const q = norm(query);
  if (!q) return [];
  const ts = terms(query);
  const ex = expandTerms(query);
  const scored = [];
  for (const e of entries || []) {
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
    // 意図マップ展開（口語→正規語）。見出し一致は強め・本文一致は軽く加点。
    for (const term of ex) {
      const inWant = term.cjk ? want.includes(term.term) : term.re.test(want);
      const inFeat = term.cjk ? feat.includes(term.term) : term.re.test(feat);
      const inText = term.cjk ? t.includes(term.term) : term.re.test(t);
      if (inWant) s += term.w * 2;
      else if (inFeat) s += term.w;
      else if (inText) s += 1;
    }
    if (s > 0) scored.push({ e, s });
  }
  scored.sort((a, b) => b.s - a.s || (b.e.stars || 0) - (a.e.stars || 0));
  return scored.slice(0, limit).map((x) => x.e);
}
