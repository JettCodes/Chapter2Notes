//question1
const readLine = require("readline-sync")

let Ask = readLine.question("Guess our very super secret number!");
if (Ask == "yes") {
    console.log(`what is brown and sticky? `)
} else
if (Ask == "no")
    console.log(`ok `)

//question4
const readLine = require("readline-sync")

let Ask = readLine.question("Guess our very super secret number!");
if (Ask == "7") {
    console.log(`Correct u geek!! `)
} else
if (Ask < 7)
    console.log(`Nope too small!`)
if (Ask > 7)
    console.log(`Nope too high!`)

//questoion 2-3
const readLine = require("readline-sync")

let base= Number (readLine.question ("Enter a number:  "));
if (base % 2==0){
    console.log(`Your number is divisible by 2!`)
} else {
    console.log (`Your number is not divisible by 2!`)
}
if (base % 3==0){
    console.log(`Your number is divisible by 3!`)
} else {
    console.log (`Your number is not divisible by 3!`)
}
if (base % 4==0){
    console.log(`Your number is divisible by 4!`)
} else {
    console.log (`Your number is not divisible by 4!`)
}
if (base % 5==0){
    console.log(`Your number is divisible by 5!`)
} else {
    console.log (`Your number is not divisible by 5!`)
    if (base % 6==0){
        console.log(`Your number is divisible by 6!`)
    } else {
        console.log (`Your number is not divisible by 6!`)
    }

}

//question 5
const readline= require("readline-sync")
let tip = 1.6;
let price = 20;
let newprice = 21.6;
let question = readline.question("would you like to know the cost?");
if(question == "yes"){
    console.log(`${newprice}`)
}else
if ( question =="no") {
    console.log(`ok i will come back later`)
}
const readline= require("readline-sync")
let tip = 1.6;
let price = 20;
let newprice = 21.6;
let question = readline.question("what is the cost?");
if(question == "21.6"){
    console.log(`thank you`)
}else {
    console.log(`error`)
}
const readline= require("readline-sync")
let tip = 1.6;
let price = 20;
let newprice = 21.6;
let question = readline.question("would you like to know the cost?");
if(question == "yes"){
    console.log(`${newprice}`)
    let question2 = readline.question( "How is the service");
    if (question2 == "good") {
        console.log(`20% tip`)
    } else
    if (question2 == "great") {
        console.log(`15% tip `)
    } else
    if (question2 == "alright") {
        console.log(`10% tip`)
    }else
    if (question2 == "not good") {
        console.log(`5% tip`)
    }else
    if (question2 == "bad") {
        console.log(`no tip`)
    } else
    if (question2 == "horrible") {
        console.log(`no tip`)
    }
}else
if ( question == "no") {
    console.log(`ok i will come back later`)
//question1
    const readLine = require("readline-sync")
    const readline= require("readline-sync")

    let tip = 1.60;
    let price = 20;
    let newprice = 21.60;
    let question = readline.question("what is the cost?");
    if(question == "21.60"){
        console.log(`thank you`)
    }else {
        let question2 = readline.question( "error try again");
        if (question2 == "21.60") {
            console.log('Thank You')
        } else {
            console.log('total cost 21.60')
        }
    }