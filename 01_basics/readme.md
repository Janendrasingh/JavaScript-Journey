# JavaScript Fundamentals 🚀

Welcome to my JavaScript learning repository! This repository documents my journey of learning JavaScript from the basics, focusing on variables, data types, type conversion, comparisons, strings, numbers, mathematics, dates, and memory management.

I am building this repository to strengthen my JavaScript fundamentals through practical examples, code snippets, and hands-on practice.

## 📚 Topics Covered

1. Variables
2. Data Types
3. Conversion Operations
4. Comparisons
5. Strings
6. Numbers and Math
7. Dates
8. Stack and Heap Memory
9. Data Types Summary

---

## 📂 Repository Structure

```text
JavaScript/
│
├── 01_variables.js
├── 02_dataTypes.js
├── 03_conversionOperation.js
├── 04_comparision.js
├── 05_string.js
├── 06_nums_and_math.js
├── 07_dates.js
├── Stack_and_Heap_memory/
└── datatypes-summary.js
```

---

## 1. Variables — `01_variables.js`

Variables are containers used to store data in JavaScript. They allow us to store values and use or modify them throughout our programs.

### Topics Covered

* Declaring variables
* `var`, `let`, and `const`
* Variable initialization and reassignment
* Block scope and function scope
* Global scope
* Naming conventions
* Temporal Dead Zone (TDZ)
* Hoisting

### Example

```javascript
var name = "Janendra";
let age = 24;
const country = "India";

console.log(name);
console.log(age);
console.log(country);
```

### Difference Between `var`, `let`, and `const`

| Feature                                | `var`          | `let`       | `const`     |
| -------------------------------------- | -------------- | ----------- | ----------- |
| Scope                                  | Function scope | Block scope | Block scope |
| Reassignment                           | Allowed        | Allowed     | Not allowed |
| Redeclaration in the same scope        | Allowed        | Not allowed | Not allowed |
| Must be initialized during declaration | No             | No          | Yes         |

**Key takeaway:** Prefer `const` by default and use `let` when reassignment is necessary. Avoid `var` in modern JavaScript unless you specifically need to understand or work with its behavior.

---

## 2. Data Types — `02_dataTypes.js`

Data types define the kinds of values that JavaScript can work with.

JavaScript has two broad categories of data types: **primitive** and **non-primitive**.

### Primitive Data Types

JavaScript has seven primitive types:

1. **String** — Represents text.
2. **Number** — Represents integers and floating-point numbers.
3. **Boolean** — Represents `true` or `false`.
4. **Undefined** — Represents a declared variable without an assigned value.
5. **Null** — Represents the intentional absence of a value.
6. **BigInt** — Represents integers larger than the safe range of the Number type.
7. **Symbol** — Represents a unique identifier.

### Example

```javascript
let name = "JavaScript";
let age = 24;
let isLearning = true;
let result;
let emptyValue = null;
let bigNumber = 12345678901234567890n;
let uniqueId = Symbol("id");

console.log(typeof name);        // string
console.log(typeof age);         // number
console.log(typeof isLearning);  // boolean
console.log(typeof result);      // undefined
console.log(typeof emptyValue);  // object
console.log(typeof bigNumber);   // bigint
console.log(typeof uniqueId);    // symbol
```

**Note:** `typeof null` returns `"object"`. This is a longstanding JavaScript quirk, not an indication that `null` is actually an object.

### Non-Primitive Data Types

Objects are used to store collections of data and more complex entities. Common examples include:

* Objects
* Arrays
* Functions

```javascript
const student = {
    name: "Janendra",
    age: 24
};

const languages = ["JavaScript", "Java", "C++"];

function greet() {
    console.log("Hello!");
}
```

**Key takeaway:** Primitive values and objects behave differently when assigned to variables or passed to functions.

---

## 3. Conversion Operations — `03_conversionOperation.js`

Type conversion means converting a value from one data type to another.

JavaScript supports explicit conversion and implicit type coercion.

### Explicit Conversion

We deliberately convert a value using functions such as `Number()`, `String()`, and `Boolean()`.

```javascript
let score = "100";

console.log(Number(score));   // 100
console.log(String(123));     // "123"
console.log(Boolean(1));      // true
console.log(Boolean(0));      // false
```

### Important Conversion Examples

```javascript
console.log(Number("42"));        // 42
console.log(Number("42abc"));     // NaN
console.log(Number(null));        // 0
console.log(Number(undefined));   // NaN

console.log(String(100));         // "100"

console.log(Boolean(1));          // true
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean("Hello"));    // true
```

### Implicit Conversion

JavaScript sometimes converts values automatically when an operation requires it.

```javascript
console.log("5" + 2);  // "52"
console.log("5" - 2);  // 3
console.log("5" * 2);  // 10
console.log(true + 1); // 2
```

**Key takeaway:** Understand how explicit conversion and implicit coercion work to avoid unexpected results.

---

## 4. Comparisons — `04_comparision.js`

Comparison operators compare values and generally return a Boolean result: `true` or `false`.

### Common Comparison Operators

| Operator | Meaning                       | Example               |
| -------- | ----------------------------- | --------------------- |
| `==`     | Equality with type coercion   | `5 == "5"` → `true`   |
| `===`    | Strict equality               | `5 === "5"` → `false` |
| `!=`     | Inequality with type coercion | `5 != "6"` → `true`   |
| `!==`    | Strict inequality             | `5 !== "5"` → `true`  |
| `>`      | Greater than                  | `10 > 5` → `true`     |
| `<`      | Less than                     | `5 < 10` → `true`     |
| `>=`     | Greater than or equal to      | `5 >= 5` → `true`     |
| `<=`     | Less than or equal to         | `5 <= 10` → `true`    |

### Example

```javascript
console.log(5 == "5");   // true
console.log(5 === "5");  // false

console.log(10 > 5);     // true
console.log(10 < 5);     // false

console.log(null == undefined);   // true
console.log(null === undefined);  // false
```

### Why Prefer `===`?

The strict equality operator compares values without converting their types.

```javascript
let age = 24;

console.log(age === 24);    // true
console.log(age === "24");  // false
```

**Key takeaway:** Prefer `===` and `!==` for predictable comparisons. Be especially careful when comparing strings, numbers, `null`, and `undefined`.

---

## 5. Strings — `05_string.js`

A string is a sequence of characters used to represent text.

JavaScript provides several ways to create strings and many built-in methods for working with them.

### Creating Strings

```javascript
const firstName = "Janendra";
const lastName = 'Singh';

const message = `Hello, ${firstName}!`;

console.log(firstName);
console.log(lastName);
console.log(message);
```

### Template Literals

Template literals use backticks and allow expressions to be embedded using `${}`.

```javascript
const name = "Janendra";
const age = 24;

console.log(`My name is ${name} and I am ${age} years old.`);
```

### Common String Methods

| Method or Property | Purpose                                   |
| ------------------ | ----------------------------------------- |
| `length`           | Returns the string length                 |
| `toUpperCase()`    | Converts letters to uppercase             |
| `toLowerCase()`    | Converts letters to lowercase             |
| `charAt()`         | Returns the character at an index         |
| `indexOf()`        | Finds the first occurrence of a substring |
| `includes()`       | Checks whether a substring exists         |
| `slice()`          | Extracts part of a string                 |
| `trim()`           | Removes whitespace from both ends         |
| `replace()`        | Replaces the first matching substring     |
| `split()`          | Splits a string into an array             |

### Example

```javascript
const text = "  Learn JavaScript  ";

console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.trim());
console.log(text.includes("JavaScript"));
console.log(text.slice(2, 6));
console.log("Hello World".replace("World", "JavaScript"));
console.log("HTML,CSS,JavaScript".split(","));
```

**Key takeaway:** Strings are immutable. String methods return new strings rather than changing the original string.

---

## 6. Numbers and Math — `06_nums_and_math.js`

JavaScript uses the `Number` type for ordinary numeric values. It also provides the `Math` object for common mathematical operations.

### Numbers

```javascript
const score = 100;
const price = 99.99;

console.log(score);
console.log(price);

console.log(Number("123"));       // 123
console.log(Number.isNaN(NaN));   // true
console.log(Number.isInteger(10)); // true
```

### Useful Number Methods

```javascript
const amount = 123.4567;

console.log(amount.toFixed(2));       // "123.46"
console.log(parseInt("100px", 10));   // 100
console.log(parseFloat("12.5"));      // 12.5
console.log(Number.isFinite(100));    // true
```

### Math Object

```javascript
console.log(Math.abs(-10));       // 10
console.log(Math.round(4.6));     // 5
console.log(Math.floor(4.9));     // 4
console.log(Math.ceil(4.1));      // 5
console.log(Math.min(10, 20, 5)); // 5
console.log(Math.max(10, 20, 5)); // 20
console.log(Math.sqrt(25));       // 5
console.log(Math.pow(2, 3));      // 8
```

### Generating Random Numbers

```javascript
console.log(Math.random());
```

`Math.random()` returns a pseudo-random number greater than or equal to `0` and less than `1`.

To generate an integer between 1 and 100, inclusive:

```javascript
const randomNumber = Math.floor(Math.random() * 100) + 1;

console.log(randomNumber);
```

**Key takeaway:** Understand number conversion, rounding, and random number generation before using them in projects such as a Guess the Number game.

---

## 7. Dates — `07_dates.js`

JavaScript provides the built-in `Date` object for working with dates and times.

### Creating Dates

```javascript
const currentDate = new Date();

console.log(currentDate);

const specificDate = new Date("2026-01-15");

console.log(specificDate);
```

### Common Date Methods

```javascript
const date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth());       // January = 0
console.log(date.getDate());        // Day of the month
console.log(date.getDay());         // Sunday = 0
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
```

### Formatting a Date

```javascript
const today = new Date();

console.log(today.toDateString());
console.log(today.toISOString());
console.log(today.toLocaleDateString());
console.log(today.toLocaleString());
```

### Important Points

* Months returned by `getMonth()` are zero-indexed: January is `0` and December is `11`.
* `getDate()` returns the day of the month.
* `getDay()` returns the day of the week, where Sunday is `0`.
* Date objects represent a specific point in time, while their local getters depend on the environment's time zone.

**Key takeaway:** Learn how to create dates, extract date components, and format them for display.

---

## 8. Stack and Heap Memory — `Stack_and_Heap_memory`

Understanding memory helps explain how JavaScript handles primitive values, objects, and variable assignments.

### Stack Memory

Stack memory is commonly used for execution contexts and their local bindings. Primitive values are often described as being stored on the stack in introductory explanations.

```javascript
let firstValue = 10;
let secondValue = firstValue;

secondValue = 20;

console.log(firstValue);  // 10
console.log(secondValue); // 20
```

Changing `secondValue` does not change `firstValue`.

### Heap Memory

The heap is commonly used for dynamically allocated objects. Variables holding objects contain references to those objects.

```javascript
const userOne = {
    name: "Janendra"
};

const userTwo = userOne;

userTwo.name = "Rahul";

console.log(userOne.name); // Rahul
console.log(userTwo.name); // Rahul
```

Both variables refer to the same object. Changing a property through one reference is visible through the other.

### Important Distinction

| Primitive Example                                           | Object Example                                                 |
| ----------------------------------------------------------- | -------------------------------------------------------------- |
| `let a = 10;`                                               | `let a = { value: 10 };`                                       |
| Assignment copies the primitive value.                      | Assignment copies the object reference.                        |
| Reassigning the copy does not change the original variable. | Mutating the shared object is visible through both references. |

**Technical note:** The stack-versus-heap explanation is a useful conceptual model, not a strict guarantee about where every JavaScript value is physically stored. JavaScript specifications define observable behavior rather than requiring a particular memory layout.

**Key takeaway:** Understand the difference between copying primitive values and copying references to objects.

---

## 9. Data Types Summary — `datatypes-summary.js`

This file summarizes JavaScript data types and helps revise the differences between primitive values and objects.

### Primitive Types

```javascript
let name = "JavaScript";               // String
let age = 24;                          // Number
let isLearning = true;                 // Boolean
let result;                            // Undefined
let emptyValue = null;                 // Null
let bigNumber = 12345678901234567890n; // BigInt
let id = Symbol("id");                 // Symbol
```

### Reference Types

```javascript
const student = {
    name: "Janendra",
    age: 24
};

const numbers = [1, 2, 3, 4, 5];

function greet() {
    console.log("Hello!");
}
```

### Checking Data Types

```javascript
console.log(typeof "Hello");      // string
console.log(typeof 100);          // number
console.log(typeof true);         // boolean
console.log(typeof undefined);    // undefined
console.log(typeof null);         // object
console.log(typeof 100n);         // bigint
console.log(typeof Symbol());     // symbol
console.log(typeof {});           // object
console.log(typeof []);           // object
console.log(typeof function() {});// function
```

### Quick Revision

* JavaScript has seven primitive data types.
* Objects are used to represent collections and complex values.
* Arrays are objects.
* Functions are callable objects; `typeof` reports `"function"` for them.
* `typeof null` returns `"object"` because of a historical language quirk.
* Primitive values are immutable.
* Objects can be mutable.
* `const` prevents reassignment of a binding but does not make an object immutable.

---

## 🎯 Learning Goals

By completing these topics, I aim to:

* Understand variable declarations, scope, and reassignment.
* Identify and work with JavaScript data types.
* Convert values safely between types.
* Use comparison operators correctly.
* Manipulate strings using built-in methods.
* Perform mathematical operations and generate random numbers.
* Create, inspect, and format dates.
* Understand primitive values and object references.
* Build a strong foundation for DOM manipulation and interactive JavaScript projects.

## 📝 Practice Checklist

* [ ] Practice `var`, `let`, and `const`.
* [ ] Identify primitive and non-primitive data types.
* [ ] Experiment with explicit and implicit type conversion.
* [ ] Compare `==` and `===`.
* [ ] Practice common string methods.
* [ ] Use the `Math` object and generate random numbers.
* [ ] Create dates and format them.
* [ ] Experiment with primitive assignment and shared object references.
* [ ] Revise all JavaScript data types using examples.
* [ ] Push practice examples to GitHub regularly.

## 📖 Learning Resources

* [MDN Web Docs — JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [MDN — JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
* [Chai aur Code — YouTube](https://www.youtube.com/@chaiaurcode)

## 👨‍💻 Author

**Janendra Singh**

MCA Student | Aspiring Software Developer

This repository is part of my ongoing journey to learn JavaScript, strengthen my programming fundamentals, and become a better developer.

---

⭐ If you find this repository useful, consider giving it a star!
