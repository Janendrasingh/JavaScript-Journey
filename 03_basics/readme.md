# JavaScript Functions, Scope, Arrow Functions, IIFE & Execution Context

This README covers five important JavaScript concepts that form the foundation for understanding how JavaScript code executes.

## 📚 Topics Covered

1. Functions in JavaScript
2. Scope in JavaScript
3. Arrow Functions
4. IIFE (Immediately Invoked Function Expression)
5. JavaScript Execution Context

---

# 1. Functions in JavaScript

## What Is a Function?

A function is a reusable block of code designed to perform a particular task.

Instead of writing the same code multiple times, we can define a function once and call it whenever needed.

### Basic Syntax

```javascript
function functionName(parameters) {
    // Code to execute
}

functionName(arguments);
```

### Example 1: Simple Function

```javascript
function sayHello() {
    console.log("Hello, World!");
}

sayHello();
sayHello();
```

**Output:**

```text
Hello, World!
Hello, World!
```

**Explanation:**

* `function` is the keyword used to declare a function.
* `sayHello` is the function name.
* `()` contains parameters, if any.
* `{}` contains the function body.
* `sayHello()` calls the function.

## Parameters and Arguments

**Parameters** are variables defined in a function declaration.

**Arguments** are the actual values passed when calling the function.

```javascript
function add(a, b) {
    console.log(a + b);
}

add(10, 20);
```

**Output:**

```text
30
```

Here:

* `a` and `b` are parameters.
* `10` and `20` are arguments.

## The `return` Statement

The `return` statement sends a value back to the code that called the function.

```javascript
function add(a, b) {
    return a + b;
}

const result = add(10, 20);

console.log(result);
```

**Output:**

```text
30
```

### `console.log()` vs `return`

```javascript
function example1() {
    console.log(10);
}

function example2() {
    return 10;
}

const result1 = example1();
const result2 = example2();

console.log(result1);
console.log(result2);
```

**Output:**

```text
10
undefined
10
```

**Why?**

* `example1()` prints `10`, but it does not return a value. Therefore, `result1` becomes `undefined`.
* `example2()` returns `10`, so `result2` stores `10`.
* The last two statements print the values stored in `result1` and `result2`.

## Types of Functions

### 1. Function Declaration

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

### 2. Function Expression

A function can be assigned to a variable.

```javascript
const greet = function () {
    console.log("Hello");
};

greet();
```

### 3. Anonymous Function

A function without a name is called an anonymous function.

```javascript
setTimeout(function () {
    console.log("Hello after 2 seconds");
}, 2000);
```

### 4. Function with Parameters

```javascript
function square(number) {
    return number * number;
}

console.log(square(5));
```

**Output:**

```text
25
```

### 5. Callback Function

A callback is a function passed to another function to be called by it.

```javascript
function greet(name) {
    console.log("Hello, " + name);
}

function processUser(callback) {
    callback("Janendra");
}

processUser(greet);
```

**Output:**

```text
Hello, Janendra
```

### 6. Higher-Order Function

A higher-order function is a function that accepts another function as an argument, returns a function, or does both.

```javascript
function calculate(a, b, operation) {
    return operation(a, b);
}

function add(a, b) {
    return a + b;
}

console.log(calculate(10, 20, add));
```

**Output:**

```text
30
```

### 7. Recursive Function

A recursive function calls itself until a stopping condition is reached.

```javascript
function factorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5));
```

**Output:**

```text
120
```

### 8. Default Parameters

Default parameters provide a value when an argument is missing or explicitly passed as `undefined`.

```javascript
function greet(name = "Guest") {
    console.log("Hello, " + name);
}

greet("Janendra");
greet();
```

**Output:**

```text
Hello, Janendra
Hello, Guest
```

## Important Function Concepts

* A function does not execute its body merely because it has been declared.
* Calling a function executes its body.
* A function without an explicit `return` statement returns `undefined`.
* A function can accept zero or more parameters.
* Functions are first-class objects in JavaScript. They can be assigned to variables, passed as arguments, and returned from other functions.

---

# 2. Scope in JavaScript

## What Is Scope?

Scope determines where a variable or function can be accessed in a program.

JavaScript has several important scope concepts:

1. Global scope
2. Function scope
3. Block scope
4. Lexical scope

## 2.1 Global Scope

A variable declared at the top level of a script generally has global scope within that script.

```javascript
const username = "Janendra";

function greet() {
    console.log(username);
}

greet();

console.log(username);
```

**Output:**

```text
Janendra
Janendra
```

The variable `username` can be accessed from both locations.

**Important:** Top-level declarations in JavaScript modules and declarations made inside functions have different global-binding behavior from top-level `var` declarations in classic browser scripts.

## 2.2 Function Scope

Variables declared using `var` inside a function are accessible within that function, but not outside it.

```javascript
function example() {
    var message = "Hello";
    console.log(message);
}

example();

console.log(message);
```

**Output:**

```text
Hello
ReferenceError: message is not defined
```

The second `console.log()` produces an error because `message` is not accessible outside the function.

## 2.3 Block Scope

A block is a section of code enclosed in curly braces `{}`.

Variables declared with `let` and `const` are block-scoped.

```javascript
if (true) {
    let a = 10;
    const b = 20;

    console.log(a);
    console.log(b);
}

console.log(a);
```

**Output:**

```text
10
20
ReferenceError: a is not defined
```

The error occurs because `a` is accessible only inside the `if` block.

### Difference Between `var`, `let`, and `const`

| Feature                             | `var`                   | `let` | `const` |
| ----------------------------------- | ----------------------- | ----- | ------- |
| Function-scoped                     | Yes                     | No    | No      |
| Block-scoped                        | No                      | Yes   | Yes     |
| Can be reassigned                   | Yes                     | Yes   | No      |
| Can be redeclared in the same scope | Yes, in permitted cases | No    | No      |
| Must be initialized at declaration  | No                      | No    | Yes     |

**Note:** A `const` variable cannot be reassigned, but an object or array declared with `const` can still have its contents modified.

## 2.4 Lexical Scope

Lexical scope means that a function's access to variables is determined by where the function is defined in the source code.

```javascript
function outer() {
    const name = "Janendra";

    function inner() {
        console.log(name);
    }

    inner();
}

outer();
```

**Output:**

```text
Janendra
```

The inner function can access `name` because it is defined inside the outer function's scope.

### Lexical Scope Example

```javascript
const name = "Global";

function outer() {
    const name = "Outer";

    function inner() {
        console.log(name);
    }

    inner();
}

outer();
```

**Output:**

```text
Outer
```

JavaScript finds the nearest matching variable in the lexical scope chain.

## 2.5 Scope Chain

When JavaScript cannot find a variable in the current scope, it looks in the surrounding lexical scopes.

```javascript
const a = 10;

function outer() {
    const b = 20;

    function inner() {
        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    inner();
}

outer();
```

**Output:**

```text
10
20
30
```

The inner function can access variables from its own scope and its enclosing scopes.

## 2.6 Closure

A closure occurs when a function retains access to variables from its surrounding lexical scope, even after the outer function has finished executing.

```javascript
function outer() {
    let count = 0;

    return function inner() {
        count++;
        console.log(count);
    };
}

const counter = outer();

counter();
counter();
counter();
```

**Output:**

```text
1
2
3
```

### How Does It Work?

1. `outer()` creates the variable `count`.
2. `outer()` returns the `inner` function.
3. The returned function retains access to `count`.
4. Every call to `counter()` increments the same variable.

**Common uses of closures:**

* Data privacy
* Counters
* Function factories
* Maintaining state between function calls

---

# 3. Arrow Functions

## What Is an Arrow Function?

An arrow function is a shorter way to write a function expression, introduced in ECMAScript 2015 (ES6).

### Regular Function

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));
```

### Arrow Function

```javascript
const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));
```

**Output:**

```text
30
```

Both functions return the sum of two numbers.

## 3.1 Arrow Function Syntax

```javascript
const functionName = (parameters) => {
    // Function body
};
```

## 3.2 Different Ways to Write Arrow Functions

### Example 1: No Parameters

```javascript
const greet = () => {
    console.log("Hello");
};

greet();
```

**Output:**

```text
Hello
```

### Example 2: One Parameter

Parentheses are optional when there is exactly one simple parameter.

```javascript
const square = number => {
    return number * number;
};

console.log(square(5));
```

**Output:**

```text
25
```

### Example 3: Multiple Parameters

```javascript
const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));
```

**Output:**

```text
30
```

### Example 4: Implicit Return

When an arrow function contains a single expression, curly braces and `return` can be omitted.

```javascript
const add = (a, b) => a + b;

console.log(add(10, 20));
```

**Output:**

```text
30
```

### Example 5: Returning an Object

To return an object implicitly, wrap it in parentheses.

```javascript
const getUser = () => ({
    name: "Janendra",
    age: 24
});

console.log(getUser());
```

**Output:**

```text
{ name: 'Janendra', age: 24 }
```

Without parentheses, `{}` would be interpreted as the function body rather than an object literal.

## 3.3 Arrow Functions and `this`

Arrow functions do not have their own `this`. They use the `this` value from their surrounding lexical context.

```javascript
const user = {
    name: "Janendra",

    greet() {
        const sayName = () => {
            console.log(this.name);
        };

        sayName();
    }
};

user.greet();
```

**Output:**

```text
Janendra
```

The arrow function uses the `this` value from `greet()`.

### Regular Function vs Arrow Function

| Feature                                 | Regular Function                     | Arrow Function                     |
| --------------------------------------- | ------------------------------------ | ---------------------------------- |
| Syntax                                  | `function()`                         | `() =>`                            |
| Own `this`                              | Yes, depending on how it is called   | No                                 |
| Own `arguments` object                  | Yes, in ordinary non-arrow functions | No                                 |
| Can be used as a constructor with `new` | Ordinary constructible functions can | No                                 |
| Implicit return                         | No                                   | Yes, for concise expression bodies |

**Important:** Arrow functions are not always a replacement for regular functions. Their lexical `this` behavior makes them useful in callbacks, but regular methods are often more suitable when a method needs its own `this` value.

## 3.4 Arrow Functions with Array Methods

Arrow functions are frequently used with methods such as `map()`, `filter()`, and `forEach()`.

### Using `map()`

```javascript
const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(number => number * number);

console.log(squares);
```

**Output:**

```text
[1, 4, 9, 16, 25]
```

### Using `filter()`

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);
```

**Output:**

```text
[2, 4, 6]
```

### Using `forEach()`

```javascript
const numbers = [10, 20, 30];

numbers.forEach(number => {
    console.log(number);
});
```

**Output:**

```text
10
20
30
```

---

# 4. IIFE (Immediately Invoked Function Expression)

## What Is an IIFE?

IIFE stands for **Immediately Invoked Function Expression**.

It is a function expression that is invoked immediately after it is created.

### Basic Syntax

```javascript
(function () {
    // Code
})();
```

### Example 1: Basic IIFE

```javascript
(function () {
    console.log("I am an IIFE");
})();
```

**Output:**

```text
I am an IIFE
```

### How Does It Work?

```javascript
(function () {
    console.log("Hello");
})();
```

Breakdown:

1. `function () { ... }` defines an anonymous function.
2. The outer parentheses make it a function expression.
3. The final `()` immediately invokes the function.

## 4.1 IIFE with Parameters

```javascript
(function (name) {
    console.log("Hello, " + name);
})("Janendra");
```

**Output:**

```text
Hello, Janendra
```

Here:

* `name` is the parameter.
* `"Janendra"` is the argument.
* The function runs immediately.

## 4.2 Named IIFE

An IIFE can also have a function name.

```javascript
(function greet() {
    console.log("Hello, World!");
})();
```

**Output:**

```text
Hello, World!
```

The function name is useful for debugging and recursion, but it is not generally accessible outside the named function expression.

## 4.3 Arrow Function IIFE

An arrow function can also be invoked immediately.

```javascript
(() => {
    console.log("Arrow function IIFE");
})();
```

**Output:**

```text
Arrow function IIFE
```

## 4.4 IIFE with Return Value

```javascript
const result = (function (a, b) {
    return a + b;
})(10, 20);

console.log(result);
```

**Output:**

```text
30
```

The IIFE executes immediately, and its return value is assigned to `result`.

## 4.5 IIFE and Scope

IIFEs can create a private scope for variables.

```javascript
(function () {
    const message = "Private message";

    console.log(message);
})();

console.log(message);
```

**Output:**

```text
Private message
ReferenceError: message is not defined
```

The variable `message` is accessible inside the function but not outside it.

## 4.6 Why Use an IIFE?

IIFEs were commonly used to:

* Create a private scope
* Avoid introducing variables into the surrounding scope
* Initialize code immediately
* Encapsulate functionality

Modern JavaScript also provides modules and block scope through `let` and `const`, so IIFEs are less necessary for many of these tasks today.

### Important Note

An IIFE is not the same as a regular function declaration followed by a call.

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

This is a function declaration followed by a function call.

```javascript
(function () {
    console.log("Hello");
})();
```

This is an IIFE.

---

# 5. JavaScript Execution Context

## What Is an Execution Context?

An execution context is the environment in which JavaScript code is evaluated and executed.

It tracks information needed to execute the code, including variable bindings, functions, scope, and the value of `this` where applicable.

JavaScript commonly involves three execution-context categories:

1. Global Execution Context
2. Function Execution Context
3. Eval Execution Context

The `eval` execution context is associated with code executed through `eval()` and is generally avoided in normal application development.

## 5.1 Global Execution Context (GEC)

When JavaScript starts running a script, it creates a global execution context.

Consider this example:

```javascript
const name = "Janendra";

function greet() {
    console.log("Hello");
}

greet();
```

JavaScript establishes the global environment, including the bindings needed for `name` and `greet`, and then executes the statements.

The global execution context is associated with the global environment. In a browser, the global object is commonly `window`; in Node.js, the environment is different.

## 5.2 Function Execution Context (FEC)

Whenever a function is called, JavaScript creates a function execution context for that invocation.

```javascript
function add(a, b) {
    const result = a + b;

    return result;
}

const answer = add(10, 20);

console.log(answer);
```

**Output:**

```text
30
```

When `add(10, 20)` is called, JavaScript creates a function execution context containing the function's parameters and local bindings.

After the function returns, that invocation's execution context is removed from the call stack. Any objects or variables that remain reachable through closures can continue to exist.

## 5.3 Two Main Phases of Execution

For learning purposes, JavaScript execution is often explained using two phases:

1. Creation Phase
2. Execution Phase

These are useful teaching terms for understanding how bindings and values become available. They are not a complete description of every internal specification step.

### Phase 1: Creation Phase

During environment setup, JavaScript establishes bindings for declarations.

Key ideas:

* Function declarations are generally available before their textual position in the same scope.
* `var` bindings are initialized to `undefined` before their assignments execute.
* `let` and `const` bindings are established but remain uninitialized until their declarations are evaluated. Accessing them too early causes a `ReferenceError` due to the temporal dead zone.

### Phase 2: Execution Phase

JavaScript executes statements in order.

* Assignments give variables their values.
* Function calls create function execution contexts.
* Expressions are evaluated.
* `return` transfers control back to the caller.

## 5.4 Understanding `var` Hoisting

```javascript
console.log(a);

var a = 10;

console.log(a);
```

**Output:**

```text
undefined
10
```

### Why?

Conceptually, the `var` declaration is established before the statements execute, with its initial value set to `undefined`.

The assignment `a = 10` happens later when execution reaches that statement.

The code can be thought of approximately as:

```javascript
var a;

console.log(a);

a = 10;

console.log(a);
```

This is an explanatory model of hoisting, not a literal transformation performed on your source code.

## 5.5 Understanding Function Declaration Hoisting

```javascript
greet();

function greet() {
    console.log("Hello, World!");
}
```

**Output:**

```text
Hello, World!
```

A function declaration can generally be called before its textual position because the function binding is established during environment setup.

### Function Expression Comparison

```javascript
greet();

var greet = function () {
    console.log("Hello");
};
```

**Output:**

```text
TypeError: greet is not a function
```

At the first statement, `greet` exists as a `var` binding initialized to `undefined`. The function expression has not executed yet, so the variable does not contain a callable function.

## 5.6 Temporal Dead Zone (TDZ)

Variables declared with `let` and `const` cannot be accessed before their declarations are evaluated.

```javascript
console.log(a);

let a = 10;
```

**Output:**

```text
ReferenceError: Cannot access 'a' before initialization
```

The period between entering the relevant scope and initializing the binding is called the **Temporal Dead Zone (TDZ)**.

## 5.7 Call Stack

The call stack tracks active execution contexts.

JavaScript typically uses a last-in, first-out (LIFO) stack to manage function calls.

```javascript
function first() {
    console.log("First started");

    second();

    console.log("First ended");
}

function second() {
    console.log("Second started");

    third();

    console.log("Second ended");
}

function third() {
    console.log("Third executed");
}

first();
```

**Output:**

```text
First started
Second started
Third executed
Second ended
First ended
```

### Step-by-Step Execution

1. The global execution context begins.
2. `first()` is called and its execution context is pushed onto the stack.
3. `second()` is called and pushed onto the stack.
4. `third()` is called and pushed onto the stack.
5. `third()` finishes and its context is removed.
6. `second()` resumes and finishes.
7. `first()` resumes and finishes.
8. The program continues in the global context.

The stack follows **LIFO: Last In, First Out**.

## 5.8 Execution Context vs Call Stack

| Execution Context                                     | Call Stack                                       |
| ----------------------------------------------------- | ------------------------------------------------ |
| Represents the environment for executing code         | Tracks active execution contexts                 |
| Contains execution-related bindings and state         | Stores references to active contexts             |
| Created for script execution and function invocations | Pushes and pops contexts as execution progresses |
| Provides the environment needed to run code           | Helps determine which function runs next         |

## 5.9 Complete Execution Context Example

```javascript
const a = 10;
const b = 20;

function add(x, y) {
    const result = x + y;

    return result;
}

function calculate() {
    const answer = add(a, b);

    console.log(answer);
}

calculate();
```

**Output:**

```text
30
```

### Dry Run

**Step 1:** The global execution context is established.

The global environment contains the bindings for `a`, `b`, `add`, and `calculate`.

**Step 2:** The statements initialize `a` and `b`.

```javascript
const a = 10;
const b = 20;
```

**Step 3:** JavaScript calls `calculate()`.

A function execution context is created for this call.

**Step 4:** `calculate()` calls `add(a, b)`.

The arguments evaluate to `10` and `20`, and a new function execution context is created for `add()`.

**Step 5:** `add()` calculates the sum.

```javascript
const result = x + y;
```

The value of `result` is `30`.

**Step 6:** `add()` returns `30`.

Its execution context finishes, and control returns to `calculate()`.

**Step 7:** The result is printed.

```text
30
```

**Step 8:** `calculate()` finishes, and control returns to the global context.

---

# 6. Quick Comparison of All Five Topics

| Topic             | Main Purpose                                      | Key Example                            |
| ----------------- | ------------------------------------------------- | -------------------------------------- |
| Functions         | Reuse code and perform tasks                      | `function add(a, b) { return a + b; }` |
| Scope             | Determine where variables are accessible          | Block scope with `let`                 |
| Arrow Functions   | Write concise function expressions                | `const add = (a, b) => a + b;`         |
| IIFE              | Define and execute a function immediately         | `(function () {})();`                  |
| Execution Context | Understand the environment in which code executes | Global and function execution contexts |

---

# 7. Common Interview Questions

### Q1. What is a function in JavaScript?

A function is a reusable block of code designed to perform a specific task. It can accept parameters and return a value.

### Q2. What is the difference between parameters and arguments?

Parameters are variables in a function definition. Arguments are the actual values passed when the function is called.

### Q3. What is scope in JavaScript?

Scope determines where variables and functions can be accessed.

### Q4. What is lexical scope?

Lexical scope means variable accessibility is determined by the location where a function is defined in the source code.

### Q5. What is a closure?

A closure is a function together with its retained access to variables from its surrounding lexical environment.

### Q6. What is an arrow function?

An arrow function is a concise function expression introduced in ES6. It does not have its own `this` or `arguments` binding.

### Q7. What is the difference between a regular function and an arrow function?

A regular function can have its own `this` depending on how it is called. An arrow function inherits `this` from its surrounding lexical context.

### Q8. What is an IIFE?

An IIFE is an Immediately Invoked Function Expression: a function expression that is called immediately after it is created.

### Q9. What is an execution context?

An execution context is the environment in which JavaScript evaluates and executes code.

### Q10. What is hoisting?

Hoisting describes the behavior in which declarations have bindings established before execution reaches their textual position. The behavior differs between function declarations, `var`, `let`, and `const`.

### Q11. What is the Temporal Dead Zone?

The TDZ is the period during which a `let` or `const` binding exists but cannot yet be accessed because it has not been initialized.

### Q12. What is the call stack?

The call stack tracks active execution contexts and follows a last-in, first-out order.

### Q13. What is the difference between `return` and `console.log()`?

`return` provides a value to the caller. `console.log()` displays a value in the console.

### Q14. What happens when a function does not return a value?

The function returns `undefined` when it completes without an explicit return value.

### Q15. Can an arrow function be used with `new`?

No. Arrow functions are not constructors and cannot be invoked with `new`.

---

# 8. Practice Questions

Try to predict the output before running each program.

## Practice 1: Function Return

```javascript
function test() {
    return 10;
    console.log(20);
}

console.log(test());
```

**Question:** What is the output, and why?

<details>
<summary>Show Answer</summary>

```text
10
```

The `return` statement ends the function immediately. Therefore, `console.log(20)` never executes.

</details>

## Practice 2: Block Scope

```javascript
let a = 10;

if (true) {
    let a = 20;
    console.log(a);
}

console.log(a);
```

**Question:** Why are the two outputs different?

<details>
<summary>Show Answer</summary>

```text
20
10
```

The inner `a` belongs to the `if` block. It does not change the outer `a`.

</details>

## Practice 3: Arrow Function

```javascript
const multiply = (a, b) => a * b;

console.log(multiply(4, 5));
```

**Question:** What does the arrow function return?

<details>
<summary>Show Answer</summary>

```text
20
```

The expression `a * b` is returned implicitly.

</details>

## Practice 4: IIFE

```javascript
(function () {
    const x = 100;
    console.log(x);
})();

console.log(typeof x);
```

**Question:** What are the two outputs?

<details>
<summary>Show Answer</summary>

```text
100
undefined
```

The first statement prints `100`. The second prints the string `"undefined"` because `x` is not defined in the outer scope.

</details>

## Practice 5: Hoisting

```javascript
console.log(a);

var a = 5;

console.log(a);
```

**Question:** Why does the first statement not print `5`?

<details>
<summary>Show Answer</summary>

```text
undefined
5
```

The `var` binding is initialized to `undefined` before the assignment executes.

</details>

## Practice 6: Call Stack

```javascript
function one() {
    console.log("One");
    two();
    console.log("Three");
}

function two() {
    console.log("Two");
}

one();
```

**Question:** In what order are the messages printed?

<details>
<summary>Show Answer</summary>

```text
One
Two
Three
```

The call to `two()` finishes before execution resumes in `one()`.

</details>

---

# 9. Best Practices

* Use `const` by default when a variable will not be reassigned.
* Use `let` when reassignment is necessary.
* Avoid `var` in most modern JavaScript code unless you specifically need its behavior.
* Use descriptive function names.
* Keep functions focused on a single responsibility.
* Use arrow functions when their lexical `this` behavior is appropriate.
* Prefer modules and block scope for modern code organization rather than using IIFEs by default.
* Understand scope and closures before moving to advanced JavaScript.
* Practice predicting outputs to strengthen your understanding of execution order.
* Use browser developer tools to experiment with code and inspect errors.

---

# 10. Recommended Learning Order

Follow this order to build a strong foundation:

1. Function declarations and expressions
2. Parameters, arguments, and return values
3. Scope: global, function, and block
4. Lexical scope and scope chains
5. Closures
6. Arrow functions
7. IIFE
8. Hoisting and the Temporal Dead Zone
9. Execution contexts
10. The call stack

## 🎯 Final Goal

After studying these topics, you should be able to:

* Write and call JavaScript functions.
* Explain parameters, arguments, and return values.
* Understand global, function, and block scope.
* Explain lexical scope and closures.
* Write and use arrow functions.
* Understand when and why an IIFE is used.
* Explain hoisting and the Temporal Dead Zone.
* Describe execution contexts and the call stack.
* Predict the output of common JavaScript interview questions.

**Keep practicing, write code yourself, and test your understanding by predicting outputs before executing the program.**
