const image = document.querySelectorAll(".image");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

image.forEach((img, index) => {
  img.style.left = `${index * 100}%`;
});
let counter = 0;

next.addEventListener("click", () => {
  counter++;
  if (counter > 3) {
    counter = 3;
  }
  carousel();
});

prev.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    counter = 0;
  }
  carousel();
});

function carousel() {
  image.forEach((img) => {
    img.style.transform = `translateX(-${counter * 100}%)`;
  });
}
