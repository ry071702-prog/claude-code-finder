(function(){
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  // 基本(data.js) + 独自(data-custom.js) + 取り込みSkills(data-skills.js) をマージ。
  const baseEntries = (window.CCF_ENTRIES || []).map(e => ({...e, origin:"base"}));
  const customEntries = (window.CCF_CUSTOM_ENTRIES || []).map(e => ({...e, origin:"custom"}));
  const skillEntries = (window.CCF_SKILLS || []).map(e => ({...e, origin:"skill"}));
  const entries = baseEntries.concat(customEntries, skillEntries);
  const customCount = customEntries.length;
  const skillCount = skillEntries.length;
  // コミュニティSkills が有れば専用カテゴリを差し込む
  const communityCat = skillCount ? [{id:"community", name:"コミュニティSkills", icon:"extension",
    description:"GitHub の高星 Claude Code Skills を非LLMで週次取り込み。npx skills add で各自導入。"}] : [];
  const categories = (window.CCF_CATEGORIES || []).concat(window.CCF_CUSTOM_CATEGORIES || [], communityCat);
  const sources = window.CCF_SOURCES || [];
  const typeLabels = {
    command:"コマンド", cli:"CLI", feature:"機能", tool:"ツール",
    platform:"連携", config:"設定", admin:"管理", sdk:"SDK", removed:"廃止", skill:"Skill"
  };
  const catIcon = {};
  categories.forEach(c => { catIcon[c.id] = c.icon; });

  const state = { query:"", category:"all", type:"all", origin:"all", fav:false, sort:"priority" };
  // お気に入り（localStorage 永続化）
  let favs = new Set();
  try { favs = new Set(JSON.parse(localStorage.getItem("ccf-favs") || "[]")); } catch(e){}
  const els = {
    themeToggle:document.getElementById("themeToggle"),
    categoryNav:document.getElementById("categoryNav"),
    searchInput:document.getElementById("searchInput"),
    heroSearch:document.querySelector(".hero-search"),
    heroCount:document.getElementById("heroCount"),
    resultCount:document.getElementById("resultCount"),
    clearButton:document.getElementById("clearButton"),
    quickFilters:document.getElementById("quickFilters"),
    sortSelect:document.getElementById("sortSelect"),
    cards:document.getElementById("cards"),
    emptyState:document.getElementById("emptyState"),
    coverageMap:document.getElementById("coverageMap"),
    sourceList:document.getElementById("sourceList"),
    modalOverlay:document.getElementById("modalOverlay"),
    modalClose:document.getElementById("modalClose"),
    modalCategory:document.getElementById("modalCategory"),
    modalTitle:document.getElementById("modalTitle"),
    modalBody:document.getElementById("modalBody")
  };
  let lastFocused = null;

  /* ---------- theme ---------- */
  els.themeToggle.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("ccf-theme", next); } catch(e){}
  });

  /* ---------- helpers ---------- */
  function normalize(text){ return String(text || "").toLowerCase().replace(/\s+/g," "); }
  function escapeHtml(value){
    return String(value || "").replace(/[&<>"']/g, ch => (
      {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]
    ));
  }
  function highlight(value, query){
    const safe = escapeHtml(value);
    const q = query.trim();
    if(!q) return safe;
    const re = new RegExp("(" + q.replace(/[.*+?^${}()|[\]\\]/g,"\\$&") + ")", "gi");
    return safe.replace(re, "<mark>$1</mark>");
  }
  function entryText(entry){
    return normalize([
      entry.want, entry.feature, entry.summary, entry.category, entry.type,
      (entry.commands || []).join(" "), (entry.aliases || []).join(" "),
      (entry.steps || []).join(" "), (entry.notes || []).join(" ")
    ].join(" "));
  }
  // MCP lookup と同じあいまい一致: 英数字語=語境界一致 + CJK 2-gram(語尾除外)
  const SEARCH_STOP = new Set(["した","たい","する","して","せる","れる","され","この","その","こと","ため","よう","から","とき","たり","ない"]);
  const escRe = s => s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");

  // 意図マップ: 口語・言い換えを、エントリ本文に実在する正規語へ展開して精度を上げる。
  // 例「プルリク直したい」→ pr / pull request / レビュー が本文にヒット。特定キーでのみ発火＝過剰一般化しない。
  const INTENT_MAP = [
    {keys:["pr","プルリク","プルリクエスト","ぷるりく","プル リク"], add:["pr","pull request","review","レビュー"]},
    {keys:["続き","つづき","再開","さいかい","レジューム","途中から"], add:["resume","continue","再開"]},
    {keys:["権限","けんげん","許可","パーミッション","安全"], add:["permission","permissions","allow","権限"]},
    {keys:["スマホ","すまほ","携帯","モバイル","出先","外出"], add:["mobile","web","モバイル"]},
    {keys:["並列","へいれつ","同時","パラレル","並行"], add:["parallel","worktree","subagent","並列"]},
    {keys:["テスト","てすと"], add:["test","tests","テスト"]},
    {keys:["自動化","じどうか","フック","自動で"], add:["hook","hooks","automation","フック"]},
    {keys:["記憶","きおく","覚え","メモリ","忘れ"], add:["claude.md","memory","記憶"]},
    {keys:["計画","けいかく","プラン","段取り"], add:["plan","計画"]},
    {keys:["元に戻","もとに戻","巻き戻","取り消","やり直","undo","ロールバック","戻したい"], add:["rewind","undo","revert","巻き戻"]},
    {keys:["外部","連携","つなぐ","繋ぐ","接続","ツール追加"], add:["mcp","連携","接続"]},
    {keys:["調べ","理解","把握","読ん","説明して","解説"], add:["explain","onboard","理解","調べ"]},
    {keys:["直し","修正","バグ","なおし","デバッグ"], add:["debug","fix","修正","バグ"]},
  ];
  function expandTerms(query){
    const q = normalize(query), extra = [], seen = new Set();
    for(const m of INTENT_MAP){
      if(!m.keys.some(k => q.includes(normalize(k)))) continue;
      for(const t of m.add){
        const nt = normalize(t);
        if(seen.has(nt)) continue; seen.add(nt);
        if(/^[a-z0-9 ]+$/.test(nt)) extra.push({w:2,cjk:false,re:new RegExp(`\\b${escRe(nt.split(" ")[0])}\\b`)});
        else extra.push({w:2,cjk:true,term:nt});
      }
    }
    return extra;
  }
  function queryTerms(query){
    const q = normalize(query);
    const latin = [...new Set(q.match(/[a-z0-9]{2,}/g) || [])].map(t => ({w:3,cjk:false,re:new RegExp(`\\b${escRe(t)}\\b`)}));
    const grams = new Set();
    q.replace(/[^぀-ヿ一-鿿ｦ-ﾟ]/g," ").split(" ").forEach(run => {
      for(let i=0;i+2<=run.length;i++){ const g=run.slice(i,i+2); if(!SEARCH_STOP.has(g)) grams.add(g); }
    });
    return latin.concat([...grams].map(g => ({w:1,cjk:true,term:g})));
  }
  // 返り値 {score, strong}。strong=関連度のある一致（単一のありふれた2-gram偶発一致は除外）
  function scoreEntry(entry, query){
    const q = normalize(query);
    const text = entryText(entry), want = normalize(entry.want), feat = normalize(entry.feature);
    let s = 0, cjkHits = 0, latinHit = false, fullHit = false;
    if(text.includes(q)){ fullHit = true; s += 4; }
    if(want.includes(q)) s += 8;
    if(feat.includes(q)) s += 6;
    for(const term of queryTerms(query)){
      const inWant = term.cjk ? want.includes(term.term) : term.re.test(want);
      const inText = term.cjk ? text.includes(term.term) : term.re.test(text);
      if(inWant) s += term.w * 2; else if(inText) s += term.w;
      if(inWant || inText){ if(term.cjk) cjkHits++; else latinHit = true; }
    }
    // 意図マップ展開語（口語→正規語）。strong 化は見出し(want/feature)一致のみに絞り、
    // 説明文だけの一致は軽い加点にとどめて過剰一般化を防ぐ。
    let intentHit = false;
    for(const term of expandTerms(query)){
      const inWant = term.cjk ? want.includes(term.term) : term.re.test(want);
      const inFeat = term.cjk ? feat.includes(term.term) : term.re.test(feat);
      const inText = term.cjk ? text.includes(term.term) : term.re.test(text);
      if(inWant) s += term.w * 2; else if(inFeat) s += term.w; else if(inText) s += 1;
      if(inWant || inFeat) intentHit = true;   // strong は見出し一致のみ
    }
    // strong: 完全一致 / 英数字語一致 / 別々の2-gramが2つ以上（=偶発でない） / 意図マップ見出し一致
    const strong = fullHit || latinHit || cjkHits >= 2 || intentHit;
    return { score: s, strong };
  }
  function countByCategory(id){ return entries.filter(e => e.category === id).length; }
  function sourceOf(id){ return sources.find(s => s.id === id); }
  function sourceName(id){ const s = sourceOf(id); return s ? s.name : "Official docs"; }
  function chipLabel(entry){
    if(entry.origin === "custom") return entry.author ? entry.author : "社内ナレッジ";
    if(entry.origin === "skill") return "GitHub · " + (entry.feature || "").split("/")[0];
    return sourceName(entry.source);
  }
  function sourceUrl(id){ const s = sourceOf(id); return s ? s.url : "https://code.claude.com/docs/"; }
  function sourceLink(id){ const s = sourceOf(id); return s ? '<a class="source-link" href="'+s.url+'" target="_blank" rel="noopener noreferrer">'+escapeHtml(s.name)+'</a>' : ""; }

  /* ---------- render: sidebar ---------- */
  function renderCategoryNav(){
    let html = '<button type="button" class="cat-link active" data-category="all">'+
      '<span class="material-icons-outlined" aria-hidden="true">apps</span><span>すべて</span>'+
      '<span class="count">'+entries.length+'</span></button>';
    html += categories.map(c =>
      '<button type="button" class="cat-link" data-category="'+c.id+'">'+
      '<span class="material-icons-outlined" aria-hidden="true">'+c.icon+'</span><span>'+escapeHtml(c.name)+'</span>'+
      '<span class="count">'+countByCategory(c.id)+'</span></button>'
    ).join("");
    els.categoryNav.innerHTML = html;
    els.categoryNav.addEventListener("click", e => {
      const btn = e.target.closest(".cat-link");
      if(!btn) return;
      setCategory(btn.dataset.category);
    });
  }
  function setCategory(id){
    state.category = id;
    els.categoryNav.querySelectorAll(".cat-link").forEach(b => b.classList.toggle("active", b.dataset.category === id));
    renderCards(true);
    syncURL();
  }
  // 検索・カテゴリを URL に反映（共有・ブックマーク可能に）
  function syncURL(){
    try{
      var p = new URLSearchParams();
      var q = state.query.trim();
      if(q) p.set("q", q);
      if(state.category && state.category !== "all") p.set("cat", state.category);
      var qs = p.toString();
      history.replaceState(null, "", qs ? "?" + qs : location.pathname);
    }catch(e){}
  }
  // ページ読み込み時に URL の ?q= / ?cat= を復元
  function applyURLParams(){
    try{
      var p = new URLSearchParams(location.search);
      var cat = p.get("cat");
      if(cat && cat !== "all"){
        state.category = cat;
        els.categoryNav.querySelectorAll(".cat-link").forEach(b => b.classList.toggle("active", b.dataset.category === cat));
      }
      var q = p.get("q");
      if(q){ state.query = q; els.searchInput.value = q; els.heroSearch.classList.toggle("has-value", q.length > 0); }
    }catch(e){}
  }

  /* ---------- render: type filters ---------- */
  function renderTypeFilters(){
    const order = ["command","cli","feature","tool","platform","config","admin","sdk","removed"];
    const present = new Set(entries.map(e => e.type));
    const types = ["all", ...order.filter(t => present.has(t))];
    let html = types.map(t =>
      '<button type="button" class="type-filter'+(t==="all"?" active":"")+'" data-type="'+t+'">'+
      (t==="all" ? "全種類" : (typeLabels[t] || t))+'</button>'
    ).join("");
    const originChips = [];
    if(customCount > 0) originChips.push(['custom','◆ 独自',customCount]);
    if(skillCount > 0) originChips.push(['skill','◆ Skills',skillCount]);
    if(originChips.length){
      html += '<span class="filter-sep" aria-hidden="true"></span>' + originChips.map(([o,label,n]) =>
        '<button type="button" class="type-filter origin-filter" data-origin="'+o+'">'+label+
        ' <span class="mini-count">'+n+'</span></button>').join("");
    }
    html += '<button type="button" class="type-filter fav-filter" data-favfilter="1"'+(favs.size?"":" hidden")+
      ' aria-pressed="false"><span class="material-icons-outlined" aria-hidden="true">star</span>お気に入り'+
      ' <span class="mini-count fav-count">'+favs.size+'</span></button>';
    els.quickFilters.innerHTML = html;
    els.quickFilters.addEventListener("click", e => {
      const btn = e.target.closest(".type-filter");
      if(!btn) return;
      if(btn.dataset.favfilter){
        state.fav = !state.fav;
        btn.classList.toggle("active", state.fav);
        btn.setAttribute("aria-pressed", state.fav);
        renderCards(true);
        return;
      }
      if(btn.dataset.origin){
        const o = btn.dataset.origin;
        state.origin = state.origin === o ? "all" : o;
        els.quickFilters.querySelectorAll(".origin-filter").forEach(b => b.classList.toggle("active", b.dataset.origin === state.origin));
      } else {
        state.type = btn.dataset.type;
        els.quickFilters.querySelectorAll(".type-filter:not(.origin-filter)").forEach(b => b.classList.toggle("active", b === btn));
      }
      renderCards(true);
    });
  }

  /* ---------- filtering ---------- */
  function filteredEntries(){
    const query = state.query.trim();
    const hasQuery = query.length > 0;
    const scoreCache = new Map();
    return entries.filter(e => {
      const catOk = state.category === "all" || e.category === state.category;
      const typeOk = state.type === "all" || e.type === state.type;
      const originOk = state.origin === "all" || e.origin === state.origin;
      const favOk = !state.fav || favs.has(e.id);
      if(!(catOk && typeOk && originOk && favOk)) return false;
      if(!hasQuery) return true;
      const res = scoreEntry(e, query);
      if(!res.strong || res.score <= 0) return false;
      scoreCache.set(e, res.score);
      return true;
    }).sort((a,b) => {
      // クエリ有り = 関連度順（並び替えセレクトは無クエリ時のみ効かせる）
      if(hasQuery){ const d = (scoreCache.get(b)||0) - (scoreCache.get(a)||0); if(d) return d; }
      if(state.sort === "name") return a.feature.localeCompare(b.feature,"ja");
      if(state.sort === "category") return a.category.localeCompare(b.category,"ja") || a.priority - b.priority;
      return a.priority - b.priority || a.feature.localeCompare(b.feature,"ja");
    });
  }

  /* ---------- render: cards ---------- */
  function cardTemplate(entry, i){
    const q = state.query.trim();
    const removed = entry.type === "removed";
    const custom = entry.origin === "custom";
    const skill = entry.origin === "skill";
    const badge = skill
      ? '<span class="badge is-skill" title="コミュニティSkill (GitHub star)">★ '+fmtStars(entry.stars||0)+'</span>'
      : custom
      ? '<span class="badge is-custom" title="独自エントリ">◆ 独自</span>'
      : '<span class="badge'+(removed?" is-removed":"")+'">'+escapeHtml(typeLabels[entry.type] || entry.type)+'</span>';
    // skill は install コマンドをコピー導線に、それ以外は従来のコマンドチップ
    const cmdArea = skill
      ? installRow(entry.install)
      : '<div class="commands">'+(entry.commands || []).slice(0,3)
          .map(c => '<span class="command-chip">'+escapeHtml(c)+'</span>').join("")+'</div>';
    return '<article class="feature-card'+(custom?" is-custom-card":"")+(skill?" is-skill-card":"")+'" role="listitem" tabindex="0" style="--i:'+Math.min(i,24)+'" data-id="'+escapeHtml(entry.id)+'" aria-label="'+escapeHtml(entry.want)+'">'+
      '<div class="card-top"><h3 class="want">'+highlight(entry.want,q)+'</h3>'+
      '<div class="card-top-right">'+badge+favBtn(entry.id)+'</div></div>'+
      '<div class="feature"><div class="feature-label">'+(skill?"Install":"Use")+'</div>'+
      '<div class="feature-name">'+highlight(entry.feature,q)+'</div></div>'+
      '<p class="summary">'+highlight(entry.summary,q)+'</p>'+
      cmdArea+
      '<div class="card-footer"><span class="source-chip'+(custom?" is-custom":"")+(skill?" is-skill":"")+'">'+escapeHtml(chipLabel(entry))+'</span>'+
      '<span class="detail-cue">詳細<span class="material-icons-outlined" aria-hidden="true">arrow_forward</span></span></div>'+
    '</article>';
  }
  function fmtStars(n){ return n >= 1000 ? (n/1000).toFixed(n >= 10000 ? 0 : 1) + "k" : String(n); }
  function favBtn(id){
    const on = favs.has(id);
    return '<button type="button" class="fav-btn'+(on?" on":"")+'" data-fav="'+escapeHtml(id)+'" aria-pressed="'+on+'" aria-label="お気に入りに追加" title="お気に入り">'+
      '<span class="material-icons-outlined" aria-hidden="true">'+(on?"star":"star_border")+'</span></button>';
  }
  function toggleFav(id, btn){
    const on = !favs.has(id);
    if(on) favs.add(id); else favs.delete(id);
    try { localStorage.setItem("ccf-favs", JSON.stringify([...favs])); } catch(e){}
    if(btn){
      btn.classList.toggle("on", on);
      btn.setAttribute("aria-pressed", on);
      const ic = btn.querySelector(".material-icons-outlined");
      if(ic) ic.textContent = on ? "star" : "star_border";
    }
    const wasFavView = state.fav;
    updateFavFilter();                    // 空になったら state.fav を false に戻す
    if(wasFavView) renderCards();         // お気に入り表示中の増減は一覧に即反映
  }
  function updateFavFilter(){
    const chip = els.quickFilters.querySelector(".fav-filter");
    if(!chip) return;
    const c = chip.querySelector(".fav-count");
    if(c) c.textContent = favs.size;
    chip.hidden = favs.size === 0;
    if(favs.size === 0 && state.fav){ state.fav = false; chip.classList.remove("active"); chip.setAttribute("aria-pressed","false"); }
  }
  function installRow(cmd){
    const safe = escapeHtml(cmd || "");
    return '<div class="install-row"><code class="install-cmd">'+safe+'</code>'+
      '<button type="button" class="copy-btn" data-copy="'+safe+'" aria-label="導入コマンドをコピー" title="コピー">'+
      '<span class="material-icons-outlined" aria-hidden="true">content_copy</span></button></div>';
  }
  const skillsHelp = document.getElementById("skillsHelp");
  function renderCards(animate){
    const list = filteredEntries();
    animateCount(els.resultCount, list.length, "件");
    els.cards.innerHTML = list.map(cardTemplate).join("");
    els.emptyState.hidden = list.length !== 0;
    // コミュニティSkillが結果に含まれる時だけ「入れ方」ヘルプを出す
    if(skillsHelp) skillsHelp.hidden = !list.some(e => e.origin === "skill");
    els.cards.classList.remove("anim");
    if(animate && !reduceMotion){
      void els.cards.offsetWidth; // reflow して stagger アニメを再生
      requestAnimationFrame(() => els.cards.classList.add("anim"));
    }
  }

  /* ---------- render: coverage ---------- */
  function renderCoverage(){
    els.coverageMap.innerHTML = categories.map(c =>
      '<button type="button" class="coverage-card reveal" data-category="'+c.id+'">'+
        '<div class="coverage-top"><span class="material-icons-outlined" aria-hidden="true">'+c.icon+'</span>'+
        '<span class="coverage-name">'+escapeHtml(c.name)+'</span><span class="badge">'+countByCategory(c.id)+'</span></div>'+
        '<p>'+escapeHtml(c.description)+'</p>'+
      '</button>'
    ).join("");
    els.coverageMap.addEventListener("click", e => {
      const btn = e.target.closest(".coverage-card");
      if(!btn) return;
      setCategory(btn.dataset.category);
      document.getElementById("finderTitle").scrollIntoView({behavior:"smooth",block:"start"});
    });
  }

  /* ---------- render: sources ---------- */
  function renderSources(){
    els.sourceList.innerHTML = sources.map(s =>
      '<a class="source-item reveal" href="'+s.url+'" target="_blank" rel="noopener noreferrer">'+
      '<strong>'+escapeHtml(s.name)+'</strong><span>'+escapeHtml(s.description)+'</span></a>'
    ).join("");
  }

  /* ---------- modal ---------- */
  function block(cls,icon,title,inner){
    return '<section class="detail-block '+cls+'"><h3><span class="material-icons-outlined" aria-hidden="true">'+icon+'</span>'+title+'</h3>'+inner+'</section>';
  }
  function openModal(id){
    const entry = entries.find(e => e.id === id);
    if(!entry) return;
    lastFocused = document.activeElement;
    const cat = categories.find(c => c.id === entry.category);
    els.modalCategory.textContent = cat ? cat.name : entry.category;

    if(entry.origin === "skill"){
      els.modalTitle.textContent = entry.want;
      const repo = escapeHtml(entry.feature||"");
      els.modalBody.innerHTML = '<div class="detail-grid">'+
        block("what","extension","このSkillは","<p>"+escapeHtml(entry.summary)+"</p>")+
        block("install","download","各自のClaude Codeに導入","<p>下記をコピーして実行（<code>-g</code> はユーザー全体・外すとプロジェクト単位）</p>"+installRow(entry.install))+
        block("src","link","出所（GitHub）",'<p><a class="source-link" href="'+escapeHtml(entry.repoUrl||"#")+'" target="_blank" rel="noopener noreferrer">'+repo+' ★ '+fmtStars(entry.stars||0)+'</a></p><p class="src-url">導入前に必ず中身を確認（skill は任意コード実行）</p>')+
      '</div>';
      els.modalOverlay.hidden = false;
      document.body.style.overflow = "hidden";
      els.modalClose.focus();
      return;
    }

    els.modalTitle.textContent = entry.want + " → " + entry.feature;
    const cmds = (entry.commands || []).map(c => '<span class="modal-command">'+escapeHtml(c)+'</span>').join("");
    const steps = (entry.steps || []).map(s => '<li>'+escapeHtml(s)+'</li>').join("");
    const notes = (entry.notes || []).map(n => '<li>'+escapeHtml(n)+'</li>').join("");
    const src = '<p>'+sourceLink(entry.source)+' '+(entry.extraSource ? sourceLink(entry.extraSource) : "")+'</p>'+
                '<p class="src-url">'+escapeHtml(sourceUrl(entry.source))+'</p>';
    els.modalBody.innerHTML = '<div class="detail-grid">'+
      block("what","terminal","何を使うか","<p>"+escapeHtml(entry.summary)+"</p><div>"+cmds+"</div>")+
      (steps ? block("steps","format_list_numbered","進め方","<ul>"+steps+"</ul>") : "")+
      (notes ? block("notes","info","注意点","<ul>"+notes+"</ul>") : "")+
      block("src","link","公式根拠",src)+
    '</div>';
    els.modalOverlay.hidden = false;
    document.body.style.overflow = "hidden";
    els.modalClose.focus();
  }
  function closeModal(){
    els.modalOverlay.hidden = true;
    document.body.style.overflow = "";
    if(lastFocused && lastFocused.focus) lastFocused.focus();
  }

  /* ---------- search ---------- */
  function setQuery(v){
    state.query = v;
    els.searchInput.value = v;
    els.heroSearch.classList.toggle("has-value", v.length > 0);
    renderCards();
    syncURL();
  }
  els.searchInput.addEventListener("input", e => setQuery(e.target.value));
  els.clearButton.addEventListener("click", () => { setQuery(""); els.searchInput.focus(); });
  els.sortSelect.addEventListener("change", e => { state.sort = e.target.value; renderCards(true); });

  document.querySelectorAll(".ex-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      setQuery(chip.dataset.q);
      document.getElementById("finderTitle").scrollIntoView({behavior:"smooth",block:"start"});
    });
  });

  // 「はじめて？」導線: 立場からカテゴリへ直行（非エンジニアの離脱を防ぐ入口）
  document.querySelectorAll(".role-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      setQuery("");
      setCategory(chip.dataset.roleCat);
      document.getElementById("finderTitle").scrollIntoView({behavior:"smooth",block:"start"});
    });
  });

  /* ---------- copy-to-clipboard (install コマンド) ---------- */
  let toastEl = null, toastTimer = null;
  function showToast(html){
    if(!toastEl){
      toastEl = document.createElement("div");
      toastEl.className = "toast";
      toastEl.setAttribute("role","status");
      document.body.appendChild(toastEl);
    }
    toastEl.innerHTML = html;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 4200);
  }
  function copyText(text, btn){
    const done = () => {
      showToast('<b>コピーしました</b><span>ターミナルに貼って実行 → Claude Code で使えます</span>'+
        '<code>'+escapeHtml(text)+'</code>');
      if(!btn) return;
      btn.classList.add("copied");
      const icon = btn.querySelector(".material-icons-outlined");
      const prev = icon ? icon.textContent : "";
      if(icon) icon.textContent = "check";
      setTimeout(() => { btn.classList.remove("copied"); if(icon) icon.textContent = prev; }, 1400);
    };
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
    } else { fallbackCopy(text, done); }
  }
  function fallbackCopy(text, done){
    const ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); done(); } catch(e){}
    document.body.removeChild(ta);
  }
  // カード内・モーダル内どちらの copy-btn も拾う
  document.addEventListener("click", e => {
    const cp = e.target.closest(".copy-btn");
    if(cp){ e.stopPropagation(); copyText(cp.dataset.copy || "", cp); return; }
    const fv = e.target.closest(".fav-btn");
    if(fv){ e.stopPropagation(); e.preventDefault(); toggleFav(fv.dataset.fav || "", fv); }
  }, true);

  /* ---------- card interaction ---------- */
  els.cards.addEventListener("click", e => {
    if(e.target.closest(".copy-btn,.fav-btn")) return;   // コピー・お気に入りはモーダルを開かない
    const card = e.target.closest(".feature-card");
    if(card) openModal(card.dataset.id);
  });
  els.cards.addEventListener("keydown", e => {
    if(e.target.closest(".fav-btn,.copy-btn")) return;   // カード内ボタンは自前の挙動に任せる
    const card = e.target.closest(".feature-card");
    if(!card) return;
    if(e.key === "Enter" || e.key === " "){ e.preventDefault(); openModal(card.dataset.id); return; }
    const arrows = {ArrowRight:1,ArrowDown:1,ArrowLeft:-1,ArrowUp:-1};
    if(e.key in arrows){
      e.preventDefault();
      const all = [...els.cards.querySelectorAll(".feature-card")];
      const i = all.indexOf(card);
      const next = all[i + arrows[e.key]];
      if(next) next.focus();
    }
  });

  /* ---------- modal + global keys ---------- */
  els.modalClose.addEventListener("click", closeModal);
  els.modalOverlay.addEventListener("click", e => { if(e.target === els.modalOverlay) closeModal(); });
  document.addEventListener("keydown", e => {
    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);
    if(e.key === "/" && !typing){ e.preventDefault(); els.searchInput.focus(); els.searchInput.select(); }
    if(e.key === "Escape"){
      if(!els.modalOverlay.hidden){ closeModal(); }
      else if(document.activeElement === els.searchInput && state.query){ setQuery(""); }
    }
  });

  /* ---------- submit（Skill 登録申請） ---------- */
  (function initSubmit(){
    const overlay = document.getElementById("submitOverlay");
    const openBtn = document.getElementById("openSubmit");
    const closeBtn = document.getElementById("submitClose");
    const form = document.getElementById("submitForm");
    const msg = document.getElementById("submitMsg");
    const sendBtn = document.getElementById("submitSend");
    if(!overlay || !openBtn || !form) return;
    let restoreFocus = null;
    const open = () => { restoreFocus = document.activeElement; overlay.hidden = false;
      document.body.style.overflow = "hidden"; form.querySelector("input")?.focus(); };
    const close = () => { overlay.hidden = true; document.body.style.overflow = "";
      if(restoreFocus && restoreFocus.focus) restoreFocus.focus(); };
    openBtn.addEventListener("click", open);
    closeBtn.addEventListener("click", close);
    // ヘッダの常時導線（一番下までスクロール不要）＋ 他ページから index.html#submit で来たら自動で開く
    const headerBtn = document.getElementById("headerSubmit");
    if(headerBtn) headerBtn.addEventListener("click", e => { e.preventDefault(); open(); });
    if(location.hash === "#submit") open();
    overlay.addEventListener("click", e => { if(e.target === overlay) close(); });
    document.addEventListener("keydown", e => { if(e.key === "Escape" && !overlay.hidden) close(); });

    const OWNER_REPO_RE = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;
    form.addEventListener("submit", async e => {
      e.preventDefault();
      msg.className = "submit-msg";
      const fd = new FormData(form);
      const payload = {
        owner_repo: (fd.get("owner_repo") || "").toString().trim(),
        skill_name: (fd.get("skill_name") || "").toString().trim(),
        contact: (fd.get("contact") || "").toString().trim(),
        note: (fd.get("note") || "").toString().trim(),
        website: (fd.get("website") || "").toString(),   // honeypot
        category: "community",
      };
      if(!OWNER_REPO_RE.test(payload.owner_repo)){
        msg.textContent = "owner/repo の形式で入力してください（例: anthropics/skills）";
        msg.classList.add("is-error"); return;
      }
      sendBtn.disabled = true; msg.textContent = "送信中…";
      try {
        const res = await fetch("/api/submit-skill", {
          method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(payload),
        });
        const data = await res.json().catch(() => ({}));
        if(res.ok && data.ok){
          form.reset();
          msg.textContent = "受け付けました。確認のうえ掲載します。ありがとうございます";
          msg.classList.add("is-ok");
        } else {
          msg.textContent = data.error || "送信に失敗しました。時間をおいて再試行してください";
          msg.classList.add("is-error");
        }
      } catch(_){
        msg.textContent = "ネットワークエラー。時間をおいて再試行してください";
        msg.classList.add("is-error");
      } finally { sendBtn.disabled = false; }
    });
  })();

  /* ---------- dynamic: count-up ---------- */
  function animateCount(el, target, suffix){
    suffix = suffix || "";
    if(reduceMotion){ el.textContent = target + suffix; return; }
    const from = parseInt(el.dataset.count || "0", 10) || 0;
    if(from === target){ el.textContent = target + suffix; return; }
    const dur = Math.min(800, 220 + Math.abs(target - from) * 8);
    const t0 = performance.now();
    function tick(now){
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.round(from + (target - from) * eased);
      el.textContent = val + suffix;
      if(p < 1) requestAnimationFrame(tick); else el.dataset.count = target;
    }
    el.dataset.count = target;
    requestAnimationFrame(tick);
  }

  /* ---------- dynamic: hero rotator ---------- */
  function startRotator(){
    const el = document.getElementById("rotator");
    if(!el) return;
    const words = ["PRを直したい","権限を安全に絞りたい","続きから再開したい","MCPで外部に繋ぎたい","並列で大きく変えたい","テストを書いて直したい","スマホから続けたい","計画だけ先に見たい"];
    if(reduceMotion){ el.textContent = words[0]; return; }
    // タイプライター演出: 1文字ずつ打つ→保持→1文字ずつ消す→次の語へ
    const TYPE = 78, DEL = 38, HOLD = 1500, GAP = 380;
    const caret = el.parentNode && el.parentNode.querySelector(".caret");
    let wi = 0;
    function setTyping(on){ if(caret) caret.classList.toggle("typing", on); }
    function typeWord(){
      const chars = Array.from(words[wi]);
      let ci = 0;
      setTyping(true);
      (function type(){
        el.textContent = chars.slice(0, ci).join("");
        if(ci < chars.length){ ci++; setTimeout(type, TYPE); }
        else { setTyping(false); setTimeout(delWord, HOLD); }
      })();
    }
    function delWord(){
      const chars = Array.from(el.textContent);
      let ci = chars.length;
      setTyping(true);
      (function del(){
        el.textContent = chars.slice(0, ci).join("");
        if(ci > 0){ ci--; setTimeout(del, DEL); }
        else { wi = (wi + 1) % words.length; setTimeout(typeWord, GAP); }
      })();
    }
    el.textContent = "";
    typeWord();
  }

  /* ---------- dynamic: scroll reveal ---------- */
  function initReveal(){
    if(reduceMotion || !("IntersectionObserver" in window)){
      document.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((ents) => {
      ents.forEach(en => { if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); } });
    }, {rootMargin:"0px 0px -8% 0px", threshold:.08});
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
  }

  /* ---------- dynamic: cursor spotlight on cards ---------- */
  function initSpotlight(){
    if(reduceMotion) return;
    els.cards.addEventListener("pointermove", e => {
      const card = e.target.closest(".feature-card");
      if(!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", (e.clientX - r.left) + "px");
      card.style.setProperty("--my", (e.clientY - r.top) + "px");
    });
  }

  /* ---------- dynamic: header shrink ---------- */
  function initHeaderScroll(){
    const header = document.querySelector(".site-header");
    let ticking = false;
    addEventListener("scroll", () => {
      if(ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        header.classList.toggle("scrolled", scrollY > 16);
        ticking = false;
      });
    }, {passive:true});
  }

  /* ---------- init ---------- */
  animateCount(els.heroCount, entries.length);
  var guideCountEl = document.querySelector('.bento-count[data-explore="guide"]');
  if(guideCountEl){ guideCountEl.textContent = (baseEntries.length + customEntries.length) + " 項目"; }
  renderCategoryNav();
  renderTypeFilters();
  applyURLParams();
  renderCards(true);
  renderCoverage();
  renderSources();
  startRotator();
  initReveal();
  initSpotlight();
  initHeaderScroll();
})();
