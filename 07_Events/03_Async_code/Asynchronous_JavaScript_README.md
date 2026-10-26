# Asynchronous JavaScript

## Table of Contents

1. [Introduction](#1-introduction-to-asynchronous-javascript)
2. [Synchronous vs. Asynchronous Code](#2-synchronous-vs-asynchronous-code)
3. [Why Asynchronous JavaScript Is Needed](#3-why-do-we-need-asynchronous-javascript)
4. [How JavaScript Handles Asynchronous Code](#4-how-javascript-handles-asynchronous-code)
5. [`setTimeout()`](#5-understanding-settimeout)
6. [`setInterval()`](#6-understanding-setinterval)
7. [Callback Functions](#7-what-is-a-callback-function)
8. [Callback Hell](#8-callback-hell)
9. [Promises](#9-what-is-a-promise)
10. [`resolve()` and `reject()`](#10-understanding-resolve-and-reject)
11. [Promise Chaining](#11-promise-chaining)
12. [Promise Methods](#12-promise-methods)
13. [`async` and `await`](#13-what-is-asyncawait)
14. [Understanding `await`](#14-understanding-await)
15. [Error Handling](#15-error-handling-with-asyncawait)
16. [Fetch API](#16-fetch-api)
17. [Fetch with `async/await`](#17-fetch-api-using-asyncawait)
18. [Microtasks vs. Tasks](#18-event-loop-microtasks-vs-tasks)
19. [Practical Example](#19-practical-example-simulating-an-api-request)
20. [Common Mistakes](#20-common-mistakes-in-asynchronous-javascript)
21. [Interview Questions](#21-interview-questions-and-answers)
22. [Practice Questions](#22-practice-questions)
23. [Quick Revision](#23-quick-revision)

---

## 1. Introduction to Asynchronous JavaScript

JavaScript normally executes code on one call stack, one operation at a time. Synchronous code runs sequentially, from top to bottom.

Some operations take time to complete, such as:

- Fetching data from an API
- Waiting for a timer
- Sending a network request
- Loading resources
- Waiting for user interaction

Asynchronous programming allows certain operations to remain pending while JavaScript continues executing other code.

```javascript
console.log("First");

setTimeout(() => {
    console.log("Second");
}, 2000);

console.log("Third");
```

**Output:**

```text
First
Third
Second
```

**Explanation:**

1. JavaScript prints `"First"`.
2. `setTimeout()` schedules a callback to run after approximately two seconds.
3. JavaScript continues and prints `"Third"`.
4. When the timer has expired and the runtime can process the callback, `"Second"` is printed.

> **Note:** `setTimeout()` does not guarantee execution at the exact specified time. It schedules a callback to become eligible after the delay; the callback runs when the runtime can process it.

## 2. Synchronous vs. Asynchronous Code

### Synchronous code

Synchronous code executes one operation at a time. The next statement normally waits for the current statement to finish.

```javascript
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
```

**Output:**

```text
Task 1
Task 2
Task 3
```

### Asynchronous code

Certain operations can remain pending while other code executes.

```javascript
console.log("Task 1");

setTimeout(() => {
    console.log("Task 2");
}, 1000);

console.log("Task 3");
```

**Output:**

```text
Task 1
Task 3
Task 2
```

| Synchronous | Asynchronous |
|---|---|
| Statements execute in sequence. | Certain operations can remain pending while other code runs. |
| A long-running operation can delay subsequent work. | Callbacks, Promises, and `async/await` help manage asynchronous work. |
| The next statement normally waits for the current statement to finish. | The order of completion can differ from the order in which operations started. |

## 3. Why Do We Need Asynchronous JavaScript?

Consider a weather application:

1. Display the interface.
2. Request weather information from an API.
3. Wait for the server to respond.
4. Display the weather information.

The server may take time to respond. Asynchronous APIs let the application remain responsive while waiting for network requests, timers, and other operations.

Common use cases include:

- Fetching API data
- Handling timers
- Responding to user interactions
- Sending form data to a server
- Making database requests in environments such as Node.js

## 4. How JavaScript Handles Asynchronous Code

Several components work together to manage asynchronous operations.

### A. Call stack

The call stack tracks JavaScript functions that are currently executing.

```javascript
function first() {
    second();
}

function second() {
    console.log("Hello");
}

first();
```

**Output:**

```text
Hello
```

Execution:

1. `first()` is called and placed on the call stack.
2. `first()` calls `second()`.
3. `second()` is placed on the call stack.
4. `console.log()` executes.
5. `second()` finishes and is removed from the stack.
6. `first()` finishes and is removed from the stack.

### B. Runtime APIs

In a browser, APIs provided by the browser environment handle certain operations outside the normal execution of JavaScript code.

Examples include:

- Timers such as `setTimeout()`
- DOM event handling
- Network requests through `fetch()`

Node.js has its own runtime APIs and event-loop mechanisms.

### C. Task queue

Callbacks from certain asynchronous operations, such as timer callbacks, are scheduled as tasks and can run when the call stack is available.

### D. Microtask queue

Certain operations schedule callbacks as microtasks. Examples include:

- `Promise.then()`
- `Promise.catch()`
- `Promise.finally()`
- The continuation of an async function after an awaited Promise settles

In browsers, microtasks are generally processed after the current JavaScript execution completes and before the event loop proceeds to the next task.

### E. Event loop

The event loop coordinates when queued callbacks can execute.

A simplified flow:

1. JavaScript executes the current synchronous code.
2. When the current execution completes, queued microtasks are processed.
3. The runtime can process a task, such as a timer or event callback.
4. Microtasks scheduled during that task are processed at the appropriate checkpoint.

> This is a simplified model, not a complete description of every browser scheduling rule. The event loop does not make ordinary JavaScript on the main thread run in parallel.

## 5. Understanding `setTimeout()`

`setTimeout()` schedules a callback to run once after a specified delay.

**Syntax:**

```javascript
setTimeout(callback, delay);
```

**Example:**

```javascript
setTimeout(() => {
    console.log("Hello after approximately 2 seconds");
}, 2000);
```

- The first argument is the callback function.
- The second argument is the delay in milliseconds.
- `1000` milliseconds equals one second.
- The callback runs when its timer has expired and the runtime can process it.

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timer completed");
}, 2000);

console.log("End");
```

**Output:**

```text
Start
End
Timer completed
```

`setTimeout()` does not pause the entire JavaScript program; it schedules a callback for later.

## 6. Understanding `setInterval()`

`setInterval()` schedules a callback to run repeatedly at a specified interval.

**Syntax:**

```javascript
setInterval(callback, delay);
```

**Example:**

```javascript
let count = 1;

const intervalId = setInterval(() => {
    console.log(count);
    count++;

    if (count > 5) {
        clearInterval(intervalId);
    }
}, 1000);
```

**Output:**

```text
1
2
3
4
5
```

`setInterval()` schedules repeated callback executions. `clearInterval()` stops the interval.

| Method | Purpose |
|---|---|
| `setTimeout()` | Schedules a callback to run once after a delay. |
| `setInterval()` | Schedules a callback to run repeatedly. |
| `clearTimeout()` | Cancels a pending timeout. |
| `clearInterval()` | Cancels a repeating interval. |

## 7. What Is a Callback Function?

A callback is a function passed to another function so that it can be called later or as part of another operation.

```javascript
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayWelcome() {
    console.log("Welcome to JavaScript");
}

greet("Janendra", sayWelcome);
```

**Output:**

```text
Hello Janendra
Welcome to JavaScript
```

Here, `sayWelcome` is passed to `greet()`. The `greet()` function prints the greeting and then invokes `callback()`.

Callbacks can be synchronous or asynchronous.

**Synchronous callback:**

```javascript
[1, 2, 3].forEach((number) => {
    console.log(number);
});
```

**Asynchronous callback:**

```javascript
setTimeout(() => {
    console.log("Executed later");
}, 1000);
```

## 8. Callback Hell

Callback hell occurs when multiple callbacks are nested inside one another, making code difficult to read and maintain.

```javascript
setTimeout(() => {
    console.log("Step 1");

    setTimeout(() => {
        console.log("Step 2");

        setTimeout(() => {
            console.log("Step 3");
        }, 1000);
    }, 1000);
}, 1000);
```

As more operations are added, the nesting becomes harder to manage.

**Problems:**

- Code becomes deeply nested.
- Error handling becomes harder.
- Code is difficult to maintain.
- The execution flow becomes more complicated.

Promises and `async/await` provide alternative ways to organize many asynchronous workflows.

## 9. What Is a Promise?

A Promise is a JavaScript object representing the eventual completion or failure of an operation.

A Promise has three possible states:

1. **Pending:** The operation has not settled.
2. **Fulfilled:** The operation completed successfully.
3. **Rejected:** The operation failed.

A settled Promise is either fulfilled or rejected.

```javascript
const myPromise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
```

**Output:**

```text
Operation successful
```

- `new Promise()` creates a Promise.
- `resolve()` fulfills the Promise with a value.
- `reject()` rejects the Promise with a reason.
- `.then()` commonly handles fulfillment.
- `.catch()` commonly handles rejection.

> The Promise executor function passed to `new Promise()` runs synchronously. Promises do not automatically make synchronous code asynchronous.

## 10. Understanding `resolve()` and `reject()`

- `resolve()` is conventionally used to fulfill a Promise with a successful result.
- `reject()` is used to reject a Promise because an operation failed.

```javascript
const checkAge = new Promise((resolve, reject) => {
    const age = 20;

    if (age >= 18) {
        resolve("You are eligible");
    } else {
        reject("You are not eligible");
    }
});

checkAge
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });
```

**Output:**

```text
You are eligible
```

`resolve` and `reject` are conventional parameter names for functions supplied to the Promise executor.

## 11. Promise Chaining

Promise chaining organizes multiple steps in sequence.

```javascript
Promise.resolve(10)
    .then((number) => {
        console.log(number);
        return number * 2;
    })
    .then((number) => {
        console.log(number);
        return number + 5;
    })
    .then((number) => {
        console.log(number);
    });
```

**Output:**

```text
10
20
25
```

Each `.then()` returns a new Promise, allowing the chain to continue. Returning a Promise from a handler allows the next step to wait for it to settle.

## 12. Promise Methods

### A. `Promise.resolve()`

Creates a fulfilled Promise for a given value.

```javascript
Promise.resolve("Success")
    .then((value) => console.log(value));
```

Output: `Success`

### B. `Promise.reject()`

Creates a rejected Promise.

```javascript
Promise.reject("Something went wrong")
    .catch((error) => console.log(error));
```

Output: `Something went wrong`

### C. `Promise.all()`

Waits for all supplied Promises to fulfill. If all fulfill, it returns their values in input order. If one rejects, the returned Promise rejects.

```javascript
const promise1 = Promise.resolve("A");
const promise2 = Promise.resolve("B");
const promise3 = Promise.resolve("C");

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log(results);
    });
```

Output:

```text
["A", "B", "C"]
```

### D. `Promise.allSettled()`

Waits for all supplied Promises to settle, whether fulfilled or rejected.

```javascript
const promise1 = Promise.resolve("Success");
const promise2 = Promise.reject("Failure");

Promise.allSettled([promise1, promise2])
    .then((results) => {
        console.log(results);
    });
```

The result is an array describing each Promise's status and value or rejection reason.

### E. `Promise.race()`

Settles with the outcome of the first supplied Promise to settle.

```javascript
const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve("First"), 1000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("Second"), 2000);
});

Promise.race([promise1, promise2])
    .then((result) => {
        console.log(result);
    });
```

Expected output under normal timing:

```text
First
```

### F. `Promise.any()`

Fulfills with the first supplied Promise to fulfill. If every supplied Promise rejects, it rejects with an `AggregateError`.

```javascript
const promise1 = Promise.reject("Error 1");
const promise2 = Promise.resolve("Success");
const promise3 = Promise.resolve("Another success");

Promise.any([promise1, promise2, promise3])
    .then((result) => {
        console.log(result);
    });
```

Output:

```text
Success
```

## 13. What Is `async/await`?

`async/await` provides syntax for writing Promise-based asynchronous code in a style that resembles sequential code.

An async function always returns a Promise.

```javascript
async function greet() {
    return "Hello World";
}

greet().then((message) => {
    console.log(message);
});
```

Output:

```text
Hello World
```

Although the function returns a string in its body, JavaScript wraps the result in a fulfilled Promise.

These functions behave similarly:

```javascript
function normalFunction() {
    return Promise.resolve("Hello");
}

async function asyncFunction() {
    return "Hello";
}
```

## 14. Understanding `await`

`await` is used to wait for a Promise to settle before continuing the async function's execution.

```javascript
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

async function showData() {
    console.log("Start");

    const result = await getData();

    console.log(result);
    console.log("End");
}

showData();
```

**Output:**

```text
Start
Data received
End
```

**Explanation:**

1. `showData()` begins executing.
2. `"Start"` is printed.
3. `getData()` returns a Promise.
4. `await` suspends the continuation of `showData()` while the Promise is pending.
5. Other JavaScript work can execute during the wait.
6. When the Promise fulfills, `showData()` continues.
7. The result and `"End"` are printed.

> `await` does not block the entire JavaScript thread. It suspends the async function's continuation while the awaited Promise is pending.

## 15. Error Handling with `async/await`

Use `try...catch` to handle errors in asynchronous functions.

```javascript
function fetchData() {
    return new Promise((resolve, reject) => {
        const success = false;

        if (success) {
            resolve("Data loaded");
        } else {
            reject(new Error("Failed to load data"));
        }
    });
}

async function displayData() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

displayData();
```

**Output:**

```text
Failed to load data
```

- `try` contains code that may fail.
- `catch` handles an error or rejected Promise.
- `error.message` provides the error message.

You can also handle an async function's rejection with `.catch()`:

```javascript
async function example() {
    throw new Error("Something went wrong");
}

example().catch((error) => {
    console.log(error.message);
});
```

## 16. Fetch API

The Fetch API makes HTTP requests, such as requesting data from a server.

```javascript
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
        if (!response.ok) {
            throw new Error("HTTP error: " + response.status);
        }

        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("Error:", error.message);
    });
```

**Explanation:**

1. `fetch()` starts an HTTP request and returns a Promise.
2. The first `.then()` receives the `Response` object.
3. `response.ok` checks whether the status is in the 200–299 range.
4. `response.json()` reads and parses the response body and returns a Promise.
5. The next `.then()` receives the parsed data.
6. `.catch()` handles network errors, parsing errors, and errors thrown in the chain.

> `fetch()` does not automatically reject its Promise for HTTP statuses such as 404 or 500. Check `response.ok` when you need to treat these statuses as errors.

## 17. Fetch API Using `async/await`

The same request can be written with `async/await`.

```javascript
async function getUser() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
            throw new Error("HTTP error: " + response.status);
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

getUser();
```

This style is often easier to read when several asynchronous steps depend on one another.

## 18. Event Loop: Microtasks vs. Tasks

Promise handlers are scheduled as microtasks. In browsers, callbacks scheduled by `setTimeout()` are tasks.

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");
```

**Output:**

```text
A
D
C
B
```

**Explanation:**

1. `"A"` is printed immediately.
2. `setTimeout()` schedules a task.
3. `Promise.then()` schedules a microtask.
4. `"D"` is printed before the queued callbacks execute.
5. After the current synchronous code finishes, the Promise microtask runs.
6. The timer callback runs when its task is processed.

`setTimeout(callback, 0)` does not mean the callback executes immediately. It schedules a task for later.

## 19. Practical Example: Simulating an API Request

```javascript
const getUserData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "Janendra",
                role: "Developer"
            });
        }, 2000);
    });
};

async function displayUser() {
    console.log("Loading user...");

    try {
        const user = await getUserData();

        console.log("User ID:", user.id);
        console.log("Name:", user.name);
        console.log("Role:", user.role);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

displayUser();
```

**Output:**

```text
Loading user...
User ID: 1
Name: Janendra
Role: Developer
```

The user data becomes available after the simulated two-second delay. This example demonstrates how Promises and `async/await` can represent asynchronous data retrieval.

## 20. Common Mistakes in Asynchronous JavaScript

### Mistake 1: Forgetting to return a value from a Promise handler

**Incorrect:**

```javascript
Promise.resolve(10)
    .then((number) => {
        number * 2;
    })
    .then((result) => {
        console.log(result);
    });
```

Output:

```text
undefined
```

**Correct:**

```javascript
Promise.resolve(10)
    .then((number) => {
        return number * 2;
    })
    .then((result) => {
        console.log(result);
    });
```

Output:

```text
20
```

### Mistake 2: Forgetting `await`

If you call `fetch()` without `await`, the variable receives a Promise rather than the parsed data.

**Correct:**

```javascript
async function getData() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    if (!response.ok) {
        throw new Error("Request failed");
    }

    const data = await response.json();

    console.log(data);
}

getData().catch((error) => {
    console.log(error.message);
});
```

### Mistake 3: Assuming `fetch()` rejects for every HTTP error

A 404 or 500 response does not automatically reject the Promise returned by `fetch()`. Check `response.ok` and handle the response accordingly.

### Mistake 4: Using `await` outside an appropriate context

In a normal JavaScript script, `await` is generally used inside an async function. Modern JavaScript modules also support top-level `await`.

### Mistake 5: Forgetting error handling

Network requests can fail. Use `.catch()` or `try...catch` to handle errors appropriately.

## 21. Interview Questions and Answers

**Q1. What is asynchronous JavaScript?**

Asynchronous JavaScript allows certain operations to remain pending while other JavaScript code continues executing.

**Q2. Is JavaScript single-threaded?**

JavaScript normally executes code on one main-thread call stack in a browser. Runtime environments provide additional mechanisms for asynchronous operations and, where supported, parallel work.

**Q3. What is the event loop?**

The event loop coordinates the execution of queued tasks and microtasks when JavaScript can process them.

**Q4. What is a callback?**

A callback is a function passed to another function so that it can be invoked later or during another operation.

**Q5. What is callback hell?**

Callback hell is deeply nested callback code that becomes difficult to read, maintain, and handle errors in.

**Q6. What is a Promise?**

A Promise represents the eventual fulfillment or rejection of an operation.

**Q7. What are the three Promise states?**

Pending, fulfilled, and rejected.

**Q8. What is the difference between `then()` and `catch()`?**

`.then()` handles fulfillment and can also accept a rejection handler as a second argument. `.catch()` handles rejection and is commonly used for error handling.

**Q9. What is `async/await`?**

`async/await` is syntax for working with Promises in a more sequential-looking style.

**Q10. What does `await` do?**

`await` suspends an async function's continuation while an awaited Promise is pending, allowing other JavaScript work to proceed.

**Q11. Does `setTimeout(callback, 0)` execute immediately?**

No. It schedules the callback as a task that runs when the runtime can process it.

**Q12. What is the difference between `Promise.all()` and `Promise.allSettled()`?**

`Promise.all()` rejects if any input Promise rejects. `Promise.allSettled()` waits for every input Promise to settle and reports each outcome.

**Q13. Does `fetch()` reject when the server returns a 404 status?**

Not just because of the HTTP status. Check `response.ok` to detect HTTP error responses.

**Q14. What is the difference between a task and a microtask?**

They are different scheduling categories. Promise handlers use the microtask queue, while `setTimeout()` callbacks use the task queue in browsers.

**Q15. Can async functions return ordinary values?**

Yes. An async function wraps a returned value in a fulfilled Promise. If it throws an error, the returned Promise rejects.

## 22. Practice Questions

Try to solve these without running the code first.

### Question 1: Predict the output

```javascript
console.log("One");

setTimeout(() => {
    console.log("Two");
}, 1000);

console.log("Three");
```

### Question 2: Predict the output

```javascript
console.log("A");

Promise.resolve().then(() => {
    console.log("B");
});

console.log("C");
```

### Question 3: Predict the output

```javascript
async function example() {
    console.log(1);

    await Promise.resolve();

    console.log(2);
}

example();

console.log(3);
```

### Question 4

Write a function that returns a Promise which resolves with `"Success"` after two seconds.

### Question 5

Rewrite a Promise chain using `async/await`.

### Question 6

Fetch user information from the JSONPlaceholder API and display the user's name.

### Question 7

Use `Promise.all()` to process three Promises and print their results.

### Question 8

Explain why `setTimeout(callback, 0)` does not necessarily execute before `Promise.then()`.

## 23. Quick Revision

| Concept | Summary |
|---|---|
| Synchronous code | Executes sequentially on the current call stack. |
| Asynchronous code | Allows certain operations to remain pending while other code executes. |
| Callback | A function passed to another function. |
| Callback hell | Deeply nested callback code. |
| Promise | Represents eventual fulfillment or rejection. |
| `resolve()` | Fulfills a Promise with a value. |
| `reject()` | Rejects a Promise with a reason. |
| `then()` | Registers Promise handlers. |
| `catch()` | Registers a Promise rejection handler. |
| `finally()` | Registers a handler that runs when a Promise settles. |
| `async` | Declares a function that returns a Promise. |
| `await` | Suspends an async function's continuation while an awaited Promise is pending. |
| `fetch()` | Makes HTTP requests and returns a Promise. |
| Event loop | Coordinates the scheduling and execution of queued callbacks. |
| Microtask | A scheduling category commonly used for Promise handlers. |
| `setTimeout()` | Schedules a callback to run once after a delay. |
| `setInterval()` | Schedules a callback to run repeatedly. |
| `clearTimeout()` | Cancels a pending timeout. |
| `clearInterval()` | Cancels a repeating interval. |
| `Promise.all()` | Waits for all inputs to fulfill, or rejects if one rejects. |
| `Promise.allSettled()` | Waits for all inputs to settle. |
| `Promise.race()` | Settles with the outcome of the first input to settle. |
| `Promise.any()` | Fulfills with the first input to fulfill, or rejects if all inputs reject. |

---

## Final Advice

Keep practising these examples in your browser console or VS Code. Understanding execution order is one of the most important skills for mastering asynchronous JavaScript.

**Recommended learning order:**

1. Synchronous vs. asynchronous code
2. Callbacks and timers
3. Call stack and event loop
4. Promises and Promise chaining
5. `async/await`
6. Fetch API and error handling
7. Microtasks vs. tasks
