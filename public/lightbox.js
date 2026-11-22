/* Click any [data-lb] image to view it large. Arrow keys / buttons to move, Esc to close. */
(function () {
  var lb = null, items = [], idx = 0, last = null;
  function build() {
    lb = document.createElement("div");
    lb.className = "lb";
    lb.setAttribute("role", "dialog"); lb.setAttribute("aria-modal", "true"); lb.setAttribute("aria-label", "Image viewer");
    lb.innerHTML =
      '<button type="button" class="lb-x" aria-label="Close viewer">Close</button>' +
      '<button type="button" class="lb-p" aria-label="Previous image">←</button>' +
      '<button type="button" class="lb-n" aria-label="Next image">→</button>' +
      '<figure class="lb-f"><div class="lb-m"></div><figcaption class="lb-c"></figcaption></figure>' +
      '<span class="lb-i" aria-live="polite"></span>';
    document.body.appendChild(lb);
    lb.addEventListener("click", function (e) {
      var t = e.target;
      if (t === lb || (t.classList && t.classList.contains("lb-f"))) close();
      else if (t.classList.contains("lb-x")) close();
      else if (t.classList.contains("lb-p")) go(-1);
      else if (t.classList.contains("lb-n")) go(1);
    });
  }
  function show() {
    var el = items[idx], m = lb.querySelector(".lb-m"), src = el.getAttribute("data-src"), t = el.getAttribute("data-title") || "";
    m.innerHTML = "";
    if (src) { var im = document.createElement("img"); im.src = src; im.alt = t; m.appendChild(im); }
    else { var d = document.createElement("div"); d.className = "lb-ph"; d.style.aspectRatio = el.getAttribute("data-ratio") || "4/5"; d.textContent = el.getAttribute("data-label") || ""; m.appendChild(d); }
    lb.querySelector(".lb-c").textContent = t;
    lb.querySelector(".lb-i").textContent = (idx + 1) + " / " + items.length;
    lb.classList.remove("swap"); void lb.offsetWidth; lb.classList.add("swap");
    var one = items.length < 2;
    lb.querySelector(".lb-p").style.display = one ? "none" : ""; lb.querySelector(".lb-n").style.display = one ? "none" : "";
  }
  function open(el) {
    items = [].slice.call(document.querySelectorAll("[data-lb]"));
    idx = items.indexOf(el); if (idx < 0) return;
    last = el; if (!lb) build();
    lb.classList.add("open"); document.documentElement.classList.add("lb-lock");
    show(); lb.querySelector(".lb-x").focus();
  }
  function close() {
    lb.classList.remove("open"); document.documentElement.classList.remove("lb-lock");
    if (last && last.focus) last.focus();
  }
  function go(d) { idx = (idx + d + items.length) % items.length; show(); }

  document.addEventListener("click", function (e) {
    var el = e.target.closest && e.target.closest("[data-lb]");
    if (el) open(el);
  });
  document.addEventListener("keydown", function (e) {
    if (lb && lb.classList.contains("open")) {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "Tab") {
        var b = [].slice.call(lb.querySelectorAll("button")).filter(function (x) { return x.style.display !== "none"; });
        var first = b[0], lastB = b[b.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); lastB.focus(); }
        else if (!e.shiftKey && document.activeElement === lastB) { e.preventDefault(); first.focus(); }
        return;
      }
      e.stopPropagation(); return;
    }
    var t = e.target;
    if (e.key === "Enter" && t && t.hasAttribute && t.hasAttribute("data-lb")) open(t);
  }, true);
})();
