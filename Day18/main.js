//1 Read the countries API using fetch and print the name of country, capital, languages, population and area.
// const url = "https://restcountries.com/v2/all"; // countries api
// fetch(url)
//   .then((response) => response.json()) // accessing the API data as JSON
//   .then((data) => {
//     // getting the data
//     console.log(
//       data.map((elem) => [
//         elem.name,
//         elem.capital,
//         elem.languages,
//         elem.population,
//         elem.area,
//       ])
//     );
//   })
//   .catch((error) => console.error(error));

const countriesAPI = "https://restcountries.com/v2/all"; // countries api
fetch(countriesAPI)
  .then((response) => response.json()) // accessing the API data as JSON
  .then((data) => {
    // getting the data

    const countriesInfo = data.reduce((acc, country) => {
      acc.push({
        name: country.name,
        capital: country.capital,
        languages: country.languages,
        population: country.population,
        area: country.area,
      });
      return acc;
    }, []);
    console.log(countriesInfo);
    // countriesInfo.forEach((country) => {
    //   console.log("Country:", country.name);
    //   console.log("Capital:", country.capital);
    //   console.log("Languages:", country.languages);
    //   console.log("Population:", country.population);
    //   console.log("Area:", country.area);
    //   console.log("--------------");
    // });
  })
  .catch((error) => console.error(error));

//Exercises: Level 2
//1 Print out all the cat names in to catNames variable.
const catsAPI = "https://api.thecatapi.com/v1/breeds";
fetch(catsAPI)
  .then((response) => response.json())
  .then((data) => {
    const catNames = data.reduce((acc, cat) => {
      acc.push({ name: cat.name });
      return acc;
    }, []);
    console.log(catNames);
  });
// Exercises: Level 3
//1 Read the cats api and find the average weight of cat in metric unit.
fetch(catsAPI)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.map((elem) => [elem.name, elem.weight.metric]));
  });
//2 Read the countries api and find out the 10 largest countries
fetch(countriesAPI)
  .then((response) => response.json()) // accessing the API data as JSON
  .then((data) => {
    const countriesLarge = data.map((elem) => [elem.name, elem.area]);
    console.log(countriesLarge);
    const countriesFiltered = countriesLarge.filter(
      (elem) => elem[1] !== undefined
    );
    // for (let i = 0; i < countriesLarge.length; i++) {
    //   if (typeof countriesLarge[i][1] === "undefined") {
    //     let emptyArea = countriesLarge.indexOf(countriesLarge[i]);
    //     console.log(countriesLarge[i][0]);
    //     countriesLarge.splice(emptyArea, 1);
    //   }
    // }
    let sorted = countriesFiltered.sort(function (a, b) {
      if (a[1] < b[1]) return 1;
      if (a[1] > b[1]) return -1;
      return 0;
    });
    return console.log(sorted.slice(0, 10));
  });

//3 Read the countries api and count total number of languages in the world used as officials.
fetch(countriesAPI)
  .then((response) => response.json()) // accessing the API data as JSON
  .then((data) => {
    let arr = [];
    const abc = data
      .map((elem) => elem.languages)
      .map((elem) => {
        for (let i = 0; i < elem.length; i++) {
          arr.push(elem[i].name);
        }
      });
    const setOfLanguages = new Set(arr);
    console.log(setOfLanguages.size);
  });
