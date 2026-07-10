(function(){
  var courses = window.CCF_ACADEMY || [];
  function esc(v){ return String(v==null?"":v).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];}); }
  function qp(k){ try{ return new URLSearchParams(location.search).get(k); }catch(e){ return null; } }

  var course = courses.find(function(c){ return c.id === qp("course"); }) || courses[0];
  if(!course){ document.getElementById("lessonView").innerHTML = "<p>講座がありません。</p>"; return; }

  function renderCoursePicker(){
    var box = document.getElementById("coursePicker");
    if(!box) return;
    box.innerHTML = courses.map(function(c){
      return '<a class="course-chip'+(c.id===course.id?" active":"")+'" href="?course='+esc(c.id)+'">'+
        '<span class="course-chip-lv">'+esc(c.level||"")+'</span>'+
        '<span class="course-chip-t">'+esc(c.title)+'</span></a>';
    }).join("");
  }

  document.getElementById("courseTitle").textContent = course.title;
  document.getElementById("courseSub").textContent = course.subtitle || "";
  var badge = document.getElementById("courseBadge");
  if(badge){ badge.textContent = (course.level||"") + (course.minutes? " ・ 約"+course.minutes+"分" : ""); }
  renderCoursePicker();

  var lessons = course.lessons || [];
  var DONE_KEY = "ccf-acad-" + course.id;
  function getDone(){ try{ return JSON.parse(localStorage.getItem(DONE_KEY) || "[]"); }catch(e){ return []; } }
  function setDone(arr){ try{ localStorage.setItem(DONE_KEY, JSON.stringify(arr)); }catch(e){} }

  var navEl = document.getElementById("lessonNav");
  var viewEl = document.getElementById("lessonView");
  var progEl = document.getElementById("acadProgress");
  var current = 0;
  var startLesson = qp("lesson");
  if(startLesson){ var idx = lessons.findIndex(function(l){ return l.id === startLesson; }); if(idx>=0) current = idx; }

  function renderNav(){
    var done = getDone();
    navEl.innerHTML = lessons.map(function(l, i){
      var isDone = done.indexOf(l.id) >= 0;
      return '<button type="button" class="lesson-link'+(i===current?" active":"")+'" data-i="'+i+'">'+
        '<span class="lesson-num'+(isDone?" done":"")+'">'+(isDone? "✓" : (i+1))+'</span>'+
        '<span class="lesson-t">'+esc(l.title)+'</span></button>';
    }).join("");
    var doneCount = lessons.filter(function(l){ return getDone().indexOf(l.id)>=0; }).length;
    var pct = Math.round(doneCount / lessons.length * 100);
    progEl.innerHTML = '<div class="prog-bar"><span style="width:'+pct+'%"></span></div>'+
      '<div class="prog-label">'+doneCount+' / '+lessons.length+' 完了</div>';
  }

  function renderLesson(skipScroll){
    var l = lessons[current];
    var cmds = (l.commands||[]).length ? '<div class="l-cmds">'+l.commands.map(function(c){ return '<code>'+esc(c)+'</code>'; }).join("")+'</div>' : "";
    var points = (l.points||[]).length ? '<div class="l-points"><h4>ポイント</h4><ul>'+l.points.map(function(p){ return '<li>'+esc(p)+'</li>'; }).join("")+'</ul></div>' : "";
    var done = getDone(), isDone = done.indexOf(l.id) >= 0;
    viewEl.innerHTML =
      '<p class="l-eyebrow">Lesson '+(current+1)+' / '+lessons.length+'</p>'+
      '<h2 class="l-title">'+esc(l.title)+'</h2>'+
      '<p class="l-summary">'+esc(l.summary)+'</p>'+
      '<div class="l-body"><p>'+esc(l.body)+'</p></div>'+
      cmds + points +
      '<div class="l-actions">'+
        '<button type="button" class="l-nav" id="prevBtn"'+(current===0?" disabled":"")+'>← 前へ</button>'+
        '<button type="button" class="cta-btn" id="doneBtn">'+(isDone? "完了済み ✓" : "このレッスンを完了")+'</button>'+
        '<button type="button" class="l-nav" id="nextBtn"'+(current===lessons.length-1?" disabled":"")+'>次へ →</button>'+
      '</div>';
    if(!skipScroll){ viewEl.scrollIntoView({behavior:"smooth", block:"start"}); }

    var prev = document.getElementById("prevBtn"), next = document.getElementById("nextBtn"), db = document.getElementById("doneBtn");
    if(prev) prev.onclick = function(){ if(current>0){ current--; go(); } };
    if(next) next.onclick = function(){ if(current<lessons.length-1){ current++; go(); } };
    if(db) db.onclick = function(){
      var d = getDone(), i = d.indexOf(l.id);
      if(i>=0) d.splice(i,1); else d.push(l.id);
      setDone(d); renderNav(); renderLesson();
    };
  }

  function go(){
    renderNav(); renderLesson();
    try{ history.replaceState(null,"", "?course="+course.id+"&lesson="+lessons[current].id); }catch(e){}
  }

  navEl.addEventListener("click", function(e){
    var b = e.target.closest(".lesson-link");
    if(b){ current = parseInt(b.dataset.i,10); go(); }
  });

  renderNav(); renderLesson(true);
})();
