// omnibox（アドレスバー "cc " + キーワード）で逆引きする。
// 検索は同梱の search.mjs（MCP と同じ単一ソース）・データは同梱の data.json。通信は一切しない。
import { search, norm } from "./search.mjs";
import { describe } from "./omnibox.js";

let ENTRIES = null;

async function entries() {
  if (!ENTRIES) {
    const res = await fetch(chrome.runtime.getURL("data.json"));
    const data = await res.json();
    // i = data.json 内の位置。detail ページへはこの i だけ渡す（バンドル内で安定）。
    ENTRIES = (data.entries || []).map((e, i) => ({ ...e, i }));
  }
  return ENTRIES;
}

chrome.omnibox.setDefaultSuggestion({
  description: "<dim>cc-finder:</dim> %s <dim>— Enter でいちばん近い答えを開く</dim>",
});

chrome.omnibox.onInputChanged.addListener((text, suggest) => {
  entries().then((list) => {
    const hits = search(list, text, 8);
    suggest(hits.map((e) => ({ content: e.want, description: describe(e) })));
  });
});

chrome.omnibox.onInputEntered.addListener((text, disposition) => {
  entries().then((list) => {
    // サジェストを選ぶと content（= want）が入るので完全一致を優先、なければ通常検索の1件目。
    const exact = list.find((e) => norm(e.want) === norm(text));
    const hit = exact || search(list, text, 1)[0];
    const url = hit
      ? chrome.runtime.getURL(`detail.html?i=${hit.i}&q=${encodeURIComponent(text)}`)
      : chrome.runtime.getURL(`detail.html?q=${encodeURIComponent(text)}`);
    if (disposition === "newForegroundTab") chrome.tabs.create({ url });
    else if (disposition === "newBackgroundTab") chrome.tabs.create({ url, active: false });
    else chrome.tabs.update({ url });
  });
});
