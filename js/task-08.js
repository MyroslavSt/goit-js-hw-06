const formEl = document.querySelector("form.login-form");
formEl.addEventListener("submit", formHandler);
function formHandler(evt) {
  evt.preventDefault();
  const { email, password } = evt.target.elements;

  if (!(email.value.trim() && password.value.trim())) {
    return alert(
      "Зверніть Вашу увагу, для надсилання заявки усі поля повинні бути заповнені.",
    );
  }

  const data = {
    [email.name]: email.value,
    [password.name]: password.value,
  };
  console.log(data);
  evt.target.reset();
}
