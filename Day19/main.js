//1 Create a closure which has one inner function
function outerFunction() {
  let count = 0;
  function innerFunction() {
    count++;
    return count;
  }
  return innerFunction;
}
const exampleFunc = outerFunction();
console.log(exampleFunc());
console.log(exampleFunc());
//Exercises: Level 2
//1 Create a closure which has three inner functions

function FunctionWithThree() {
  let count = 10;
  function plusOne() {
    count++;
    return count;
  }
  function multiply() {
    count *= 2;
    return count;
  }
  function divide() {
    count /= 2;
    return count;
  }
  return {
    plusOne: plusOne(),
    multiply: multiply(),
    divide: divide(),
  };
}
const showFunc = FunctionWithThree();
console.log(showFunc.divide);
//Exercises: Level 3
//1 Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
function personAccount() {
  let firstname = "Jan";
  let lastname = "Koalski";
  let incomes = [{ work: 500, bonus: 100, another: 300 }];
  let expenses = [{ food: 100, transport: 200, other: 50 }];
  function totalIncome() {
    return incomes.reduce((total, incomeObject) => {
      const incomeValues = Object.values(incomeObject);
      return total + incomeValues.reduce((acc, curr) => acc + curr, 0);
    }, 0);
  }
  function totalExpense() {
    return expenses.reduce((total, expenseObject) => {
      const expenseValues = Object.values(expenseObject);
      return total + expenseValues.reduce((acc, curr) => acc + curr, 0);
    }, 0);
  }
  function accountBalance() {
    return totalIncome() - totalExpense();
  }
  function accountInfo() {
    return `Hi ${firstname} ${lastname} your account balance: ${accountBalance()}`;
  }
  return {
    totalIncome: totalIncome(),
    totalExpense: totalExpense(),
    accountBalance: accountBalance(),
    accountInfo: accountInfo(),
  };
}
const personAccountExample = personAccount();
console.log(personAccountExample.accountInfo);
