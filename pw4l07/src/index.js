// Challenge 1
// Log li with id special
console.log(document.querySelector("#special"));

// Challenge 2
// Log all li with class of country
let countries = document.querySelectorAll("li");
console.log(countries);

// Challenge 3
// Add class special to the li with id special
let li = document.querySelector("#special");
li.classList.add("special");
// Challenge 4
// In your code, replace the content of the element with id special
// by your favorite country (other than Portugal of course)
let newCountry = document.querySelector("#special");
newCountry.innerHTML = "Mexio 🇲🇽";
