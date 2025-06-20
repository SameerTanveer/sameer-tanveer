(function () {
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
})();

// Expand/Collapse all accordions with toggle button using a global function
let isExpanded = true;
toggleProjects = function () {
  isExpanded = !isExpanded;
  const accordionCollapses = document.querySelectorAll(".accordion-collapse");
  const accordionButton = document.querySelectorAll(".accordion-button");
  accordionCollapses.forEach((collapse) => {
    if (isExpanded) {
      collapse.classList.add("show");
    } else {
      collapse.classList.remove("show");
    }
  });
  accordionButton.forEach((button) => {
    if (isExpanded) {
      button.classList.remove("collapsed");
    } else {
      button.classList.add("collapsed");
    }
  });
  const toggleBtn = document.getElementById("toggleAccordion");
  if (toggleBtn)
    toggleBtn.innerHTML = isExpanded
      ? `Collapse All  <i  class="fa fa-chevron-up"></i>`
      : `Expand All <i class="fa fa-chevron-down"></i>`;
};
