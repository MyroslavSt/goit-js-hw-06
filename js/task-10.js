// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
// після чого рендериться колекція. Натисненням на кнопку Очистити, колекція
// елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки
// <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй
// готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб
//  видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const containerControlsEl = document.querySelector("#controls");
const inputNumberEl = document.querySelector('[type="number"]');
let boxContainerEl = document.querySelector("#boxes");
const btnCreateEl = document.querySelector("button[data-create]");
const btnDestroyEl = document.querySelector("button[data-destroy]");
inputNumberEl.addEventListener("input", handlerInput);
let amount;
function handlerInput(evt) {
  amount = evt.target.value;
}
btnCreateEl.addEventListener("click", createBoxes);

function createBoxes(amount) {
  let markups = `${amount}*markup`;
  const markup = `<div class="box"></div>`;
  boxContainerEl.innerHTML = markups;
  const itemEl = document.querySelector(".box");
  console.log(itemEl);
  console.log(boxContainerEl);
  itemEl.style.backgroundColor = getRandomHexColor();
  itemEl.style.display = "flex";

  return markups;
}

boxContainerEl.style.flexWrap = "wrap";
boxContainerEl.style.alignItems = "center";
boxContainerEl.style.marginTop = "30px";

btnDestroyEl.addEventListener("click", deleteBoxes);
function deleteBoxes() {
  boxContainerEl.innerHTML = "";
}

// createBoxes(inputNumberEl.value);
//

// function creation() {
//   const markup = boxes
//     .map(
//       ({ url: picture, alt: description }) =>
//         `<li><img src="${picture}"alt="${description}"width="400"heigth="auto"></li>`,
//     )
//     .join("");
//   gallery.insertAdjacentHTML("beforeend", markup);
//   console.log(markup);
// }

// divBoxesEl.style.display = "flex";
// divBoxesEl.style.flexWrap = "wrap";
// divBoxesEl.style.alignItems = "center";
// divBoxesEl.style.marginTop = "30px";
// inputNumberEl.addEventListener("input", toogleValue);
// createBtnEl.addEventListener("click", () => {
//   createBoxes(Number(inputNumberEl.value));
// });
// destroyBtnEl.addEventListener("click", destroyBoxesMarkup);
// let inputValue = 0;
// function toogleValue(event) {}
