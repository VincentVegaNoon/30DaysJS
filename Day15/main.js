//1 Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  get getFullInfo() {
    const fullName = `${this.name} is ${this.age} years old,${this.color} with ${this.legs} legs`;
    return fullName;
  }
}
const animal1 = new Animal("Burek", 4, "brown", "4");
console.log(animal1.getFullInfo);

//2Create a Dog and Cat child class from the Animal Class.

class Dog extends Animal {
  saySomething() {
    console.log("hau hau");
  }
}

class Cat extends Animal {
  saySomething() {
    console.log("miau miau");
  }
}
const dog1 = new Dog("Burek", 4, "brown", "4");
console.log(dog1.saySomething());
const cat1 = new Cat("Tomcio", 2, "black", "4");
console.log(cat1.saySomething());

//Exercises Level 2
//1 Override the method you create in Animal class
class AnimalTwo extends Animal {
  constructor(name, age, color, legs, gender) {
    super(name, age, color, legs);
    this.name = gender;
  }
}

const animal3 = new AnimalTwo("Burek", 4, "brown", "4", "male");
console.log(animal3.getFullInfo);

//Exercises Level 3
//1 Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount {
  constructor(firstname, lastname, incomes, expenses) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.incomes = incomes;
    this.expenses = expenses;
  }
  get totalIncome() {
    return this.incomes.reduce((total, incomeObject) => {
      const incomeValues = Object.values(incomeObject);
      return total + incomeValues.reduce((acc, curr) => acc + curr, 0);
    }, 0);
  }
  get totalExpense() {
    return this.expenses.reduce((total, expenseObject) => {
      const expenseValues = Object.values(expenseObject);
      return total + expenseValues.reduce((acc, curr) => acc + curr, 0);
    }, 0);
  }
  get accountBalance() {
    return this.totalIncome - this.totalExpense;
  }
  get accountInfo() {
    return `Hi ${this.firstname} ${this.lastname} your account balance: ${this.accountBalance}`;
  }
}
const person = new PersonAccount(
  "Asabeneh",
  "Yetayeh",
  [{ work: 500, bonus: 100, another: 300 }],
  [{ food: 100, transport: 200, other: 50 }]
);
console.log(person.accountBalance);
