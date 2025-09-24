function alertHooray(event) {
  event.preventDefault();
  alert("Hooray!");
}
let clickMeButton = document.querySelector("#special-button");
clickMeButton.addEventListener("click", alertHooray);

function alertPassword(event) {
  event.preventDefault();
  let passwordInput = document.querySelector("#password-input");
  alert(`Your not so secret password is ${passwordInput.value} 🤫`);
}
let passwordSignUp = document.querySelector("#password-form");
passwordSignUp.addEventListener("submit", alertPassword);

function alertEmailUsername(event) {
  event.preventDefault();
  let emailInput = document.querySelector("#email-input");
  alert(`Your email is ${emailInput.value}`);
  let userNameInput = document.querySelector("#username-input");
  alert(`Your username is ${userNameInput.value}`);
}
let emailSignUp = document.querySelector("#signup-form");
emailSignUp.addEventListener("submit", alertEmailUsername);
