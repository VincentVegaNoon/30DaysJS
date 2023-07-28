//Exercises:Level 1
const mySet = new Set()
console.log(mySet)
//2 Create a set containing 0 to 10 using loop
for (let i = 0; i <= 10;i++) {
    mySet.add(i)
}
console.log(mySet)
//3 Remove an element from a set
console.log(mySet.delete(1))
console.log(mySet)
//4 Clear a set
console.log(mySet.clear())
console.log(mySet)
//5 Create a set of 5 string elements from array
const stringArr = ['word', 'dume', 'catch', 'intro', 'cube', 'phoenix', 'dome', 'sunny']
for (let i = 0;i < 5; i++) {
    mySet.add(stringArr[i])
}
console.log(mySet)
//6 Create a map of countries and number of characters of a country
const countries = ['Finland', 'Sweden', 'Norway']
const lengthOfCountries = countries.map(elem => [elem, elem.length])
const map = new Map (lengthOfCountries)
console.log(map)

//Exercises:Level 2
//1 Find a union b
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const c = [...a, ...b]

let B = new Set(b)
let C = new Set(c)

console.log(C)
//2 Find a intersection b
let toIntersection = a.filter((num) => B.has(num))
let intersectionSet = new Set(toIntersection)
console.log(intersectionSet)
//3 Find a with b
let toDifference = a.filter((num) => !B.has(num))
let differenceSet = new Set(toDifference)
console.log(differenceSet)

// Exercises:Level 3
//1 How many languages are there in the countries object file.

const howMany = arr => {
    const newArr = new Set(arr.map(elem => elem.languages).reduce((total, arr) => total.concat(arr))).size
    return newArr
}
console.log(howMany(countriesBig))
//2 *** Use the countries data to find the 10 most spoken languages:

const mostSpokenLanguage = (arr,number) => {
const languages = arr.map(elem => elem.languages).reduce((total,arr)=> total.concat(arr))
const langSet = new Set(languages)
const counts = []
for(const elem of langSet) {
    const filteredLang = languages.filter((item) => item === elem)
    counts.push({lang: elem, count: filteredLang.length})
}
let a = counts.sort(function (a,b) {
    if(a.count < b.count) return 1
    if(a.count > b.count) return -1
    return 0
  }).slice(0,number)

return a.map((elem) => [elem.lang, elem.count])
}
console.log(mostSpokenLanguage(countriesBig,3))