let currentTime = new Date();

function formatDate(newDate) {
  let liveDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let liveDay = liveDays[newDate.getDay()];
  let liveHour = newDate.getHours();
  let liveMinutes = newDate.getMinutes();

  return `${liveDay} ${liveHour}:${liveMinutes}`;
}
let dateElement = document.querySelector("#current-date");
dateElement.innerHTML = formatDate(currentTime);

function updateCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector(".search-input");
  let cityReplacement = document.querySelector(".current-city");
  cityReplacement.innerHTML = cityInput.value;
  cityInput.value = "";
}

let searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", updateCity);
