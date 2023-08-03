//Exercises: Level 1
//1 Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem("firstName", "Jan");
localStorage.setItem("lastName", "Nowak");
localStorage.setItem("age", 22);
console.log(localStorage.getItem("firstName"));
console.log(localStorage.getItem("lastName"));
console.log(localStorage.getItem("age"));
//Exercises: Level 2
//1 Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
const student = {
  firstName: "Mathew",
  lastName: "Borek",
  age: 22,
  skills: ["HTML", "CSS", "JavaScript"],
  country: "Poland",
};
const studentText = JSON.stringify(student, undefined, 4);
localStorage.setItem("student", studentText);
console.log(localStorage.getItem("student"));
//Exercises: Level 3
//1 Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
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
const personText = JSON.stringify(person, undefined, 4);
localStorage.setItem("person", personText);
console.log(localStorage.getItem("person"));
