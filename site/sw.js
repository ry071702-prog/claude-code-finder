/* Service Worker — オフライン閲覧 ＋ 常に最新のコードを配る
 *
 * 方針:
 *  - アプリシェル（HTML / JS / CSS / manifest）は network-first。
 *    エッジ配信で TTFB 50ms 程度なので、取得コストより「デプロイ直後に古い画面が出ない」ことを優先する。
 *    オフライン時のみキャッシュへフォールバック。
 *  - アイコン・画像など実質不変のものは cache-first（裏で更新）。
 *  - VERSION を上げると古いキャッシュは activate 時に破棄される。
 */
const VERSION = "ccf-v3";
const CORE = [
  "/", "/guide", "/academy", "/updates",
  "/css/style.css",
  "/js/data.js", "/js/data-custom.js", "/js/data-skills.js", "/js/main.js",
  "/js/data-sponsors.js", "/js/sponsors.js",
  "/js/guide.js", "/js/academy.js", "/js/updates.js", "/js/theme-toggle.js", "/js/pwa.js",
  "/js/data-academy.js", "/js/data-updates.js", "/js/data-changelog.js",
  "/favicon.svg", "/icon-192.png", "/manifest.webmanifest",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(CORE)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

// HTML・JS・CSS はコードなので必ず最新を。画像等は不変なのでキャッシュ優先。
function isAppShell(req, url) {
  return req.mode === "navigate" ||
    /\.(?:js|css|webmanifest)$/.test(url.pathname);
}

function putInCache(req, res) {
  if (res && res.status === 200 && res.type === "basic") {
    const clone = res.clone();
    caches.open(VERSION).then((c) => c.put(req, clone));
  }
  return res;
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;      // 外部（フォント等）はそのまま
  if (url.pathname.startsWith("/api/")) return;     // 投稿APIは常にネットワーク

  if (isAppShell(req, url)) {
    // network-first: オンラインなら常に最新、落ちていればキャッシュで動かす
    e.respondWith(
      fetch(req)
        .then((res) => putInCache(req, res))
        .catch(() => caches.match(req).then((c) => c || caches.match("/")))
    );
    return;
  }

  // cache-first + 裏で更新（アイコン・画像など）
  e.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req)
        .then((res) => putInCache(req, res))
        .catch(() => cached);
      return cached || network;
    })
  );
});
