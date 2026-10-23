# JavaScript Loops and Array Methods

A beginner-friendly guide to JavaScript loops and array methods, including `for`, `while`, `do...while`, `for...in`, `for...of`, `forEach()`, `map()`, and `reduce()`.

This guide includes syntax, explanations, examples, outputs, differences, common mistakes, and practice questions.

---

## Table of Contents

1. [Introduction to Loops](#1-introduction-to-loops)
2. [The for Loop](#2-the-for-loop)
3. [The while Loop](#3-the-while-loop)
4. [The do...while Loop](#4-the-dowhile-loop)
5. [The for...in Loop](#5-the-forin-loop)
6. [The for...of Loop](#6-the-forof-loop)
7. [The forEach() Method](#7-the-foreach-method)
8. [The map() Method](#8-the-map-method)
9. [The reduce() Method](#9-the-reduce-method)
10. [The filter() Method](#10-the-filter-method)
11. [The find() Method](#11-the-find-method)
12. [The some() and every() Methods](#12-the-some-and-every-methods)
13. [The Difference Between Loops and Array Methods](#13-the-difference-between-loops-and-array-methods)
14. [The Difference Between for...in and for...of](#14-the-difference-between-forin-and-forof)
15. [The Difference Between forEach(), map(), and reduce()](#15-the-difference-between-foreach-map-and-reduce)
16. [break and continue](#16-break-and-continue)
17. [Nested Loops](#17-nested-loops)
18. [Time and Space Complexity](#18-time-and-space-complexity)
19. [Common Mistakes](#19-common-mistakes)
20. [Interview Questions](#20-interview-questions)
21. [Practice Questions](#21-practice-questions)
22. [Quick Revision Cheat Sheet](#22-quick-revision-cheat-sheet)

---

# 1. Introduction to Loops

A loop is a programming structure that executes a block of code repeatedly while a condition is satisfied or while there are values left to process.

Loops help us avoid writing the same code multiple times.

### Example Without a Loop

```javascript
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

### Example With a Loop

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

### Output

```text
1
2
3
4
5
```

Both examples produce the same output, but the loop is easier to maintain and extend.

## Types of Loops in JavaScript

JavaScript provides several ways to iterate:

| Loop or Method | Purpose                                                                   |
| -------------- | ------------------------------------------------------------------------- |
| `for`          | Repeats code using initialization, a condition, and an update expression. |
| `while`        | Repeats code while a condition is true.                                   |
| `do...while`   | Executes the body at least once, then checks the condition.               |
| `for...in`     | Iterates over enumerable property keys.                                   |
| `for...of`     | Iterates over values supplied by an iterable.                             |
| `forEach()`    | Calls a function for each array element.                                  |
| `map()`        | Creates a new array from the results of a callback.                       |
| `reduce()`     | Combines values into a single accumulated result.                         |

**Important:** `forEach()`, `map()`, and `reduce()` are array methods, not loop statements.

---

# 2. The for Loop

The `for` loop is useful when you know how many times you want to execute a block of code or need direct control over the iteration.

## Syntax

```javascript
for (initialization; condition; update) {
    // Code to execute
}
```

### Understanding the Syntax

* **Initialization:** Runs once before the loop starts.
* **Condition:** Checked before each iteration. If false, the loop stops.
* **Update:** Runs after each iteration.

## Example 1: Print Numbers from 1 to 5

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

### Output

```text
1
2
3
4
5
```

### Dry Run

| Iteration |  i | Condition         |     Output |
| --------- | -: | ----------------- | ---------: |
| 1         |  1 | `1 <= 5`          |          1 |
| 2         |  2 | `2 <= 5`          |          2 |
| 3         |  3 | `3 <= 5`          |          3 |
| 4         |  4 | `4 <= 5`          |          4 |
| 5         |  5 | `5 <= 5`          |          5 |
| End       |  6 | `6 <= 5` is false | Loop stops |

## Example 2: Iterate Over an Array

```javascript
const fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

### Output

```text
Apple
Banana
Mango
```

## Example 3: Calculate the Sum of Numbers from 1 to 5

```javascript
let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum += i;
}

console.log("Sum:", sum);
```

### Output

```text
Sum: 15
```

## When Should You Use a for Loop?

Use a `for` loop when:

* You need the index of an array.
* You want to control the starting and ending values.
* You need to increment or decrement a counter.
* You need to modify array elements by index.
* You need to use `break` or `continue`.

---

# 3. The while Loop

The `while` loop executes a block of code as long as its condition remains true.

## Syntax

```javascript
while (condition) {
    // Code to execute
}
```

The condition is checked before each iteration.

## Example 1: Print Numbers from 1 to 5

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

### Output

```text
1
2
3
4
5
```

### Explanation

1. Initialize `i` with `1`.
2. Check whether `i <= 5`.
3. Print `i`.
4. Increase `i` by one.
5. Repeat until the condition becomes false.

## Example 2: Calculate the Sum

```javascript
let i = 1;
let sum = 0;

while (i <= 5) {
    sum += i;
    i++;
}

console.log(sum);
```

### Output

```text
15
```

## Important: Avoid Infinite Loops

Incorrect:

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
}
```

The value of `i` never changes, so the condition remains true indefinitely.

Correct:

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

---

# 4. The do...while Loop

The `do...while` loop executes its body first and checks the condition afterward.

Therefore, the body always executes at least once.

## Syntax

```javascript
do {
    // Code to execute
} while (condition);
```

## Example

```javascript
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
```

### Output

```text
1
2
3
4
5
```

## Important Difference Between while and do...while

```javascript
let a = 10;

while (a < 5) {
    console.log("while loop");
}
```

Output: Nothing.

The condition is false before the loop starts.

Now consider:

```javascript
let b = 10;

do {
    console.log("do...while loop");
} while (b < 5);
```

Output:

```text
do...while loop
```

The body executes once before the condition is checked.

---

# 5. The for...in Loop

The `for...in` loop iterates over the enumerable property keys of an object.

It is commonly used with regular JavaScript objects.

## Syntax

```javascript
for (const key in object) {
    // Code to execute
}
```

## Example 1: Iterate Over an Object

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

### Output

```text
name
age
course
```

The variable `key` receives each property name.

## Example 2: Access Keys and Values

```javascript
const student = {
    name: "Rahul",
    age: 22,
    course: "MCA"
};

for (const key in student) {
    console.log(key + ":", student[key]);
}
```

### Output

```text
name: Rahul
age: 22
course: MCA
```

### Explanation

* `key` contains a property name, such as `"name"`.
* `student[key]` retrieves the corresponding value.
* `student.name` and `student["name"]` both access the `name` property.

Using `student[key]` is especially useful when the key is stored in a variable.

## Example 3: Iterate Over an Array

```javascript
const fruits = ["Apple", "Banana", "Mango"];

for (const index in fruits) {
    console.log(index);
}
```

### Output

```text
0
1
2
```

Here, `for...in` gives the enumerable property keys, which are strings for these array indexes.

If you need the array values directly, prefer `for...of`.

## Important Notes

* `for...in` iterates over enumerable string-keyed properties.
* It can include inherited enumerable properties.
* It is generally better to use it with objects rather than arrays.
* Use `Object.hasOwn()` if you need to check whether a property belongs directly to the object.

Example:

```javascript
const student = {
    name: "Rahul",
    age: 22
};

for (const key in student) {
    if (Object.hasOwn(student, key)) {
        console.log(key, student[key]);
    }
}
```

---

# 6. The for...of Loop

The `for...of` loop iterates over values supplied by an iterable object.

Common iterables include:

* Arrays
* Strings
* Sets
* Maps
* Generators

A regular object is not iterable by default.

## Syntax

```javascript
for (const value of iterable) {
    // Code to execute
}
```

## Example 1: Iterate Over an Array

```javascript
const fruits = ["Apple", "Banana", "Mango"];

for (const fruit of fruits) {
    console.log(fruit);
}
```

### Output

```text
Apple
Banana
Mango
```

Unlike `for...in`, this loop gives the values directly.

## Example 2: Iterate Over a String

```javascript
const word = "HELLO";

for (const character of word) {
    console.log(character);
}
```

### Output

```text
H
E
L
L
O
```

## Example 3: Iterate Over a Set

A `Set` stores unique values.

```javascript
const numbers = new Set([10, 20, 30, 20, 10]);

for (const number of numbers) {
    console.log(number);
}
```

### Output

```text
10
20
30
```

Duplicate values are removed when the `Set` is created.

## Example 4: Iterate Over a Map

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

### Output

```text
name: Rahul
age: 22
course: MCA
```

Array destructuring extracts the key and value from each entry.

## Example 5: Get Array Indexes and Values

Use `entries()` when you need both the index and value.

```javascript
const fruits = ["Apple", "Banana", "Mango"];

for (const [index, fruit] of fruits.entries()) {
    console.log(index, fruit);
}
```

### Output

```text
0 Apple
1 Banana
2 Mango
```

## Using break and continue

```javascript
const numbers = [10, 20, 30, 40, 50];

for (const number of numbers) {
    if (number === 30) {
        break;
    }

    console.log(number);
}
```

Output:

```text
10
20
```

`break` stops the loop immediately.

`continue` skips the current iteration and moves to the next value.

## When Should You Use for...of?

Use `for...of` when:

* You want to iterate over array values.
* You want to iterate over string characters.
* You need to use `break` or `continue`.
* You want readable iteration without manually managing an index.
* You are working with a Map, Set, generator, or another iterable.

---

# 7. The forEach() Method

`forEach()` is an array method that executes a callback function once for each element.

It is useful when you want to perform an operation on every array element.

## Syntax

```javascript
array.forEach(function(element, index, array) {
    // Code to execute
});
```

The callback receives up to three arguments:

| Parameter | Meaning                     |
| --------- | --------------------------- |
| `element` | The current array element   |
| `index`   | The current element's index |
| `array`   | The original array          |

You can omit parameters that you do not need.

## Example 1: Print Array Elements

```javascript
const numbers = [10, 20, 30, 40];

numbers.forEach(function(number) {
    console.log(number);
});
```

### Output

```text
10
20
30
40
```

## Example 2: Using an Arrow Function

```javascript
const numbers = [10, 20, 30];

numbers.forEach(number => {
    console.log(number);
});
```

The arrow function makes the code shorter.

## Example 3: Access the Index

```javascript
const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});
```

### Output

```text
0 Apple
1 Banana
2 Mango
```

## Example 4: Modify an External Variable

```javascript
const numbers = [10, 20, 30];

let sum = 0;

numbers.forEach(number => {
    sum += number;
});

console.log(sum);
```

### Output

```text
60
```

This works, but `reduce()` is another natural choice when the goal is to calculate a single accumulated result.

## Important Characteristics of forEach()

1. It executes a callback for each existing array element.
2. It returns `undefined`.
3. You cannot use `break` or `continue` to control the outer iteration.
4. A `return` inside the callback does not return from the surrounding function.
5. It does not wait for asynchronous callbacks to finish.
6. It does not automatically create a new transformed array.

### Example: forEach() Returns undefined

```javascript
const numbers = [1, 2, 3];

const result = numbers.forEach(number => {
    return number * 2;
});

console.log(result);
```

Output:

```text
undefined
```

The callback's return values are ignored by `forEach()`.

If you want to transform an array and collect the results, use `map()`.

---

# 8. The map() Method

The `map()` method creates a new array by calling a callback function for each existing array element and collecting the returned values.

It is commonly used to transform data.

## Syntax

```javascript
const newArray = array.map(function(element, index, array) {
    return transformedValue;
});
```

The callback's returned value becomes the corresponding element in the new array.

## Example 1: Double Every Number

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(number => {
    return number * 2;
});

console.log(doubled);
```

### Output

```text
[2, 4, 6, 8, 10]
```

### Shorter Version

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(number => number * 2);

console.log(doubled);
```

Both examples produce the same result.

## Example 2: Convert Strings to Uppercase

```javascript
const names = ["rahul", "aman", "priya"];

const upperNames = names.map(name => name.toUpperCase());

console.log(upperNames);
```

### Output

```text
["RAHUL", "AMAN", "PRIYA"]
```

## Example 3: Extract Values from Objects

```javascript
const students = [
    { name: "Rahul", marks: 85 },
    { name: "Aman", marks: 90 },
    { name: "Priya", marks: 95 }
];

const names = students.map(student => student.name);

console.log(names);
```

### Output

```text
["Rahul", "Aman", "Priya"]
```

## Example 4: Calculate Prices with Tax

```javascript
const prices = [100, 200, 300];

const pricesWithTax = prices.map(price => price * 1.18);

console.log(pricesWithTax);
```

### Output

```text
[118, 236, 354]
```

## Important Characteristics of map()

* It returns a new array.
* The new array contains the callback's returned values.
* The original array is not automatically modified.
* It is best suited to transforming data.
* If the callback does not return a value, the corresponding result is `undefined`.

### Common Mistake

Incorrect:

```javascript
const numbers = [1, 2, 3];

const result = numbers.map(number => {
    number * 2;
});

console.log(result);
```

Output:

```text
[undefined, undefined, undefined]
```

Why?

The callback uses braces but does not explicitly return a value.

Correct:

```javascript
const numbers = [1, 2, 3];

const result = numbers.map(number => {
    return number * 2;
});

console.log(result);
```

Output:

```text
[2, 4, 6]
```

Alternatively, use an expression-bodied arrow function:

```javascript
const result = numbers.map(number => number * 2);
```

---

# 9. The reduce() Method

The `reduce()` method processes an array and combines its elements into a single accumulated result.

The result can be a number, string, object, array, or another type.

It is commonly used for:

* Calculating sums and totals.
* Calculating products.
* Counting occurrences.
* Grouping data.
* Creating lookup objects.
* Combining values into another data structure.

## Syntax

```javascript
const result = array.reduce(function(accumulator, currentValue, index, array) {
    return updatedAccumulator;
}, initialValue);
```

### Understanding the Parameters

| Parameter      | Meaning                                                 |
| -------------- | ------------------------------------------------------- |
| `accumulator`  | Stores the accumulated result from previous iterations. |
| `currentValue` | The current array element.                              |
| `index`        | The current element's index.                            |
| `array`        | The original array.                                     |
| `initialValue` | The initial accumulator value.                          |

The index and array parameters are optional.

## Example 1: Calculate the Sum

```javascript
const numbers = [10, 20, 30, 40];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum);
```

### Output

```text
100
```

### Understanding the Dry Run

The initial accumulator value is `0`.

| Iteration | Accumulator | Current Value | New Accumulator |
| --------- | ----------: | ------------: | --------------: |
| Initial   |           0 |             — |               0 |
| 1         |           0 |            10 |              10 |
| 2         |          10 |            20 |              30 |
| 3         |          30 |            30 |              60 |
| 4         |          60 |            40 |             100 |

The final accumulated result is `100`.

## Example 2: Calculate the Product

```javascript
const numbers = [2, 3, 4];

const product = numbers.reduce((acc, number) => {
    return acc * number;
}, 1);

console.log(product);
```

### Output

```text
24
```

Calculation:

```text
1 * 2 * 3 * 4 = 24
```

## Example 3: Find the Largest Number

```javascript
const numbers = [10, 45, 7, 89, 34];

const largest = numbers.reduce((max, number) => {
    return number > max ? number : max;
}, numbers[0]);

console.log(largest);
```

### Output

```text
89
```

This example assumes the array is non-empty.

## Example 4: Count Occurrences

Count how many times each fruit appears.

```javascript
const fruits = ["Apple", "Banana", "Apple", "Mango", "Banana", "Apple"];

const counts = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});

console.log(counts);
```

### Output

```text
{
    Apple: 3,
    Banana: 2,
    Mango: 1
}
```

### Explanation

This expression:

```javascript
acc[fruit] = (acc[fruit] || 0) + 1;
```

works as follows:

* If the fruit already has a count, use that count.
* Otherwise, start from `0`.
* Add `1`.
* Store the updated count.

The initial accumulator is an empty object: `{}`.

## Example 5: Calculate the Total Price

```javascript
const cart = [
    { item: "Laptop", price: 50000 },
    { item: "Mouse", price: 1000 },
    { item: "Keyboard", price: 2000 }
];

const total = cart.reduce((sum, product) => {
    return sum + product.price;
}, 0);

console.log("Total:", total);
```

### Output

```text
Total: 53000
```

## Important: Use an Initial Value

For predictable behavior, especially with empty arrays, provide an initial accumulator value when appropriate.

```javascript
const numbers = [];

const sum = numbers.reduce((acc, number) => {
    return acc + number;
}, 0);

console.log(sum);
```

Output:

```text
0
```

Without an initial value, calling `reduce()` on an empty array throws a `TypeError`.

**Remember:** `reduce()` does not always return a number. It returns the final accumulated value.

---

# 10. The filter() Method

The `filter()` method creates a new array containing the elements that pass a condition.

## Example: Get Even Numbers

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);
```

### Output

```text
[2, 4, 6]
```

## Example: Filter Students Who Passed

```javascript
const students = [
    { name: "Rahul", marks: 75 },
    { name: "Aman", marks: 35 },
    { name: "Priya", marks: 90 }
];

const passed = students.filter(student => student.marks >= 40);

console.log(passed);
```

### Output

```text
[
    { name: "Rahul", marks: 75 },
    { name: "Priya", marks: 90 }
]
```

Use `filter()` when you want to keep elements that satisfy a condition.

---

# 11. The find() Method

The `find()` method returns the first element that satisfies a condition.

If no element matches, it returns `undefined`.

## Example

```javascript
const numbers = [10, 20, 30, 40, 50];

const result = numbers.find(number => number > 25);

console.log(result);
```

### Output

```text
30
```

Although `40` and `50` also satisfy the condition, `find()` returns only the first matching value.

---

# 12. The some() and every() Methods

These methods test whether elements satisfy a condition.

## some()

Returns `true` if at least one element passes the test.

```javascript
const numbers = [1, 3, 5, 8];

const hasEvenNumber = numbers.some(number => number % 2 === 0);

console.log(hasEvenNumber);
```

Output:

```text
true
```

## every()

Returns `true` only if every element passes the test.

```javascript
const numbers = [2, 4, 6, 8];

const allEven = numbers.every(number => number % 2 === 0);

console.log(allEven);
```

Output:

```text
true
```

Comparison:

| Method    | Meaning                                          |
| --------- | ------------------------------------------------ |
| `some()`  | Does at least one element satisfy the condition? |
| `every()` | Do all elements satisfy the condition?           |

For an empty array, `some()` returns `false`, while `every()` returns `true`.

---

# 13. The Difference Between Loops and Array Methods

Loops and array methods solve related problems, but their purposes differ.

| Feature                                  | `for`             | `for...of`                              | `forEach()`                           | `map()`                             | `reduce()`          |
| ---------------------------------------- | ----------------- | --------------------------------------- | ------------------------------------- | ----------------------------------- | ------------------- |
| Type                                     | Loop statement    | Loop statement                          | Array method                          | Array method                        | Array method        |
| Primary purpose                          | General iteration | Iterate over iterable values            | Perform an operation for each element | Transform elements into a new array | Accumulate a result |
| Returns a new array automatically        | No                | No                                      | No                                    | Yes                                 | No                  |
| Returns a final accumulated value        | Not automatically | Not automatically                       | No                                    | No                                  | Yes                 |
| Supports `break`                         | Yes               | Yes                                     | No                                    | No                                  | No                  |
| Supports `continue`                      | Yes               | Yes                                     | No                                    | No                                  | No                  |
| Can access an index                      | Yes               | Through `entries()` or another approach | Yes                                   | Yes                                 | Yes                 |
| Changes the original array automatically | No                | No                                      | No                                    | No                                  | No                  |

The last row means these constructs do not automatically change the original array merely because they iterate over it. Their callbacks can still mutate the original array or objects if written to do so.

### Which One Should You Use?

* Use `for` when you need index-based control.
* Use `for...of` when you want to iterate over values.
* Use `forEach()` when you want to perform an operation for each element.
* Use `map()` when you want a new array of transformed values.
* Use `filter()` when you want a new array containing only matching values.
* Use `reduce()` when you want to accumulate values into a result.

---

# 14. The Difference Between for...in and for...of

This is a common JavaScript interview question.

Consider:

```javascript
const numbers = [10, 20, 30];
```

## Using for...in

```javascript
for (const key in numbers) {
    console.log(key);
}
```

Output:

```text
0
1
2
```

## Using for...of

```javascript
for (const value of numbers) {
    console.log(value);
}
```

Output:

```text
10
20
30
```

### Comparison

| Feature                               | `for...in`               | `for...of`                  |
| ------------------------------------- | ------------------------ | --------------------------- |
| Iterates over                         | Enumerable property keys | Values from an iterable     |
| Typical use                           | Objects                  | Arrays, strings, Sets, Maps |
| Array example                         | Index keys               | Element values              |
| Works with regular objects by default | Yes                      | No                          |
| Supports `break`                      | Yes                      | Yes                         |
| Supports `continue`                   | Yes                      | Yes                         |

**Interview tip:**

Remember:

* `for...in` = Keys.
* `for...of` = Values.

---

# 15. The Difference Between forEach(), map(), and reduce()

These three array methods are especially important in JavaScript.

Consider:

```javascript
const numbers = [1, 2, 3, 4];
```

## Using forEach()

```javascript
numbers.forEach(number => {
    console.log(number * 2);
});
```

Output:

```text
2
4
6
8
```

`forEach()` performs an operation for each element. It returns `undefined`.

## Using map()

```javascript
const doubled = numbers.map(number => number * 2);

console.log(doubled);
```

Output:

```text
[2, 4, 6, 8]
```

`map()` transforms each element and returns a new array.

## Using reduce()

```javascript
const sum = numbers.reduce((acc, number) => acc + number, 0);

console.log(sum);
```

Output:

```text
10
```

`reduce()` combines the elements into one accumulated result.

### Comparison Table

| Method      | Purpose                                    | Return Value           |
| ----------- | ------------------------------------------ | ---------------------- |
| `forEach()` | Perform an operation for each element      | `undefined`            |
| `map()`     | Transform every element                    | New array              |
| `filter()`  | Select matching elements                   | New array              |
| `find()`    | Find the first matching element            | Element or `undefined` |
| `reduce()`  | Accumulate a result                        | Final accumulator      |
| `some()`    | Check whether at least one element matches | Boolean                |
| `every()`   | Check whether all elements match           | Boolean                |

### Easy Way to Remember

* `forEach()` → Do something.
* `map()` → Transform values.
* `filter()` → Select values.
* `find()` → Find one value.
* `reduce()` → Combine values.
* `some()` → Check whether any value matches.
* `every()` → Check whether all values match.

---

# 16. break and continue

These statements control the execution of supported loops.

## break

Stops the loop immediately.

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}
```

Output:

```text
1
2
3
4
```

## continue

Skips the current iteration.

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

Output:

```text
1
2
4
5
```

**Important:** You cannot use `break` or `continue` to exit or skip iterations of the surrounding loop from inside a `forEach()` callback.

---

# 17. Nested Loops

A nested loop is a loop inside another loop.

Nested loops are commonly used with matrices and two-dimensional arrays.

## Example: Print a Matrix

```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (const row of matrix) {
    for (const value of row) {
        console.log(value);
    }
}
```

### Output

```text
1
2
3
4
5
6
7
8
9
```

The outer loop processes each row, while the inner loop processes each value in that row.

If both loops iterate over `n` elements, the total number of iterations may be proportional to `n²`, giving a time complexity of `O(n²)`.

---

# 18. Time and Space Complexity

Understanding complexity is important for coding interviews and Data Structures and Algorithms (DSA).

## Time Complexity

Time complexity describes how the number of operations grows with the input size.

| Operation                               | Typical Time Complexity |
| --------------------------------------- | ----------------------- |
| Visit every element once                | `O(n)`                  |
| Two nested loops over `n` elements each | `O(n²)`                 |
| Binary search on a sorted array         | `O(log n)`              |
| Access an array element by index        | `O(1)`                  |

## Example: O(n)

```javascript
const numbers = [10, 20, 30, 40, 50];

for (const number of numbers) {
    console.log(number);
}
```

Each element is processed once, so the time complexity is `O(n)`.

## Example: O(n²)

```javascript
const numbers = [1, 2, 3, 4];

for (const first of numbers) {
    for (const second of numbers) {
        console.log(first, second);
    }
}
```

The outer loop runs `n` times, and the inner loop runs `n` times for each outer iteration.

The total number of iterations is `n × n`, so the time complexity is `O(n²)`.

## Space Complexity

Space complexity describes the additional memory used by an algorithm.

For example:

```javascript
const numbers = [1, 2, 3, 4];

let sum = 0;

for (const number of numbers) {
    sum += number;
}
```

The loop uses a constant amount of extra storage, so its auxiliary space complexity is `O(1)`.

By contrast:

```javascript
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(number => number * 2);
```

The new array stores `n` results, so its additional space complexity is `O(n)`.

Actual complexity depends on the operations performed inside the loop or callback.

---

# 19. Common Mistakes

## Mistake 1: Forgetting the Update Expression

Incorrect:

```javascript
for (let i = 1; i <= 5;) {
    console.log(i);
}
```

This loop never updates `i`, so it can run indefinitely.

Correct:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

## Mistake 2: Using for...of on a Regular Object

Incorrect:

```javascript
const student = {
    name: "Rahul",
    age: 22
};

for (const value of student) {
    console.log(value);
}
```

This throws a `TypeError` because the object is not iterable by default.

Correct:

```javascript
for (const [key, value] of Object.entries(student)) {
    console.log(key, value);
}
```

## Mistake 3: Forgetting return in map()

Incorrect:

```javascript
const numbers = [1, 2, 3];

const result = numbers.map(number => {
    number * 2;
});

console.log(result);
```

Output:

```text
[undefined, undefined, undefined]
```

Correct:

```javascript
const result = numbers.map(number => number * 2);
```

## Mistake 4: Expecting forEach() to Return an Array

Incorrect assumption:

```javascript
const numbers = [1, 2, 3];

const result = numbers.forEach(number => number * 2);

console.log(result);
```

Output:

```text
undefined
```

Use `map()` if you need an array of transformed values.

## Mistake 5: Using reduce() Without an Initial Value

```javascript
const numbers = [];

const result = numbers.reduce((acc, number) => acc + number);
```

This throws a `TypeError` because the array is empty and no initial accumulator value was provided.

Correct:

```javascript
const result = numbers.reduce((acc, number) => acc + number, 0);

console.log(result);
```

Output:

```text
0
```

## Mistake 6: Expecting a Loop Variable to Modify an Array Element

```javascript
const numbers = [10, 20, 30];

for (let number of numbers) {
    number *= 2;
}

console.log(numbers);
```

Output:

```text
[10, 20, 30]
```

The loop variable is separate from the array element. To update array elements, use indexes or create a transformed array with `map()`.

---

# 20. Interview Questions

### Q1. What is a loop in JavaScript?

A loop repeatedly executes a block of code according to a condition or iteration rule.

### Q2. What is the difference between for and while?

A `for` loop combines initialization, condition, and update expressions. A `while` loop checks a condition before each iteration, and initialization or updating is usually handled separately.

### Q3. What is the difference between while and do...while?

A `while` loop checks its condition before executing the body. A `do...while` loop executes its body first and checks the condition afterward.

### Q4. What is the difference between for...in and for...of?

`for...in` iterates over enumerable property keys. `for...of` iterates over values supplied by an iterable.

### Q5. What is forEach()?

`forEach()` is an array method that calls a callback function for each existing array element. It returns `undefined`.

### Q6. What is map()?

`map()` creates a new array containing the values returned by its callback for each existing array element.

### Q7. What is reduce()?

`reduce()` combines array elements into a single accumulated result, which can be a number, object, array, or another type.

### Q8. What is the difference between map() and forEach()?

`map()` returns a new array of callback results. `forEach()` returns `undefined` and is generally used to perform operations for each element.

### Q9. Can we stop a forEach() loop using break?

No. `break` cannot be used to terminate the outer iteration from inside a `forEach()` callback. Use `for` or `for...of` when you need `break`.

### Q10. Does map() modify the original array?

No, `map()` does not automatically modify the original array. However, its callback can still mutate objects or other data referenced by the elements if written to do so.

### Q11. What happens if map() has no return statement?

If a callback uses a block body without returning a value, the corresponding result is `undefined`.

### Q12. What happens when reduce() is called on an empty array without an initial value?

It throws a `TypeError`.

### Q13. Which method is best for calculating the sum of an array?

`reduce()` is a natural choice. A regular loop is also perfectly valid.

### Q14. Which method is best for extracting values from an array of objects?

`map()` is a common choice.

Example:

```javascript
const users = [
    { name: "Rahul", age: 22 },
    { name: "Aman", age: 23 }
];

const names = users.map(user => user.name);

console.log(names);
```

Output:

```text
["Rahul", "Aman"]
```

### Q15. Which method should you use to select values that satisfy a condition?

Use `filter()`.

### Q16. What is the difference between find() and filter()?

`find()` returns the first matching element or `undefined`. `filter()` returns a new array containing all matching elements.

### Q17. What is the difference between some() and every()?

`some()` returns `true` if at least one element satisfies the condition. `every()` returns `true` if all elements satisfy the condition.

### Q18. What is an infinite loop?

An infinite loop is a loop that continues indefinitely because its termination condition never becomes false or because it has no reachable termination.

### Q19. What is a nested loop?

A nested loop is a loop inside another loop. It is commonly used to process matrices and combinations of values.

### Q20. What is the time complexity of iterating over an array once?

Usually `O(n)`, assuming each iteration performs constant-time work.

---

# 21. Practice Questions

Try solving these problems without looking at the answers first.

## Beginner Level

### Question 1: Print Numbers

Print numbers from 1 to 10 using a `for` loop.

Expected output:

```text
1 2 3 4 5 6 7 8 9 10
```

### Question 2: Sum of an Array

Calculate the sum using a loop.

```javascript
const numbers = [10, 20, 30, 40, 50];
```

Expected output:

```text
150
```

### Question 3: Print Even Numbers

Use `for...of` to print only even numbers.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
```

Expected output:

```text
2 4 6 8
```

### Question 4: Print Object Properties

Use `for...in` to print the keys and values.

```javascript
const student = {
    name: "Rahul",
    age: 22,
    course: "MCA"
};
```

Expected output:

```text
name: Rahul
age: 22
course: MCA
```

## Intermediate Level

### Question 5: Double Array Elements

Use `map()`.

```javascript
const numbers = [1, 2, 3, 4, 5];
```

Expected output:

```text
[2, 4, 6, 8, 10]
```

### Question 6: Filter Even Numbers

Use `filter()`.

```javascript
const numbers = [10, 15, 20, 25, 30, 35];
```

Expected output:

```text
[10, 20, 30]
```

### Question 7: Calculate the Product

Use `reduce()`.

```javascript
const numbers = [2, 3, 4, 5];
```

Expected output:

```text
120
```

### Question 8: Find the Largest Number

Use a loop or `reduce()`.

```javascript
const numbers = [15, 45, 7, 89, 34];
```

Expected output:

```text
89
```

### Question 9: Count Occurrences

Use `reduce()` to count the occurrences of each value.

```javascript
const numbers = [1, 2, 2, 3, 1, 2, 4];
```

Expected result:

```javascript
{
    1: 2,
    2: 3,
    3: 1,
    4: 1
}
```

### Question 10: Extract Student Names

Use `map()`.

```javascript
const students = [
    { name: "Rahul", marks: 85 },
    { name: "Aman", marks: 90 },
    { name: "Priya", marks: 95 }
];
```

Expected output:

```text
["Rahul", "Aman", "Priya"]
```

## Advanced Practice

11. Find the second-largest distinct number in an array.
12. Remove duplicate values from an array.
13. Count the frequency of each character in a string.
14. Group students by their grade using `reduce()`.
15. Flatten a two-dimensional array.
16. Find the first number greater than 50 using `find()`.
17. Check whether every student passed using `every()`.
18. Check whether an array contains at least one negative number using `some()`.
19. Calculate the total price of all products in a shopping cart.
20. Compare the solutions to an array problem using a loop, `map()`, `filter()`, or `reduce()`.

---

# 22. Quick Revision Cheat Sheet

| Requirement                                 | Recommended Approach |
| ------------------------------------------- | -------------------- |
| Repeat code a fixed number of times         | `for`                |
| Repeat while a condition is true            | `while`              |
| Execute the body at least once              | `do...while`         |
| Iterate over object property keys           | `for...in`           |
| Iterate over iterable values                | `for...of`           |
| Perform an operation for each array element | `forEach()`          |
| Transform every array element               | `map()`              |
| Keep elements that satisfy a condition      | `filter()`           |
| Find the first matching element             | `find()`             |
| Accumulate values into a result             | `reduce()`           |
| Check whether at least one element matches  | `some()`             |
| Check whether every element matches         | `every()`            |
| Stop a supported loop                       | `break`              |
| Skip the current iteration                  | `continue`           |

## Final Summary

The most important concepts to remember are:

1. **`for`** gives you direct control over initialization, conditions, updates, and indexes.
2. **`while`** repeats while its condition remains true.
3. **`do...while`** executes its body at least once.
4. **`for...in`** iterates over enumerable property keys.
5. **`for...of`** iterates over values supplied by an iterable.
6. **`forEach()`** performs an operation for each array element and returns `undefined`.
7. **`map()`** creates a new array from callback results.
8. **`filter()`** creates a new array of matching elements.
9. **`reduce()`** combines values into a final accumulated result.
10. **`find()`**, **`some()`**, and **`every()`** help search and test array elements.

### The Easiest Way to Remember

```text
for       -> General iteration
while     -> Repeat while true
do...while -> Execute at least once
for...in  -> Keys
for...of  -> Values
forEach() -> Perform an operation
map()     -> Transform
filter()  -> Select
find()    -> Find the first match
reduce()  -> Accumulate
some()    -> At least one matches
every()   -> All match
```

Keep practising these concepts with small examples. Once you understand how the accumulator works in `reduce()` and how callback return values work in `map()`, you'll find many JavaScript array problems much easier to solve.
