const countriesAPI = "https://restcountries.com/v2/all";
const container = document.querySelector(".container");
const h2 = document.querySelector(".countriesNumber");
const divs = document.querySelectorAll(".container div");

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
  const divs = document.querySelectorAll(".container div");
  h2.textContent = divs.length;
});

function createDivs(data) {
  for (let i = 0; i < data.length; i++) {
    let div = document.createElement("div");
    div.textContent = data[i].name;
    container.appendChild(div);
  }
}
