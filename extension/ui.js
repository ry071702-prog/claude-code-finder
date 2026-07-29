// popup / detail 共通の描画。
// 取り込み Skill の文言は外部リポジトリ由来なので innerHTML は使わず全部 textContent で組む。
import { search } from "./search.mjs";

let CACHE = null;
export async function loadEntries() {
  if (!CACHE) {
    const res = await fetch(chrome.runtime.getURL("data.json"));
    const data = await res.json();
    CACHE = (data.entries || []).map((e, i) => ({ ...e, i }));
  }
  return CACHE;
}
export const find = (list, query, limit = 12) => search(list, query, limit);

const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
};

async function copy(text, btn) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
  const before = btn.textContent;
  btn.textContent = "コピーしました";
  btn.classList.add("ok");
  setTimeout(() => { btn.textContent = before; btn.classList.remove("ok"); }, 1200);
}

function codeRow(text) {
  const row = el("div", "code");
  row.appendChild(el("code", null, text));
  const b = el("button", "copy", "コピー");
  b.addEventListener("click", () => copy(text, b));
  row.appendChild(b);
  return row;
}

// full=false: 一覧用の要約カード / full=true: 詳細用（手順・注意・プロンプトまで出す）
export function card(e, { full = false } = {}) {
  const c = el("article", "card" + (full ? " full" : ""));

  const head = el("header", "card-head");
  head.appendChild(el("h2", "want", e.want));
  const meta = el("div", "meta");
  meta.appendChild(el("span", "feature", e.feature));
  if (e.origin === "skill") meta.appendChild(el("span", "tag skill", "Skill"));
  if (e.stars) meta.appendChild(el("span", "tag star", `★ ${e.stars.toLocaleString("en-US")}`));
  if (e.type && e.origin !== "skill") meta.appendChild(el("span", "tag", e.type));
  head.appendChild(meta);
  c.appendChild(head);

  if (e.summary) c.appendChild(el("p", "summary", e.summary));

  const cmds = e.install ? [e.install] : (e.commands || []);
  for (const cmd of cmds.slice(0, full ? 6 : 2)) c.appendChild(codeRow(cmd));

  if (full) {
    if ((e.steps || []).length) {
      c.appendChild(el("h3", null, "進め方"));
      const ol = el("ol", "steps");
      for (const s of e.steps) ol.appendChild(el("li", null, s));
      c.appendChild(ol);
    }
    if (e.prompt) {
      c.appendChild(el("h3", null, "そのまま使えるプロンプト"));
      const p = el("pre", "prompt", e.prompt);
      c.appendChild(p);
      const b = el("button", "copy wide", "プロンプトをコピー");
      b.addEventListener("click", () => copy(e.prompt, b));
      c.appendChild(b);
    }
    if ((e.notes || []).length) {
      c.appendChild(el("h3", null, "注意"));
      const ul = el("ul", "notes");
      for (const n of e.notes) ul.appendChild(el("li", null, n));
      c.appendChild(ul);
    }
    if (e.url) {
      const a = el("a", "link", e.url);
      a.href = e.url;
      a.target = "_blank";
      a.rel = "noreferrer";
      c.appendChild(a);
    }
  }
  return c;
}

export function renderList(container, list, onPick) {
  container.textContent = "";
  if (!list.length) {
    container.appendChild(el("p", "empty", "該当なし  言い換えて試す (例: 権限 / 並列 / 巻き戻し)"));
    return;
  }
  for (const e of list) {
    const c = card(e);
    c.tabIndex = 0;
    c.addEventListener("click", (ev) => {
      if (ev.target.closest("button")) return;   // コピーボタンのクリックは開かない
      onPick(e);
    });
    c.addEventListener("keydown", (ev) => { if (ev.key === "Enter") onPick(e); });
    container.appendChild(c);
  }
}
