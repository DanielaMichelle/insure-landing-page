const navbarhamburger = document.querySelector(".navbar__hamburger");
const navbarClose = document.querySelector(".navbar__close");
const mobileNav = document.querySelector(".mobile-nav");

// Add event listeners
navbarhamburger.addEventListener("click", () => {
  toggleNavbar();
});

navbarClose.addEventListener("click", () => {
  toggleNavbar();
});

// Functions
/**
 * Toggles the visibility of the navbar
 */
const toggleNavbar = () => {
  navbarhamburger.style.display =
    navbarhamburger.style.display === "none" ? "block" : "none";

  navbarClose.style.display =
    navbarClose.style.display === "block" ? "none" : "block";

  mobileNav.style.display =
    mobileNav.style.display === "block" ? "none" : "block";
};
