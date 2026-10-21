const user = {
    username: "jai",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`) // this keyword is used to access current context
        console.log(this)
    }

}
user.welcomeMessage()
user.username = "sam" // we have changed the context
user.welcomeMessage() // sam welcome to website
console.log(this) // {} 

const addtwo = (num1, num2) => {
    return num1+num2 //explicit arrow function
}
console.log(addtwo(1,2))

// If your function contains only a single expression, you can omit the curly braces {} and the return keyword.
const addone = (num1, num2) =>  (num1 + num2) //implicit arrow function

// Arrow functions are widely used with array methods such as map(), filter(), and forEach().

// Arrow Functions and the this Keyword
// This is an important difference between arrow functions and regular functions.
// Regular functions have their own this value, depending on how they are called. 
// Arrow functions do not have their own this; they inherit it from the surrounding lexical scope.

