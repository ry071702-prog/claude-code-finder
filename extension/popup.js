import { loadEntries, find, renderList, card } from "./ui.js";

const q = document.getElementById("q");
const list = document.getElementById("list");
let entries = [];

// 起動直後の空クエリでは「よく引くもの」を出す（真っ白にしない）。
const STARTERS = ["権限", "再開", "並列", "mcp", "巻き戻し", "計画"];

function show(query) {
  const hits = query.trim()
    ? find(entries, query, 12)
    : STARTERS.flatMap((s) => find(entries, s, 1));
  renderList(list, hits, (e) => {
    list.textContent = "";
    list.appendChild(card(e, { full: true }));
    list.scrollIntoView({ block: "start" });
  });
}

loadEntries().then((all) => {
  entries = all;
  show(q.value);
  q.addEventListener("input", () => show(q.value));
});
