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



