const actionButton = document.querySelector(".actionButton");
const valueTobeAdded = document.getElementById("value");

let value = 0;

actionButton.addEventListener("click", (event) => {
  if (event.target.innerHTML === "Increase") {
    value += 1;
  } else if (event.target.innerHTML === "Decrease") {
    value -= 1;
  } else {
    value = 0;
  }
  if (value < 0) {
    valueTobeAdded.style.color = "red";
  } else if (value > 0) {
    valueTobeAdded.style.color = "green";
  } else {
    valueTobeAdded.style.color = "#222";
  }

  valueTobeAdded.innerHTML = value;
});
