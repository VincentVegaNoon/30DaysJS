const btnStartWith = document.querySelector(".startWith");
const btnSearchWord = document.querySelector(".searchWord");
const countriesListSection = document.querySelector(".countriesListSection");
const input = document.querySelector("input");
const btnReverse = document.querySelector(".reverse");
const containInfo = document.querySelector(".containInfo");

let isReversed = false;

const filterFunc = () => {
  checkFunc();
  divs.length = 0;
  countriesListSection.innerHTML = "";
  let filteredCountries = countries.slice();
  if (isReversed) {
    filteredCountries.reverse();
  }

  for (const country of filteredCountries) {
    const lowercaseCountry = country.toLowerCase();
    const lowercaseInput = input.value.toLowerCase();

    if (btnStartWith.classList.contains("active")) {
      if (lowercaseCountry.startsWith(lowercaseInput)) {
        createCountryElement(country);
        containInfo.textContent = ` ${input.value} are ${divs.length} `;
      }
    } else if (btnSearchWord.classList.contains("active")) {
      if (lowercaseCountry.includes(lowercaseInput)) {
        createCountryElement(country);
        containInfo.textContent = ` ${input.value} are ${divs.length} `;
      }
    }
  }
};
const checkFunc = () => {
  if (
    !btnStartWith.classList.contains("active") &&
    !btnSearchWord.classList.contains("active")
  ) {
    input.value = "";
    alert("You need to choose filter option");
  }
};

const createCountryElement = (countryName) => {
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.textContent = countryName;
  countriesListSection.appendChild(div);
  div.appendChild(p);
  divs.push(div);
};

const createCountriesList = () => {
  document.querySelector(".countriesCount").textContent = countries.length;
  for (const country of countries) {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = country;
    countriesListSection.appendChild(div);
    div.appendChild(p);
  }
};
createCountriesList();

let divs = [...document.querySelectorAll(".countriesListSection div")];

btnStartWith.addEventListener("click", function () {
  btnStartWith.classList.toggle("active");
  btnSearchWord.classList.remove("active");
});
btnSearchWord.addEventListener("click", function () {
  btnSearchWord.classList.toggle("active");
  btnStartWith.classList.remove("active");
});
btnReverse.addEventListener("click", function () {
  btnReverse.classList.toggle("active");
  isReversed = !isReversed;
  filterFunc();
});
input.addEventListener("input", filterFunc);
