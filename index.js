const hamburger = document.querySelector("#hamburger");
const mobileNav = document.querySelector("#mobile-nav");

document.addEventListener("DOMContentLoaded", () => {
  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
  });
});
