// Front-page examples: a vertical carousel of everyday screens. The one in focus plays
// (a tap, then the catch), holds for 3 seconds, then the column scrolls to the next. Loops.
(function () {
  var view = document.getElementById("ex-view");
  if (!view) return;
  var cards = Array.prototype.slice.call(view.querySelectorAll(".ex"));
  var dots = Array.prototype.slice.call(document.querySelectorAll("#ex-dots span"));
  var N = cards.length, PAUSE = 3000, SCROLL = 700, GAP = 320, TOP = 130;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var dur = cards.map(function (c) { return Number(c.dataset.dur) || 2000; });
  var seg = dur.map(function (d) { return d + PAUSE + SCROLL; });
  var cycle = seg.reduce(function (a, b) { return a + b; }, 0);
  var clamp = function (v) { return v < 0 ? 0 : v > 1 ? 1 : v; };
  var ease = function (p) { return p < .5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2; };
  var up = function (lt, at, len) { return clamp((lt - at) / len); };
  var parts = cards.map(function (card) {
    return {
      show: Array.prototype.map.call(card.querySelectorAll("[data-show]"), function (el) { var v = el.dataset.show.split(",").map(Number); return { el: el, at: v[0], len: v[1], dy: v[2] || 0 }; }),
      hide: Array.prototype.map.call(card.querySelectorAll("[data-hide]"), function (el) { var v = el.dataset.hide.split(",").map(Number); return { el: el, at: v[0], len: v[1] }; }),
      press: Array.prototype.map.call(card.querySelectorAll("[data-press]"), function (el) { return { el: el, at: Number(el.dataset.press) }; }),
      tap: Array.prototype.map.call(card.querySelectorAll("[data-path]"), function (el) { return { el: el, p: el.dataset.path.split(",").map(Number) }; })
    };
  });
  function paint(card, k, lt) {
    var P = parts[k];
    P.show.forEach(function (s) { var o = up(lt, s.at, s.len); s.el.style.opacity = o; s.el.style.transform = s.dy ? "translateY(" + ((1 - o) * s.dy) + "px)" : ""; });
    P.hide.forEach(function (h) { h.el.style.opacity = 1 - up(lt, h.at, h.len); });
    P.press.forEach(function (b) { b.el.classList.toggle("pressed", lt >= b.at && lt < b.at + 250); });
    P.tap.forEach(function (t) {
      var m = ease(up(lt, 500, 1100)), p = t.p;
      t.el.style.left = (p[0] + (p[2] - p[0]) * m) + "%";
      t.el.style.top = (p[1] + (p[3] - p[1]) * m) + "px";
      t.el.style.opacity = up(lt, 300, 200) * (1 - up(lt, 2150, 300));
      t.el.style.transform = lt >= 1800 && lt < 2000 ? "scale(.8)" : "";
    });
  }
  var start = null, paused = 0, pauseAt = null, visible = true;
  function frame(now) {
    if (start === null) start = now;
    var t = pauseAt !== null ? pauseAt - start - paused : now - start - paused;
    t = ((t % cycle) + cycle) % cycle;
    var cur = 0, acc = 0;
    while (cur < N - 1 && t >= acc + seg[cur]) { acc += seg[cur]; cur++; }
    var local = t - acc;
    var s = reduce ? 0 : ease(up(local, dur[cur] + PAUSE, SCROLL));
    cards.forEach(function (card, i) {
      var off = ((i - cur) % N + N) % N;
      if (off === N - 1) off = -1;
      var pos = off - s;
      card.style.transform = "translateY(" + (pos * GAP) + "px)";
      card.style.opacity = 1 - Math.min(1, Math.abs(pos)) * .55;
      paint(card, i, reduce ? 1e9 : off === 0 ? local : off === -1 ? 1e9 : 0);
    });
    dots.forEach(function (d, i) { d.classList.toggle("on", i === cur); });
    if (visible) requestAnimationFrame(frame);
  }
  // Pause while hovered so people can read; stop drawing while off screen or in a hidden tab.
  var hold = function () { if (pauseAt === null) pauseAt = performance.now(); };
  var release = function () { if (pauseAt !== null) { paused += performance.now() - pauseAt; pauseAt = null; } };
  view.addEventListener("mouseenter", hold);
  view.addEventListener("mouseleave", release);
  document.addEventListener("visibilitychange", function () { document.hidden ? hold() : release(); });
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      var was = visible; visible = entries[0].isIntersecting;
      if (visible) { release(); if (!was) requestAnimationFrame(frame); } else hold();
    }).observe(view);
  }
  requestAnimationFrame(frame);
})();
