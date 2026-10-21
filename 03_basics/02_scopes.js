// Scope in JavaScript determines where a variable or function can be accessed in your code.
// In simple words, scope defines the accessibility of variables and functions.

if(true){
    let a = 10
    const b = 20
    var c = 30
}

console.log(a) // a is not defined
console.log(b) // b is not defined
console.log(c) // 30

// Types of Scope in JavaScript
// 1. Global Scope
// 2. Function Scope
// 3. Block Scope
// 4. Module Scope

// 1. Global Scope
// A variable declared outside functions and blocks may be available throughout its surrounding script or module, subject to the scope rules.

let username = "Janendra";

function greet() {
    console.log(username);
}

function welcome() {
    console.log(username);
}

greet();
welcome();

console.log(username);


//2. Function Scope
// A variable declared inside a function using var, let, or const is generally accessible 
// only within that function and its nested scopes.

function calculate() {
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
}

calculate();


//3. Block Scope
// A block is a section of code enclosed in curly braces {} Examples include the bodies of if statements, for loops, and 
// standalone blocks. Variables declared using let and const inside a block are accessible only within that block and its nested scopes.

{
    let a = 10;
    const b = 20;

    console.log(a); // 10
    console.log(b); // 20
}

// console.log(a); // ReferenceError
// console.log(b); // ReferenceError


// Nested Functions

function one(){
    const username = "jai"

    function two(){
        const website = "yt"
        console.log(username);
    }
    two()
}
one()


//****************************************************************************************************************

// 1. Function declaration
//Function declaration itself is not a variable binding you can reassign in the same way
function addone(num){
    return num + 1
}
addone(5)

// 2. Function expression
//const prevents reassignment of addTwo
const addTwo = function(num){
    return num + 2
}
addTwo(5)

// 3. Arrow function
const addThree = (num) => num + 3;

//For interviews: The most important difference is that a function declaration can be called before its definition, 
// whereas a function expression assigned to const or let cannot be called before the variable is initialized.