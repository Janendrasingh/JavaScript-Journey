const name = "Janendra";
const age = 24;

console.log(name + " is " + age + " years old."); // Janendra is 24 years old.
console.log(`${name} is ${age} years old.`); // backticks and ${} are used for string interpolation

const gameName = new String("Cricket");
console.log(`Game Name: ${gameName}`); // Game Name: [String: 'Cricket']
gameName // if we run this in browser we get in key-value pair format like this 
// { '0': 'C', '1': 'r', '2': 'i', '3': 'c', '4': 'k', '5': 'e', '6': 't' }

console.log(gameName[0]); // C
console.log(gameName.length); // 7
console.log(gameName.__proto__); // String {constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, bold: ƒ, …}
console.log(gameName.toUpperCase()); // CRICKET
console.log(gameName.toLowerCase()); // cricket
console.log(gameName.charAt(0)); // C (indexing starts from 0)
console.log(gameName.indexOf("c")); // 4 (indexing starts from 0)
console.log(gameName.slice(0, 3)); // Cri (slicing starts from 0 and goes up to but not including index 3)
console.log(gameName.split("")); // ['C', 'r', 'i', 'c', 'k', 'e', 't'] (splitting the string into an array of characters)
console.log(gameName.replace("Cricket", "Football")); // Football (replacing the string with another string)
console.log(gameName.includes("Cricket")); // true (checking if the string includes a substring)
console.log(gameName.startsWith("C")); // true (checking if the string starts with a substring)
console.log(gameName.endsWith("t")); // true (checking if the string ends with a substring)
console.log(gameName.trim()); // Cricket (removing whitespace from both ends of the string)
console.log(gameName.repeat(3)); // CricketCricketCricket (repeating the string 3 times)
console.log(gameName.concat(" is a popular sport.")); // Cricket is a popular sport. (concatenating strings)

const url = "https://www.example.com";
console.log(url.startsWith("https")); // true (checking if the string starts with a substring)
console.log(url.endsWith(".com")); // true (checking if the string ends with a substring)
console.log(url.includes("example")); // true (checking if the string includes a substring)
console.log(url.replace("example", "test")); // https://www.test.com (replacing the string with another string)
console.log(url.__proto__); // String {constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, bold: ƒ, …}
console.log(url.split("/")); // ['https:', '', 'www.example.com'] (splitting the string into an array of substrings)
