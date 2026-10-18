// singleton object is an object that is created only once and can be used throughout the application. 
// It is a design pattern that restricts the instantiation of a class to a single instance and provides 
// a global point of access to that instance. In JavaScript, we can create a singleton object using an object literal 
// or by using a class with a static method.

// object literal is a way to create an object in JavaScript using curly braces {}. 
// It is a simple and concise way to define an object with properties and methods.

const mySym = Symbol("key"); // creating a symbol

const JsUSer = {  // object literal it have keys and values
    name: "Janendra",
    "full name": "Janendra Kumar", // key with space
    age: 24,
    location: "India",
    email: "janendra@example.com",
    isLoggedIn: true,
    lastLogin: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    [mySym]: "This is a symbol key", // using a symbol as a key
}

// Accessing object properties using dot notation
console.log(JsUSer.name);
console.log(JsUSer["name"]); // Accessing object properties using bracket notation
console.log(JsUSer["full name"]); // Accessing object properties with space in key using bracket 
// notation cannot use dot notation for keys with spaces or special characters
console.log(JsUSer[mySym]); // Accessing object properties using symbol key

JsUSer.email = "rahul@example.com" // We can override the values so to prevent this action we can use freeze
Object.freeze(JsUSer) 
JsUSer.email = "Janeey@example.com"
console.log(JsUSer)

// function is a block of code that can be executed when called. It can take parameters and return a value.
JsUSer.greet = function() { // adding a method to the object    
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`); // using this keyword to access object properties    
}
// this keyword refers to the object that is calling the method. In this case, it refers to the JsUSer object.
console.log(JsUSer.greet()); // calling the method of the object
