const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
console.log(ingredients);


const list = document.querySelector('#ingredients');

const items =ingredients.map(ingredient=>{
		const li= document.createElement('li');
		li.classList.add('js-item');
		li.textContent=ingredient;
	
		return li;
	});
	console.log(items);
	list.append(...items);

