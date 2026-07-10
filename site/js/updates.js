(function(){
  var ups = window.CCF_UPDATES || [];
  function esc(v){ return String(v==null?"":v).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];}); }
  var el = document.getElementById("updList");
  el.innerHTML = ups.map(function(u){
    var links = (u.links||[]).map(function(l){
      return '<a class="upd-src" href="'+esc(l.url)+'" target="_blank" rel="noopener noreferrer">'+esc(l.name)+' ↗</a>';
    }).join("");
    return '<article class="upd-item reveal">'+
      '<div class="upd-meta"><span class="upd-period">'+esc(u.period)+'</span>'+
      '<span class="upd-tag">'+esc(u.tag)+'</span></div>'+
      '<div class="upd-main"><h3>'+esc(u.title)+'</h3>'+
      '<p>'+esc(u.summary)+'</p>'+
      (links? '<div class="upd-srcs"><span class="upd-verified">Verified via</span>'+links+'</div>':"")+
      '</div></article>';
  }).join("");

  // ---- 公式 CHANGELOG（自動取得・非LLM）----
  var cl = window.CCF_CHANGELOG || {};
  var clEl = document.getElementById("changelogList");
  var srcEl = document.getElementById("clSrcLink");
  if(srcEl && cl.source){
    srcEl.innerHTML = '<a href="'+esc(cl.source)+'" target="_blank" rel="noopener noreferrer">CHANGELOG.md ↗</a>';
  }
  var KIND_CLASS = {"追加":"add","修正":"fix","変更":"chg","改善":"imp"};
  if(clEl){
    var versions = (cl.versions||[]);
    if(!versions.length){
      clEl.innerHTML = '<p class="updates-note">CHANGELOG を読み込めませんでした。</p>';
    } else {
      clEl.innerHTML = versions.map(function(v, vi){
        var items = (v.items||[]).map(function(it){
          var k = KIND_CLASS[it.kind] || "oth";
          return '<li><span class="cl-kind cl-'+k+'">'+esc(it.kind)+'</span>'+
            '<span class="cl-text">'+esc(it.text)+'</span></li>';
        }).join("");
        return '<details class="cl-ver reveal"'+(vi===0?" open":"")+'>'+
          '<summary><span class="cl-ver-n">v'+esc(v.version)+'</span>'+
          '<span class="cl-ver-c">'+(v.items||[]).length+' 件</span></summary>'+
          '<ul class="cl-items">'+items+'</ul></details>';
      }).join("");
    }
  }

  var reveals = [].slice.call(document.querySelectorAll(".reveal"));
  if("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches){
    var io = new IntersectionObserver(function(ents){
      ents.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); } });
    }, {rootMargin:"0px 0px -8% 0px"});
    reveals.forEach(function(x){ io.observe(x); });
  } else {
    reveals.forEach(function(x){ x.classList.add("in"); });
  }
})();
