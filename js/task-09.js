function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const colorEl = document.querySelector(".color");
const btn = document.querySelector(".change-color");

btn.addEventListener("click", handler);
function handler() {
  const color = getRandomHexColor();
  body.style.background = color;
  colorEl.textContent = color;
}
