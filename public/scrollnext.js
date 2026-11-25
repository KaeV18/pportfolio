/* Keep scrolling at the bottom of a page: a panel rises and carries you to the next page. */
(function () {
  var wipe = document.getElementById("wipe");
  if (!wipe) return;
  var root = document.documentElement;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var SPAN = 700, acc = 0, p = 0, locked = false, idle = null, bottomAt = performance.now() + 500, lastY = null;

  function nextEl() { return document.querySelector("[data-next]"); }
  function atBottom() { return window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2; }
  function setP(v) {
    p = Math.max(0, Math.min(1, v));
    wipe.style.setProperty("--p", String(p));
    wipe.classList.toggle("on", p > 0);
  }
  function setTitle(t) { wipe.style.setProperty("--wt", JSON.stringify(t || "")); }

  function decay() {
    function f() {
      if (locked) return;
      acc *= 0.86;
      if (acc < 2) { acc = 0; setP(0); return; }
      setP(acc / SPAN); requestAnimationFrame(f);
    }
    requestAnimationFrame(f);
  }
  function bump(d) {
    if (locked || reduce || root.classList.contains("lb-lock")) return;
    var n = nextEl(); if (!n) return;
    if (acc === 0 && (!atBottom() || performance.now() < bottomAt)) return;
    setTitle(n.getAttribute("data-title"));
    acc = Math.max(0, acc + d);
    setP(acc / SPAN);
    clearTimeout(idle); idle = setTimeout(decay, 320);
    if (p >= 1) go(n);
  }
  function go(n) {
    if (locked) return; locked = true; clearTimeout(idle);
    setTitle(n.getAttribute("data-title")); setP(1);
    var href = n.getAttribute("href"), title = n.getAttribute("data-title");
    if (window.__go) { window.__go(href); setTimeout(arrive, 120); }
    else { try { sessionStorage.setItem("wipe", title); } catch (e) {} window.location.href = href; }
  }
  function arrive() {
    wipe.style.setProperty("--p", "1"); wipe.classList.add("on");
    void wipe.offsetWidth;
    wipe.classList.add("lift");
    root.removeAttribute("data-arrive");
    setTimeout(function () {
      wipe.classList.remove("lift", "on");
      wipe.style.removeProperty("--p"); root.style.removeProperty("--p"); root.style.removeProperty("--wt");
      acc = 0; p = 0; locked = false; bottomAt = performance.now() + 700;
    }, 1000);
  }
  window.__arrive = arrive;

  window.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) bump(e.deltaY);
    else if (acc > 0 && !locked) { acc = Math.max(0, acc + e.deltaY); setP(acc / SPAN); }
  }, { passive: true });
  window.addEventListener("keydown", function (e) {
    if (/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "")) return;
    if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === "End" || e.key === " ") bump(180);
  });
  window.addEventListener("touchstart", function (e) { lastY = e.touches[0].clientY; }, { passive: true });
  window.addEventListener("touchmove", function (e) {
    var y = e.touches[0].clientY; if (lastY !== null) bump((lastY - y) * 1.6); lastY = y;
  }, { passive: true });
  window.addEventListener("touchend", function () { lastY = null; if (!locked && acc > 0) decay(); });
  window.addEventListener("scroll", function () { if (!atBottom()) bottomAt = performance.now() + 400; }, { passive: true });

  document.addEventListener("click", function (e) {
    var n = e.target.closest && e.target.closest("[data-next]");
    if (!n || e.metaKey || e.ctrlKey || e.shiftKey || locked) return;
    e.preventDefault();
    if (reduce) { locked = true; if (window.__go) { window.__go(n.getAttribute("href")); locked = false; } else window.location.href = n.getAttribute("href"); return; }
    setTitle(n.getAttribute("data-title"));
    var from = p, t0 = null;
    (function step(t) {
      if (t0 === null) t0 = t;
      var k = Math.min(1, (t - t0) / 650), ease = 1 - Math.pow(1 - k, 3);
      setP(from + (1 - from) * ease);
      if (k < 1) requestAnimationFrame(step); else go(n);
    })(performance.now());
  });

  if (root.getAttribute("data-arrive")) { setTimeout(arrive, 260); }
})();

/* v7: gentle parallax on the case-study cover (scale settles as you scroll) */
(function(){var s=document.querySelector(".stage.big");if(!s)return;var r=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(r)return;
function f(){var b=s.getBoundingClientRect(),t=Math.min(1,Math.max(0,-b.top/Math.max(1,b.height)));s.style.setProperty("--ps",String(1.03+.03*t));}
window.addEventListener("scroll",f,{passive:true});f();})();

/* v8: selective Lusion-style motion: image mask reveals, scroll progress hairline, cursor label, hero scroll hint */
(function(){
  var reduce=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(reduce)return;
  var root=document.documentElement;
  function setup(){
    var items=document.querySelectorAll(".shot .ph,.stage,.sel-stage");
    items.forEach(function(el){ if(el.classList.contains("mk"))return; var r=el.getBoundingClientRect(); if(r.top<window.innerHeight*0.9&&r.bottom>0&&window.scrollY<5){el.classList.add("mk","mk-in");return;} el.classList.add("mk"); });
    // hero scroll hint on home
    var h=document.querySelector(".hero2");
    if(h&&!h.querySelector(".scroll-hint")){var s=document.createElement("div");s.className="scroll-hint";s.innerHTML="<span>Scroll to explore</span><i></i>";h.appendChild(s);}
  }
  // progress hairline
  var bar=document.createElement("div");bar.className="prog";document.body.appendChild(bar);
  function prog(){var d=root.scrollHeight-window.innerHeight;bar.style.transform="scaleX("+(d>0?Math.min(1,window.scrollY/d):0)+")";}
  window.addEventListener("scroll",prog,{passive:true});prog();
  // cursor label (fine pointers only)
  if(window.matchMedia&&window.matchMedia("(pointer:fine)").matches){
    var cur=document.createElement("div");cur.className="cur";cur.textContent="View";document.body.appendChild(cur);
    var x=0,y=0,tx=0,ty=0;
    window.addEventListener("mousemove",function(e){tx=e.clientX;ty=e.clientY;var t=e.target.closest&&e.target.closest(".shot .ph,[data-lb],.stage,.sel-stage");cur.classList.toggle("on",!!t);if(t){cur.textContent=t.closest("a")?"Open":"View"}},{passive:true});
    (function f(){x+=(tx-x)*.18;y+=(ty-y)*.18;cur.style.transform="translate("+x+"px,"+y+"px) translate(-50%,-50%)";requestAnimationFrame(f)})();
  }
  var tick=false;
  function sweep(){tick=false;document.querySelectorAll(".mk:not(.mk-in)").forEach(function(el){var r=el.getBoundingClientRect();if(r.top<window.innerHeight*0.92)el.classList.add("mk-in")})}
  function req(){if(!tick){tick=true;requestAnimationFrame(sweep)}}
  window.addEventListener("scroll",req,{passive:true});window.addEventListener("resize",req);
  setTimeout(sweep,60);
  setup();setTimeout(sweep,100);
  // re-run after client navigation (next-page wipe swaps content)
  var mo=new MutationObserver(function(){clearTimeout(mo.t);mo.t=setTimeout(function(){setup();sweep()},120)});
  var m=document.getElementById("main");if(m)mo.observe(m,{childList:true,subtree:true});
})();
