// omnibox の候補行を組み立てる（chrome API に依存しない = テストできる）。
// description は XML として解釈されるので、実体参照にしないと & や < を含む文言で候補が丸ごと消える。
export const esc = (s) => String(s == null ? "" : s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;").replace(/'/g, "&apos;");

export const clip = (s, n) => (s && s.length > n ? s.slice(0, n - 1) + "…" : s || "");

export function describe(e) {
  const cmd = e.install || (e.commands || [])[0] || "";
  const tail = cmd ? ` — ${clip(cmd, 46)}` : ` — ${clip(e.feature, 40)}`;
  const star = e.origin === "skill" && e.stars ? ` ★${e.stars.toLocaleString("en-US")}` : "";
  return `<match>${esc(clip(e.want, 52))}</match><dim>${esc(tail + star)}</dim>`;
}
