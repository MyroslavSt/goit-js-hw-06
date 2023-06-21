const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.map((ingredients) => {
  const itemEl = document.createElement(`li`);
  itemEl.classList.add(`item`);
  itemEl.textContent = ingredient;
  console.log(itemEl);
}).join(``);

ingredients.insertAdjacentHTML("beforeend", itemEl);