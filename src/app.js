const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");
const navMenu = document.querySelector("nav ul");

[hamburgerIcon, closeIcon].forEach((icon) => {
  icon.addEventListener("click", (event) => {
    showMenu = hamburgerIcon.dataset.show === "true";
    hamburgerIcon.dataset.show = !showMenu;
    closeIcon.dataset.show = showMenu;
    if (showMenu) {
      navMenu.style.top = "100%";
    } else {
      navMenu.style.top = "-250%";
    }
  });
});
