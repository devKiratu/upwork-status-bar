const form = document.querySelector("form");
const input = document.querySelector("input");
const display = document.querySelector("#display");
const bar = document.querySelector(".bar");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const value = parseInt(input.value);
  if (isNaN(value)) return;

  display.innerHTML = `${value}%`;

  fillBar(value);
  form.reset();
}

function fillBar(input) {
  let color = "green";
  if (input > 50 && input <= 79) {
    color = "orange";
  } else if (input >= 80) {
    color = "red";
  }
  bar.style.width = `${input}%`;
  bar.style.backgroundColor = color;
}
