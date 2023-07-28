//1 Declare an empty array;
const newEmptyArray = Array()
const newEmptyArrayTwo = []
//2 Declare an array with more than 5 number of elements
const arrayWithMoreThanFiveNumbers = [0,1,2,3,4,5,6]
//3. Find the length of your array
console.log(arrayWithMoreThanFiveNumbers.length)
//4 Get the first item, the middle item and the last item of the array
let middleItem = Math.round(((arrayWithMoreThanFiveNumbers.length)/2))
console.log(arrayWithMoreThanFiveNumbers[0], arrayWithMoreThanFiveNumbers[middleItem],arrayWithMoreThanFiveNumbers[arrayWithMoreThanFiveNumbers.length - 1])
//5 Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ['word', 3, true, 'hoUse', 5, false]
console.log(mixedDataTypes.length)
//6 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
//7 Print the array using console.log()
console.log(itCompanies)
//8 Print the number of companies in the array
console.log(itCompanies.length)
//9 Print the first company, middle and last company
let middleCompany = Math.round((itCompanies.length - 1)/2)
console.log(itCompanies[0],itCompanies[middleCompany], itCompanies[itCompanies.length - 1])
//11 Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase())
//12 Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies.slice(0,6)} and ${itCompanies[itCompanies.length - 1]} are big it companies`)
//13 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let company = 'IBM'
let indexOfCompany = itCompanies.indexOf(company)
console.log(itCompanies.includes(company) ? itCompanies[indexOfCompany] : 'company is not found')
//14 Filter out companies which have more than one 'o' without the filter method
let stringitCompanies = itCompanies.toString()
console.log(stringitCompanies.match(/\oo/gi))
//15 Sort the array using sort() method
// console.log(itCompanies.sort())
//16 Reverse the array using reverse() method
// console.log(itCompanies.reverse())
//17 Slice out the first 3 companies from the array
// console.log(itCompanies.slice(0,3))
//18 Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length-3,itCompanies.length))
//19 Slice out the middle IT company or companies from the array
console.log(itCompanies.length)
if (itCompanies.length%2) {
    console.log(itCompanies[Math.round((itCompanies.length - 1)/2)])
} else {
    console.log(itCompanies[Math.round((itCompanies.length - 2)/2)],itCompanies[Math.round((itCompanies.length - 1)/2)])
}
//20 Remove the first IT company from the array
// console.log(itCompanies.shift())
//21 Remove the middle IT company or companies from the array
// console.log(itCompanies.length)
// if (itCompanies.length%2) {
//     console.log(itCompanies.splice((itCompanies.length - 1)/2, 1))
// } else {
//     console.log(itCompanies.splice((itCompanies.length - 1)/2, 2))
// }
//22 Remove the last IT company from the array
// console.log(itCompanies.pop())
//23 Remove all IT companies
// itCompanies.splice(0, itCompanies.length)
// console.log(itCompanies)             

//Exercise: Level 2
//1 Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
console.log(countries)
//2 First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.split(' ')
console.log(words.length)
//3 In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//add 'Meat' in the beginning of your shopping cart if it has not been already added
if (shoppingCart.includes('Meat')) {
    console.log('it already got meat')
} else {
    shoppingCart.unshift('Meat')
}
//add Sugar at the end of you shopping cart if it has not been already added
if (shoppingCart.includes('Sugar')) {
    console.log('it already got Sugar')
} else {
    shoppingCart.unshift('Sugar')
}
//remove 'Honey' if you are allergic to honey
// let isAllergic = prompt('Are you allergic:', 'yes or no').toLowerCase()
// if (isAllergic == 'yes') {
//     console.log('you allergic to Honey')
// } else if (isAllergic == 'no') {
//     shoppingCart.unshift('Honey')
//     console.log('Honey added to cart')
// }
// modify Tea to 'Green Tea'
console.log(shoppingCart.indexOf('Tea'))
let teaIndex = shoppingCart.indexOf('Tea')
if (shoppingCart.includes('Tea')) {
    shoppingCart.splice(teaIndex, 1 ,'Green Tea')
} else {
    console.log('There is no tea')
}
//4 In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

console.log(countries.includes('Ethiopia') ? 'ETHIOPIA': countries.unshift('Ethiopia'))
//5 In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

if(webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess')
} else {
    webTechs.unshift('Sass')
    console.log(webTechs)
}
//6.Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)
// Exercise: Level 3
//1 The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 22]
//Sort the array and find the min and max age
ages.sort()
console.log(ages[0], ages[ages.length -1])
//Find the median age(one middle item or two middle items divided by two)
if (ages.length%2) {
    console.log(ages[Math.round((ages.length - 1)/2)])
} else {
    let result = ages[Math.round((ages.length - 2)/2)] + ages[Math.round((ages.length - 1)/2)]
    console.log(result/2)
}
//Find the range of the ages(max minus min)
console.log(ages[ages.length -1] - ages[0])
//Compare the value of (min - average) and (max - average), use abs() method 
let averageOfAges = ages[Math.round((ages.length - 1)/2)]
console.log(Math.abs(ages[0] - averageOfAges))
//2.Slice the first ten countries from the countries array
// console.log(countries.slice(0, 10))
//3. Find the middle country(ies) in the countries array
let middleCountry = countries[Math.round((countries.length - 1)/2)]
if (countries.length%2) {
    console.log(middleCountry)
} else {
    console.log(countries[Math.round((countries.length - 2)/2)], middleCountry)
}
//4 Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let firstArr = []
let secondArr = []
if (countries.length%2) {
    firstArr = countries.slice(0, Math.round((countries.length)/2))
    secondArr = countries.slice((countries.length + 1)/2, (countries.length))
    console.log(firstArr, secondArr)
} else {
    firstArr = countries.slice(0, (countries.length - 1)/2)
    secondArr = countries.slice((countries.length - 1)/2, (countries.length))
    console.log(firstArr, secondArr)
}

