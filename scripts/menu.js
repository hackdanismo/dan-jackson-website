  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");
  const menuOverlay = document.getElementById("menuOverlay");

  burger.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("active");

    burger.classList.toggle("active", isOpen);
    menuOverlay.classList.toggle("active", isOpen);
    document.body.classList.toggle("menu-open", isOpen);

    burger.setAttribute("aria-expanded", isOpen);
    burger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });