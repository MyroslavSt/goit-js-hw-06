
const itemElements = document.querySelectorAll('.item');
console.log(itemElements);
console.log( "Number of categories:", itemElements.length);
itemElements.forEach(function (item) {
	console.log(`"Category:" ${item.children[0].textContent},"Elements:" ${item.children[1].children.length}`);
});