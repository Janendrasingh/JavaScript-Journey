console.log(2>1) // true
console.log(2<1) // false
console.log(2==1) // false
console.log(2!=1) // true
console.log(2>=1) // true
console.log(2<=1) // false

console.log("2" > 1) // true => string is converted to number
console.log("2" < 1) // false => string is converted to number
console.log("2" == 1) // false => string is converted to number
console.log("2" != 1) // true => string is converted to number
console.log("2" >= 1) // true => string is converted to number
console.log("2" <= 1) // false => string is converted to number

console.log(null > 0) // false => null is converted to 0
console.log(null == 0) // false => null is not converted to 0
console.log(null >= 0) // true => null is converted to 0

console.log(undefined > 0) // false => undefined is converted to NaN
console.log(undefined == 0) // false => undefined is not converted to 0
console.log(undefined >= 0) // false => undefined is converted to NaN

console.log("2" === 2) // false => strict equality operator checks for both value and type
console.log("2" !== 2) // true => strict inequality operator checks for both value and type