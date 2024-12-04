(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const currentPath = decodeURIComponent(document.location.pathname);
    const navItems = document.querySelectorAll(".nav-list__button");

    navItems.forEach((item) => {
      itemPath = item.getAttribute("href").replace("./", "/");

      if (itemPath === currentPath) {
        item.classList.add("nav-list__button--current");
      }
    });

    navItems.forEach((item) => {
      item.addEventListener("mouseover", function () {
        this.classList.add("nav-list__button--hover");
      });
      item.addEventListener("mouseout", function () {
        this.classList.remove("nav-list__button--hover");
      });

      item.addEventListener("mousedown", function () {
        this.classList.add("nav-list__button--active");
      });
      item.addEventListener("mouseup", function () {
        this.classList.remove("nav-list__button--active");
      });
    });

    window.addEventListener("load", function () {
      const navigationEntry = performance.getEntriesByType("navigation")[0];
      const loadTime =
        navigationEntry.domContentLoadedEventEnd - navigationEntry.startTime;

      const footer = document.querySelector("footer");
      if (footer) {
        footer.innerHTML += `<p class="load-time-text">Страница загружена за ${Math.round(
          loadTime
        )} мс</p>`;
      }
    });
  });
})();
