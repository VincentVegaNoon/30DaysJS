//1 Create an empty object called dog
const dog = {}
//2 Print the the dog object on the console
console.log(dog)
//3 Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'burek'
dog.legs = 4
dog.color = 'white'
dog.age = '3'
dog.bark = function () {
    return 'woof woof'
}
//4 Get name, legs, color, age and bark value from the dog object
const valuesOfDog = Object.values(dog)
console.log(valuesOfDog)
//5 Set new properties the dog object: breed, getDogInfo
dog.breed = 'labrador'
dog.getDogInfo = function () {
    return `${this.name} got ${this.legs} he is ${this.color}`
}
console.log(dog.getDogInfo())
// Exercises: Level 2
//1 Find the person who has many skills in the users object.
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}
// const values = Object.values(users)
// console.log(values[0].skills)

const manySkills = () => {
    let newArr = []
    const values = Object.values(users)
    const keys = Object.keys(users)
    for (let i = 0; i < keys.length; i++) {
        if (newArr.length < 1) {
            newArr.push([keys[i], values[i].skills])
        } else if (values[i].skills.length > newArr[0][1].length) {
            newArr = []
            newArr.push([keys[i], values[i].skills])
        }
    }
    return newArr
}
console.log(manySkills())

//2 Count logged in users, count users having greater than equal to 50 points from the following object.

const CheckOnlineStatus = () => {
    const values = Object.values(users)
    const keys = Object.keys(users)
    const newArr = []
    for (let i = 0; i < keys.length; i++) {
        if (values[i].isLoggedIn) {
            newArr.push([keys[i], values[i].isLoggedIn])
        }
    }
    return newArr.length
}
console.log(CheckOnlineStatus())

const userPoints = () => {
    const values = Object.values(users)
    const keys = Object.keys(users)
    const newArr = []
    for (let i = 0; i < keys.length; i++) {
        if (values[i].points >= 50) {
            newArr.push([keys[i], values[i].points])
        }
    }
    return newArr.length
}
console.log(userPoints())
//3 Find people who are MERN stack developer from the users object
const skillsMern = ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node']

console.log(skillsMern.includes('MongoDB'))

const mernDevelopers = () => {
    const values = Object.values(users)
    const keys = Object.keys(users)
    const newArr = []
    const mernStack = ['MongoDB', 'Express', 'React', 'Node']
    for (let i = 0; i < keys.length; i++) {
        let skillstack = values[i].skills
        if (mernStack.every(i => skillstack.includes(i))) {
            newArr.push(keys[i])
        }
    }
    return newArr
}
console.log(mernDevelopers())
//4 Set your name in the users object without modifying the original users object
const copyUsers = Object.assign(users)
const values = Object.values(copyUsers)
// console.log(keysOfkeys)
copyUsers.Jan = {
    ...values[0]
}
copyUsers.Jan.email = 'jan@jan.com'
// for (let i = 0;i < keys.length  ;i++) {
//     copyUsers.Jan.keys[i] = ''
// }
// console.log(copyUsers)
//5 Get all keys or properties of users object


const keysOfUsers = Object.keys(users)
const valuesOfUsers = Object.values(users)
let keyKeys = Object.values(valuesOfUsers[0])
console.log(keyKeys)
const getAllKeys = () => {
    const newArr = []
    const keysOfUsers = Object.keys(users)
    const valuesOfUsers = Object.values(users)
    for (let i = 0; i < valuesOfUsers.length; i++) {
        let keyKeys = Object.keys(valuesOfUsers[i])
        newArr.push([keysOfUsers[i], keyKeys])
    }
    return newArr
}
console.log(getAllKeys())
//6 Get all the values of users object

const getAllValues = () => {
    const newArr = []
    const keysOfUsers = Object.keys(users)
    const valuesOfUsers = Object.values(users)
    for (let i = 0; i < valuesOfUsers.length; i++) {
        let keyKeys = Object.values(valuesOfUsers[i])
        newArr.push([keysOfUsers[i], keyKeys])
    }
    return newArr
}
console.log(getAllValues())
//7 Use the countries object to print a country name, capital, populations and languages.


console.log(countries.length)
const countriesInfo = () => {
    const newArr = []
    for (let i = 0; i < countries.length; i++) {
        newArr.push([countries[i].name, countries[i].capital, countries[i].population, countries[i].languages])
    }
    return newArr
}
console.log(countriesInfo())

//Exercises: Level 3
//1 Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
    firstName: 'Adam',
    lastName: 'Kowalski',
    incomes: [1000, 3000, 4000],
    expenses: [1000, 4000],
    totalIncome() {
        let result = 0
        for (const income of this.incomes) {
            result += income
        }
        return result
    },
    totalExpense() {
        let result = 0
        for (const expense of this.expenses) {
            result += expense
        }
        return result
    },
    accountInfo() {
        return `${this.firstName} ${this.lastName} get ${this.totalIncome()} and spend ${this.totalExpense()}`
    },
    addIncome(add = 0) {
        if (typeof add === 'number') {
            this.incomes.push(add)
        }
        return `${add} income added`
    },
    addExpense(add = 0) {
        if (typeof add === 'number') {
            this.expenses.push(add)
        }
        return `${add} expenses added`
    },
    accountBalance() {
        let result = this.totalIncome() - this.totalExpense()
        return `${result} its your account balance`
    }
}
console.log(personAccount.accountBalance())

//2 **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
//Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
const usersBase = [{
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const signUp = (username = 'Jan', password = '123123') => {
    function generateId() {
        let string = '1234567890abcdefghijklmoprtsuwyz'
        let id = ''
        for (let i = 0; i < 6; i++) {
            let a = string.charAt(Math.floor(Math.random() * (string.length - 1)))
            id += a
        }
        return id
    }

    function createdTime() {
        const now = new Date()
        const month = now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1
        return `${now.getDate()}/${month}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()} ${now.getHours() < 13 ? 'AM' : 'PM'}`
    }
    let emailGenerate = `${username}@${username}.com`
    let addUser = {
        _id: generateId(),
        username: username,
        email: emailGenerate,
        password: password,
        createdAt: createdTime(),
        isLoggedIn: false,
    }
    return usersBase.push(addUser)
}
signUp()
console.log(usersBase)
//b. Create a function called signIn which allows user to sign in to the application

const signIn = (username = 'Martha', password = '123222') => {
    for (const user of usersBase) {
        if (user.username === username && user.password === password) {
            user.isLoggedIn = true
            return `${username} you are logged in`
        }
    }
    return `Wrong username or password`
}
signIn()
console.log(signIn())
//3 The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product.
const products = [{
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [{
                userId: 'fg12cy',
                rate: 5
            },
            {
                userId: 'zwf8md',
                rate: 4.5
            }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{
            userId: 'fg12cy',
            rate: 5
        }],
        likes: ['fg12cy']
    }
]

// const rateProduct = () => {
//     let username = prompt('Enter your username', '')
//     let password = prompt('Enter your password', '')
//     for (let user of usersBase) {
//         if (user.username === username && user.password === password){
//             let idOfUserName = user._id
//             let productAsk = prompt('Enter product to rate', '')
//            for (let product of products) {
//                 if (product.name === productAsk) {
//                     let rate = prompt('Enter your rate of product', '')
//                     product.ratings.push({userId: idOfUserName, rate: parseFloat(rate)})
//                 }
//            } 
//         }
//     }
// }
// console.log(rateProduct())
// console.log(products)
//b. Create a function called averageRating which calculate the average rating of a product
const averageRating = (productName = 'mobile phone') => {
    let newArr = []
    let sum = 0
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === productName) {
            if (products[i].ratings.length > 0) {
                for (let j = 0; j < products[i].ratings.length; j++) {
                    newArr.push(products[i].ratings[j].rate)
                }
            } else {
                return 'its not rated yet'
            }
        }
    }
    for (const elem of newArr) {
        sum += elem
    }
    return sum / newArr.length
}
console.log(averageRating())
//4 Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

const likeProduct = () => {
    let username = prompt('Enter your username', '')
        let password = prompt('Enter your password', '')
        for (let user of usersBase) {
            if (user.username === username && user.password === password){
                let idOfUserName = user._id
                let productAsk = prompt('Enter product to like', '')
               for (let product of products) {
                    if (product.name === productAsk) {
                        if (product.likes.includes(idOfUserName)) {
                            let a = product.likes.indexOf(idOfUserName)
                            product.likes.splice(a,1)
                        } else {
                            product.likes.push(idOfUserName)
                        }     
                    }
               } 
            }
        }
    }
    console.log(likeProduct())
    console.log(products)