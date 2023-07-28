//1 Display the countries array as a table
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
console.table(countries)  
//2 Display the countries object as a table
console.table(countriesBig)  
//3 Use console.group() to group logs

// console.group('Consoles')
// console.table(countries)
// console.table(countriesBig)  
// console.groupEnd()

// Exercises:Level 2
//1 10 > 2 * 10 use console.assert()

console.assert(10>2*10)

//2 Write a warning message using console.warn()
console.warn('this is warning')
//3 Write an error message using console.error()
console.error('this is error')
//Exercises:Level 3
//1 Check the speed difference among the following loops: while, for, for of, forEach
console.time('Regular for loop')
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1])
}
console.timeEnd('Regular for loop')

console.time('for of loop')
for (const [name, city] of countries) {
  console.log(name, city)
}
console.timeEnd('for of loop')

console.time('forEach loop')
countries.forEach(([name, city]) => {
  console.log(name, city)
})
console.timeEnd('forEach loop')
