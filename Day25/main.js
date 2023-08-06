const btnPopulation = document.querySelector(".population");
const btnLanguages = document.querySelector(".languages");
const graphWrapper = document.querySelector(".graph-wrapper");

const populationGraph = () => {
  let sorted = countries_data.sort(function (a, b) {
    if (a.population < b.population) return 1;
    if (a.population > b.population) return -1;
    return 0;
  });
  const sortedTen = sorted.slice(0, 10);
  let sumOfPopulation = countries_data.reduce(
    (acc, curr) => acc + curr.population,
    0
  );
  graphWrapper.innerHTML = "";
  const worldPopulationPercentage = (sumOfPopulation / sumOfPopulation) * 100;

  const worldGraphSection = document.createElement("section");
  const worldGraphName = document.createElement("p");
  worldGraphName.textContent = "World";
  const worldGraphItem = document.createElement("div");
  worldGraphItem.classList.add("graph-item");
  worldGraphItem.style.width = `${worldPopulationPercentage}%`;
  const worldGraphNumber = document.createElement("p");
  worldGraphNumber.textContent = sumOfPopulation;

  graphWrapper.appendChild(worldGraphSection);
  worldGraphSection.appendChild(worldGraphName);
  worldGraphSection.appendChild(worldGraphItem);
  worldGraphSection.appendChild(worldGraphNumber);

  sortedTen.forEach((country) => {
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
  });
};

const LanguagesGraph = () => {
  const languagesData = countries_data.flatMap((country) => country.languages);
  const languageCounts = languagesData.reduce((acc, language) => {
    acc[language] = (acc[language] || 0) + 1;
    return acc;
  }, {});

  const sortedLanguages = Object.entries(languageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
  graphWrapper.innerHTML = "";
  sortedLanguages.forEach((lang) => {
    const langPercentage = (lang[1] / 100) * 100;
    const graphSection = document.createElement("section");
    const graphName = document.createElement("p");
    graphName.textContent = lang[0];
    const graphItem = document.createElement("div");
    graphItem.classList.add(`graph-item`);
    graphItem.style.width = `${langPercentage}%`;

    const graphNumber = document.createElement("p");
    graphNumber.textContent = lang[1];
    graphWrapper.appendChild(graphSection);
    graphSection.appendChild(graphName);
    graphSection.appendChild(graphItem);
    graphSection.appendChild(graphNumber);
  });
};

btnPopulation.addEventListener("click", populationGraph);
btnLanguages.addEventListener("click", LanguagesGraph);
