const hamburger = document.getElementsByClassName("hamburger")[0];
const navUL = document.getElementsByClassName("nav-links")[0];

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("active");
});
