//1 Explain the difference between forEach, map, filter, and reduce.
// forEach works only on arrays
//map iterate an array and modify the array and returns new array
//filter filter out items which fullfill conditions and returns new array
//reduce takes accumulator and current as paramers and return single value
//2 Define a callback function before you use it in forEach, map, filter or reduce.
const callback = (n) => {
    return n ** 2
}
//3 Use forEach to console.log each country in the countries array.
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
countries.forEach(elem => console.log(elem))
//4 Use forEach to console.log each name in the names array.
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
names.forEach(elem => console.log(elem))
//5 Use forEach to console.log each number in the numbers array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.forEach(elem => console.log(elem))
//6 Use map to create a new array by changing each country to uppercase in the countries array.
const countriesToUpper = countries.map(elem => elem.toUpperCase())
console.log(countriesToUpper)
//7 Use map to create an array of countries length from countries array.
const countriesLength = countries.map(elem => elem.length)
console.log(countriesLength)
//8 Use map to create a new array by changing each number to square in the numbers array
const numberToSquare = numbers.map(elem => elem * elem)
console.log(numberToSquare)
//9 Use map to change to each name to uppercase in the names array
const namesToUpper = names.map(elem => elem.toUpperCase())
console.log(namesToUpper)
//10 Use map to map the products array to its corresponding prices.
const products = [{
        product: 'banana',
        price: 3
    },
    {
        product: 'mango',
        price: 6
    },
    {
        product: 'potato',
        price: ' '
    },
    {
        product: 'avocado',
        price: 8
    },
    {
        product: 'coffee',
        price: 10
    },
    {
        product: 'tea',
        price: ''
    },
]
const mapProducts = products.map((elem) => [elem.product, elem.price])
console.log(mapProducts)
//11 Use filter to filter out countries containing land.
const countriesContainingLand = countries.filter(country => country.toLowerCase().includes('land'))
console.log(countriesContainingLand)
//12 Use filter to filter out countries having six character.
const countriesSixChars = countries.filter(elem => elem.length === 6)
console.log(countriesSixChars)
//13 Use filter to filter out countries containing six letters and more in the country array.
const countriesSixCharsAndMore = countries.filter(elem => elem.length >= 6)
console.log(countriesSixCharsAndMore)
//14 Use filter to filter out country start with 'E';
const countryStartWithE = countries.filter(elem => elem.toLowerCase().startsWith('e'))
console.log(countryStartWithE)
//15 Use filter to filter out only prices with values.
const productsWithPrices = products.filter(elem => elem.price > 0 ? [elem.product, elem.price] : '')
console.log(productsWithPrices)
//16 Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const stringArr = ['tree', 2, 'car', 'number', 3, 4, 5, 9, true]
const getStringLists = arr => {
    let a = arr.filter(elem => typeof elem === 'string' ? elem : '')
    return arr = a
}
console.log(getStringLists(stringArr))
//17 Use reduce to sum all the numbers in the numbers array.
const sumAllNumbers = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sumAllNumbers)
//18 Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const northEuropeanCountries = countries.reduce((acc, cur) => cur === countries[countries.length - 1] ? acc += ` and ${cur}` : acc += `, ${cur}`)
console.log(northEuropeanCountries)
//19 Explain the difference between some and every
// every check if all items are smillar in one asspect
// some check if some of the elements are smilar in one aspect
//20 Use some to check if some names' length greater than seven in names array
const someGreaterThanSeven = names.some(elem => elem.length > 7)
console.log(someGreaterThanSeven)
//21 Use every to check if all the countries contain the word land

const everyCountryContainLand = countries.every(elem => elem.toLowerCase().includes('land'))
console.log(everyCountryContainLand)
//22 Explain the difference between find and findIndex.
//find return FIRST ELEMENT which satisfies the condition
//findIndex return the POSITION of the first element which satisfies the condition
//23 Use find to find the first country containing only six letters in the countries array
const firstCountryWithSixLetters = countries.find(elem => elem.length === 6)
console.log(firstCountryWithSixLetters)
//24 Use findIndex to find the position of the first country containing only six letters in the countries array
const positionOfFirstCountryWithSixLetters = countries.findIndex(elem => elem.length === 6)
console.log(positionOfFirstCountryWithSixLetters)
//25 Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const findPositionOfNorway = countries.findIndex(elem => elem === 'Norway')
console.log(findPositionOfNorway)
//26 Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const findPositionOfRussia = countries.findIndex(elem => elem === 'Russia')
console.log(findPositionOfRussia)
// Exercises: Level 2
//1 Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const TotalPriceOfProducts = products.filter(elem => elem.price > 0 ? elem.price : '').map(elem => elem.price).reduce((acc, cur) => acc += cur, 0)
console.log(TotalPriceOfProducts)
//2 Find the sum of price of products using only reduce reduce(callback))
const SumPriceOfProducts = products.reduce((acc, cur) => {
    if (typeof cur.price === 'number') {
        acc += cur.price
    }
    return acc
}, 0)
console.log(SumPriceOfProducts)
//3 Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
const categorizeCountries = (pattern = 'land') => {
    return countriesBig.filter(elem => elem.name.includes(pattern))
}
console.log(categorizeCountries())
//4 Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
const firstLetterTimes = () => {
    let string = 'ABCDEFGHIJKLMNOPRSTUWYXZ'
    let newArr = []
    for (let j = 0; j < string.length; j++) {
        newArr.push(countriesBig.filter(elem => elem.name.startsWith(string[j])))
    }
    return newArr
}
console.log(firstLetterTimes())
//5 Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
const getFirstTenCountries = () => {
    let newArr = []
    newArr = countriesBig.slice(0,10).map(elem => elem.name)
    return newArr
}
console.log(getFirstTenCountries())
//6 Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
const getLastTenCountries = () => {
    let newArr = []
    newArr = countriesBig.slice(countriesBig.length - 10, countriesBig.length).map(elem => elem.name)
    return newArr
}
console.log(getLastTenCountries())
//7 Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
const firstLetterTimes2 = () => {
    let string = 'ABCDEFGHIJKLMNOPRSTUWYZ'
    let newArr = []
    for (let j = 0; j < string.length; j++) {
        newArr.push(countriesBig.filter(elem => elem.name.startsWith(string[j])))
    }
    return newArr.map(elem => elem.length > 0 ? [elem[0].name.slice(0,1), elem.length] : elem.length)
}
console.log(firstLetterTimes2())
//Exercises: Level 3
//1 Use the countries information, in the data folder. Sort countries by name, by capital, by population

const sorted = countriesBig.sort(function (a,b) {
    if(a.population < b.population) return - 1
    if(a.population > b.population) return  1
    return 0
})
console.log(sorted)
//2 *** Find the 10 most spoken languages:
const mostSpokenLanguage = () => {
    const newArr = []
    const anotherArr = []
    newArr.push(countriesBig.map(elem => elem.languages))

    console.log(newArr)
    for (let i = 0; i < newArr[0].length;i++) {
        for (let j = 0; j < newArr[0][i].length;j++) {
            anotherArr.push(newArr[0][i][j])
        }
    }
    const anotherArrSet = new Set(anotherArr)
    const counts = []

    for (const l of anotherArrSet) {
        const filteredLang = anotherArr.filter((lng) => lng === l)
        console.log(filteredLang) // ["English", "English", "English"]
        counts.push({ lang: l, count: filteredLang.length })
      }
      let sorted = counts.sort(function (a,b) {
        if(a.count < b.count) return 1
        if(a.count > b.count) return -1
        return 0
      })
      return sorted.slice(0,10)
}
console.log(mostSpokenLanguage())

//3 *** Use countries_data.js file create a function which create the ten most populated countries

const mostPopulatedCountries = (arr, number) => {
    const newARrr = []
let sorted = arr.sort(function (a,b) {
    if(a.population < b.population) return 1
    if (a.population > b.population) return -1
    return 0
})
for (let i = 0;i<number;i++) {
    newARrr.push(sorted[i].name, sorted[i].population)
}
return newARrr
}
console.log(mostPopulatedCountries(countriesBig, 10))