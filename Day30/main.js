const countriesInfo = document.querySelector(".countriesInfo");
const input = document.querySelector("input");
const nameBtn = document.querySelector(".nameBtn");
const capitalBtn = document.querySelector(".capitalBtn");
const populationBtn = document.querySelector(".populationBtn");

let sortingOrder = "asc";

const createCountryInfo = (filterValue = "") => {
  countriesInfo.innerHTML = "";
  let filteredCountries = countries_data.slice();

  if (nameBtn.classList.contains("active")) {
    for (const country of countries_data) {
      if (country.name.toLowerCase().includes(filterValue.toLowerCase())) {
        createElement(country);
      }
    }
  } else if (capitalBtn.classList.contains("active")) {
    for (const country of countries_data) {
      if (
        country.capital &&
        country.capital.toLowerCase().includes(filterValue.toLowerCase())
      ) {
        createElement(country);
      }
    }
  } else if (populationBtn.classList.contains("active")) {
    filteredCountries.sort((a, b) => {
      return sortingOrder === "asc"
        ? a.population - b.population
        : b.population - a.population;
    });
  } else {
    for (const country of countries_data) {
      if (country.languages && input.value)
        for (let i = 0; i < country.languages.length; i++) {
          if (
            country.languages[i]
              .toLowerCase()
              .includes(filterValue.toLowerCase())
          ) {
            createElement(country);
          }
        }
    }
  }
  for (const country of filteredCountries) {
    if (country.name.toLowerCase().includes(filterValue.toLowerCase())) {
      createElement(country);
    }
  }
};
const createElement = (country) => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const h1 = document.createElement("h1");
  const pCapital = document.createElement("p");
  const pLanguage = document.createElement("p");
  const pPopulation = document.createElement("p");
  img.src = country.flag;
  h1.textContent = country.name;
  pCapital.textContent = `Capital: ${country.capital}`;
  pLanguage.textContent = `Language: ${country.languages}`;
  pPopulation.textContent = `Population: ${country.population}`;
  div.appendChild(img);
  div.appendChild(h1);
  div.appendChild(pCapital);
  div.appendChild(pLanguage);
  div.appendChild(pPopulation);
  countriesInfo.appendChild(div);
};

input.addEventListener("input", (event) => {
  createCountryInfo(event.target.value);
});

// Initial call to populate the countries list
createCountryInfo();
nameBtn.addEventListener("click", function () {
  nameBtn.classList.toggle(`active`);
  capitalBtn.classList.remove("active");
  populationBtn.classList.remove("active");
  createCountryInfo(input.value);
});

capitalBtn.addEventListener("click", function () {
  capitalBtn.classList.toggle("active");
  nameBtn.classList.remove("active");
  populationBtn.classList.remove("active");
  createCountryInfo(input.value);
});

populationBtn.addEventListener("click", function () {
  populationBtn.classList.toggle("active");
  capitalBtn.classList.remove("active");
  nameBtn.classList.remove("active");
  createCountryInfo();
});
