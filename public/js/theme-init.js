(function () {
  try {
    var t = localStorage.getItem("theme");
    if (t) {
      document.documentElement.setAttribute("data-theme", t);
    } else if (window.matchMedia("(prefers-color-scheme:light)").matches) {
      document.documentElement.setAttribute("data-theme", "light");
    }
  } catch (e) {}
})();
