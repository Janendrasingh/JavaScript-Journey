"use strict"; // treat all JS code as newer version
// alert(3 + 3); // we are using nodejs, not browser, so alert is not available

let name = "jai" // string
let age = 22 // number => range of numbers -2^53 to 2^53
let isLoggedIn = false // boolean
let state;

// null => standalone value that represents null or nothing
// undefined => value that is not defined yet
// symbol => unique value that can be used as a key for object properties

//object => key-value pair data structure

console.log(typeof "name"); // string
console.log(typeof age);    // number
console.log(typeof null); // object
console.log(typeof undefined); // undefined