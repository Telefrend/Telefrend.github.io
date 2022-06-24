let isScrolling = false;

const body = document.querySelector(".body");
const header = document.querySelector(".header");
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

window.addEventListener("scroll", function () {
  header.style.display = "none";
});

body.addEventListener("touchstart", () => {
  header.style.display = "block";
  setTimeout(function () {
    header.style.display = "none";
  }, 3000);
});

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
