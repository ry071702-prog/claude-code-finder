/* PWA: Service Worker を登録（オフライン閲覧・ホーム画面追加）。失敗しても無害。 */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/sw.js").catch(function () {});
  });
}
