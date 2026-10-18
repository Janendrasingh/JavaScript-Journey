// Primitive data types in JavaScript are the most basic data types that are not objects and have no methods. They include:

// 1. Number: Represents both integer and floating-point numbers. Example: 42, 3.14
// 2. String: Represents a sequence of characters. Example: "Hello, World!"
// 3. Boolean: Represents a logical value, either true or false. Example: true, false
// 4. Undefined: Represents a variable that has been declared but not assigned a value. Example: let x; console.log(x); // undefined
// 5. Null: Represents the intentional absence of any object value. Example: let y = null; console.log(y); // null
// 6. Symbol: Represents a unique identifier. Example: let sym = Symbol('key');
// 7. BigInt: Represents integers with arbitrary precision. Example: let bigInt = 1234567890123456789012345678901234567890n;

// Non-primitive data types in JavaScript are objects and include:  

// 1. Object: Represents a collection of key-value pairs. Example: let obj = { name: "Alice", age: 30 };    
// 2. Array: Represents an ordered list of values. Example: let arr = [1, 2, 3, 4, 5];
// 3. Function: Represents a block of code that can be executed when called. Example: function greet() { console.log("Hello!"); }

// ====================================
// JAVASCRIPT DATA TYPES
// ====================================

// 1. NUMBER
let age = 24;
console.log("Number:", age);
console.log(typeof age); // number

// 2. STRING
let name = "Janendra";
console.log("String:", name);
console.log(typeof name); // string

// 3. BOOLEAN
let isStudent = true;
console.log("Boolean:", isStudent);
console.log(typeof isStudent); // boolean

// 4. UNDEFINED
let marks;
console.log("Undefined:", marks);
console.log(typeof marks); // undefined

// 5. NULL
let selectedValue = null;
console.log("Null:", selectedValue);
console.log(typeof selectedValue); // object (historical quirk)

// 6. SYMBOL
let uniqueId = Symbol("id");
console.log("Symbol:", uniqueId);
console.log(typeof uniqueId); // symbol

// 7. BIGINT
let bigNumber = 12345678901234567890n;
console.log("BigInt:", bigNumber);
console.log(typeof bigNumber); // bigint

// ====================================
// NON-PRIMITIVE TYPES
// ====================================

// 8. OBJECT
let student = {
    name: "Janendra",
    age: 24
};

console.log("Object:", student);
console.log(typeof student); // object

// 9. ARRAY
let numbers = [10, 20, 30];

console.log("Array:", numbers);
console.log(typeof numbers); // object
console.log(Array.isArray(numbers)); // true

// 10. FUNCTION
function greet() {
    return "Hello!";
}

console.log("Function:", greet());
console.log(typeof greet); // function
