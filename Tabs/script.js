const about = document.querySelector(".about");
const content = document.querySelectorAll(".content");
const tab = document.querySelectorAll(".tab-btn");

about.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  console.log(id);

  if (id) {
    tab.forEach((tab) => {
      tab.classList.remove("active");
    });
  }
  e.target.classList.add("active");

  content.forEach((t) => {
    t.classList.remove("active");
  });
  const element = document.getElementById(id);
  element.classList.add("active");
});
