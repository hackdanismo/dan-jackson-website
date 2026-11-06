
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const menuOverlay = document.getElementById("menuOverlay");

// Toggle menu when burger is clicked
burger.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("active");

  burger.classList.toggle("active", isOpen);
  menuOverlay.classList.toggle("active", isOpen);
  document.body.classList.toggle("menu-open", isOpen);

  burger.setAttribute("aria-expanded", isOpen);
  burger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

// Close menu when a menu link is clicked
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    burger.classList.remove("active");
    menuOverlay.classList.remove("active");
    document.body.classList.remove("menu-open");

    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Open menu");
  });
});
