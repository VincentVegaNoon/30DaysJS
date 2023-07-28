//1 Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
let annualIncomeString = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
let pattern = /\d+/g
const result = annualIncomeString.match(pattern).reduce((acc, cur) => acc + parseInt(cur),0)
console.log(result)
//2 The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
const points = ['-12', '-4', '-3', '-1', '0', '4', '8']
let patternTwo = /[-]\d+|\d+/g
const resultTwo = points.toString().match(patternTwo)
const distance = resultTwo[0] - resultTwo[resultTwo.length -1]
console.log(distance)
//3 Write a pattern which identify if a string is a valid JavaScript variable
const validvariable = (varialbe) => {
    let pattern = /^(?![0-9])/g
    let patternTwo =/^[a-zA-Z$][a-zA-Z0-9$]*$/
    return patternTwo.test(varialbe)
}

const isValidVariable = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

function is_valid_variable(variableName) {
  return isValidVariable.test(variableName);
}
console.log(is_valid_variable('first_name'))