const navCenter = document.querySelector(".nav-center");
const toggle = document.querySelector(".nav-toggle");

toggle.addEventListener("click", () => {
  navCenter.classList.toggle("show-links");
});
