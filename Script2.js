const readLine = require('readline-sync');

//1

let base1= Number(readLine.question("Enter the first number: "));
let exp1 = Number(readLine.question("Enter the second number: "));
let answer3 = base1 + exp1;
console.log(` ${base1} + ${exp1} = ${answer3}`);

//2

let base1= Number(readLine.question("Enter the first number: "));
let exp1 = Number(readLine.question("Enter the second number: "));
let answer3 = base1 - exp1;
console.log(` ${base1} - ${exp1} = ${answer3}`);


//3

let base1= Number(readLine.question("Enter the first number: "));
let exp1 = Number(readLine.question("Enter the second number: "));
let answer3 = base1 * exp1;
console.log(` ${base1} x ${exp1} = ${answer3}`);

//4

let base1= Number(readLine.question("Enter the first number: "));
let exp1 = Number(readLine.question("Enter the second number: "));
let answer3 = base1 / exp1;
console.log(` ${base1} divided by ${exp1} = ${answer3}`);

//5

let base1= Number(readLine.question("Enter the first number: "));
let exp1 = Number(readLine.question("Enter the second number: "));
let answer3 = base1 % exp1;
console.log(` ${base1} divided by ${exp1} has a remainder of ${answer3}`);

//6

let First1= (readLine.question("Enter First name: "));
let Last1 = (readLine.question("Enter Last name: "));
console.log(`Greeting, ${Last1},  ${First1} `);

//7

let title= (readLine.question("Enter title: "));
let Last1= (readLine.question("Enter First name: "));
let suffix = (readLine.question("Enter suffix: "));
console.log(`Greeting, ${title} ${Last1},  ${suffix} `);

//8

let StreetNum= (readLine.question("Enter Street Number: "));
let StreetName= (readLine.question("Enter Street Name: "));
let StreetType = (readLine.question("Enter Street Type: "));
let City = (readLine.question("Enter City: "));
let State = (readLine.question("Enter State: "));
let Zip = (readLine.question("Enter Zip Code: "));


console.log(`${StreetNum} ${StreetName} ${StreetType} ${City}, ${State} ${Zip}`);

//9

let base1= Number(readLine.question("Enter the first number: "));
let exp1 = Number(readLine.question("Enter the second number: "));
let answer3 = base1 / exp1;
let answer4 = base1 % exp1;
console.log(` ${base1} divided by ${exp1} = ${Math.floor(answer3)} with a remainder of ${answer4}`);


//10

let base1= Number(readLine.question("Enter the first number: "));
let exp1 = Number(readLine.question("Enter the second number: "));
if (base1 > exp1) {
    console.log(`${base1} is larger than ${exp1}`)
}
if (base1 < exp1) {
    console.log(`${exp1} is larger than ${base1}`)
}

//11

let base1= Number(readLine.question("Enter the first number: "));
let exp1 = Number(readLine.question("Enter the second number: "));
if (base1 < exp1) {
    console.log(`${base1} is smaller than ${exp1}`)
}
if (base1 > exp1) {
    console.log(`${exp1} is smaller than ${base1}`)
}

//12

let base1= Number(readLine.question("Enter the first number: "));
let exp1 = Number(readLine.question("Enter the second number: "));
let digits = Number(readLine.question("Enter number of digits rounded to:"))
let answer3 = base1 / exp1;
answer3=answer3.toFixed(digits)

console.log(` ${base1} divided by ${exp1} = ${answer3}`);




