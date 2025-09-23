// Challenge 1
// Add click eventListener to the button. Alert `It is 18 degrees`
function alertTemperature(event) {
  alert("It is 18 degrees");
}
let button = document.querySelector("button");
button.addEventListener("click", alertTemperature);
// Challenge 2
// When the button is clicked, replace button label by ‘18 degrees’
function changeButton(event) {
  secondClick.innerHTML = "18 degrees";
}
let secondClick = document.querySelector("button");
secondClick.addEventListener("click", changeButton);
