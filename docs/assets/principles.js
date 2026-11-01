// Principles page: a sunburst (inner ring = the 8 principles, outer ring = the catalog
// categories where each is broken, sized by practice count) driving a carousel.
(function () {
  var D = window.OES_DATA;
  if (!D) return;
  var P = D.principles, n = P.length;
  var STANDARD = "https://github.com/ike5/open-ethics-standard/blob/main/OPEN-ETHICS-STANDARD.md";
  var NS = "http://www.w3.org/2000/svg";
  var $ = function (id) { return document.getElementById(id); };
  var areaName = function (c) { return c.replace(/^\d+\.\s*/, ""); };
  var areaNum = function (c) { return c.match(/^\d+/)[0]; };
  var slug = function (t) { return t.toLowerCase().replace(/[^a-z0-9 -]/g, "").replace(/ /g, "-"); };
  var el = function (tag, attrs, text) { var e = document.createElement(tag); for (var k in attrs) e.setAttribute(k, attrs[k]); if (text != null) e.textContent = text; return e; };
  $("total").textContent = D.total;
  $("ver").textContent = "· version " + D.version;

  var sel = 0, hover = null, ready = false;
  var CX = 300, CY = 280;
  var pt = function (a, r) { return [CX + r * Math.cos(a * Math.PI / 180), CY + r * Math.sin(a * Math.PI / 180)]; };
  var f = function (v) { return v.toFixed(2); };
  var sector = function (a0, a1, r0, r1) {
    var p0 = pt(a0, r1), p1 = pt(a1, r1), p2 = pt(a1, r0), p3 = pt(a0, r0);
    return "M" + f(p0[0]) + " " + f(p0[1]) + " A" + r1 + " " + r1 + " 0 0 1 " + f(p1[0]) + " " + f(p1[1]) + " L" + f(p2[0]) + " " + f(p2[1]) + " A" + r0 + " " + r0 + " 0 0 0 " + f(p3[0]) + " " + f(p3[1]) + " Z";
  };
  var svg = $("wheel-svg"), wheel = $("wheel"), inner = [], outer = [], labels = [];
  P.forEach(function (p, k) {
    var a0 = -90 + k * 45, a1 = a0 + 45;
    var path = document.createElementNS(NS, "path");
    path.setAttribute("d", sector(a0, a1, 100, 170));
    path.style.transitionDelay = (k * 0.08) + "s, " + (k * 0.08) + "s";
    path.addEventListener("click", function () { pick(k, true); });
    path.addEventListener("mouseenter", function () { hover = { k: k, c: null }; paint(); });
    path.addEventListener("mouseleave", function () { hover = null; paint(); });
    svg.appendChild(path); inner.push(path);
    var start = a0;
    p.areas.forEach(function (area, j) {
      var span = 45 * area.count / p.practices;
      var o = document.createElementNS(NS, "path");
      o.setAttribute("d", sector(start, start + span, 176, 214));
      start += span;
      o.style.transitionDelay = (0.7 + k * 0.06) + "s, " + (0.7 + k * 0.06) + "s";
      o.addEventListener("click", function () { pick(k, true); });
      o.addEventListener("mouseenter", function () { hover = { k: k, c: j }; paint(); });
      o.addEventListener("mouseleave", function () { hover = null; paint(); });
      svg.appendChild(o); outer.push({ el: o, k: k, j: j });
    });
    var m = a0 + 22.5, q = pt(m, 236), cs = Math.cos(m * Math.PI / 180);
    var a = el("a", { href: "#principles", "class": "label" });
    a.appendChild(el("small", {}, "0" + (k + 1)));
    a.appendChild(el("span", {}, p.name));
    a.style.left = (q[0] / 6) + "%"; a.style.top = (q[1] / 5.6) + "%";
    a.style.transform = cs > 0.25 ? "translate(0,-50%)" : cs < -0.25 ? "translate(-100%,-50%)" : "translate(-50%,-50%)";
    a.style.textAlign = cs > 0.25 ? "left" : cs < -0.25 ? "right" : "center";
    a.style.transitionDelay = (0.3 + k * 0.08) + "s, 0s";
    a.addEventListener("click", function (e) { e.preventDefault(); pick(k, true); });
    wheel.appendChild(a); labels.push(a);
  });

  // Carousel
  var tabs = $("tabs"), stage = $("stage"), pips = $("pips"), slides = [], tabBtns = [], pipEls = [];
  P.forEach(function (p, k) {
    var b = el("button", { type: "button", role: "tab", id: "tab" + (k + 1), "aria-controls": "p" + (k + 1) }, "0" + (k + 1) + " " + p.name);
    b.addEventListener("click", function () { pick(k); });
    tabs.appendChild(b); tabBtns.push(b);
    var s = el("article", { "class": "slide", id: "p" + (k + 1), role: "tabpanel", "aria-labelledby": "tab" + (k + 1) });
    var left = el("div");
    left.appendChild(el("span", { "class": "n" }, "0" + (k + 1) + " / 0" + n));
    left.appendChild(el("h3", {}, p.name));
    left.appendChild(el("p", { "class": "st" }, p.statement));
    var side = el("div", { "class": "side" });
    var blk = function (label, text) { var d = el("div"); d.appendChild(el("p", { "class": "lbl" }, label)); d.appendChild(el("p", {}, text)); side.appendChild(d); };
    blk("Protects", p.protects);
    blk("Why it matters", p.why);
    var cov = el("div"); cov.appendChild(el("p", { "class": "lbl" }, p.practices + " practices, in these parts of the catalog"));
    var chips = el("div", { "class": "areas" });
    p.areas.slice().sort(function (x, y) { return y.count - x.count; }).forEach(function (area) {
      chips.appendChild(el("a", { href: STANDARD + "#" + slug(area.category) }, "§" + areaNum(area.category) + " " + areaName(area.category) + " · " + area.count));
    });
    cov.appendChild(chips); side.appendChild(cov);
    s.appendChild(left); s.appendChild(side);
    stage.appendChild(s); slides.push(s);
    var pip = el("span"); pips.appendChild(pip); pipEls.push(pip);
  });
  $("prev").addEventListener("click", function () { pick((sel - 1 + n) % n); });
  $("next").addEventListener("click", function () { pick((sel + 1) % n); });
  tabs.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") { pick((sel + (e.key === "ArrowRight" ? 1 : n - 1)) % n); tabBtns[sel].focus(); e.preventDefault(); }
  });

  function paint() {
    inner.forEach(function (path, k) {
      var on = k === sel, hv = hover && hover.k === k && hover.c == null;
      path.style.fill = on ? "#17201d" : hv ? "#b9c79a" : (k % 2 ? "#dfe5cf" : "#d2dbbd");
    });
    outer.forEach(function (o) {
      var hv = hover && hover.k === o.k && hover.c === o.j;
      o.el.style.fill = hv ? "#b9c79a" : o.k === sel ? "#d8f36a" : "#e8ecdc";
    });
    labels.forEach(function (a, k) { a.classList.toggle("on", k === sel); });
    var k = hover ? hover.k : sel, p = P[k];
    if (hover && hover.c != null) {
      var area = p.areas[hover.c];
      $("hub-k").textContent = "§" + areaNum(area.category);
      $("hub-t").textContent = areaName(area.category);
      $("hub-s").textContent = area.count + " " + p.name + " practices";
      $("hub-t").className = "t small";
    } else {
      $("hub-k").textContent = "0" + (k + 1) + " / 0" + n;
      $("hub-t").textContent = p.name;
      $("hub-s").textContent = p.practices + " practices · " + p.areas.length + " areas";
      $("hub-t").className = "t";
    }
  }
  function pick(k, scroll) {
    sel = k;
    slides.forEach(function (s, i) { s.classList.toggle("on", i === k); s.classList.toggle("before", i < k); s.setAttribute("aria-hidden", i === k ? "false" : "true"); });
    tabBtns.forEach(function (b, i) { b.setAttribute("aria-selected", i === k ? "true" : "false"); b.tabIndex = i === k ? 0 : -1; });
    pipEls.forEach(function (d, i) { d.classList.toggle("on", i === k); });
    paint();
    if (scroll) {
      var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      $("principles").scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    }
    // Only after the first paint: setting the hash while the page loads makes the browser jump to it.
    if (ready && history.replaceState) history.replaceState(null, "", "#p" + (k + 1));
  }
  var fromHash = (location.hash.match(/^#p([1-8])$/) || [])[1];
  pick(fromHash ? Number(fromHash) - 1 : 0, false);
  if (fromHash) $("principles").scrollIntoView();
  ready = true;
  requestAnimationFrame(function () { requestAnimationFrame(function () { wheel.classList.remove("pre"); }); });
  // The staggered delays are only for the entrance; clear them so hover colors respond at once.
  setTimeout(function () { inner.concat(outer.map(function (o) { return o.el; }), labels).forEach(function (e) { e.style.transitionDelay = ""; }); }, 1800);
})();
