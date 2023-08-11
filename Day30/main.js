const countriesInfo = document.querySelector(".countriesInfo");
const input = document.querySelector("input");
const nameBtn = document.querySelector(".nameBtn");
const capitalBtn = document.querySelector(".capitalBtn");
const populationBtn = document.querySelector(".populationBtn");
const graphWrapper = document.querySelector(".graph-wrapper");
const btnPopulation = document.querySelector(".btnPopulation");
const btnLanguages = document.querySelector(".btnLanguages");
const graphsH2 = document.querySelector(".graphsH2");
const h3 = document.querySelector("h3");

// let sortingOrder = "asc";
let isReversed = false;

const createCountryInfo = (filterValue = "") => {
  let filteredCountries = countries_data.slice();
  countriesInfo.innerHTML = "";
  graphWrapper.innerHTML = "";
  let h3count = 0;
  if (nameBtn.classList.contains("active")) {
    if (isReversed) {
      filteredCountries.reverse();
    }
    for (const country of filteredCountries) {
      if (country.name.toLowerCase().includes(filterValue.toLowerCase())) {
        createElement(country);
      }
    }
  } else if (capitalBtn.classList.contains("active")) {
    filteredCountries = filteredCountries.sort((a, b) => {
      if (a.capital && b.capital) {
        return a.capital.localeCompare(b.capital);
      }
      return 0;
    });

    console.log(filteredCountries);
    if (isReversed) {
      filteredCountries.reverse();
    }
    for (const country of filteredCountries) {
      if (
        country.capital &&
        country.capital.toLowerCase().includes(filterValue.toLowerCase())
      ) {
        createElement(country);
      }
    }
  } else if (populationBtn.classList.contains("active")) {
    filteredCountries.sort((a, b) => a.population - b.population);
    if (isReversed) {
      filteredCountries.reverse();
    }
    for (const country of filteredCountries) {
      if (country.name.toLowerCase().includes(filterValue.toLowerCase())) {
        createElement(country);
      }
    }
  } else {
    for (const country of filteredCountries) {
      if (country.languages && input.value) {
        let haveLangMatch = false;
        for (let i = 0; i < country.languages.length; i++) {
          if (
            country.languages[i]
              .toLowerCase()
              .includes(filterValue.toLowerCase())
          ) {
            haveLangMatch = true;
          }
        }
        if (haveLangMatch) {
          createElement(country, h3count);
        }
      }
    }
  }
};
const createElement = (country, h3count) => {
  // h3count += 1;
  // console.log(h3count);
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
  if (btnLanguages.classList.contains("active")) {
    createGraphLang(country);
  } else if (btnPopulation.classList.contains("active")) {
    createGraphPopulation(country);
  }
  // criteriaNumber(h3count);
};

// const criteriaNumber = (h3count) => {
//   h3count;
//   h3.textContent = `${h3count} countries satisfied criteria`;
// };

const createGraphLang = (country) => {
  graphsH2.textContent = "Languages";
  const langPercentage = (country.languages.length / 100) * 100;
  const graphSection = document.createElement("section");
  const graphName = document.createElement("p");
  graphName.textContent = country.name;
  const graphItem = document.createElement("div");
  graphItem.classList.add(`graph-item`);
  graphItem.style.width = `${langPercentage}%`;

  const graphNumber = document.createElement("p");
  graphNumber.textContent = country.languages.length;
  graphWrapper.appendChild(graphSection);
  graphSection.appendChild(graphName);
  graphSection.appendChild(graphItem);
  graphSection.appendChild(graphNumber);
};
const createGraphPopulation = (country) => {
  graphsH2.textContent = "Population";
  let sumOfPopulation = countries_data.reduce(
    (acc, curr) => acc + curr.population,
    0
  );
  const worldPopulationPercentage = (sumOfPopulation / sumOfPopulation) * 100;
  const countryPercentage = (country.population / sumOfPopulation) * 100;
  const graphSection = document.createElement("section");
  const graphName = document.createElement("p");
  graphName.textContent = country.name;
  const graphItem = document.createElement("div");
  graphItem.classList.add(`graph-item`);
  graphItem.style.width = `${countryPercentage}%`;

  const graphNumber = document.createElement("p");
  graphNumber.textContent = country.population;
  graphWrapper.appendChild(graphSection);
  graphSection.appendChild(graphName);
  graphSection.appendChild(graphItem);
  graphSection.appendChild(graphNumber);
};

input.addEventListener("input", (event) => {
  createCountryInfo(event.target.value);
});

createCountryInfo();
nameBtn.addEventListener("click", function () {
  if (nameBtn.classList.contains("active")) {
    nameBtn.classList.toggle(`ascending`);
    nameBtn.classList.toggle(`descending`);
  } else {
    nameBtn.classList.add(`active`);
    nameBtn.classList.add(`ascending`);
  }
  if (nameBtn.classList.contains("descending")) {
    nameBtn.innerHTML = `Name`;
    isReversed = true;
    nameBtn.innerHTML = `Name <i class="fa-solid fa-arrow-up"></i>`;
  } else if (nameBtn.classList.contains("ascending")) {
    nameBtn.innerHTML = `Name`;
    isReversed = false;
    nameBtn.innerHTML = `Name <i class="fa-solid fa-arrow-down"></i>`;
  }
  capitalBtn.classList.remove(...capitalBtn.classList);
  populationBtn.classList.remove(...populationBtn.classList);
  capitalBtn.innerHTML = `Capital`;
  populationBtn.innerHTML = `Population`;
  createCountryInfo(input.value);
});

capitalBtn.addEventListener("click", function () {
  if (capitalBtn.classList.contains("active")) {
    capitalBtn.classList.toggle(`ascending`);
    capitalBtn.classList.toggle(`descending`);
  } else {
    capitalBtn.classList.add(`active`);
    capitalBtn.classList.add(`ascending`);
  }
  if (capitalBtn.classList.contains("descending")) {
    capitalBtn.innerHTML = "Capital";
    isReversed = true;
    capitalBtn.innerHTML = `Capital <i class="fa-solid fa-arrow-up"></i>`;
  } else if (capitalBtn.classList.contains("ascending")) {
    capitalBtn.innerHTML = "Capital";
    isReversed = false;
    capitalBtn.innerHTML = `Capital <i class="fa-solid fa-arrow-down"></i>`;
  }
  nameBtn.classList.remove(...nameBtn.classList);
  populationBtn.classList.remove(...populationBtn.classList);
  nameBtn.innerHTML = "Name";
  populationBtn.innerHTML = "Population";
  createCountryInfo(input.value);
});

populationBtn.addEventListener("click", function () {
  if (populationBtn.classList.contains("active")) {
    populationBtn.classList.toggle(`ascending`);
    populationBtn.classList.toggle(`descending`);
  } else {
    populationBtn.classList.add(`active`);
    populationBtn.classList.add(`ascending`);
  }
  if (populationBtn.classList.contains("descending")) {
    populationBtn.innerHTML = `Population`;
    isReversed = true;
    populationBtn.innerHTML = `Population <i class="fa-solid fa-arrow-up"></i>`;
  } else if (populationBtn.classList.contains("ascending")) {
    populationBtn.innerHTML = `Population`;
    isReversed = false;
    populationBtn.innerHTML = `Population <i class="fa-solid fa-arrow-down"></i>`;
  }
  nameBtn.classList.remove(...nameBtn.classList);
  capitalBtn.classList.remove(...populationBtn.classList);
  nameBtn.innerHTML = "Name";
  capitalBtn.innerHTML = "Capital";
  createCountryInfo(input.value);
});

btnPopulation.addEventListener("click", function () {
  btnPopulation.classList.toggle("active");
  btnLanguages.classList.remove("active");
  createCountryInfo(input.value);
});
btnLanguages.addEventListener("click", function () {
  btnLanguages.classList.toggle("active");
  btnPopulation.classList.remove("active");
  createCountryInfo(input.value);
});
