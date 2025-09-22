//Challenge 1
let currentTime = new Date();
console.log(currentTime);

//Challenge 2
console.log(currentTime.getMilliseconds());

//Challenge 3
console.log(currentTime.getDay());

//Challenge 4
console.log(currentTime.getFullYear());

//Challenge 5
console.log(currentTime.getMonth());

//Challenge 6 & 7
function formatDate(currentTime) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[currentTime.getDay()];
  let month = months[currentTime.getMonth()];
  let date = currentTime.getDate();
  let year = currentTime.getFullYear();

  let currentDate = `Today is ${day}, ${month} ${date}, ${year}`;
  alert(currentDate);

  let formattedDate = `Today is ${day}, ${month} ${date}, ${year}`;
  return formattedDate;
}
console.log(formatDate(currentTime));
