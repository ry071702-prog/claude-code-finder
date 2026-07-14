/* スポンサー枠の描画 — data-sponsors.js の設定だけで挙動が決まる
 *
 * - 本棚: SHELF_ITEMS を bento-tile で描画。AMAZON_TAG 設定時のみ ?tag= を付与し
 *   アソシエイト開示文 (景表法ステマ規制対応) を表示する
 * - AdSense: client/slot 設定時のみ script を遅延注入。未設定なら DOM を残さない
 *   (Lighthouse / CLS への影響ゼロ)
 */
(function () {
  "use strict";
  if (typeof SPONSOR_CONFIG === "undefined") return;

  const section = document.getElementById("shelf");
  if (!section) return;

  /* ---------- 本棚 ---------- */
  const tag = (SPONSOR_CONFIG.AMAZON_TAG || "").trim();

  function withTag(href) {
    if (!tag) return href;
    try {
      const u = new URL(href);
      if (/(^|\.)amazon\.co\.jp$/.test(u.hostname)) u.searchParams.set("tag", tag);
      return u.toString();
    } catch (e) {
      return href;
    }
  }

  const grid = section.querySelector(".bento-explore");
  const items = (typeof SHELF_ITEMS === "undefined" ? [] : SHELF_ITEMS);
  if (!items.length) { section.hidden = true; return; }

  grid.innerHTML = items.map((it) => `
    <a href="${withTag(it.href)}" class="bento-tile" target="_blank" rel="noopener noreferrer sponsored">
      <span class="bento-ic material-icons-outlined" aria-hidden="true">${it.icon}</span>
      <div class="bento-body">
        <h3>${it.title}<span class="bento-arrow" aria-hidden="true">❯</span></h3>
        <p>${it.desc}</p>
      </div>
      <span class="bento-count">Amazon で見る</span>
    </a>`).join("");

  const fine = section.querySelector(".shelf-fine");
  if (fine && tag) {
    fine.textContent = "Amazon のアソシエイトとして、当サイトは適格販売により収入を得ます";
  }

  /* ---------- AdSense (設定時のみ) ---------- */
  const ads = SPONSOR_CONFIG.ADSENSE || {};
  if (!ads.client || !ads.slot) return;

  const slotWrap = document.createElement("div");
  slotWrap.className = "ad-slot";
  slotWrap.innerHTML = `
    <span class="ad-slot-label" aria-hidden="true">広告</span>
    <ins class="adsbygoogle" style="display:block"
      data-ad-client="${ads.client}" data-ad-slot="${ads.slot}"
      data-ad-format="auto" data-full-width-responsive="true"></ins>`;
  section.appendChild(slotWrap);

  // 初回スクロールまたは idle まで script 読込を遅らせて LCP への影響を避ける
  let loaded = false;
  function loadAds() {
    if (loaded) return;
    loaded = true;
    const s = document.createElement("script");
    s.async = true;
    s.crossOrigin = "anonymous";
    s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + encodeURIComponent(ads.client);
    s.onload = function () { (window.adsbygoogle = window.adsbygoogle || []).push({}); };
    document.head.appendChild(s);
  }
  if ("requestIdleCallback" in window) requestIdleCallback(loadAds, { timeout: 4000 });
  else setTimeout(loadAds, 3500);
  addEventListener("scroll", loadAds, { once: true, passive: true });
})();
