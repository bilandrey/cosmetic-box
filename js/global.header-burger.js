// Get DOM elements
const burger = document.querySelector(".burger__box");
const menu = document.querySelector(".header__menu");
const menuLinks = document.querySelectorAll(".header__menu__item");
const header = document.querySelector(".site-header");

// Toggle menu function
function toggleMenu() {
  burger.classList.toggle("is-active");
  menu.classList.toggle("is-open");
  document.body.classList.toggle("no-scroll");
  header.classList.toggle("is-open")
}

// Close menu function
function closeMenu() {
  burger.classList.remove("is-active");
  menu.classList.remove("is-open");
  document.body.classList.remove("no-scroll");
  header.classList.remove("is-open")
}

// Add click event listener to burger button
burger.addEventListener("click", toggleMenu);

// Add click event listeners to all menu links
menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});