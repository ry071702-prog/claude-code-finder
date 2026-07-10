(function(){
  var cats = window.CCF_CATEGORIES || [];
  var base = (window.CCF_ENTRIES || []);
  var custom = (window.CCF_CUSTOM_ENTRIES || []);
  var entries = base.concat(custom);

  function esc(v){ return String(v==null?"":v).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];}); }
  function byCat(id){ return entries.filter(function(e){ return e.category===id; }).sort(function(a,b){ return (a.priority||0)-(b.priority||0); }); }

  var nav = document.getElementById("guideNav");
  var body = document.getElementById("guideBody");
  var navHtml = "", bodyHtml = "";

  cats.forEach(function(c){
    var list = byCat(c.id);
    if(!list.length) return;
    navHtml += '<a class="cat-link" href="#sec-'+c.id+'">'+
      '<span class="material-icons-outlined" aria-hidden="true">'+esc(c.icon)+'</span>'+
      '<span>'+esc(c.name)+'</span><span class="count">'+list.length+'</span></a>';

    var items = list.map(function(e){
      var cmds = (e.commands||[]).map(function(x){ return '<code class="g-cmd">'+esc(x)+'</code>'; }).join("");
      var steps = (e.steps||[]).length ? '<ol class="g-steps">'+e.steps.map(function(s){ return '<li>'+esc(s)+'</li>'; }).join("")+'</ol>' : "";
      var notes = (e.notes||[]).length ? '<ul class="g-notes">'+e.notes.map(function(n){ return '<li>'+esc(n)+'</li>'; }).join("")+'</ul>' : "";
      return '<article class="g-item" id="'+esc(e.id)+'">'+
        '<div class="g-item-head"><h3>'+esc(e.want)+'</h3>'+
        '<span class="g-feature">'+esc(e.feature)+'</span></div>'+
        '<p class="g-summary">'+esc(e.summary)+'</p>'+
        (cmds? '<div class="g-cmds">'+cmds+'</div>':"")+
        (steps||notes? '<div class="g-detail">'+steps+notes+'</div>':"")+
      '</article>';
    }).join("");

    bodyHtml += '<section class="guide-section" id="sec-'+c.id+'">'+
      '<div class="guide-sec-head"><span class="material-icons-outlined" aria-hidden="true">'+esc(c.icon)+'</span>'+
      '<div><h2>'+esc(c.name)+'</h2><p>'+esc(c.description)+'</p></div></div>'+
      items+'</section>';
  });

  nav.innerHTML = navHtml;
  body.innerHTML = bodyHtml;

  // 目次のアクティブ表示（スクロール連動）
  var links = [].slice.call(nav.querySelectorAll(".cat-link"));
  var sections = links.map(function(a){ return document.querySelector(a.getAttribute("href")); });
  if("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches){
    var io = new IntersectionObserver(function(ents){
      ents.forEach(function(en){
        if(en.isIntersecting){
          var i = sections.indexOf(en.target);
          links.forEach(function(l,j){ l.classList.toggle("active", j===i); });
        }
      });
    }, {rootMargin:"-20% 0px -70% 0px"});
    sections.forEach(function(s){ if(s) io.observe(s); });
  }
})();
