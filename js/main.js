/* ==========================================
   GERMAN STUDIOS
   MAIN JAVASCRIPT
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

  // MOBILE NAVIGATION
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {

    function closeMenu() {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    }

    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("active");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close menu after selecting a link
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    // Close menu when clicking outside
    document.addEventListener("click", event => {
      if (
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        closeMenu();
      }
    });

    // Close menu with Escape key
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    // Reset menu when switching to desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    });
  }

  // AUTOMATIC COPYRIGHT YEAR
  const currentYear = document.getElementById("currentYear");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

});
