/* Case-study section menu: smooth jump + highlight the section you are in. */
(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-jump]");
    if (!b) return;
    var el = document.getElementById(b.getAttribute("data-jump"));
    if (el) el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  });
  function upd() {
    var nav = document.querySelector(".cs-nav"); if (!nav) return;
    var cur = null;
    document.querySelectorAll("[data-sec]").forEach(function (s) { if (s.getBoundingClientRect().top <= 160) cur = s.id; });
    nav.querySelectorAll("[data-jump]").forEach(function (b) {
      var on = b.getAttribute("data-jump") === cur;
      b.classList.toggle("on", on);
      if (on) b.setAttribute("aria-current", "true"); else b.removeAttribute("aria-current");
    });
  }
  window.addEventListener("scroll", upd, { passive: true });
  window.addEventListener("hashchange", function () { setTimeout(upd, 60); });
})();
