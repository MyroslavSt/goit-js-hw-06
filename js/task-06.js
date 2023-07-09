const input = document.querySelector('#validation-input');
const dataLength = input.getAttribute('data-length');
const inputLength = input.value.length;
input.addEventListener('blur', handlerInput);

function handlerInput (evt) {


	if(Number(evt.currentTarget.value.length)===Number(dataLength)){

		if(!input.classList.contains('invalid')){
			input.classList.add('valid');
		} else{
			input.classList.replace('invalid', 'valid');
		}
	} else{
		if(!input.classList.contains('valid')){
			input.classList.add('invalid')
		} else{
			input.classList.replace('valid', 'invalid')
		}
	}

}












