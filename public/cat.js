/* Sleeping cat. Click: it wakes, walks along the tops of the boxes to the photo, looks, walks back, curls up. */
(function () {
  var cat = document.getElementById("cat");
  if (!cat || cat.getAttribute("data-ready")) return;
  cat.setAttribute("data-ready", "1");
  var btn = cat.querySelector("button");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var x = 0, busy = false, W = 56;

  function homeX() {
    var s = document.querySelector(".side");
    return s ? s.getBoundingClientRect().left + window.scrollX + 44 : 60;
  }
  function targetX() {
    var p = document.querySelector(".t-photo");
    if (p) { var r = p.getBoundingClientRect(); return r.left + window.scrollX + r.width / 2 - W / 2; }
    var m = document.querySelector(".main");
    return m ? m.getBoundingClientRect().right + window.scrollX - 96 : 400;
  }
  function paint() { cat.style.transform = "translate3d(" + x + "px,0,0)"; }
  function place() { if (!busy) { x = homeX(); paint(); } cat.classList.add("ready"); }
  function state(s) { cat.setAttribute("data-state", s); }
  function flip(f) { cat.setAttribute("data-flip", f ? "1" : "0"); }
  function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  function walk(to, speed) {
    return new Promise(function (res) {
      var from = x, dur = Math.max(1, Math.abs(to - from) / speed * 1000), t0 = null;
      function step(t) {
        if (t0 === null) t0 = t;
        var k = Math.min(1, (t - t0) / dur);
        x = from + (to - from) * k; paint();
        if (k < 1) requestAnimationFrame(step); else res();
      }
      requestAnimationFrame(step);
    });
  }

  btn.addEventListener("click", async function () {
    if (busy) return;
    busy = true; btn.setAttribute("aria-disabled", "true");
    if (reduce) { state("wake"); await wait(1600); state("sleep"); }
    else {
      state("wake"); await wait(850);
      flip(false); state("walk"); await walk(targetX(), 150);
      state("look"); await wait(1600);
      flip(true); state("walk"); await walk(homeX(), 150);
      flip(false); state("settle"); await wait(900);
      state("sleep");
    }
    busy = false; btn.removeAttribute("aria-disabled");
    place();
  });

  window.addEventListener("resize", place);
  window.addEventListener("load", place);
  place(); setTimeout(place, 400);
})();
