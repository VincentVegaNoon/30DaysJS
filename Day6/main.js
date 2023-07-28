//1 Iterate 0 to 10 using for loop, do the same using while and do while loop

// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }

// let i = 0
// while (i <= 10) {
//     console.log(i)
//     i++
// }

// i = 0
// do {
//     console.log(i)
//     i++
// } while (i <= 10)
//2 Iterate 10 to 0 using for loop, do the same using while and do while loop

// for (let i = 10; i >= 0; i--) {
//     console.log(i)
// }

// let i = 10
// while(i >= 0) {
//     console.log(i)
//     i--
// }

// let i = 10
// do {
//     console.log(i)
//     i--
// } while (i >= 0)

//3 Iterate 0 to n using for loop
let n = 6
for (let i = 0; i <= n; i++) {
    console.log(i)
}
//4 Write a loop that makes the following pattern using console.log():
for(let i = 1; i <= 7; i++) {
    let sum = ''
    for(j = 1; j<=i; j++) {
        sum += '#'
    }
    console.log(sum)
}
//5 Use loop to print the following pattern:

for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i*i}`)
}
//6 Using loop print the following pattern
for (let i = -1; i <= 10; i++) {
    if (i == -1) {
        console.log('i i^2 i^3')
    } else {
        console.log(`${i} ${i*i} ${i*i*i}`)
    }
}
//7 Use for loop to iterate from 0 to 100 and print only even numbers

// for (let i = 0; i<=100; i++) {
//     if(i%2 === 0) {
//         console.log(i)
//     }
// }
//8 Use for loop to iterate from 0 to 100 and print only odd numbers

// for (let i = 0; i<= 100; i++) {
//     if(i%2) {
//         console.log(i)
//     }
// }
//10 Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0
for (let i = 0; i <= 100; i++) {
    sum += i
}
console.log(sum)
//11 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumOdd = 0
let sumEven = 0
for (let i = 0; i <= 100; i++) {
    if (i%2 === 0) {
        sumEven += i
    } else if (i%2) {
        sumOdd += i
    }
}
console.log([sumEven, sumOdd])
//13 Develop a small script which generate array of 5 random numbers

let arr = []
for (let i = 0;i < 5; i++) {
   let a = Math.round(Math.random() * 11)
   arr.unshift(a)
}
console.log(arr)
//14 Develop a small script which generate array of 5 random numbers and the numbers must be unique

arr = []
for (let i = 0;i < 5; i++) {
    let a = Math.round(Math.random() * 11)
    if (arr.includes(a)) {
        i--
    } else {
        arr.unshift(a)
    }
 }
 console.log(arr)

 //15 Develop a small script which generate a six characters random id:
arr = []
let string = 'ABCDEFGHIJKLMNOPRTUWYZ1234567890'
for (let i = 0;i < 5; i++) {
    let a = string[Math.round(Math.random() * string.length - 1)]
    if (arr.includes(a)) {
        i--
    } else {
        arr.unshift(a)
    }
 }
 let code = arr.join('')
 console.log(code)
 //Exercises: Level 2
 //1 Develop a small script which generate any number of characters random id:
 arr = []
 let lengthOfId = Math.round(Math.random() * (20 - 5) + 5)
 for (let i = 0;i <= lengthOfId; i++) {
    let a = string[Math.round(Math.random() * string.length - 1)]
        arr.unshift(a)
 }
 let randomId = arr.join('')
 console.log(randomId)
// 2 Write a script which generates a random hexadecimal number.
hexNumber = '0123456789ABCDEF'
let hexadecimalNumber = ''
for (let i = 0; i <= 5; i++) {
    let a = hexNumber[Math.round(Math.random() * (hexNumber.length - 1))]
    if(hexadecimalNumber.length === 0) {
        hexadecimalNumber += '#'
    }
    hexadecimalNumber += a
}
console.log(hexadecimalNumber)
//3 Write a script which generates a random rgb color number.
arr = []
rgb = ''
for(let i = 0; i < 3; i++) {
    let a = Math.round(Math.random() * 256)
    if (rgb.length === 0) {
        rgb += 'rgb(' + a
    } else if (i === 2) {
        rgb += a + ')'
    } else {
        rgb += `,` + a + ','
    }
}
console.log(rgb)
//4 Using the above countries array, create the following new array.
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  arr = []
for(let i = 0; i < countries.length; i++) {
   arr.push(countries[i].toUpperCase())

}
console.log(arr)
//5 Using the above countries array, create an array for countries length'.
arr = []
for (let i = 0; i < countries.length; i++) {
    arr.push(countries[i].length)
}
console.log(arr)
//6 Use the countries array to create the following array of arrays:
arr = []
for (let i = 0; i < countries.length; i++) {
    arr.push([countries[i], countries[i].slice(0,3).toUpperCase(), countries.length])
}
console.log(arr)
//7 In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

arr = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes('land')) {
        arr.push(countries[i])
    }
}
if (arr.length === 0) {
    console.log('All these countries are without land')
}
console.log(arr)
//8 In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
arr = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].endsWith('ia')) {
        arr.push(countries[i])
    }
}
if (arr.length === 0) {
    console.log('These are countries ends without ia')
}
console.log(arr)
//9 Using the above countries array, find the country containing the biggest number of characters.
arr = []
for (let i = 0; i < countries.length; i++) {
    if (arr.length === 0) {
        arr.push(countries[i])
    } else if (countries[i].length > arr[0].length) {
        arr = []
        arr.push(countries[i])
    }
}
console.log(arr)
//10 Using the above countries array, find the country containing only 5 characters.
arr = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length === 5) {
        arr.push(countries[i])
}
}
console.log(arr)
//11 Find the longest word in the webTechs array
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
arr = [] 
for (let i = 0; i < webTechs.length; i++) {
    if (arr.length === 0) {
        arr.push(webTechs[i])
    } else if (webTechs[i].length > arr[0].length) {
        arr = []
        arr.push(webTechs[i])
    }
}
console.log(arr)
//12 Use the webTechs array to create the following array of arrays:
arr = []
for (let i = 0; i < webTechs.length; i++) {
    arr.push(webTechs[i], webTechs[i].length)
} 
console.log(arr)

//13 An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const mernStack = ['MongoDB', 'Express', 'React', 'Node']

mernString = ''
for (let i = 0; i < mernStack.length; i++) {
    mernString += mernStack[i].slice(0,1)
}
console.log(mernString)

//14 Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

for (let i = 0; i < webTechs.length; i++) {
    console.log(webTechs[i])
}
//15 This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
arr = []
fruitArray = ['banana', 'orange', 'mango', 'lemon']
for (let i = fruitArray.length - 1; i >= 0; i--) {
    arr.push(fruitArray[i])
}
fruitArray = arr
console.log(fruitArray)

//16 Print all the elements of array as shown below.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

for (let i = 0; i < fullStack.length; i++) {
    for (let j = 0; j < fullStack[i].length; j++) {
        console.log(fullStack[i][j])
    }
}
//Exercises: Level 3
//1 Copy countries array(Avoid mutation)
let copyCountries = countries
console.log(copyCountries)
//2 Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
copyCountries.push('Algeria')
const sortedCountries = copyCountries.sort()
console.log(sortedCountries)
//3 Sort the webTechs array and mernStack array
webTechs.sort()
mernStack.sort()
for(let i = 0; i > fullStack.length; i++) {
    fullStack[i].sort()
}
//4 Extract all the countries contain the word 'land' from the countries array and print it as array
for (let i = 0; i < countriesLarge.length; i++) {
    if (countriesLarge[i].includes('land')) {
        console.log(countriesLarge[i])
    }
}
//5 Find the country containing the hightest number of characters in the countries array
arr = []
for (let i = 0; i < countriesLarge.length; i++) {
    if (arr.length === 0) {
        arr.push(countriesLarge[i])
    } else if (countriesLarge[i].length > arr[0].length) {
        arr = []
        arr.push(countriesLarge[i])
    } else if (countriesLarge[i].length == arr[0].length) {
        arr.push(countriesLarge[i])
    }
}
console.log(arr)
//7 Extract all the countries containing only four characters from the countries array and print it as array

arr = []
for (let i = 0; i < countriesLarge.length; i++) {
    if (countriesLarge[i].length === 5) {
        arr.push(countriesLarge[i])
}}
console.log(arr)
//8 Extract all the countries containing two or more words from the countries array and print it as array
arr = []
for (let i = 0; i < countriesLarge.length; i++) {
    if (countriesLarge[i].includes(' ')) {
        arr.push(countriesLarge[i])
}}
console.log(arr)
//9 Reverse the countries array and capitalize each country and stored it as an array
arr = []
for (let i = countriesLarge.length - 1; i >= 0; i--) {
    arr.push(countriesLarge[i].toUpperCase())
}
console.log(arr)
