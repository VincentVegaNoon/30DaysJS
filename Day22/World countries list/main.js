const countriesAPI = "https://restcountries.com/v2/all";
const container = document.querySelector(".container");

async function fetchCountriesInfo() {
  try {
    const response = await fetch(countriesAPI);
    const data = await response.json();

    const countriesInfo = data.reduce((acc, country) => {
      acc.push({
        name: country.name,
      });
      return acc;
    }, []);

    return countriesInfo;
  } catch (error) {
    console.error(error);
    return [];
  }
}

fetchCountriesInfo().then((countriesInfo) => {
  createDivs(countriesInfo);
});

function createDivs(data) {
  for (let i = 0; i < data.length; i++) {
    let div = document.createElement("div");
    div.textContent = data[i].name;
    container.appendChild(div);
  }
}
