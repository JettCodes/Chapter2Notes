const readLine = require('readline-sync');

let base1= Number(readLine.question("Enter the base: "));
let exp1 = Number(readLine.question("Enter the exponent: "));
let digits = Number(readLine.question("Enter number of digits rounded to:"))
let answer3 = base1 / exp1;
answer3=answer3.toFixed(digits)

console.log(` ${base1} divided by ${exp1} = ${answer3}`);
