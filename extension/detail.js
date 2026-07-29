// omnibox で Enter したときに開くページ。?i= の1件を大きく出し、下に別候補を並べる。
import { loadEntries, find, renderList, card } from "./ui.js";

const params = new URLSearchParams(location.search);
const main = document.getElementById("main");
const also = document.getElementById("also");
const alsoLabel = document.getElementById("alsoLabel");
const qlabel = document.getElementById("qlabel");
const q = document.getElementById("q");
let entries = [];

function open(e, query) {
  main.textContent = "";
  main.appendChild(card(e, { full: true }));
  const rest = find(entries, query || e.want, 7).filter((x) => x.i !== e.i);
  alsoLabel.hidden = rest.length === 0;
  renderList(also, rest, (x) => { open(x, query); window.scrollTo({ top: 0 }); });
  document.title = `${e.want} — cc-finder`;
}

function showOnly(query) {
  main.textContent = "";
  const hits = find(entries, query, 12);
  alsoLabel.hidden = true;
  renderList(also, hits, (x) => open(x, query));
}

loadEntries().then((all) => {
  entries = all;
  const query = params.get("q") || "";
  const i = Number(params.get("i"));
  qlabel.textContent = query ? `「${query}」` : "";
  q.value = query;
  const hit = Number.isInteger(i) && entries[i] ? entries[i] : null;
  if (hit) open(hit, query);
  else showOnly(query);

  q.addEventListener("input", () => {
    const v = q.value.trim();
    qlabel.textContent = v ? `「${v}」` : "";
    if (!v) return;
    const hits = find(entries, v, 12);
    if (hits.length) open(hits[0], v);
    else showOnly(v);
  });
});
