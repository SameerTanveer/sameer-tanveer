(function () {
  "use strict"; // Start of use strict

  // Smooth scrolling using native JS
  document
    .querySelectorAll('a.js-scroll-trigger[href*="#"]:not([href="#"])')
    .forEach(function (link) {
      link.addEventListener("click", function (e) {
        const pathname = window.location.pathname.replace(/^\//, "");
        const linkPath = link.pathname.replace(/^\//, "");
        if (
          pathname === linkPath &&
          window.location.hostname === link.hostname
        ) {
          let target =
            document.querySelector(link.hash) ||
            document.getElementsByName(link.hash.slice(1))[0];
          if (target) {
            e.preventDefault();
            window.scrollTo({
              top: target.getBoundingClientRect().top + window.scrollY,
              behavior: "smooth",
            });
          }
        }
      });
    });

  // Closes responsive menu when a scroll trigger link is clicked
  document.querySelectorAll(".js-scroll-trigger").forEach(function (el) {
    el.addEventListener("click", function () {
      const navCollapse = document.querySelector(".navbar-collapse");
      if (navCollapse && navCollapse.classList.contains("show")) {
        // Bootstrap 5 collapse
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navCollapse);
        bsCollapse.hide();
      }
    });
  });

  // Activate scrollspy (Bootstrap 5)
  if (window.bootstrap && document.body) {
    bootstrap.ScrollSpy.getOrCreateInstance(document.body, {
      target: "#sideNav",
    });
  }
})(); // End of use strict
