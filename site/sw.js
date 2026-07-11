/* Service Worker — オフライン閲覧＋高速化（stale-while-revalidate）
 * データは週次で更新されるため、キャッシュを即返しつつ裏で最新化する。
 * バージョンを上げると古いキャッシュは activate 時に破棄される。 */
const VERSION = "ccf-v1";
const CORE = [
  "/", "/guide", "/academy", "/updates",
  "/css/style.css",
  "/js/data.js", "/js/data-custom.js", "/js/data-skills.js", "/js/main.js",
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

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;      // 外部（フォント等）はそのまま
  if (url.pathname.startsWith("/api/")) return;     // 投稿APIは常にネットワーク

  e.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req)
        .then((res) => {
          if (res && res.status === 200 && res.type === "basic") {
            const clone = res.clone();
            caches.open(VERSION).then((c) => c.put(req, clone));
          }
          return res;
        })
        .catch(() => cached || caches.match("/"));   // オフライン時はキャッシュ or トップ
      return cached || network;                      // キャッシュがあれば即返し、裏で更新
    })
  );
});
