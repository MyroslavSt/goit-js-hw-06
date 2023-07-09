const selectors = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};


selectors.input.addEventListener("input", handlerName);


function handlerName(evt) {
	selectors.output.textContent = evt.currentTarget.value.trim()||"Anonymous";
	
  };




//   function handlerName(evt) {
// 	selectors.output.textContent = evt.currentTarget.value;
// 	if(selectors.output.textContent==='') selectors.output.innerHTML = "Anonymous";
//   };