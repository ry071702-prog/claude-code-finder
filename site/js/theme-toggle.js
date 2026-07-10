/* 共有: テーマトグル（index 以外のページ用） */
(function(){
  var btn = document.getElementById("themeToggle");
  if(!btn) return;
  btn.addEventListener("click", function(){
    var next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("ccf-theme", next); } catch(e){}
  });
})();
