/* Motion, and the slot that swaps in a real photograph or app screenshot
   when the file exists. Drop a WebP at the data-photo path. Nothing else. */
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.classList.add("js");

  document.querySelectorAll("[data-photo]").forEach(function (el) {
    var src = el.getAttribute("data-photo");
    if (!src) return;
    var probe = new Image();
    probe.onload = function () {
      if (el.tagName === "IMG") {
        el.src = src;
        return;
      }
      var img = document.createElement("img");
      img.src = src;
      img.alt = el.getAttribute("data-alt") || "";
      img.className = "shot";
      el.replaceChildren(img);
    };
    probe.src = src;
  });

  var buttons = document.querySelectorAll(".filters button");
  var posts = document.querySelectorAll(".post");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      buttons.forEach(function (other) {
        other.setAttribute("aria-pressed", other === button ? "true" : "false");
      });
      var cat = button.getAttribute("data-cat");
      posts.forEach(function (post) {
        post.hidden = cat !== "all" && post.getAttribute("data-cat") !== cat;
      });
    });
  });

  if (reduce) {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
    return;
  }

  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        io.unobserve(en.target);
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -6% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  var frames = document.querySelectorAll("[data-parallax]");
  if (!frames.length) return;
  var ticking = false;
  function paint() {
    frames.forEach(function (el) {
      var top = el.getBoundingClientRect().top;
      var shift = (top - window.innerHeight * 0.45) * -0.035;
      if (shift > 18) shift = 18;
      if (shift < -18) shift = -18;
      el.style.transform = "translate3d(0," + shift.toFixed(1) + "px,0)";
    });
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(paint);
  }, { passive: true });
  paint();
})();
