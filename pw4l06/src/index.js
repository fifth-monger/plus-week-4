//Challenge 1
let current = new Date();
console.log(current.getDate());

//Challenge 2
console.log(current.getMilliseconds());

//Challenge 3
console.log(current.getDay());

//Challenge 4
console.log(current.getFullYear());

//Challenge 5
console.log(current.getMonth());

//Challenge 6 & 7
function formatDate(current) {
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
  let day = days[current.getDay()];
  let month = months[current.getMonth()];
  let date = current.getDate();
  let year = current.getFullYear();

  console.log(`Today is ${day}, ${month} ${date}, ${year}`);

  let formattedDate = `Today is ${day}, ${month} ${date}, ${year}`;
  return formattedDate;
}
console.log(formatDate(new Date()));
