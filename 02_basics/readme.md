# JavaScript: Arrays, String Arrays, and Objects

A detailed guide to understanding **Arrays, String Arrays, and Objects in JavaScript**, including syntax, examples, methods, outputs, practical applications, and interview questions.

This README is part of my JavaScript learning journey, covering fundamental concepts with practical examples.

---

# 📚 Table of Contents

1. [Arrays in JavaScript](#1-arrays-in-javascript)

   * Introduction
   * Creating Arrays
   * Accessing and Modifying Elements
   * Array Properties
   * Important Array Methods
   * Adding and Removing Elements
   * Searching in Arrays
   * Array Iteration
   * Transformation Methods
   * Sorting and Reversing
   * Array Destructuring
   * Spread and Rest Operators
   * Shallow Copy and Reference Behavior
   * Multidimensional Arrays
   * Array of Objects
   * Common Array Mistakes
2. [String Arrays in JavaScript](#2-string-arrays-in-javascript)

   * Introduction
   * Creating String Arrays
   * Accessing String Elements
   * String Methods
   * Splitting and Joining Strings
   * Searching and Checking Strings
   * Changing String Case
   * Extracting Parts of Strings
   * String Immutability
   * Array of Strings vs. String
   * Common String Mistakes
3. [Objects in JavaScript](#3-objects-in-javascript)

   * Introduction
   * Creating Objects
   * Accessing Properties
   * Adding, Updating, and Deleting Properties
   * Methods in Objects
   * The `this` Keyword
   * Nested Objects
   * Arrays Inside Objects
   * Objects Inside Arrays
   * Object Methods
   * Object Destructuring
   * Spread Operator
   * Object.keys(), Object.values(), Object.entries()
   * Optional Chaining
   * Property Existence
   * Shallow Copy and Reference Behavior
   * Object.freeze() and Object.seal()
4. [Arrays vs. Strings vs. Objects](#4-arrays-vs-strings-vs-objects)
5. [Practical Examples](#5-practical-examples)
6. [Common Interview Questions](#6-common-interview-questions)
7. [Practice Questions](#7-practice-questions)
8. [Summary](#8-summary)

---

# 1. Arrays in JavaScript

## 1.1 What Is an Array?

An **array** is a data structure used to store multiple values in a single variable.

Instead of creating separate variables for every value, we can store them together in an array.

### Without an Array

```javascript
const student1 = "Rahul";
const student2 = "Aman";
const student3 = "Priya";
```

### With an Array

```javascript
const students = ["Rahul", "Aman", "Priya"];

console.log(students);
```

**Output:**

```text
["Rahul", "Aman", "Priya"]
```

### Important Points

* Arrays store multiple values.
* Array elements are ordered.
* Array indexing starts from `0`.
* Arrays can contain different data types.
* Arrays have a built-in `length` property.
* JavaScript arrays are dynamic, so their size can change.
* Arrays are objects in JavaScript.

---

## 1.2 Creating Arrays

### Method 1: Array Literal (Recommended)

```javascript
const numbers = [10, 20, 30, 40];

console.log(numbers);
```

**Output:**

```text
[10, 20, 30, 40]
```

The array literal syntax uses square brackets `[]`.

### Method 2: Using the Array Constructor

```javascript
const numbers = new Array(10, 20, 30);

console.log(numbers);
```

**Output:**

```text
[10, 20, 30]
```

Be careful with a single numeric argument:

```javascript
const arr = new Array(5);

console.log(arr.length);
```

**Output:**

```text
5
```

This creates an array with five empty slots, not an array containing the number `5`.

To create an array containing the number `5`, use:

```javascript
const arr = [5];

console.log(arr);
```

**Output:**

```text
[5]
```

### Method 3: Using Array.of()

```javascript
const numbers = Array.of(5);

console.log(numbers);
```

**Output:**

```text
[5]
```

`Array.of()` creates an array containing the supplied arguments.

### Method 4: Using Array.from()

```javascript
const characters = Array.from("HELLO");

console.log(characters);
```

**Output:**

```text
["H", "E", "L", "L", "O"]
```

`Array.from()` creates a new array from an iterable or array-like object.

---

## 1.3 Accessing Array Elements

Array elements are accessed using their indexes.

```javascript
const fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
```

**Output:**

```text
Apple
Banana
Mango
Orange
```

### Understanding Indexes

| Element | Index |
| ------- | ----: |
| Apple   |     0 |
| Banana  |     1 |
| Mango   |     2 |
| Orange  |     3 |

The first element has index `0`, not `1`.

### Access the Last Element

```javascript
const fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits[fruits.length - 1]);
console.log(fruits.at(-1));
```

**Output:**

```text
Orange
Orange
```

`at(-1)` accesses the last element.

---

## 1.4 Modifying Array Elements

You can change an element by assigning a new value to its index.

```javascript
const fruits = ["Apple", "Banana", "Mango"];

fruits[1] = "Grapes";

console.log(fruits);
```

**Output:**

```text
["Apple", "Grapes", "Mango"]
```

### Can We Modify a `const` Array?

Yes.

```javascript
const numbers = [10, 20, 30];

numbers[0] = 100;

console.log(numbers);
```

**Output:**

```text
[100, 20, 30]
```

`const` prevents reassignment of the array variable. It does not prevent modification of the array's contents.

However, this causes an error:

```javascript
const numbers = [10, 20, 30];

numbers = [40, 50, 60];
```

You cannot assign a different array to the same `const` variable.

---

## 1.5 The `length` Property

The `length` property returns the array's length.

```javascript
const numbers = [10, 20, 30, 40, 50];

console.log(numbers.length);
```

**Output:**

```text
5
```

### Using `length` in a Loop

```javascript
const numbers = [10, 20, 30, 40];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

**Output:**

```text
10
20
30
40
```

### Reducing Array Length

```javascript
const numbers = [10, 20, 30, 40, 50];

numbers.length = 3;

console.log(numbers);
```

**Output:**

```text
[10, 20, 30]
```

Reducing `length` removes elements from the end of the array.

Increasing `length` creates empty slots at the end.

---

# 1.6 Adding and Removing Array Elements

Four important methods are:

* `push()`
* `pop()`
* `unshift()`
* `shift()`

## push() — Add to the End

```javascript
const fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);
```

**Output:**

```text
["Apple", "Banana", "Mango"]
```

You can add multiple elements:

```javascript
fruits.push("Orange", "Grapes");

console.log(fruits);
```

`push()` returns the new array length.

```javascript
const numbers = [10, 20];

const result = numbers.push(30);

console.log(result);
```

**Output:**

```text
3
```

## pop() — Remove from the End

```javascript
const fruits = ["Apple", "Banana", "Mango"];

const removed = fruits.pop();

console.log(removed);
console.log(fruits);
```

**Output:**

```text
Mango
["Apple", "Banana"]
```

`pop()` returns the removed element.

## unshift() — Add to the Beginning

```javascript
const fruits = ["Banana", "Mango"];

fruits.unshift("Apple");

console.log(fruits);
```

**Output:**

```text
["Apple", "Banana", "Mango"]
```

`unshift()` returns the new array length.

## shift() — Remove from the Beginning

```javascript
const fruits = ["Apple", "Banana", "Mango"];

const removed = fruits.shift();

console.log(removed);
console.log(fruits);
```

**Output:**

```text
Apple
["Banana", "Mango"]
```

`shift()` returns the removed element.

### Quick Comparison

| Method      | Operation                  | Changes Original Array? |
| ----------- | -------------------------- | ----------------------- |
| `push()`    | Adds at the end            | Yes                     |
| `pop()`     | Removes from the end       | Yes                     |
| `unshift()` | Adds at the beginning      | Yes                     |
| `shift()`   | Removes from the beginning | Yes                     |

---

# 1.7 splice() and slice()

These methods have similar names but different purposes.

## splice() — Add, Remove, or Replace Elements

Syntax:

```javascript
array.splice(start, deleteCount, item1, item2, ...);
```

### Example 1: Remove Elements

```javascript
const numbers = [10, 20, 30, 40, 50];

numbers.splice(1, 2);

console.log(numbers);
```

**Output:**

```text
[10, 40, 50]
```

Explanation:

* `1` means start at index `1`.
* `2` means remove two elements.
* The removed elements are `20` and `30`.

### Example 2: Insert Elements

```javascript
const fruits = ["Apple", "Mango"];

fruits.splice(1, 0, "Banana");

console.log(fruits);
```

**Output:**

```text
["Apple", "Banana", "Mango"]
```

The `0` means no existing elements should be removed.

### Example 3: Replace an Element

```javascript
const fruits = ["Apple", "Banana", "Mango"];

fruits.splice(1, 1, "Orange");

console.log(fruits);
```

**Output:**

```text
["Apple", "Orange", "Mango"]
```

`splice()` modifies the original array.

## slice() — Extract Elements

Syntax:

```javascript
array.slice(start, end);
```

The ending index is excluded.

```javascript
const numbers = [10, 20, 30, 40, 50];

const result = numbers.slice(1, 4);

console.log(result);
console.log(numbers);
```

**Output:**

```text
[20, 30, 40]
[10, 20, 30, 40, 50]
```

The original array remains unchanged.

### Difference Between splice() and slice()

| Feature                 | `splice()`              | `slice()`              |
| ----------------------- | ----------------------- | ---------------------- |
| Purpose                 | Add, remove, or replace | Extract a portion      |
| Modifies original array | Yes                     | No                     |
| Returns                 | Removed elements        | Extracted elements     |
| End index               | Uses a removal count    | Exclusive ending index |

**Remember:** `splice()` changes the original array; `slice()` does not.

---

# 1.8 Searching in Arrays

## indexOf()

Returns the first index of a matching element, or `-1` if it is not found.

```javascript
const fruits = ["Apple", "Banana", "Mango", "Banana"];

console.log(fruits.indexOf("Banana"));
console.log(fruits.indexOf("Orange"));
```

**Output:**

```text
1
-1
```

## lastIndexOf()

Returns the last index of a matching element.

```javascript
const fruits = ["Apple", "Banana", "Mango", "Banana"];

console.log(fruits.lastIndexOf("Banana"));
```

**Output:**

```text
3
```

## includes()

Checks whether an array contains a particular value.

```javascript
const numbers = [10, 20, 30, 40];

console.log(numbers.includes(30));
console.log(numbers.includes(100));
```

**Output:**

```text
true
false
```

## find()

Returns the first element that satisfies a condition.

```javascript
const numbers = [5, 12, 18, 25, 30];

const result = numbers.find(num => num > 15);

console.log(result);
```

**Output:**

```text
18
```

## findIndex()

Returns the index of the first matching element.

```javascript
const numbers = [5, 12, 18, 25, 30];

const index = numbers.findIndex(num => num > 15);

console.log(index);
```

**Output:**

```text
2
```

## some()

Returns `true` if at least one element satisfies a condition.

```javascript
const numbers = [2, 4, 7, 8];

console.log(numbers.some(num => num % 2 !== 0));
```

**Output:**

```text
true
```

## every()

Returns `true` only if every element satisfies the condition.

```javascript
const numbers = [2, 4, 6, 8];

console.log(numbers.every(num => num % 2 === 0));
```

**Output:**

```text
true
```

### Search Methods Summary

| Method          | Purpose                                    |
| --------------- | ------------------------------------------ |
| `indexOf()`     | Find the first matching index              |
| `lastIndexOf()` | Find the last matching index               |
| `includes()`    | Check whether a value exists               |
| `find()`        | Find the first matching element            |
| `findIndex()`   | Find the first matching index              |
| `some()`        | Check whether at least one element matches |
| `every()`       | Check whether all elements match           |

---

# 1.9 Iterating Over Arrays

Iteration means accessing or processing array elements one by one.

## Traditional for Loop

```javascript
const numbers = [10, 20, 30];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

**Output:**

```text
10
20
30
```

Use a traditional `for` loop when you need the index or want to control the iteration.

## for...of Loop

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

`for...of` iterates over array values.

## forEach()

Executes a callback function for each array element.

```javascript
const numbers = [10, 20, 30];

numbers.forEach(function (num, index) {
    console.log(index, num);
});
```

**Output:**

```text
0 10
1 20
2 30
```

Using an arrow function:

```javascript
numbers.forEach((num, index) => {
    console.log(index, num);
});
```

**Important:** `forEach()` returns `undefined`. It is not designed to create a new array from callback results.

## map()

Creates a new array by transforming each element.

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.map(num => num * 2);

console.log(result);
```

**Output:**

```text
[2, 4, 6, 8]
```

The original array remains unchanged.

## filter()

Creates a new array containing elements that satisfy a condition.

```javascript
const numbers = [10, 15, 20, 25, 30];

const result = numbers.filter(num => num > 20);

console.log(result);
```

**Output:**

```text
[25, 30]
```

## reduce()

Reduces an array to a single accumulated result.

```javascript
const numbers = [10, 20, 30, 40];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum);
```

**Output:**

```text
100
```

### Understanding reduce()

| Iteration | Accumulator | Current Value | New Accumulator |
| --------- | ----------: | ------------: | --------------: |
| 1         |           0 |            10 |              10 |
| 2         |          10 |            20 |              30 |
| 3         |          30 |            30 |              60 |
| 4         |          60 |            40 |             100 |

The initial value is `0`.

### Iteration Methods Comparison

| Method      | Main Purpose                  | Returns                |
| ----------- | ----------------------------- | ---------------------- |
| `for`       | General iteration             | Depends on your code   |
| `for...of`  | Iterate over values           | No automatic result    |
| `forEach()` | Perform an action per element | `undefined`            |
| `map()`     | Transform elements            | New array              |
| `filter()`  | Select matching elements      | New array              |
| `reduce()`  | Accumulate a result           | Accumulated value      |
| `find()`    | Find first matching element   | Element or `undefined` |

---

# 1.10 More Useful Array Methods

## concat()

Combines arrays without modifying the original arrays.

```javascript
const first = [1, 2];
const second = [3, 4];

const result = first.concat(second);

console.log(result);
```

**Output:**

```text
[1, 2, 3, 4]
```

## join()

Converts array elements into a string.

```javascript
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.join(", "));
```

**Output:**

```text
Apple, Banana, Mango
```

## flat()

Flattens nested arrays up to a specified depth.

```javascript
const numbers = [1, [2, 3], [4, [5, 6]]];

console.log(numbers.flat());
console.log(numbers.flat(2));
```

**Output:**

```text
[1, 2, 3, 4, [5, 6]]
[1, 2, 3, 4, 5, 6]
```

## flatMap()

Maps each element and flattens the result by one level.

```javascript
const numbers = [1, 2, 3];

const result = numbers.flatMap(num => [num, num * 2]);

console.log(result);
```

**Output:**

```text
[1, 2, 2, 4, 3, 6]
```

## fill()

Fills part or all of an array with a value.

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.fill(0, 1, 4);

console.log(numbers);
```

**Output:**

```text
[1, 0, 0, 0, 5]
```

`fill()` modifies the original array.

## copyWithin()

Copies part of an array to another position within the same array.

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.copyWithin(0, 3);

console.log(numbers);
```

**Output:**

```text
[4, 5, 3, 4, 5]
```

`copyWithin()` modifies the original array.

## Array.isArray()

Checks whether a value is an array.

```javascript
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray({ name: "Rahul" }));
```

**Output:**

```text
true
false
```

Remember that `typeof []` returns `"object"`, so `Array.isArray()` is the reliable way to check whether a value is an array.

---

# 1.11 Sorting and Reversing Arrays

## sort()

Sorts an array in place.

```javascript
const fruits = ["Mango", "Apple", "Banana"];

fruits.sort();

console.log(fruits);
```

**Output:**

```text
["Apple", "Banana", "Mango"]
```

### Sorting Numbers

By default, `sort()` compares elements as strings. This can produce unexpected results with numbers.

```javascript
const numbers = [100, 20, 3, 40];

numbers.sort();

console.log(numbers);
```

**Output:**

```text
[100, 20, 3, 40]
```

Use a comparison function for numeric sorting.

### Ascending Order

```javascript
const numbers = [100, 20, 3, 40];

numbers.sort((a, b) => a - b);

console.log(numbers);
```

**Output:**

```text
[3, 20, 40, 100]
```

### Descending Order

```javascript
const numbers = [100, 20, 3, 40];

numbers.sort((a, b) => b - a);

console.log(numbers);
```

**Output:**

```text
[100, 40, 20, 3]
```

## reverse()

Reverses an array in place.

```javascript
const numbers = [1, 2, 3, 4];

numbers.reverse();

console.log(numbers);
```

**Output:**

```text
[4, 3, 2, 1]
```

### Non-Mutating Alternatives

The `toSorted()` and `toReversed()` methods return new arrays instead of modifying the original array.

```javascript
const numbers = [3, 1, 2];

const sorted = numbers.toSorted((a, b) => a - b);
const reversed = numbers.toReversed();

console.log(numbers);
console.log(sorted);
console.log(reversed);
```

**Output:**

```text
[3, 1, 2]
[1, 2, 3]
[2, 1, 3]
```

These methods are supported by modern JavaScript environments.

---

# 1.12 Array Destructuring

Destructuring allows you to extract values from an array into separate variables.

```javascript
const colors = ["Red", "Green", "Blue"];

const [first, second, third] = colors;

console.log(first);
console.log(second);
console.log(third);
```

**Output:**

```text
Red
Green
Blue
```

## Skipping Elements

```javascript
const numbers = [10, 20, 30];

const [first, , third] = numbers;

console.log(first);
console.log(third);
```

**Output:**

```text
10
30
```

## Default Values

```javascript
const numbers = [10];

const [first, second = 20] = numbers;

console.log(first);
console.log(second);
```

**Output:**

```text
10
20
```

## Swapping Variables

```javascript
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a, b);
```

**Output:**

```text
20 10
```

---

# 1.13 Spread and Rest Operators with Arrays

Both use `...`, but their purpose depends on where they are used.

## Spread Operator

The spread operator expands an iterable into individual elements.

### Copying an Array

```javascript
const original = [10, 20, 30];

const copy = [...original];

console.log(copy);
```

**Output:**

```text
[10, 20, 30]
```

### Combining Arrays

```javascript
const first = [1, 2];
const second = [3, 4];

const combined = [...first, ...second];

console.log(combined);
```

**Output:**

```text
[1, 2, 3, 4]
```

### Adding Elements

```javascript
const numbers = [2, 3, 4];

const result = [1, ...numbers, 5];

console.log(result);
```

**Output:**

```text
[1, 2, 3, 4, 5]
```

## Rest Operator

The rest operator collects remaining elements into an array.

```javascript
const numbers = [10, 20, 30, 40, 50];

const [first, second, ...remaining] = numbers;

console.log(first);
console.log(second);
console.log(remaining);
```

**Output:**

```text
10
20
[30, 40, 50]
```

---

# 1.14 Shallow Copy and Reference Behavior

Arrays are objects. When you assign one array variable to another, both variables refer to the same array.

```javascript
const original = [10, 20, 30];

const copy = original;

copy[0] = 100;

console.log(original);
console.log(copy);
```

**Output:**

```text
[100, 20, 30]
[100, 20, 30]
```

Both variables refer to the same array.

## Creating a Shallow Copy

```javascript
const original = [10, 20, 30];

const copy = [...original];

copy[0] = 100;

console.log(original);
console.log(copy);
```

**Output:**

```text
[10, 20, 30]
[100, 20, 30]
```

The spread operator creates a shallow copy.

### Important: Nested Arrays

```javascript
const original = [[1, 2], [3, 4]];

const copy = [...original];

copy[0][0] = 100;

console.log(original);
```

**Output:**

```text
[[100, 2], [3, 4]]
```

The outer array was copied, but the nested arrays are still shared references.

---

# 1.15 Multidimensional Arrays

A multidimensional array contains other arrays.

```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);
console.log(matrix[0]);
console.log(matrix[1][2]);
```

**Output:**

```text
[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
[1, 2, 3]
6
```

`matrix[1][2]` means:

1. Access the array at index `1`: `[4, 5, 6]`.
2. Access index `2` of that array: `6`.

### Iterate Through a Matrix

```javascript
const matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}
```

**Output:**

```text
1
2
3
4
5
6
```

Multidimensional arrays are useful for grids, matrices, tables, and board games.

---

# 1.16 Arrays of Objects

An array can store multiple objects.

```javascript
const students = [
    { name: "Rahul", age: 21 },
    { name: "Aman", age: 22 },
    { name: "Priya", age: 20 }
];

console.log(students[0].name);
console.log(students[1].age);
```

**Output:**

```text
Rahul
22
```

### Filter Students

```javascript
const students = [
    { name: "Rahul", marks: 85 },
    { name: "Aman", marks: 45 },
    { name: "Priya", marks: 92 }
];

const toppers = students.filter(student => student.marks >= 80);

console.log(toppers);
```

**Output:**

```text
[
    { name: "Rahul", marks: 85 },
    { name: "Priya", marks: 92 }
]
```

### Extract Names

```javascript
const students = [
    { name: "Rahul", age: 21 },
    { name: "Aman", age: 22 },
    { name: "Priya", age: 20 }
];

const names = students.map(student => student.name);

console.log(names);
```

**Output:**

```text
["Rahul", "Aman", "Priya"]
```

---

# 1.17 Common Array Mistakes

### Mistake 1: Using an Incorrect Index

```javascript
const fruits = ["Apple", "Banana"];

console.log(fruits[2]);
```

**Output:**

```text
undefined
```

The array has indexes `0` and `1`. Index `2` does not contain an element.

### Mistake 2: Confusing `length` with the Last Index

```javascript
const numbers = [10, 20, 30];

console.log(numbers.length);
console.log(numbers[numbers.length - 1]);
```

**Output:**

```text
3
30
```

The length is `3`, but the last index is `2`.

### Mistake 3: Expecting `map()` to Modify the Original Array

```javascript
const numbers = [1, 2, 3];

numbers.map(num => num * 2);

console.log(numbers);
```

**Output:**

```text
[1, 2, 3]
```

`map()` returns a new array. Save the result if you need it.

### Mistake 4: Expecting `push()` to Return an Array

```javascript
const numbers = [1, 2];

const result = numbers.push(3);

console.log(result);
```

**Output:**

```text
3
```

`push()` returns the new length, not the updated array.

### Mistake 5: Using `typeof` to Check an Array

```javascript
console.log(typeof []);
```

**Output:**

```text
object
```

Use:

```javascript
console.log(Array.isArray([]));
```

**Output:**

```text
true
```

---

# 2. String Arrays in JavaScript

## 2.1 What Is a String Array?

A string array is an array whose elements are strings.

```javascript
const languages = ["JavaScript", "Java", "Python", "C++"];

console.log(languages);
```

**Output:**

```text
["JavaScript", "Java", "Python", "C++"]
```

Each element is a string, but the array itself is still an array object.

String arrays are useful for storing:

* Names
* Languages
* Product categories
* Cities
* Email addresses
* Tags
* Menu items

---

## 2.2 Creating String Arrays

```javascript
const names = ["Rahul", "Aman", "Priya"];

const cities = ["Delhi", "Mumbai", "Jaipur"];

const languages = ["JavaScript", "Python", "Java"];
```

An array can also contain an empty string.

```javascript
const values = ["Hello", "", "World"];

console.log(values.length);
```

**Output:**

```text
3
```

The empty string is still an element.

---

## 2.3 Accessing String Array Elements

```javascript
const languages = ["JavaScript", "Python", "Java"];

console.log(languages[0]);
console.log(languages[1]);
console.log(languages.at(-1));
```

**Output:**

```text
JavaScript
Python
Java
```

You can access individual characters in a string too.

```javascript
const language = "JavaScript";

console.log(language[0]);
console.log(language[4]);
```

**Output:**

```text
J
S
```

Remember the distinction:

* `languages[0]` returns an entire string from an array.
* `languages[0][0]` returns the first character of the first string.

```javascript
const languages = ["JavaScript", "Python"];

console.log(languages[0][0]);
```

**Output:**

```text
J
```

---

# 2.4 Important String Methods

JavaScript strings are immutable. String methods generally return new strings rather than modifying the original string.

## length

Returns the number of UTF-16 code units in a string.

```javascript
const text = "JavaScript";

console.log(text.length);
```

**Output:**

```text
10
```

## toUpperCase()

Converts letters to uppercase.

```javascript
const text = "javascript";

console.log(text.toUpperCase());
```

**Output:**

```text
JAVASCRIPT
```

## toLowerCase()

Converts letters to lowercase.

```javascript
const text = "JAVASCRIPT";

console.log(text.toLowerCase());
```

**Output:**

```text
javascript
```

## trim()

Removes whitespace from the beginning and end of a string.

```javascript
const text = "   Hello World   ";

console.log(text.trim());
```

**Output:**

```text
Hello World
```

It does not remove spaces between words.

## includes()

Checks whether a string contains another string.

```javascript
const text = "Learn JavaScript";

console.log(text.includes("Java"));
console.log(text.includes("Python"));
```

**Output:**

```text
true
false
```

## startsWith()

Checks whether a string begins with the supplied text.

```javascript
const text = "JavaScript";

console.log(text.startsWith("Java"));
```

**Output:**

```text
true
```

## endsWith()

Checks whether a string ends with the supplied text.

```javascript
const text = "JavaScript";

console.log(text.endsWith("Script"));
```

**Output:**

```text
true
```

## indexOf()

Returns the first index of a matching substring or `-1`.

```javascript
const text = "JavaScript";

console.log(text.indexOf("Script"));
console.log(text.indexOf("Python"));
```

**Output:**

```text
4
-1
```

## replace()

Replaces the first matching occurrence.

```javascript
const text = "I like Java. Java is popular.";

console.log(text.replace("Java", "JavaScript"));
```

**Output:**

```text
I like JavaScript. Java is popular.
```

To replace every matching occurrence, use `replaceAll()`.

```javascript
const text = "Java Java Java";

console.log(text.replaceAll("Java", "Python"));
```

**Output:**

```text
Python Python Python
```

## charAt()

Returns the character at a specified index.

```javascript
const text = "JavaScript";

console.log(text.charAt(0));
console.log(text.charAt(4));
```

**Output:**

```text
J
S
```

## slice()

Extracts part of a string.

```javascript
const text = "JavaScript";

console.log(text.slice(0, 4));
console.log(text.slice(4));
console.log(text.slice(-6));
```

**Output:**

```text
Java
Script
Script
```

The ending index is excluded.

## substring()

Extracts characters between two indexes.

```javascript
const text = "JavaScript";

console.log(text.substring(0, 4));
```

**Output:**

```text
Java
```

Unlike `slice()`, `substring()` treats negative arguments as `0`.

## repeat()

Repeats a string a specified number of times.

```javascript
const text = "JS ";

console.log(text.repeat(3));
```

**Output:**

```text
JS JS JS
```

---

# 2.5 Splitting Strings into Arrays

The `split()` method divides a string into an array of substrings.

## Split by Spaces

```javascript
const sentence = "I love JavaScript";

const words = sentence.split(" ");

console.log(words);
```

**Output:**

```text
["I", "love", "JavaScript"]
```

## Split by Commas

```javascript
const data = "Apple,Banana,Mango";

const fruits = data.split(",");

console.log(fruits);
```

**Output:**

```text
["Apple", "Banana", "Mango"]
```

## Split into Characters

```javascript
const text = "HELLO";

console.log(text.split(""));
```

**Output:**

```text
["H", "E", "L", "L", "O"]
```

For strings containing complex Unicode characters, `Array.from(text)` is often a better choice than `split("")`.

## Limit the Number of Parts

```javascript
const sentence = "Learn JavaScript every day";

console.log(sentence.split(" ", 2));
```

**Output:**

```text
["Learn", "JavaScript"]
```

---

# 2.6 Joining Arrays into Strings

The `join()` method combines array elements into a string.

```javascript
const words = ["I", "love", "JavaScript"];

console.log(words.join(" "));
console.log(words.join("-"));
console.log(words.join(""));
```

**Output:**

```text
I love JavaScript
I-love-JavaScript
IloveJavaScript
```

### Split and Join Together

```javascript
const sentence = "JavaScript is powerful";

const words = sentence.split(" ");
const result = words.join("-");

console.log(result);
```

**Output:**

```text
JavaScript-is-powerful
```

---

# 2.7 Transforming String Arrays

You can use array methods to process strings.

## Convert Every String to Uppercase

```javascript
const languages = ["javascript", "python", "java"];

const result = languages.map(language => language.toUpperCase());

console.log(result);
```

**Output:**

```text
["JAVASCRIPT", "PYTHON", "JAVA"]
```

## Filter Strings by Length

```javascript
const languages = ["C", "Java", "Python", "JavaScript"];

const result = languages.filter(language => language.length > 4);

console.log(result);
```

**Output:**

```text
["Python", "JavaScript"]
```

## Search for a String

```javascript
const languages = ["JavaScript", "Python", "Java"];

console.log(languages.includes("Python"));
```

**Output:**

```text
true
```

## Sort Strings

```javascript
const fruits = ["Mango", "Apple", "Banana"];

fruits.sort();

console.log(fruits);
```

**Output:**

```text
["Apple", "Banana", "Mango"]
```

For more predictable case-insensitive sorting, use `localeCompare()`.

```javascript
const names = ["rahul", "Aman", "priya"];

names.sort((a, b) => a.localeCompare(b, undefined, {
    sensitivity: "base"
}));

console.log(names);
```

This sorts the strings without treating uppercase and lowercase as different for comparison.

---

# 2.8 String Immutability

Strings are immutable, meaning their characters cannot be changed directly.

```javascript
let text = "Hello";

text[0] = "Y";

console.log(text);
```

**Output:**

```text
Hello
```

The original string remains unchanged.

You can create a new string and assign it to the variable:

```javascript
let text = "Hello";

text = "Y" + text.slice(1);

console.log(text);
```

**Output:**

```text
Yello
```

Notice that `let` allows the variable to be reassigned. The string itself was not mutated.

### Array Mutability vs. String Immutability

```javascript
const fruits = ["Apple", "Banana"];

fruits[0] = "Mango";

console.log(fruits);
```

**Output:**

```text
["Mango", "Banana"]
```

An array's elements can be modified, while a string's characters cannot.

---

# 2.9 Array of Strings vs. String

These are different data types.

```javascript
const text = "JavaScript";

const characters = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"];

console.log(typeof text);
console.log(typeof characters);
console.log(Array.isArray(characters));
```

**Output:**

```text
string
object
true
```

| Feature      | String                             | Array of Strings              |
| ------------ | ---------------------------------- | ----------------------------- |
| Example      | `"JavaScript"`                     | `["Java", "Python"]`          |
| Data type    | `string`                           | `object`                      |
| Access       | `text[0]`                          | `languages[0]`                |
| Length       | Number of UTF-16 code units        | Number of array elements      |
| Mutable      | No                                 | Array structure is mutable    |
| Add elements | Create a new string                | Methods such as `push()`      |
| Main methods | `slice()`, `split()`, `includes()` | `map()`, `filter()`, `push()` |

---

# 2.10 Common String Mistakes

### Mistake 1: Confusing `split()` with `join()`

```javascript
const text = "Apple,Banana,Mango";

console.log(text.split(","));
```

This returns an array, not a string.

### Mistake 2: Forgetting That String Methods Return New Strings

```javascript
let text = "hello";

text.toUpperCase();

console.log(text);
```

**Output:**

```text
hello
```

Correct approach:

```javascript
let text = "hello";

text = text.toUpperCase();

console.log(text);
```

**Output:**

```text
HELLO
```

### Mistake 3: Case-Sensitive Comparisons

```javascript
console.log("JavaScript".includes("javascript"));
```

**Output:**

```text
false
```

For a case-insensitive check:

```javascript
console.log("JavaScript".toLowerCase().includes("javascript"));
```

**Output:**

```text
true
```

---

# 3. Objects in JavaScript

## 3.1 What Is an Object?

An **object** is a data structure used to store related information as key-value pairs.

Each key is called a property name. Its associated value can be a string, number, boolean, array, function, another object, or another JavaScript value.

### Example

```javascript
const student = {
    name: "Rahul",
    age: 21,
    course: "MCA",
    isEnrolled: true
};

console.log(student);
```

**Output:**

```text
{
    name: "Rahul",
    age: 21,
    course: "MCA",
    isEnrolled: true
}
```

### Understanding the Structure

```javascript
const student = {
    name: "Rahul",
    age: 21
};
```

* `student` is the variable.
* `name` and `age` are property names.
* `"Rahul"` and `21` are property values.
* `{}` defines the object literal.

Objects are useful for representing real-world entities such as students, products, employees, users, and vehicles.

---

# 3.2 Creating Objects

## Method 1: Object Literal (Recommended)

```javascript
const person = {
    name: "Aman",
    age: 22
};

console.log(person.name);
```

**Output:**

```text
Aman
```

## Method 2: Using `new Object()`

```javascript
const person = new Object();

person.name = "Aman";
person.age = 22;

console.log(person);
```

## Method 3: Using Object.create()

```javascript
const personPrototype = {
    greet() {
        console.log("Hello!");
    }
};

const person = Object.create(personPrototype);

person.name = "Aman";

person.greet();
```

**Output:**

```text
Hello!
```

`Object.create()` creates an object with a specified prototype.

---

# 3.3 Accessing Object Properties

There are two common ways to access object properties.

## Dot Notation

```javascript
const student = {
    name: "Rahul",
    age: 21
};

console.log(student.name);
console.log(student.age);
```

**Output:**

```text
Rahul
21
```

## Bracket Notation

```javascript
const student = {
    name: "Rahul",
    age: 21
};

console.log(student["name"]);
console.log(student["age"]);
```

**Output:**

```text
Rahul
21
```

### When Should You Use Bracket Notation?

Bracket notation is useful when a property name contains spaces, uses special characters, or is stored in a variable.

```javascript
const student = {
    "full name": "Rahul Sharma",
    age: 21
};

console.log(student["full name"]);
```

**Output:**

```text
Rahul Sharma
```

### Access a Property Using a Variable

```javascript
const student = {
    name: "Rahul",
    age: 21
};

const key = "name";

console.log(student[key]);
```

**Output:**

```text
Rahul
```

Using `student.key` would look for a property literally named `"key"`, not the property named by the variable.

---

# 3.4 Adding, Updating, and Deleting Properties

## Adding a Property

```javascript
const student = {
    name: "Rahul"
};

student.age = 21;

console.log(student);
```

**Output:**

```text
{name: "Rahul", age: 21}
```

## Updating a Property

```javascript
const student = {
    name: "Rahul",
    age: 21
};

student.age = 22;

console.log(student.age);
```

**Output:**

```text
22
```

## Deleting a Property

```javascript
const student = {
    name: "Rahul",
    age: 21,
    course: "MCA"
};

delete student.age;

console.log(student);
```

**Output:**

```text
{name: "Rahul", course: "MCA"}
```

The `delete` operator removes an object's own configurable property.

---

# 3.5 Methods in Objects

A function stored as an object property is commonly called a method.

```javascript
const person = {
    name: "Rahul",

    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
};

person.greet();
```

**Output:**

```text
Hello, my name is Rahul
```

Modern object method shorthand:

```javascript
const person = {
    name: "Rahul",

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet();
```

**Output:**

```text
Hello, my name is Rahul
```

---

# 3.6 The `this` Keyword

In a regular method call such as `person.greet()`, `this` refers to the object before the dot.

```javascript
const person = {
    name: "Rahul",

    greet() {
        console.log(this.name);
    }
};

person.greet();
```

**Output:**

```text
Rahul
```

Here, `this.name` accesses the `name` property of `person`.

### Important Note

The value of `this` depends on how a function is called. Arrow functions do not create their own `this`; they inherit it from their surrounding lexical context.

For object methods that need to access the object through `this`, regular method syntax is usually a good choice.

---

# 3.7 Nested Objects

An object can contain another object as a property.

```javascript
const student = {
    name: "Rahul",
    age: 21,

    address: {
        city: "Delhi",
        state: "Delhi",
        country: "India"
    }
};

console.log(student.name);
console.log(student.address.city);
console.log(student.address.country);
```

**Output:**

```text
Rahul
Delhi
India
```

### Updating a Nested Property

```javascript
student.address.city = "Jaipur";

console.log(student.address.city);
```

**Output:**

```text
Jaipur
```

Nested objects help organize related information.

---

# 3.8 Arrays Inside Objects

An object can contain an array as a property.

```javascript
const student = {
    name: "Rahul",
    skills: ["HTML", "CSS", "JavaScript"]
};

console.log(student.skills);
console.log(student.skills[0]);
console.log(student.skills[2]);
```

**Output:**

```text
["HTML", "CSS", "JavaScript"]
HTML
JavaScript
```

### Adding a Skill

```javascript
student.skills.push("React");

console.log(student.skills);
```

**Output:**

```text
["HTML", "CSS", "JavaScript", "React"]
```

---

# 3.9 Objects Inside Arrays

An array can contain multiple objects.

```javascript
const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Tablet", price: 30000 }
];

console.log(products[0].name);
console.log(products[1].price);
```

**Output:**

```text
Laptop
20000
```

### Filter Products by Price

```javascript
const affordableProducts = products.filter(product => product.price < 30000);

console.log(affordableProducts);
```

**Output:**

```text
[
    { id: 2, name: "Phone", price: 20000 }
]
```

### Extract Product Names

```javascript
const productNames = products.map(product => product.name);

console.log(productNames);
```

**Output:**

```text
["Laptop", "Phone", "Tablet"]
```

This structure is common in APIs, databases, and frontend applications.

---

# 3.10 Object Destructuring

Object destructuring extracts properties into variables.

```javascript
const student = {
    name: "Rahul",
    age: 21,
    course: "MCA"
};

const { name, age, course } = student;

console.log(name);
console.log(age);
console.log(course);
```

**Output:**

```text
Rahul
21
MCA
```

## Renaming Variables

```javascript
const student = {
    name: "Rahul",
    age: 21
};

const { name: studentName } = student;

console.log(studentName);
```

**Output:**

```text
Rahul
```

The property remains `name`; the local variable is named `studentName`.

## Default Values

```javascript
const student = {
    name: "Rahul"
};

const { name, age = 18 } = student;

console.log(name);
console.log(age);
```

**Output:**

```text
Rahul
18
```

A default is used when the property value is `undefined`.

## Nested Destructuring

```javascript
const student = {
    name: "Rahul",
    address: {
        city: "Delhi"
    }
};

const {
    address: { city }
} = student;

console.log(city);
```

**Output:**

```text
Delhi
```

---

# 3.11 Spread Operator with Objects

The spread operator copies enumerable own properties into a new object.

## Copying an Object

```javascript
const original = {
    name: "Rahul",
    age: 21
};

const copy = { ...original };

console.log(copy);
```

**Output:**

```text
{name: "Rahul", age: 21}
```

## Updating a Property

```javascript
const student = {
    name: "Rahul",
    age: 21
};

const updatedStudent = {
    ...student,
    age: 22
};

console.log(updatedStudent);
```

**Output:**

```text
{name: "Rahul", age: 22}
```

The original object remains unchanged.

## Combining Objects

```javascript
const personalInfo = {
    name: "Rahul",
    age: 21
};

const academicInfo = {
    course: "MCA",
    college: "GL Bajaj"
};

const student = {
    ...personalInfo,
    ...academicInfo
};

console.log(student);
```

**Output:**

```text
{
    name: "Rahul",
    age: 21,
    course: "MCA",
    college: "GL Bajaj"
}
```

If multiple objects have the same property name, the value from the later spread wins.

---

# 3.12 Object.keys(), Object.values(), and Object.entries()

These methods help you inspect an object's own enumerable properties.

## Object.keys()

Returns an array of property names.

```javascript
const student = {
    name: "Rahul",
    age: 21,
    course: "MCA"
};

console.log(Object.keys(student));
```

**Output:**

```text
["name", "age", "course"]
```

## Object.values()

Returns an array of property values.

```javascript
console.log(Object.values(student));
```

**Output:**

```text
["Rahul", 21, "MCA"]
```

## Object.entries()

Returns an array of key-value pairs.

```javascript
console.log(Object.entries(student));
```

**Output:**

```text
[
    ["name", "Rahul"],
    ["age", 21],
    ["course", "MCA"]
]
```

### Iterate Over Object Properties

```javascript
for (const [key, value] of Object.entries(student)) {
    console.log(`${key}: ${value}`);
}
```

**Output:**

```text
name: Rahul
age: 21
course: MCA
```

---

# 3.13 Optional Chaining (`?.`)

Optional chaining safely accesses nested properties when an intermediate value is `null` or `undefined`.

```javascript
const student = {
    name: "Rahul"
};

console.log(student.address?.city);
```

**Output:**

```text
undefined
```

Without optional chaining, `student.address.city` would throw an error because `student.address` is `undefined`.

### Optional Chaining with Methods

```javascript
const user = {};

console.log(user.greet?.());
```

**Output:**

```text
undefined
```

Optional chaining helps avoid errors when a property or method may not exist.

It does not make every possible property access safe. You must place `?.` at the point where a value might be nullish.

---

# 3.14 Checking Whether a Property Exists

## The `in` Operator

Checks whether a property exists on the object or anywhere in its prototype chain.

```javascript
const student = {
    name: "Rahul",
    age: 21
};

console.log("name" in student);
console.log("course" in student);
```

**Output:**

```text
true
false
```

## Object.hasOwn()

Checks whether the property belongs directly to the object.

```javascript
const student = {
    name: "Rahul"
};

console.log(Object.hasOwn(student, "name"));
console.log(Object.hasOwn(student, "age"));
```

**Output:**

```text
true
false
```

## Comparing the Two

* `"name" in student` checks own properties and inherited properties.
* `Object.hasOwn(student, "name")` checks only the object's own properties.

Use `Object.hasOwn()` when you specifically need to know whether the object directly contains a property.

---

# 3.15 Shallow Copy and Reference Behavior in Objects

When you assign an object to another variable, you copy the reference, not the object itself.

```javascript
const original = {
    name: "Rahul",
    age: 21
};

const copy = original;

copy.age = 22;

console.log(original.age);
```

**Output:**

```text
22
```

Both variables refer to the same object.

## Creating a Shallow Copy

```javascript
const original = {
    name: "Rahul",
    age: 21
};

const copy = { ...original };

copy.age = 22;

console.log(original.age);
console.log(copy.age);
```

**Output:**

```text
21
22
```

## Nested Object Warning

```javascript
const original = {
    name: "Rahul",
    address: {
        city: "Delhi"
    }
};

const copy = { ...original };

copy.address.city = "Jaipur";

console.log(original.address.city);
```

**Output:**

```text
Jaipur
```

The outer object was copied, but the nested `address` object is still shared.

For supported data structures, `structuredClone()` can create a deeper copy:

```javascript
const original = {
    name: "Rahul",
    address: {
        city: "Delhi"
    }
};

const copy = structuredClone(original);

copy.address.city = "Jaipur";

console.log(original.address.city);
console.log(copy.address.city);
```

**Output:**

```text
Delhi
Jaipur
```

`structuredClone()` supports many common data types but does not clone every possible JavaScript value, such as functions.

---

# 3.16 Object.freeze() and Object.seal()

These methods control changes to an object.

## Object.freeze()

Prevents changes to an object's own properties: properties cannot be added, removed, or reassigned.

```javascript
const student = {
    name: "Rahul",
    age: 21
};

Object.freeze(student);

student.age = 22;
student.course = "MCA";

console.log(student);
```

In a non-strict script, these assignments may fail silently.

**Output:**

```text
{name: "Rahul", age: 21}
```

In strict mode or an ES module, prohibited assignments can throw a `TypeError`.

`Object.freeze()` is shallow. Nested objects can still be modified unless they are frozen separately.

## Object.seal()

Prevents adding or removing properties, but existing writable properties can still be updated.

```javascript
const student = {
    name: "Rahul",
    age: 21
};

Object.seal(student);

student.age = 22;
student.course = "MCA";
delete student.name;

console.log(student);
```

In a non-strict script, the prohibited addition and deletion may fail silently.

**Output:**

```text
{name: "Rahul", age: 22}
```

### Difference Between Freeze and Seal

| Feature                             | `Object.freeze()` | `Object.seal()` |
| ----------------------------------- | ----------------- | --------------- |
| Add properties                      | No                | No              |
| Delete properties                   | No                | No              |
| Update existing writable properties | No                | Yes             |
| Shallow operation                   | Yes               | Yes             |

---

# 4. Arrays vs. Strings vs. Objects

| Feature                  | Array                         | String                         | Object                                                 |
| ------------------------ | ----------------------------- | ------------------------------ | ------------------------------------------------------ |
| Main purpose             | Store an ordered collection   | Store text                     | Store related key-value pairs                          |
| Example                  | `[10, 20, 30]`                | `"Hello"`                      | `{ name: "Rahul" }`                                    |
| Access                   | `arr[0]`                      | `text[0]`                      | `obj.name`                                             |
| Length                   | `arr.length`                  | `text.length`                  | No built-in property count                             |
| Mutable contents         | Yes                           | No                             | Properties can often be changed                        |
| Common methods           | `map()`, `filter()`, `push()` | `slice()`, `trim()`, `split()` | `Object.keys()`, `Object.values()`                     |
| Data type using `typeof` | `"object"`                    | `"string"`                     | `"object"`                                             |
| Recommended check        | `Array.isArray(value)`        | `typeof value === "string"`    | Check for non-null object and exclude arrays if needed |

### Example Combining All Three

```javascript
const student = {
    name: "Rahul",
    skills: ["HTML", "CSS", "JavaScript"],
    introduction: "I am learning web development."
};

console.log(student.name);
console.log(student.skills[2]);
console.log(student.introduction.toUpperCase());
```

**Output:**

```text
Rahul
JavaScript
I AM LEARNING WEB DEVELOPMENT.
```

---

# 5. Practical Examples

## Example 1: Calculate the Sum of an Array

```javascript
const numbers = [10, 20, 30, 40, 50];

const sum = numbers.reduce((total, num) => total + num, 0);

console.log("Sum:", sum);
```

**Output:**

```text
Sum: 150
```

## Example 2: Find the Largest Number

```javascript
const numbers = [10, 50, 20, 90, 40];

const largest = Math.max(...numbers);

console.log(largest);
```

**Output:**

```text
90
```

This works when the array is reasonably sized. For very large arrays, use a loop or `reduce()` instead of spreading every element into a function call.

## Example 3: Remove Duplicate Values

```javascript
const numbers = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);
```

**Output:**

```text
[1, 2, 3, 4, 5]
```

`Set` stores unique values.

## Example 4: Count Occurrences of Each Element

```javascript
const fruits = ["Apple", "Banana", "Apple", "Mango", "Banana", "Apple"];

const frequency = fruits.reduce((result, fruit) => {
    result[fruit] = (result[fruit] || 0) + 1;
    return result;
}, {});

console.log(frequency);
```

**Output:**

```text
{
    Apple: 3,
    Banana: 2,
    Mango: 1
}
```

## Example 5: Reverse a String

```javascript
const text = "JavaScript";

const reversed = Array.from(text).reverse().join("");

console.log(reversed);
```

**Output:**

```text
tpircSavaJ
```

This works for many ordinary strings. More complex Unicode text containing combining characters or emoji sequences may need grapheme-aware handling.

## Example 6: Capitalize the First Letter

```javascript
const text = "javascript";

const result = text.charAt(0).toUpperCase() + text.slice(1);

console.log(result);
```

**Output:**

```text
Javascript
```

## Example 7: Filter Objects by Property

```javascript
const employees = [
    { name: "Rahul", salary: 30000 },
    { name: "Aman", salary: 50000 },
    { name: "Priya", salary: 45000 }
];

const result = employees.filter(employee => employee.salary > 40000);

console.log(result);
```

**Output:**

```text
[
    { name: "Aman", salary: 50000 },
    { name: "Priya", salary: 45000 }
]
```

## Example 8: Group Data into an Object

```javascript
const fruits = ["Apple", "Banana", "Apple", "Mango", "Banana"];

const grouped = Object.groupBy(fruits, fruit => fruit);

console.log(grouped);
```

**Conceptual output:**

```text
{
    Apple: ["Apple", "Apple"],
    Banana: ["Banana", "Banana"],
    Mango: ["Mango"]
}
```

`Object.groupBy()` is available in modern JavaScript environments. For older environments, grouping can be implemented using `reduce()`.

---

# 6. Common Interview Questions

## Q1. What is an array in JavaScript?

An array is an ordered collection that stores multiple values in a single variable. Elements are accessed using zero-based indexes.

## Q2. Are arrays mutable in JavaScript?

Yes. Array elements can be changed, and methods such as `push()`, `pop()`, and `splice()` can modify the array.

## Q3. What is the difference between `map()` and `forEach()`?

`map()` returns a new array containing callback results. `forEach()` executes a callback for each element and returns `undefined`.

## Q4. What is the difference between `filter()` and `find()`?

`filter()` returns an array containing all matching elements. `find()` returns only the first matching element or `undefined`.

## Q5. What is the difference between `slice()` and `splice()`?

`slice()` extracts a portion without modifying the original array. `splice()` can add, remove, or replace elements and modifies the original array.

## Q6. What is the difference between `==` and `===`?

`==` allows type coercion during comparison. `===` compares without performing that coercion.

```javascript
console.log(5 == "5");
console.log(5 === "5");
```

**Output:**

```text
true
false
```

## Q7. What is a string array?

A string array is an array containing string elements, such as `["JavaScript", "Python", "Java"]`.

## Q8. Are strings mutable in JavaScript?

No. Strings are immutable. String operations return new strings rather than changing existing string characters.

## Q9. What is an object in JavaScript?

An object stores data as properties, generally organized as key-value pairs.

## Q10. What is the difference between dot notation and bracket notation?

Dot notation uses a literal property name, such as `student.name`. Bracket notation uses an expression, such as `student[key]`, and supports property names containing spaces.

## Q11. What is object destructuring?

Object destructuring extracts properties from an object into variables.

```javascript
const user = { name: "Rahul", age: 21 };

const { name, age } = user;
```

## Q12. What is the spread operator?

The spread operator (`...`) expands iterable elements or copies enumerable own properties into a new array or object.

## Q13. What is a shallow copy?

A shallow copy creates a new outer array or object but retains references to nested objects.

## Q14. What is the difference between `Object.keys()` and `Object.values()`?

`Object.keys()` returns an array of property names, while `Object.values()` returns an array of corresponding values.

## Q15. Why does `typeof []` return `"object"`?

Arrays are specialized objects in JavaScript. Use `Array.isArray()` to identify arrays reliably.

---

# 7. Practice Questions

Try to solve these questions yourself before checking any solution.

## Beginner Level

1. Create an array of five numbers and print every element.
2. Find the length of an array without manually counting its elements.
3. Add an element to the beginning and end of an array.
4. Remove the last element from an array.
5. Find the last element using `at()`.
6. Create an array of five programming languages.
7. Convert a string to uppercase.
8. Convert a comma-separated string into an array.
9. Create an object representing a student.
10. Add an `age` property to an existing object.

## Intermediate Level

11. Find the sum of all array elements using `reduce()`.
12. Find all even numbers using `filter()`.
13. Create a new array containing the squares of numbers using `map()`.
14. Remove duplicate numbers using `Set`.
15. Find the largest number in an array.
16. Count how many times each character occurs in a string.
17. Reverse a string.
18. Sort an array of numbers in ascending order.
19. Extract all names from an array of student objects.
20. Find students whose marks are greater than or equal to 80.

## Advanced Level

21. Flatten a nested array.
22. Group an array of objects by a property.
23. Find the second-largest distinct number in an array.
24. Merge two objects and resolve duplicate property names.
25. Deep-copy a supported nested data structure using `structuredClone()`.
26. Create a frequency map for words in a sentence.
27. Sort an array of objects by salary.
28. Convert an array of objects into an object indexed by ID.
29. Find the most frequent element in an array.
30. Remove duplicate strings without considering letter case.

---

# 8. Summary

## Arrays

Remember these important methods:

```javascript
push()
pop()
shift()
unshift()
slice()
splice()
indexOf()
includes()
find()
findIndex()
some()
every()
forEach()
map()
filter()
reduce()
sort()
reverse()
flat()
join()
Array.isArray()
```

## String Arrays and Strings

Remember these important string methods:

```javascript
toUpperCase()
toLowerCase()
trim()
includes()
startsWith()
endsWith()
indexOf()
replace()
replaceAll()
charAt()
slice()
substring()
split()
repeat()
```

Remember these important array methods for string arrays:

```javascript
map()
filter()
find()
includes()
sort()
join()
```

## Objects

Remember these important operations:

```javascript
Object.keys()
Object.values()
Object.entries()
Object.hasOwn()
Object.create()
Object.freeze()
Object.seal()
structuredClone()
```

Also understand:

* Dot notation and bracket notation
* Adding, updating, and deleting properties
* Object methods and `this`
* Nested objects
* Arrays inside objects
* Objects inside arrays
* Destructuring
* Spread and rest operators
* Optional chaining
* Shallow copies and references

---

## Final Learning Advice

Do not try to memorize every method at once. Understand what each method does, whether it changes the original value, what it returns, and when to use it.

For each concept:

1. Read the explanation.
2. Copy and run the example.
3. Predict the output before running it.
4. Modify the example.
5. Solve the practice questions without looking at the code.

**My goal:** To build a strong foundation in JavaScript by understanding its core data structures and using them in practical projects.🚀
