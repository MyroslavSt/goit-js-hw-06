
const counter= document.querySelector('#counter');
const result= document.querySelector('#js-value');

const decr=counter.firstElementChild;
const incr=counter.lastElementChild;

console.dir(result);
console.dir(counter.firstElementChild);
console.dir(counter.lastElementChild);

let counterValue=0;
decr.addEventListener('click', handlerClickMinus)

function handlerClickMinus(){
	counterValue-=1;
	result.textContent=counterValue;
}
incr.addEventListener('click', handlerClickPlus)

function handlerClickPlus(){
	counterValue+=1;
	result.textContent=counterValue;
}








// const counter = document.querySelector('#counter');

// const result = document.querySelector('#js-value');
// const decrementBtn = document.querySelector('.js-btn-decrement');
// const incrementBtn = document.querySelector('.js-btn-increment');

// let counterValue=0;



// decrementBtn.addEventListener('click', handlerDecrement);




// function handlerDecrement(){
// 	counterValue-=1;

// 	result.textContent=counterValue;

// }

// incrementBtn.addEventListener('click', handlerIncrement);

// function handlerIncrement(){
// 	counterValue+=1;
	
// 	result.textContent=counterValue;
	
// }
	

