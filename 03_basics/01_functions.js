// A function in JavaScript is a reusable block of code designed to perform a particular task.
//  You can define a function once and execute it whenever you need it.

function sayMyName(number1, number2){
    console.log(number1 + number2)
}

sayMyName(3, "4") //34
sayMyName(3, "a") //3a
sayMyName(3, null) //3

const result = sayMyName(3, 5) // 8 
console.log("Result: ", result) // undefined because function is not returning any value 

function addTwoNumber(num1, num2){
    let answer = num1 + num2
    return answer;
}
console.log(addTwoNumber(2, 3)) // 5 now is will return the value

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Jai")) // jai just logged in
console.log(loginUserMessage()) //undefined

// conditionals
function loginUserMessage1 (username){
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage1("Jai")) // jai just logged in
console.log(loginUserMessage1()) // Please enter a username