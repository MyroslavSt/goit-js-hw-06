
const fontSizeController=document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeController.addEventListener('input', onInput);

function onInput(evt){
	const value=evt.target.value;
	textEl.style.fontSize= `${value}px`;
}

