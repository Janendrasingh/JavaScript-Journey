let score = "33"
let score1 = "33abc"
let score2 = null

console.log(score + 1) // 331 => string concatenation   
console.log(Number(score) + 1) // 34 => number conversion   

console.log(typeof score) // string
console.log(typeof score1) // string
console.log(typeof Number(score)) // number

let valueInNumber = Number(score)
let valueInNumber1 = Number(score1)
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber) // number
console.log(typeof valueInNumber1) // number
console.log(typeof valueInNumber2) // number
console.log( valueInNumber1) //NaN => Not a Number because score1 is not a valid number string
console.log( valueInNumber2) //0 => null is converted to 0

let someNumber = 34
let someString = String(someNumber)
console.log(typeof someString) // string
console.log(someString) // "34"
