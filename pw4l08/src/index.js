// Challenge 1
// Add click eventListener to the button. Alert `It is 18 degrees`
function alertTemperature() {
  alert("It is 18 degrees");
}
let button = document.querySelector("button");
button.addEventListener("click", alertTemperature);
// Challenge 2
// When the button is clicked, replace button label by ‘18 degrees’

function showTemperature() {
  let buttonTwo = document.querySelector("button");
  buttonTwo.innerHTML = "18 degrees";
}
let showTemperatureButton = document.querySelector("button");
showTemperatureButton.addEventListener("click", showTemperature);
