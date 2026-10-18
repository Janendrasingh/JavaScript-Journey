const score = 100;
console.log(score); // 100

const  balance = new Number(200);
console.log(balance); // [Number: 200]

console.log(balance.toString()); // 200 (converts the number to a string)
// the benefit of converting number to string is that we can use string methods on it like length, indexOf, slice, etc.
console.log(balance.toString().length); // 3 (gets the length of the string representation)
console.log(balance.toFixed(2)); // 200.00 (formats the number to 2 decimal places)

const otheNumber = new Number(300.1234);
console.log(otheNumber.valueOf()); // 300.1234 (returns the primitive value of the number object)
console.log(otheNumber.toExponential(2)); // 3.00e+2 (returns a string representing the number in exponential notation with 2 decimal places)
console.log(otheNumber.toPrecision(4)); // 300.1 (returns a string representing the number to a specified precision of 4 significant digits)

const hunders = new Number(1000000);
console.log(hunders.toLocaleString("en-IN", { style: "currency", currency: "INR" })); // ₹1,000,000.00

// Math object in JavaScript provides various mathematical functions and constants. 
// It is not a constructor, so we cannot create instances of it. 
// Instead, we can use its static methods and properties directly.

console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.abs(-10)); // 10 (returns the absolute value of a number)
console.log(Math.max(1, 2, 3, 4, 5)); // 5 (returns the largest of zero or more numbers)
console.log(Math.min(1, 2, 3, 4, 5)); // 1 (returns the smallest of zero or more numbers)
console.log(Math.pow(2, 3)); // 8 (returns the base to the exponent power, that is, base^exponent)
console.log(Math.sqrt(16)); // 4 (returns the square root of a number)
console.log(Math.round(4.7)); // 5 (returns the value of a number rounded to the nearest integer)
console.log(Math.floor(4.7)); // 4 (returns the largest integer less than or equal to a given number)
console.log(Math.ceil(4.1)); // 5 (returns the smallest integer greater than or equal to a given number)
const randomNum = Math.random(); // returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(randomNum);
console.log(Math.floor(randomNum * 10)); // returns a random integer between 0 and 9
console.log(Math.floor(randomNum * 10) + 1); // returns a random integer between 1 and 10

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // returns a random number between min (inclusive) and max (inclusive)