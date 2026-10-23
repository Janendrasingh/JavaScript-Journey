# JavaScript Loops

## 📌 Introduction

Loops in JavaScript are used to execute a block of code repeatedly until a specified condition is met or an iterable has been processed.

Loops help reduce code duplication and make programs more efficient and readable.

For example, instead of writing `console.log()` five times to print five numbers, we can use a loop.

### Without a Loop

```javascript
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

### With a Loop

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

---

## 📚 Table of Contents

1. [Types of Loops in JavaScript](#1-types-of-loops-in-javascript)
2. [The `for` Loop](#2-the-for-loop)
3. [The `while` Loop](#3-the-while-loop)
4. [The `do...while` Loop](#4-the-dowhile-loop)
5. [The `forEach()` Method](#5-the-foreach-method)
6. [The `for...of` Loop](#6-the-forof-loop)
7. [The `for...in` Loop](#7-the-forin-loop)
8. [Difference Between `forEach()`, `for...of`, and `for...in`](#8-difference-between-foreach-forof-and-forin)
9. [The `break` Statement](#9-the-break-statement)
10. [The `continue` Statement](#10-the-continue-statement)
11. [Nested Loops](#11-nested-loops)
12. [Infinite Loops](#12-infinite-loops)
13. [Looping Through Arrays](#13-looping-through-arrays)
14. [Common Mistakes](#14-common-mistakes)
15. [Time Complexity](#15-time-complexity)
16. [Interview Questions](#16-interview-questions)
17. [Practice Questions](#17-practice-questions)
18. [Quick Revision](#18-quick-revision)

---

# 1. Types of Loops in JavaScript

JavaScript provides several ways to repeat operations.

| Loop         | Description                                 | Common Use                               |
| ------------ | ------------------------------------------- | ---------------------------------------- |
| `for`        | Repeats code while a condition is true      | Counting and index-based iteration       |
| `while`      | Checks a condition before each iteration    | Repeating while a condition remains true |
| `do...while` | Executes once before checking the condition | When the code must execute at least once |
| `forEach()`  | Calls a function for each array element     | Processing array elements                |
| `for...of`   | Iterates over values from an iterable       | Arrays, strings, Sets, and Maps          |
| `for...in`   | Iterates over enumerable property keys      | Objects and their properties             |

---

# 2. The `for` Loop

## Definition

A `for` loop repeats a block of code while a specified condition evaluates to `true`.

### Syntax

```javascript
for (initialization; condition; increment_or_decrement) {
    // Code to execute
}
```

### Example

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

### Explanation

* **Initialization:** `let i = 1` initializes the counter.
* **Condition:** `i <= 5` determines whether the loop should continue.
* **Increment:** `i++` increases the counter by one after each iteration.
* **Loop body:** `console.log(i)` prints the current value.

### Example: Print Even Numbers

```javascript
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}
```

**Output:**

```text
2
4
6
8
10
```

### Example: Print Numbers in Reverse

```javascript
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
```

**Output:**

```text
5
4
3
2
1
```

---

# 3. The `while` Loop

## Definition

A `while` loop executes a block of code as long as its condition is `true`.

The condition is checked before each iteration. Therefore, if the condition is initially `false`, the loop body will not execute.

### Syntax

```javascript
while (condition) {
    // Code to execute
}
```

### Example

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
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

### Explanation

1. Initialize `i` to `1`.
2. Check whether `i <= 5`.
3. Print the current value.
4. Increase `i` by one.
5. Repeat until the condition becomes `false`.

### Example: Calculate the Sum of Numbers from 1 to 5

```javascript
let i = 1;
let sum = 0;

while (i <= 5) {
    sum += i;
    i++;
}

console.log("Sum:", sum);
```

**Output:**

```text
Sum: 15
```

---

# 4. The `do...while` Loop

## Definition

A `do...while` loop executes the loop body first and checks the condition afterward.

Therefore, the loop body executes **at least once**, even if the condition is initially `false`.

### Syntax

```javascript
do {
    // Code to execute
} while (condition);
```

### Example

```javascript
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
```

**Output:**

```text
1
2
3
4
5
```

### Important Difference Between `while` and `do...while`

```javascript
let i = 10;

while (i < 5) {
    console.log("While loop");
}
```

**Output:** Nothing, because the condition is initially false.

Now consider:

```javascript
let i = 10;

do {
    console.log("Do...while loop");
} while (i < 5);
```

**Output:**

```text
Do...while loop
```

The `do...while` loop prints the message once before checking the condition.

**Note:** The semicolon after `while (condition);` is part of the `do...while` syntax.

---

# 5. The `forEach()` Method

## Definition

`forEach()` is an array method that executes a callback function once for each element in an array.

It is commonly used when you want to perform an operation on every array element.

### Syntax

```javascript
array.forEach(function(element, index, array) {
    // Code to execute
});
```

The callback receives three arguments:

| Argument  | Description                      |
| --------- | -------------------------------- |
| `element` | The current array element        |
| `index`   | The index of the current element |
| `array`   | The original array               |

The `index` and `array` parameters are optional.

### Example 1: Print Array Elements

```javascript
const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});
```

**Output:**

```text
Apple
Banana
Mango
```

### Example 2: Using an Arrow Function

```javascript
const numbers = [10, 20, 30];

numbers.forEach((number) => {
    console.log(number);
});
```

**Output:**

```text
10
20
30
```

### Example 3: Access Index and Value

```javascript
const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});
```

**Output:**

```text
0 Apple
1 Banana
2 Mango
```

### Example 4: Calculate the Sum

```javascript
const numbers = [10, 20, 30, 40];

let sum = 0;

numbers.forEach((number) => {
    sum += number;
});

console.log("Sum:", sum);
```

**Output:**

```text
Sum: 100
```

### Important Points About `forEach()`

* `forEach()` is a method, not a loop statement.
* It is commonly used with arrays.
* It calls the callback for each array element that exists.
* It does not return a new array of transformed values; its return value is `undefined`.
* You cannot use `break` or `continue` directly inside its callback to control the outer iteration.
* Returning from the callback does not stop the entire `forEach()` operation.
* It does not wait for asynchronous callbacks to finish.

### Example: `forEach()` Returns `undefined`

```javascript
const numbers = [1, 2, 3];

const result = numbers.forEach((number) => {
    return number * 2;
});

console.log(result);
```

**Output:**

```text
undefined
```

If you want a new array containing transformed values, use `map()`:

```javascript
const numbers = [1, 2, 3];

const result = numbers.map((number) => {
    return number * 2;
});

console.log(result);
```

**Output:**

```text
[2, 4, 6]
```

---

# 6. The `for...of` Loop

## Definition

The `for...of` loop iterates over the values provided by an iterable object.

Common iterables include:

* Arrays
* Strings
* Sets
* Maps
* Generators

### Syntax

```javascript
for (const value of iterable) {
    // Code to execute
}
```

### Example 1: Iterate Over an Array

```javascript
const numbers = [10, 20, 30, 40];

for (const number of numbers) {
    console.log(number);
}
```

**Output:**

```text
10
20
30
40
```

Here, `number` receives each array value directly.

### Example 2: Iterate Over a String

```javascript
const language = "JS";

for (const character of language) {
    console.log(character);
}
```

**Output:**

```text
J
S
```

### Example 3: Iterate Over a Set

A `Set` stores unique values.

```javascript
const numbers = new Set([10, 20, 30, 20, 10]);

for (const number of numbers) {
    console.log(number);
}
```

**Output:**

```text
10
20
30
```

### Example 4: Iterate Over a Map

A `Map` stores key-value pairs.

```javascript
const student = new Map([
    ["name", "Rahul"],
    ["age", 22],
    ["course", "MCA"]
]);

for (const [key, value] of student) {
    console.log(`${key}: ${value}`);
}
```

**Output:**

```text
name: Rahul
age: 22
course: MCA
```

The syntax `[key, value]` uses array destructuring to extract each pair.

### Example 5: Get Index and Value

Use the `entries()` method when you need both the index and value of an array element.

```javascript
const fruits = ["Apple", "Banana", "Mango"];

for (const [index, fruit] of fruits.entries()) {
    console.log(index, fruit);
}
```

**Output:**

```text
0 Apple
1 Banana
2 Mango
```

### Example 6: Use `break`

```javascript
const numbers = [10, 20, 30, 40];

for (const number of numbers) {
    if (number === 30) {
        break;
    }

    console.log(number);
}
```

**Output:**

```text
10
20
```

The loop stops when `number` becomes `30`.

### Important Points About `for...of`

* It provides values directly.
* It works with iterable objects.
* It supports `break` and `continue`.
* A regular object is not iterable by default.
* Use `Object.entries()` when you need to iterate over an object's key-value pairs.

---

# 7. The `for...in` Loop

## Definition

The `for...in` loop iterates over the enumerable property keys of an object.

It is commonly used to access the keys of a regular JavaScript object.

### Syntax

```javascript
for (const key in object) {
    // Code to execute
}
```

### Example 1: Iterate Over an Object

```javascript
const student = {
    name: "Rahul",
    age: 22,
    course: "MCA"
};

for (const key in student) {
    console.log(key);
}
```

**Output:**

```text
name
age
course
```

Here, `key` contains each property name.

### Example 2: Access Keys and Values

```javascript
const student = {
    name: "Rahul",
    age: 22,
    course: "MCA"
};

for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
```

**Output:**

```text
name: Rahul
age: 22
course: MCA
```

### Explanation

Consider:

```javascript
student.name
```

This accesses the value using the property name directly.

But when the property name is stored in a variable, use bracket notation:

```javascript
student[key]
```

For example, if `key` is `"name"`, then `student[key]` is equivalent to `student["name"]`.

### Example 3: Using `for...in` with an Array

```javascript
const fruits = ["Apple", "Banana", "Mango"];

for (const index in fruits) {
    console.log(index);
}
```

**Output:**

```text
0
1
2
```

For arrays, `for...in` gives enumerable property keys, which are normally the indexes represented as strings.

If you want the array values directly, prefer `for...of`.

### Important Points About `for...in`

* It iterates over enumerable string property keys.
* It can include inherited enumerable properties.
* It is useful for examining object properties.
* It is generally not the preferred way to iterate over array values.
* Property enumeration order has defined rules, but you should not use `for...in` when you need to guarantee a particular business-specific order of values.

---

# 8. Difference Between `forEach()`, `for...of`, and `for...in`

These three approaches are important to understand.

Consider the array:

```javascript
const fruits = ["Apple", "Banana", "Mango"];
```

## Using `forEach()`

```javascript
fruits.forEach((fruit) => {
    console.log(fruit);
});
```

Output:

```text
Apple
Banana
Mango
```

## Using `for...of`

```javascript
for (const fruit of fruits) {
    console.log(fruit);
}
```

Output:

```text
Apple
Banana
Mango
```

## Using `for...in`

```javascript
for (const index in fruits) {
    console.log(index);
}
```

Output:

```text
0
1
2
```

## Comparison Table

| Feature                               | `forEach()`                    | `for...of`                                        | `for...in`                                        |
| ------------------------------------- | ------------------------------ | ------------------------------------------------- | ------------------------------------------------- |
| Type                                  | Array method                   | Loop statement                                    | Loop statement                                    |
| Iterates over                         | Array elements                 | Iterable values                                   | Enumerable property keys                          |
| Best suited for                       | Processing array elements      | Iterating over iterable values                    | Iterating over object keys                        |
| Works with arrays                     | Yes                            | Yes                                               | Yes                                               |
| Works with strings directly           | No                             | Yes                                               | Yes, but iterates over property keys              |
| Works with Sets                       | Has a Set-specific method      | Yes                                               | Not for Set values                                |
| Works with Maps                       | Has a Map-specific method      | Yes                                               | Not for Map entries                               |
| Works with regular objects by default | No                             | No                                                | Yes                                               |
| Supports `break`                      | No                             | Yes                                               | Yes                                               |
| Supports `continue`                   | No                             | Yes                                               | Yes                                               |
| Can use `return` inside its body      | Only returns from the callback | Returns from the enclosing function if inside one | Returns from the enclosing function if inside one |
| Gets array values directly            | Yes                            | Yes                                               | No                                                |

### Easy Rule to Remember

* **`forEach()`** → Perform an operation for each array element.
* **`for...of`** → Get iterable values.
* **`for...in`** → Get enumerable property keys.

---

# 9. The `break` Statement

The `break` statement terminates a loop immediately.

### Example

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}
```

**Output:**

```text
1
2
3
4
```

When `i` becomes `5`, the loop terminates.

---

# 10. The `continue` Statement

The `continue` statement skips the current iteration and moves to the next one.

### Example

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

The number `3` is skipped.

### Difference Between `break` and `continue`

| Statement  | Meaning                     |
| ---------- | --------------------------- |
| `break`    | Terminates the loop         |
| `continue` | Skips the current iteration |

---

# 11. Nested Loops

A nested loop is a loop inside another loop.

### Example: Print a Pattern

```javascript
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}
```

**Output:**

```text
i = 1, j = 1
i = 1, j = 2
i = 1, j = 3
i = 2, j = 1
i = 2, j = 2
i = 2, j = 3
i = 3, j = 1
i = 3, j = 2
i = 3, j = 3
```

The inner loop completes all its iterations for every iteration of the outer loop.

### Example: Print a Star Pattern

```javascript
for (let i = 1; i <= 4; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern);
}
```

**Output:**

```text
*
* *
* * *
* * * *
```

Nested loops are commonly used for matrices, patterns, and multidimensional data.

---

# 12. Infinite Loops

An infinite loop continues indefinitely because its termination condition never becomes false.

### Example

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
}
```

This loop never ends because `i` is never incremented.

### Correct Version

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
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

Always ensure that the loop's condition can eventually become false unless an infinite loop is intentional.

---

# 13. Looping Through Arrays

Loops are especially useful when processing array elements.

### Example 1: Calculate the Sum

```javascript
const numbers = [10, 20, 30, 40, 50];

let sum = 0;

for (const number of numbers) {
    sum += number;
}

console.log("Sum:", sum);
```

**Output:**

```text
Sum: 150
```

### Example 2: Find the Largest Number

```javascript
const numbers = [12, 45, 7, 89, 34];

let largest = numbers[0];

for (const number of numbers) {
    if (number > largest) {
        largest = number;
    }
}

console.log("Largest:", largest);
```

**Output:**

```text
Largest: 89
```

### Example 3: Count Even Numbers

```javascript
const numbers = [10, 15, 20, 25, 30, 35];

let count = 0;

for (const number of numbers) {
    if (number % 2 === 0) {
        count++;
    }
}

console.log("Even numbers:", count);
```

**Output:**

```text
Even numbers: 3
```

### Example 4: Create a New Array of Squares

```javascript
const numbers = [1, 2, 3, 4, 5];

const squares = [];

for (const number of numbers) {
    squares.push(number * number);
}

console.log(squares);
```

**Output:**

```text
[1, 4, 9, 16, 25]
```

---

# 14. Common Mistakes

## Mistake 1: Forgetting to Increment the Counter

Incorrect:

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
}
```

This creates an infinite loop because `i` never changes.

## Mistake 2: Confusing Array Values with Indexes

```javascript
const numbers = [10, 20, 30];

for (const number of numbers) {
    console.log(number);
}
```

Output:

```text
10
20
30
```

Here, `number` receives the values, not the indexes.

## Mistake 3: Using `for...of` Directly on a Regular Object

Incorrect:

```javascript
const user = {
    name: "Rahul",
    age: 22
};

for (const value of user) {
    console.log(value);
}
```

This throws a `TypeError` because a regular object is not iterable by default.

Correct:

```javascript
const user = {
    name: "Rahul",
    age: 22
};

for (const [key, value] of Object.entries(user)) {
    console.log(key, value);
}
```

## Mistake 4: Trying to Use `break` in `forEach()`

Incorrect:

```javascript
const numbers = [1, 2, 3, 4];

numbers.forEach((number) => {
    if (number === 3) {
        break;
    }
});
```

This causes a syntax error because `break` cannot be used to terminate the surrounding loop from inside the callback.

Use `for...of` when early termination is required.

---

# 15. Time Complexity

The time complexity of a loop depends on the number of iterations and the work performed during each iteration.

| Example                                           | Time Complexity |
| ------------------------------------------------- | --------------- |
| Loop through an array once                        | `O(n)`          |
| Two nested loops over `n` elements each           | `O(n²)`         |
| Loop through an array and calculate its sum       | `O(n)`          |
| Loop through an array to find its largest element | `O(n)`          |
| Access an array element using its index           | `O(1)`          |

### Example: Linear Time Complexity

```javascript
const numbers = [10, 20, 30, 40, 50];

for (const number of numbers) {
    console.log(number);
}
```

If the array contains `n` elements, the loop processes each element once.

Therefore, its time complexity is **O(n)**.

### Example: Quadratic Time Complexity

```javascript
const numbers = [1, 2, 3, 4];

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
        console.log(numbers[i], numbers[j]);
    }
}
```

If the array contains `n` elements, the inner loop executes `n` times for each of the `n` outer iterations.

Therefore, the time complexity is **O(n²)**.

---

# 16. Interview Questions

### Q1. What are loops in JavaScript?

Loops allow a block of code to execute repeatedly while a condition is true or until an iterable has been processed.

### Q2. What is the difference between `while` and `do...while`?

A `while` loop checks the condition before execution. A `do...while` loop checks the condition after execution, so its body runs at least once.

### Q3. What is the difference between `for...of` and `for...in`?

`for...of` iterates over iterable values, while `for...in` iterates over enumerable property keys.

### Q4. What is `forEach()`?

`forEach()` is an array method that executes a callback for each existing array element.

### Q5. Can we use `break` inside `forEach()`?

No. You cannot use `break` directly inside a `forEach()` callback to terminate the iteration. Use a loop such as `for...of` when you need early termination.

### Q6. Can we use `for...of` with a string?

Yes. Strings are iterable, and `for...of` iterates over their Unicode code points.

### Q7. Can we use `for...of` with a regular object?

Not directly, because regular objects are not iterable by default. Use `Object.keys()`, `Object.values()`, or `Object.entries()` to iterate over their properties.

### Q8. What is an infinite loop?

An infinite loop is a loop that continues indefinitely because its termination condition never becomes false.

### Q9. What is the difference between `map()` and `forEach()`?

`map()` creates and returns a new array containing the callback results. `forEach()` returns `undefined` and is generally used for side effects.

### Q10. When should you use `for...of` instead of `forEach()`?

Use `for...of` when you need `break`, `continue`, or sequential `await` operations. Use `forEach()` when you want to execute a callback for each array element without needing those loop-control features.

---

# 17. Practice Questions

Try to solve these questions independently.

### Beginner Level

1. Print numbers from 1 to 10 using a `for` loop.
2. Print all even numbers between 1 and 50.
3. Print numbers from 10 to 1 in reverse order.
4. Calculate the sum of numbers from 1 to 100.
5. Print each character of a string using `for...of`.

### Intermediate Level

6. Calculate the sum of all elements in an array.
7. Find the largest and smallest numbers in an array.
8. Count even and odd numbers in an array.
9. Count the vowels in a string.
10. Create a new array containing the squares of all numbers.
11. Print array indexes and values using `entries()`.
12. Print all key-value pairs of an object using `Object.entries()`.

### Advanced Level

13. Find duplicate elements in an array.
14. Count how many times each element appears in an array.
15. Remove duplicate values using a `Set`.
16. Find the second-largest number in an array.
17. Flatten a two-dimensional array using nested loops.
18. Print a triangle pattern using nested loops.
19. Compare `forEach()`, `for...of`, and `for...in` with practical examples.
20. Process an array of promises sequentially using `for...of` and `await`.

---

# 18. Quick Revision

| Loop or Method | Main Purpose                          | Key Point                                                      |
| -------------- | ------------------------------------- | -------------------------------------------------------------- |
| `for`          | Repeat code with a counter            | Useful for index-based iteration                               |
| `while`        | Repeat while a condition is true      | Checks condition first                                         |
| `do...while`   | Execute at least once                 | Checks condition afterward                                     |
| `forEach()`    | Process array elements                | Cannot directly use `break` or `continue` to control iteration |
| `for...of`     | Iterate over iterable values          | Useful for arrays, strings, Sets, and Maps                     |
| `for...in`     | Iterate over enumerable property keys | Commonly used with objects                                     |
| `break`        | Stop a loop                           | Exits the loop                                                 |
| `continue`     | Skip an iteration                     | Moves to the next iteration                                    |
| `map()`        | Transform array elements              | Returns a new array                                            |

## Final Summary

Remember these three rules:

* **`forEach()`** → Execute a callback for each array element.
* **`for...of`** → Iterate over values.
* **`for...in`** → Iterate over enumerable property keys.

Understanding these concepts will help you write cleaner JavaScript code and prepare for coding assessments and technical interviews.

---

**Next Topics to Learn:**

* Array methods: `map()`, `filter()`, `reduce()`, and `find()`
* JavaScript functions and arrow functions
* Array and object destructuring
* Iterators and generators
* Promises and asynchronous JavaScript
