//Exercises: Level 1
//1 Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// let yourAgePrompt = prompt('Enter your age:', '')
// if (yourAgePrompt >= 18) {
//     console.log('You are old enough to drive.')
// } else {
//     console.log(`You are left with ${18 - yourAgePrompt} years to drive.`)
// }

//2 Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// myAge = 25
// if (yourAgePrompt > myAge) {
//     console.log(`You are ${yourAgePrompt - myAge} years older than me.`)
// } else {
//     console.log(`You are ${myAge - yourAgePrompt} years younger than me.`)
// }

//3 If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

let a = 4
let b = 5
if (a > b) {
    console.log(`${a} is greater than ${b}`)
} else {
    console.log(`${b} is greater than ${a}`)
}
a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${b} is greater than ${a}`)

//4 Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

if (a % 2) {
    console.log(`${a} is odd`)
} else {
    console.log(`${a} is even`)
}

// Exercises: Level 2
//1 Write a code which can give grades to students according to theirs scores:
let score = 99
if (score < 50) {
    console.log('Your grade is F')
} else if (score < 60) {
    console.log('Your grade is D')
} else if (score < 70) {
    console.log('Your grade is C')
} else if (score < 90) {
    console.log('Your grade is B')
} else {
    console.log('Your grade is A')
}
//2 Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
let month = 'August'
if (month.includes('September') ||month.includes('October') || month.includes('November')) {
    console.log('the season is Autumn')
} else if (month.includes('December') ||month.includes('January') || month.includes('February')) {
    console.log('the season is Winter')
} else if (month.includes('March') ||month.includes('April') || month.includes('May')) {
    console.log('the season is Spring')
} else if (month.includes('June') ||month.includes('July ') || month.includes('August')) {
    console.log('the season is Spring')
}
//3 Check if a day is weekend day or a working day. Your script will take day as an input.
let day = prompt('Enter day', '').toLowerCase()

 if (day.includes('monday') || day.includes('tuesday') || day.includes('wednesday') || day.includes('thursday') || day.includes('friday')) {
 console.log(`${day} is a working day`)
 } else if (day.includes('saturday') || day.includes('sunday')) {
    console.log(`${day} is a weekend day`)
 } else {
    console.log(`${day} is not a day`)
 }