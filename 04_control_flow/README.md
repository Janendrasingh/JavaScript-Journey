# JavaScript Control Flow, Truthy & Falsy Values

## 📌 Table of Contents

1. [Introduction to Control Flow](#1-introduction-to-control-flow)
2. [Types of Control Flow](#2-types-of-control-flow)
3. [Conditional Statements](#3-conditional-statements)

   * [if Statement](#31-if-statement)
   * [if...else Statement](#32-ifelse-statement)
   * [if...else if...else Statement](#33-ifelse-ifelse-statement)
   * [Nested if Statement](#34-nested-if-statement)
   * [switch Statement](#35-switch-statement)
4. [Truthy and Falsy Values](#4-truthy-and-falsy-values)
5. [Logical Operators](#5-logical-operators)
6. [Short-Circuit Evaluation](#6-short-circuit-evaluation)
7. [Nullish Coalescing Operator](#7-nullish-coalescing-operator)
8. [Optional Chaining](#8-optional-chaining)
9. [Loops in JavaScript](#9-loops-in-javascript)
10. [Jump Statements](#10-jump-statements)
11. [Common Mistakes](#11-common-mistakes)
12. [Interview Questions](#12-interview-questions)
13. [Practice Questions](#13-practice-questions)
14. [Quick Revision](#14-quick-revision)

---

## 1. Introduction to Control Flow

**Control flow** refers to the order in which JavaScript statements are executed in a program.

By default, JavaScript executes statements from top to bottom. Control flow statements allow us to make decisions, repeat operations, and change the normal execution order.

### Example

```javascript
const age = 20;

if (age >= 18) {
    console.log("You are eligible to vote.");
}

console.log("Program completed.");
```

**Output:**

```text
You are eligible to vote.
Program completed.
```

The `if` statement checks the condition before deciding whether to execute its block.

---

## 2. Types of Control Flow

JavaScript control flow can be divided into several categories.

| Type               | Purpose                                   | Examples                           |
| ------------------ | ----------------------------------------- | ---------------------------------- |
| Sequential         | Executes statements in order              | Normal statements                  |
| Conditional        | Executes code based on a condition        | `if`, `else`, `switch`             |
| Iterative          | Repeats code                              | `for`, `while`, `do...while`       |
| Jump               | Changes the normal flow of execution      | `break`, `continue`, `return`      |
| Exception handling | Handles errors and exceptional situations | `try`, `catch`, `finally`, `throw` |

---

## 3. Conditional Statements

Conditional statements allow JavaScript to execute different blocks of code depending on whether a condition is true or false.

### 3.1 `if` Statement

The `if` statement executes a block when its condition evaluates to a truthy value.

**Syntax:**

```javascript
if (condition) {
    // Code executes if the condition is truthy
}
```

**Example:**

```javascript
const age = 21;

if (age >= 18) {
    console.log("You are an adult.");
}
```

**Output:**

```text
You are an adult.
```

### 3.2 `if...else` Statement

The `if...else` statement provides two alternative execution paths.

**Example:**

```javascript
const age = 16;

if (age >= 18) {
    console.log("You can vote.");
} else {
    console.log("You cannot vote yet.");
}
```

**Output:**

```text
You cannot vote yet.
```

If the condition is truthy, the `if` block executes. Otherwise, the `else` block executes.

### 3.3 `if...else if...else` Statement

Use this structure when you need to check multiple conditions.

**Example:**

```javascript
const marks = 85;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else {
    console.log("Grade D");
}
```

**Output:**

```text
Grade B
```

JavaScript evaluates the conditions from top to bottom and executes the first matching block.

**Important:** The order of conditions matters.

### 3.4 Nested `if` Statement

An `if` statement inside another `if` statement is called a nested `if`.

**Example:**

```javascript
const age = 22;
const hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("You can drive.");
    } else {
        console.log("You need a driving license.");
    }
} else {
    console.log("You are too young to drive.");
}
```

**Output:**

```text
You can drive.
```

Nested conditions are useful when a decision depends on multiple levels of checks.

### 3.5 `switch` Statement

The `switch` statement selects a block based on the value of an expression.

**Syntax:**

```javascript
switch (expression) {
    case value1:
        // Code
        break;

    case value2:
        // Code
        break;

    default:
        // Default code
}
```

**Example:**

```javascript
const day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}
```

**Output:**

```text
Wednesday
```

#### Important points about `switch`

* `case` specifies a value to match.
* `break` prevents execution from falling through into subsequent cases.
* `default` executes when no case matches.
* Case matching uses strict equality semantics (`===`).

**Example of type-sensitive matching:**

```javascript
const value = "10";

switch (value) {
    case 10:
        console.log("Number");
        break;

    case "10":
        console.log("String");
        break;

    default:
        console.log("Unknown");
}
```

**Output:**

```text
String
```

The string `"10"` is not strictly equal to the number `10`.

---

## 4. Truthy and Falsy Values

In JavaScript, every value can be evaluated in a Boolean context.

Some values behave like `true`, while others behave like `false`.

These are called **truthy and falsy values**.

### 4.1 Truthy Values

A truthy value is any value that behaves like `true` when converted to a Boolean.

Examples:

```javascript
if ("Hello") {
    console.log("This is truthy.");
}

if (42) {
    console.log("Numbers other than zero can be truthy.");
}

if ([]) {
    console.log("An empty array is truthy.");
}

if ({}) {
    console.log("An empty object is truthy.");
}
```

**Output:**

```text
This is truthy.
Numbers other than zero can be truthy.
An empty array is truthy.
An empty object is truthy.
```

Common truthy values include:

```javascript
true
1
-1
3.14
"Hello"
"0"
"false"
[]
{}
function () {}
```

**Remember:** Empty arrays and empty objects are truthy in JavaScript.

### 4.2 Falsy Values

A falsy value behaves like `false` when converted to a Boolean.

JavaScript has these falsy values:

| Value       | Meaning                        |
| ----------- | ------------------------------ |
| `false`     | Boolean false                  |
| `0`         | Positive zero                  |
| `-0`        | Negative zero                  |
| `0n`        | BigInt zero                    |
| `""`        | Empty string                   |
| `null`      | Intentional absence of a value |
| `undefined` | Missing or unassigned value    |
| `NaN`       | Not-a-Number                   |

**Example:**

```javascript
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
```

**Output:**

```text
false
false
false
false
false
false
false
false
```

These are the standard falsy values in JavaScript.

### 4.3 Important Difference: Empty Values

Some values may look empty but are actually truthy.

```javascript
console.log(Boolean(""));        // false
console.log(Boolean(" "));       // true
console.log(Boolean("0"));       // true
console.log(Boolean("false"));   // true
console.log(Boolean([]));        // true
console.log(Boolean({}));        // true
```

**Output:**

```text
false
true
true
true
true
true
```

Why?

* `""` is an empty string, so it is falsy.
* `" "` contains a space, so it is truthy.
* `"0"` is a non-empty string, so it is truthy.
* `"false"` is a non-empty string, so it is truthy.
* `[]` is an object, and objects are truthy.
* `{}` is an object, and objects are truthy.

### 4.4 Using `Boolean()`

The `Boolean()` function converts a value to its Boolean equivalent.

```javascript
console.log(Boolean(1));        // true
console.log(Boolean(0));        // false
console.log(Boolean("Hello"));  // true
console.log(Boolean(""));       // false
console.log(Boolean([]));       // true
console.log(Boolean({}));       // true
```

You can also use the double NOT operator (`!!`):

```javascript
console.log(!!"JavaScript"); // true
console.log(!!0);            // false
console.log(!![]);           // true
console.log(!!null);         // false
```

The `!!` operator converts a value to a Boolean by applying logical negation twice.

---

## 5. Logical Operators

Logical operators allow us to combine conditions or work with truthy and falsy values.

JavaScript has three main logical operators:

| Operator | Name        | Meaning                                                        |            |                                                         |
| -------- | ----------- | -------------------------------------------------------------- | ---------- | ------------------------------------------------------- |
| `&&`     | Logical AND | Evaluates the second operand only if the first is truthy       |            |                                                         |
| `        |             | `                                                              | Logical OR | Evaluates the second operand only if the first is falsy |
| `!`      | Logical NOT | Converts the operand to a Boolean and reverses its truth value |            |                                                         |

### 5.1 Logical AND (`&&`)

The `&&` operator returns the first falsy operand it encounters. If all operands are truthy, it returns the last operand.

```javascript
console.log(true && true);       // true
console.log(true && false);      // false
console.log("Hello" && "World"); // "World"
console.log(0 && 100);           // 0
```

**Important:** `&&` does not always return a Boolean.

Example:

```javascript
const username = "Rahul";
const password = "12345";

if (username && password) {
    console.log("Both fields have truthy values.");
}
```

**Output:**

```text
Both fields have truthy values.
```

This checks whether both values are truthy, not whether they are valid credentials.

### 5.2 Logical OR (`||`)

The `||` operator returns the first truthy operand it encounters. If every operand is falsy, it returns the last operand.

```javascript
console.log(false || true);       // true
console.log(0 || 100);             // 100
console.log("" || "Default");      // "Default"
console.log(null || "Hello");      // "Hello"
console.log("JavaScript" || "JS"); // "JavaScript"
```

**Example:**

```javascript
const username = "";

const displayName = username || "Guest";

console.log(displayName);
```

**Output:**

```text
Guest
```

Because `username` is an empty string, the OR operator returns `"Guest"`.

### 5.3 Logical NOT (`!`)

The `!` operator converts a value to a Boolean and reverses it.

```javascript
console.log(!true);       // false
console.log(!false);      // true
console.log(!0);          // true
console.log(!"Hello");    // false
console.log(!null);       // true
```

Example:

```javascript
const isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please log in.");
}
```

**Output:**

```text
Please log in.
```

---

## 6. Short-Circuit Evaluation

Short-circuit evaluation means JavaScript may stop evaluating a logical expression as soon as its result is determined.

### Example 1: With `&&`

```javascript
console.log(false && console.log("Hello"));
```

**Output:**

```text
false
```

The second operand is not evaluated because the first operand is falsy.

### Example 2: With `||`

```javascript
console.log(true || console.log("Hello"));
```

**Output:**

```text
true
```

The second operand is not evaluated because the first operand is truthy.

### Example 3: Conditional execution

```javascript
const isLoggedIn = true;

isLoggedIn && console.log("Welcome back!");
```

**Output:**

```text
Welcome back!
```

This works because the expression on the right executes only when `isLoggedIn` is truthy.

For complex logic, an ordinary `if` statement may be easier to read.

---

## 7. Nullish Coalescing Operator (`??`)

The nullish coalescing operator returns the right-hand value only when the left-hand value is `null` or `undefined`.

**Example:**

```javascript
const username = null;

const result = username ?? "Guest";

console.log(result);
```

**Output:**

```text
Guest
```

### Difference between `||` and `??`

```javascript
console.log(0 || 100);       // 100
console.log(0 ?? 100);       // 0

console.log("" || "Default");  // "Default"
console.log("" ?? "Default");  // ""

console.log(false || true);  // true
console.log(false ?? true);  // false
```

| Operator | Uses the fallback when                    |   |                           |
| -------- | ----------------------------------------- | - | ------------------------- |
| `        |                                           | ` | The left operand is falsy |
| `??`     | The left operand is `null` or `undefined` |   |                           |

**Use `??` when values such as `0`, `false`, or `""` are valid and should not be replaced.**

---

## 8. Optional Chaining (`?.`)

Optional chaining allows you to access a property or method without throwing an error when the value immediately before `?.` is `null` or `undefined`.

**Example:**

```javascript
const user = {
    name: "Rahul",
    address: {
        city: "Prayagraj"
    }
};

console.log(user.address?.city);
console.log(user.contact?.phone);
```

**Output:**

```text
Prayagraj
undefined
```

Without optional chaining, accessing a property of `undefined` or `null` can throw a `TypeError`.

Optional chaining is particularly useful when working with nested data from APIs.

---

## 9. Loops in JavaScript

Loops allow us to repeat a block of code.

### 9.1 `for` Loop

Used when you want to initialize a counter, check a condition, and update the counter.

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

**Output:**

```text
1
2
3
4
5
```

### 9.2 `while` Loop

Repeats a block while its condition is truthy.

```javascript
let i = 1;

while (i <= 3) {
    console.log(i);
    i++;
}
```

**Output:**

```text
1
2
3
```

### 9.3 `do...while` Loop

Executes the block at least once before checking the condition.

```javascript
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 3);
```

**Output:**

```text
1
2
3
```

### 9.4 `for...of` Loop

Iterates over the values provided by an iterable.

```javascript
const fruits = ["Apple", "Banana", "Mango"];

for (const fruit of fruits) {
    console.log(fruit);
}
```

**Output:**

```text
Apple
Banana
Mango
```

### 9.5 `for...in` Loop

Iterates over enumerable property keys.

```javascript
const student = {
    name: "Rahul",
    age: 22
};

for (const key in student) {
    console.log(key, student[key]);
}
```

**Output:**

```text
name Rahul
age 22
```

---

## 10. Jump Statements

Jump statements change the normal execution flow.

### 10.1 `break`

Terminates the nearest enclosing loop or `switch` statement.

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }

    console.log(i);
}
```

**Output:**

```text
1
2
```

### 10.2 `continue`

Skips the current loop iteration and proceeds to the next iteration.

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

**Output:**

```text
1
2
4
5
```

### 10.3 `return`

Ends the current function and optionally returns a value.

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));
```

**Output:**

```text
30
```

---

## 11. Common Mistakes

### Mistake 1: Assuming an empty array is falsy

```javascript
if ([]) {
    console.log("This executes.");
}
```

**Output:**

```text
This executes.
```

Arrays are objects, and objects are truthy in JavaScript.

### Mistake 2: Assuming an empty object is falsy

```javascript
if ({}) {
    console.log("This executes.");
}
```

**Output:**

```text
This executes.
```

An empty object is truthy.

### Mistake 3: Confusing `"0"` with `0`

```javascript
console.log(Boolean("0")); // true
console.log(Boolean(0));   // false
```

The first value is a non-empty string. The second is the number zero.

### Mistake 4: Using `||` when zero is a valid value

```javascript
const quantity = 0;

console.log(quantity || 10); // 10
```

If zero is a valid quantity, this may be incorrect.

Use:

```javascript
const quantity = 0;

console.log(quantity ?? 10); // 0
```

### Mistake 5: Using assignment instead of comparison

```javascript
let age = 18;

if (age = 20) {
    console.log("Condition executed.");
}
```

**Output:**

```text
Condition executed.
```

The expression `age = 20` assigns `20` to `age`. The assignment expression evaluates to `20`, which is truthy.

For comparison, use:

```javascript
if (age === 20) {
    console.log("Age is 20.");
}
```

### Mistake 6: Forgetting `break` in a `switch`

```javascript
const day = 1;

switch (day) {
    case 1:
        console.log("Monday");

    case 2:
        console.log("Tuesday");

    default:
        console.log("Unknown");
}
```

**Output:**

```text
Monday
Tuesday
Unknown
```

Without `break`, execution falls through into subsequent cases.

---

## 12. Interview Questions

### Q1. What is control flow in JavaScript?

Control flow is the order in which statements execute. Conditional statements, loops, and jump statements help control that order.

### Q2. What is the difference between `if...else` and `switch`?

`if...else` can evaluate arbitrary conditions and ranges, while `switch` is useful when comparing one expression against several possible values.

### Q3. What are truthy and falsy values?

Truthy values behave like `true` in Boolean contexts, while falsy values behave like `false`.

### Q4. Name the falsy values in JavaScript.

The falsy values are:

* `false`
* `0`
* `-0`
* `0n`
* `""`
* `null`
* `undefined`
* `NaN`

### Q5. Is an empty array truthy or falsy?

An empty array is truthy.

```javascript
console.log(Boolean([])); // true
```

### Q6. Is an empty object truthy or falsy?

An empty object is truthy.

```javascript
console.log(Boolean({})); // true
```

### Q7. What is the difference between `||` and `??`?

`||` uses the right operand when the left operand is falsy. `??` uses the right operand only when the left operand is `null` or `undefined`.

### Q8. What is short-circuit evaluation?

Short-circuit evaluation means JavaScript stops evaluating a logical expression when the result is already determined.

### Q9. What is the difference between `break` and `continue`?

`break` terminates the loop, while `continue` skips the current iteration.

### Q10. What is the difference between `while` and `do...while`?

A `while` loop checks its condition before executing the body. A `do...while` loop executes the body at least once before checking its condition.

---

## 13. Practice Questions

Try predicting the output before running each example.

### Question 1: Truthy or falsy?

```javascript
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean("0"));
console.log(Boolean(0));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(null));
console.log(Boolean(NaN));
```

### Question 2: Logical AND

```javascript
console.log(10 && 20);
console.log(0 && 20);
console.log("Hello" && "");
console.log(null && "JavaScript");
```

### Question 3: Logical OR

```javascript
console.log(0 || 100);
console.log("JavaScript" || "Python");
console.log("" || "Default");
console.log(false || 50);
```

### Question 4: Nullish coalescing

```javascript
console.log(null ?? "Hello");
console.log(undefined ?? "Hello");
console.log(0 ?? 100);
console.log(false ?? true);
console.log("" ?? "Default");
```

### Question 5: Conditional statements

```javascript
const marks = 72;

if (marks >= 90) {
    console.log("Excellent");
} else if (marks >= 70) {
    console.log("Good");
} else {
    console.log("Keep practising");
}
```

### Question 6: Short-circuit evaluation

```javascript
console.log(false && "JavaScript");
console.log(true && "JavaScript");
console.log(false || "JavaScript");
console.log(true || "JavaScript");
```

### Question 7: Loop control

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 2) {
        continue;
    }

    if (i === 4) {
        break;
    }

    console.log(i);
}
```

### Question 8: Combined concepts

```javascript
const username = "";
const defaultName = "Guest";

const result = username || defaultName;

if (result) {
    console.log(`Welcome, ${result}!`);
}
```

Predict the output and explain why.

---

## 14. Quick Revision

| Concept      | Key Point                                                                    |   |                                                                        |
| ------------ | ---------------------------------------------------------------------------- | - | ---------------------------------------------------------------------- |
| Control flow | Determines the order in which code executes                                  |   |                                                                        |
| `if`         | Executes a block when the condition is truthy                                |   |                                                                        |
| `if...else`  | Chooses between two paths                                                    |   |                                                                        |
| `else if`    | Checks multiple conditions                                                   |   |                                                                        |
| `switch`     | Matches an expression against case values                                    |   |                                                                        |
| Truthy       | Behaves like `true` in a Boolean context                                     |   |                                                                        |
| Falsy        | Behaves like `false` in a Boolean context                                    |   |                                                                        |
| `&&`         | Returns the first falsy operand, or the last operand if all are truthy       |   |                                                                        |
| `            |                                                                              | ` | Returns the first truthy operand, or the last operand if all are falsy |
| `!`          | Reverses the Boolean truth value                                             |   |                                                                        |
| `??`         | Uses a fallback only for `null` or `undefined`                               |   |                                                                        |
| `?.`         | Safely accesses properties when the preceding value is `null` or `undefined` |   |                                                                        |
| `break`      | Terminates the nearest enclosing loop or switch                              |   |                                                                        |
| `continue`   | Skips the current loop iteration                                             |   |                                                                        |
| `return`     | Ends the current function                                                    |   |                                                                        |
| `for`        | Repeats code using initialization, a condition, and an update                |   |                                                                        |
| `while`      | Checks the condition before executing                                        |   |                                                                        |
| `do...while` | Executes at least once before checking the condition                         |   |                                                                        |
| `for...of`   | Iterates over iterable values                                                |   |                                                                        |
| `for...in`   | Iterates over enumerable property keys                                       |   |                                                                        |

---

## Final Takeaways

1. Control flow determines how and when JavaScript statements execute.
2. Conditional statements allow your program to make decisions.
3. JavaScript has eight standard falsy values: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, and `NaN`.
4. Empty arrays and empty objects are truthy.
5. Logical operators can return values other than `true` or `false`.
6. Use `??` when you want to provide a fallback only for `null` or `undefined`.
7. Use `break` to stop a loop and `continue` to skip an iteration.
8. Practise predicting outputs to improve your understanding of JavaScript execution.

**Next topics to learn:**

* Functions in JavaScript
* Scope and Hoisting
* The `this` keyword
* Array methods: `map()`, `filter()`, `reduce()`, and `forEach()`
* DOM manipulation
