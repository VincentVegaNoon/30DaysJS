//1 Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = 'Jan'
let lastName = 'Owczarczyk'
let country = 'Poland'
let city = 'Warsaw'
let age = 26
let isMarried = false
console.log(typeof(isMarried))

//2 Check if type of '10' is equal to 10
console.log(typeof('10') == 10)
//3 Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10)
//4 Boolean value is either true or false.
//Write three JavaScript statement which provide truthy value.
let number = 25
let string = 'bla bla'
let thisIstrue = true
//Write three JavaScript statement which provide falsy value.
number = 0
let something = ''
let thisIsfalse = false
//5 Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
let python = 'python'
let jargon = 'jargon'

console.log(python.length !== jargon.length)
//6 Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

console.log(!python.includes('on') && !jargon.includes('on'))
//7 Use the Date object to do the following activities
//What is the year today?
console.log(new Date().getFullYear())
//What is the month today as a number?
console.log(new Date().getMonth() + 1)
// What is the date today?
console.log(new Date().getDate())
// What is the day today as a number?
console.log(new Date().getDay() + 1)
// What is the hours now?
console.log(new Date().getHours())
// What is the minutes now?
console.log(new Date().getMinutes())
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(Date.now())

//Exercises: Level 2
//1 Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// let number = prompt('Enter number', 'number goes here')

// let baseTriangle = prompt('Enter number', 'number goes here')
// let heightTriangle = prompt('Enter number', 'number goes here')
// let areaOfTriangle = 0.5 * baseTriangle * heightTriangle3

//2 Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// let aSide = prompt('Enter side a:', '')
// let bSide = prompt('Enter side b:', '')
// let cSide = prompt('Enter side c:', '')
// console.log('The perimeter of the triangle is ' + (parseInt(aSide) + parseInt(bSide) + parseInt(cSide)))
//3 Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// let lengthTraingle = parseInt(prompt('Enter lengthTraingle:', ''))
// let widthTraingle = parseInt(prompt('Enter side widthTraingle:', ''))

// console.log('perimeter = ' + 2 * (lengthTraingle + widthTraingle))

//4 Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const PI = Math.PI
// let radius = parseInt(prompt('Enter radius:', ''))
// console.log('area = ' + PI * radius * radius)
// console.log('circumference of a circle = ' + 2 * PI * radius)
//9 Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// let hours = parseInt(prompt('Enter hours:', ''))
// let ratePerHour = parseInt(prompt('Enter rate per hour:', ''))
// console.log(hours * ratePerHour)

//10 If the length of your name is greater than 7 say, your name is long else say your name is short.

firstName.length > 7 
? console.log(`${firstName} your name is long`) 
: console.log(`${firstName} your name is short`)

//11 Compare your first name length and your family name length and you should get this output.
firstName.length > lastName.length 
? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`) 
: console.log(`Your last name, ${lastName} is longer than your first name, ${firstName}`)

//12 Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge. 
 let myAge = 25
 let yourAge = 250
 myAge > yourAge 
 ? console.log(`I am ${myAge - yourAge} older than you`)
 : console.log(`You are ${yourAge - myAge} older than me`)
 //13 Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

//  let currentYear = new Date().getFullYear()
//  let bithYear = parseInt(prompt('Enter your birth year:', ''))
//  currentYear - bithYear > 18
//  ? console.log(`You are ${currentYear - bithYear} You are old enough to drive`)
//  : console.log(`You are ${currentYear - bithYear} You will be allowed to drive after ${18 - (currentYear - bithYear)} years`)
 //14 Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

//  let yearsYouLive = parseInt(prompt('Enter number of years you live:', ''))
// console.log(`You lived ${yearsYouLive * 365 * 24 * 60 * 601001} seconds`)

//15 Create a human readable time format using the Date time object
const now = new Date()
console.log(`${now.getFullYear()}-${now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1}-${now.getDate() < 10 ? '0' +now.getDate() : now.getDate()} ${now.getHours()}:${now.getMinutes()}`)

console.log(`${now.getDate() < 10 ? '0' + now.getDate(): now.getDate()}-${now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1): now.getMonth() + 1}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`)

//Exercises: Level 3
//1 Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
console.log(`${now.getFullYear()}-${now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1}-${now.getDate() < 10 ? '0' +now.getDate() : now.getDate()} ${now.getHours()}:${now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()}`)