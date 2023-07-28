//1 Declare a function fullName and it print out your full name.
//2 Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.


const fullName = (firstNae = 'Jan', lastName = 'Kowalski') => {
    return `${firstNae} ${lastName}`
}
console.log(fullName('Adam', 'Nowak'))

//3 Declare a function addNumbers and it takes two two parameters and it returns sum.
const addNumbers = (numOne = 1, numTwo = 1) => {
    return numOne + numTwo
}
console.log(addNumbers(5, 6))
//4 An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

const areaOfRectangle = (length = 2, width = 3) => {
    return length * width
}
console.log(areaOfRectangle(4, 5))
//5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

const perimeterOfRectangle = (length = 3, width = 4) => {
    return 2 * (length + width)
}
console.log(perimeterOfRectangle(3, 8))
//6 A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

const volumeOfRectPrism = (length = 3, width = 4, height = 5) => {
    return length * width * height
}
console.log(volumeOfRectPrism())
//7 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

const areaOfCircle = (r = 5) => {
    let pi = 3.14
    return pi * r * r
}
console.log(areaOfCircle())
//8 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

const circumferenceOfCircle = (r = 4) => {
    let pi = 3.14
    return 2 * pi * r
}
console.log(circumferenceOfCircle())
//9 Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

const densityOfSubstance = (mass = 5, volume = 6) => {
    return mass / volume
}
console.log(densityOfSubstance())
//10 Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

const calculatedSpeed = (distance = 100, minutes = 30) => {
    return (distance / minutes) * 60 + 'km per hour'
}
console.log(calculatedSpeed())
//11 Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

const weightOfSubstance = (mass = 10, gravity = 20) => {
    return mass * gravity
}
console.log(weightOfSubstance())
//12 Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

const convertCelsiusToFahrenheit = (tempoC = 30) => {
    return (tempoC * 9 / 5) + 32
}
console.log(convertCelsiusToFahrenheit())

//13 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

const BMICalculator = (weight = 78, height = 1.8) => {
    let bmi = weight / (height * height)
    if (bmi < 18.6) {
        return 'Underweight'
    } else if (bmi < 25) {
        return 'Normal weight'
    } else if (bmi < 30) {
        return 'Overweight'
    } else {
        return 'You are obese'
    }
}
console.log(BMICalculator(100, 1.7))

//14 Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

const checkSeason = (month = 'July') => {
    if (month.includes('September') || month.includes('October') || month.includes('November')) {
        return `the season is Autumn.`
    } else if (month.includes('December') || month.includes('January') || month.includes('February')) {
        return `the season is Winter.`
    } else if (month.includes('March') || month.includes('April') || month.includes('May')) {
        return `the season is Spring.`
    } else if (month.includes('June') || month.includes('July') || month.includes('August')) {
        return `the season is Summer.`
    } else {
        return 'its not a month'
    }
}
console.log(checkSeason())
//15 Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

const findMax = (a = 8, b = 6, c = 7) => {
    let arr = []
    arr.push(a)
    if (b > arr[0]) {
        arr = []
        arr.push(b)
    }
    if (c > arr[0]) {
        arr = []
        arr.push(c)
    }
    return arr.toString()
}
console.log(findMax())

// Exercises: Level 2
//3 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

const printArray = arr => {
    const newArr = []
    // for (let i = 0; i < arr.length; i++) {
    //     console.log(arr[i])
    // }
    for (const elem of arr) {
        console.log(elem)
    }
}
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
printArray(countries)

//4 Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

function showDateTime() {
    const now = new Date()
    let month = now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1
    let day = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate()
    return `${month}/${day}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`
}
console.log(showDateTime())

//5 Declare a function name swapValues. This function swaps value of x to y.

const swapValues = (x = 3, y = 6) => {
    const arr = []
    arr.push(x, y)
    x = arr[1]
    y = arr[0]
    console.log(x, y)
}
swapValues()
//6 Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

const reverseArray = arr => {
    const newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return arr = newArr
}
console.log(reverseArray(countries))
//7 Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

const capitalizeArray = arr => {
    const newArr = []
    for (const elem of arr) {
        newArr.push(elem.toUpperCase())
    }
    return newArr
}
console.log(capitalizeArray(countries))

//8 Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

const addItem = (item = 'Poland') => {
    return countries.push(item)
}
addItem()
console.log(countries)
//9 Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

const removeItem = (index = 3) => {
    return countries.splice(index, 1)
}
removeItem()
console.log(countries)
//10 Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

const sumOfNumbers = (number = 5) => {
    let sum = 0
    for (let i = 0; i <= number; i++) {
        sum += i
    }
    return sum
}
console.log(sumOfNumbers())
//11 Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

const sumOfOdds = (number = 10) => {
    let sum = 0
    for (let i = 0; i <= number; i++) {
        if (i % 2) {
            sum += i
        }
    }
    return sum
}
console.log(sumOfOdds())
//12 Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

const sumOfEven = (number = 10) => {
    let sum = 0
    for (let i = 0; i <= number; i++) {
        if (i % 2 === 0) {
            sum += i
        }
    }
    return sum
}
console.log(sumOfEven())
//13 Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

const evensAndOdds = (positiveInteger = 100) => {
    let countEven = 0
    let countOdd = 0
    for (let i = 0; i <= positiveInteger; i++) {
        if (i % 2 === 0) {
            countEven++
        } else {
            countOdd++
        }
    }
    return `The number of evens are ${countEven}.\nThe number of odds are ${countOdd}`
}
console.log(evensAndOdds())
//14. Write a function which takes any number of arguments and return the sum of the arguments
function sumOfArguments() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
console.log(sumOfArguments(15, 20, 30, 25, 10, 33, 40))
//15 Write a function which generates a randomUserIp.

function randomUserIp() {
    const newArr = []
    for (let i = 0; i < 4; i++) {
        newArr.push((Math.floor(Math.random() * 255) + 1))
    }
    return newArr.join('.')
}
console.log(randomUserIp())
//16 Write a function which generates a randomMacAddress
function randomMacAddress() {
    const newArr = []
    let string = '0123456789ABCDEF'
    let sum = ''
    for (let i = 0; i < 6; i++) {
        let a = string.charAt(Math.floor(Math.random() * (string.length - 1)))
        let b = string.charAt(Math.floor(Math.random() * (string.length - 1)))
        sum = a + b
        newArr.push(sum)
    }
    return newArr.join('-')
}
console.log(randomMacAddress())
//17 Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

function randomHexaNumberGenerator() {
    let hex = '#'
    let string = '0123456789ABCDEF'
    for (i = 0; i < 6; i++) {
        let a = string.charAt(Math.floor(Math.random() * (string.length - 1)))
        hex += a
    }
    return hex
}
console.log(randomHexaNumberGenerator())
//18 Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator() {
    let id = ''
    let string = '0123456789ABCDEFGJKLMNOPRSTUWYZ'
    for (i = 0; i < 7; i++) {
        let a = string.charAt(Math.floor(Math.random() * (string.length - 1)))
        let b = Math.floor(Math.random() * 2)
        if (b) {
            id += a.toLowerCase()
        } else {
            id += a
        }
    }
    return id
}
console.log(userIdGenerator())
// Exercises: Level 3
//1 Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

function userIdGeneratedByUser(itemOne = prompt('number of characters:'), itemSecond = prompt('number of ids:')) {
    let newArr = []
    let id = ''
    let string = '0123456789ABCDEFGJKLMNOPRSTUWYZ'
    for (let j = 0; j < itemSecond; j++) {
        for (i = 0; i < itemOne; i++) {
            let a = string.charAt(Math.floor(Math.random() * (string.length - 1)))
            let b = Math.floor(Math.random() * 2)
            if (b) {
                id += a.toLowerCase()
            } else {
                id += a
            }
        }
        newArr.push(id)
        id = ''
    }
    return newArr
}
// console.log(userIdGeneratedByUser())

//2 Write a function name rgbColorGenerator and it generates rgb colors.

function rgbColorGenerator() {
    const newArr = []
    for (let i = 0; i < 3; i++) {
        let a = Math.floor(Math.random() * 256)
        newArr.push(a)
    }
    return `rgb(${newArr[0]},${newArr[1]},${newArr[2]})`
}
console.log(rgbColorGenerator())
//3 Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

function arrayOfHexaColors(number = 5) {
    let newArr = []
    let hex = '#'
    let string = '0123456789ABCDEF'
    for (let j = 0; j < number; j++) {
        for (i = 0; i < 6; i++) {
            let a = string.charAt(Math.floor(Math.random() * (string.length - 1)))
            hex += a
        }
        newArr.push(hex)
        hex = '#'
    }
    return newArr
}
console.log(arrayOfHexaColors())
//4 Write a function arrayOfRgbColors which return any number of RGB colors in an array.
const arrayOfRgbColors = (number = 5) => {
    let newArr = []
    const rgbArr = []
    for (let j = 0; j < number; j++) {
        for (let i = 0; i < 3; i++) {
            let a = Math.floor(Math.random() * 256)
            newArr.push(a)
        }
        rgbArr.push(`rgb(${newArr[0]},${newArr[1]},${newArr[2]})`)
        newArr = []
    }
    return rgbArr
}
console.log(arrayOfRgbColors())
//5 Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

const hexToRgb = hex =>
    hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))
//6 Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
}).join('')
//7 Write a function generateColors which can generate any number of hexa or rgb colors.
const generateColors = (type = 'hexa', number = 3) => {
    if (type === 'hexa') {
        let newArr = []
        let hex = '#'
        let string = '0123456789ABCDEF'
        for (let j = 0; j < number; j++) {
            for (i = 0; i < 6; i++) {
                let a = string.charAt(Math.floor(Math.random() * (string.length - 1)))
                hex += a
            }
            newArr.push(hex)
            hex = '#'
        }
        return newArr
    } else if (type === 'rgb') {
        let newArr = []
        const rgbArr = []
        for (let j = 0; j < number; j++) {
            for (let i = 0; i < 3; i++) {
                let a = Math.floor(Math.random() * 256)
                newArr.push(a)
            }
            rgbArr.push(`rgb(${newArr[0]},${newArr[1]},${newArr[2]})`)
            newArr = []
        }
        return rgbArr
    }
}
console.log(generateColors('rgb', 3))
//8 Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

const shuffleArray = arr => {
    const newarr = []
    let lengthOfArr = arr.length
    for (let i = 0; i < lengthOfArr; i++) {
        let a = Math.floor(Math.random() * 2)
        let item = arr.splice(Math.floor(Math.random() * (arr.length - 1)), 1)
        if (a) {
            newarr.push(item.toString())
        } else {
            newarr.unshift(item.toString())
        }
    }
    return newarr
}
console.log(shuffleArray(countries))
//9 Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

const factorial = (number = 6) => {
    let sum = 1
    for (let i = 1; i <= number; i++) {
        console.log(i)
        sum *= i
    }
    return sum
}
console.log(factorial())
//10 Call your function isEmpty, it takes a parameter and it checks if it is empty or not

const isEmpty = (parametr = '') => {
    if (parametr.length < 1) {
        return 'Its empty'
    } else {
        return 'Its not empty'
    }
}
console.log(isEmpty())
//11 Call your function sum, it takes any number of arguments and it returns the sum.

const sum = (...args) => {
    let sum = 0
    for (const elem of args) {
        sum += elem
    }
    return sum
}
console.log(sum(1, 2, 3, 4))
//12 Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

const sumOfArrayItems = arr => {
    let sum = 0
    for (const elem of arr) {
        if (typeof elem === 'number') {
            sum += elem
        } else {
            return 'its not a number'
        }
    }
    return sum
}

const arrayOfNumbers = [1, 2, 3, 4, 5, 6]
console.log(sumOfArrayItems(arrayOfNumbers))

//13 Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

const average = arr => {
    let sum = 0
    for (const elem of arr) {
        if (typeof elem === 'number') {
            sum += elem

        } else {
            return 'its not a number'
        }
    }
    return sum / arr.length
}
console.log(average(arrayOfNumbers))
//14 Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

const modifyArray = arr => {
    if (arr.length >= 5) {
        let a = arr[4].toUpperCase()
        arr[4] = a
    }
    return arr
}
countriesArray = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland', 'Poland']
console.log(modifyArray(countriesArray))
countriesArray.length
//16 Write a functions which checks if all items are unique in the array.


const uniqueArray = arr => {
    let newArr = []
    for (let i = 0; i < arr.length; i++)
        if (newArr.length < 1) {
            newArr.push(arr[i])
        } else if (newArr.includes(arr[i])) {
        return 'Not all items are unique in array'
    } else {
        newArr.push(arr[i])
    }
    return 'all items are unique'
}
let uniqueArr = ['tree',1, 2, 3, 5, 6, 7, 8, 9]
console.log(uniqueArray(uniqueArr))

//17 Write a function which checks if all the items of the array are the same data type.

const checkArrDataType = arr => {
    let a = typeof arr[0]
    console.log(a)
    for (let i = 1; i < arr.length;i++) {
        if(a === typeof arr[i]) {
        }
        else {
            return 'all the items of the array are not the same data type'
        }
    }
    return 'all the items of the array are the same data type'
}
console.log(checkArrDataType(uniqueArr))
//18 JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

const isValidVariable = (variable = 'tree$') => {
    let regex = /[#!%^&*()-+='";:.,><?]/g
    if (variable.match(regex)) {
        return `${variable} is invalid`
    } else {
        return `${variable} is valid`
    }
}
// variable = 'tree$%'
// let regex = /[%^&*(),.?';:"-=+]/g
// let found = variable.match(regex)
// console.log(found)
console.log(isValidVariable())
//19 Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
function randomNumbers () {
    const newArr = []
    for (let i = 0; i < 7; i++) {
        let a = Math.floor(Math.random() * 10)
        if (newArr.includes(a)) {
            i--
        } else {
            newArr.push(a)
        }
    }
    return newArr
}
console.log(randomNumbers())
//20 Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

const reverseCountries = arr => {
let newArr = arr
let newArrReversed = []
for (let i = newArr.length -1; i >=0; i--) {
    newArrReversed.push(newArr[i])
}
return newArrReversed
}
const countriesArrayLast = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland', 'Poland']
console.log(reverseCountries(countriesArrayLast))