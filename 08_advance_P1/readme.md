# JavaScript: Promises and API Requests

This README covers two important JavaScript concepts: **Promises** and **API Requests**. These concepts help us handle asynchronous operations, communicate with servers, retrieve data, and build dynamic web applications.

---

## 📚 Table of Contents

1. [Introduction to Asynchronous JavaScript](#1-introduction-to-asynchronous-javascript)
2. [Promises in JavaScript](#2-promises-in-javascript)
3. [Promise Methods](#3-promise-methods)
4. [Promise Chaining](#4-promise-chaining)
5. [Async and Await](#5-async-and-await)
6. [What Is an API?](#6-what-is-an-api)
7. [What Is an API Request?](#7-what-is-an-api-request)
8. [XMLHttpRequest](#8-xmlhttprequest)
9. [Fetch API](#9-fetch-api)
10. [Handling API Errors](#10-handling-api-errors)
11. [HTTP Methods](#11-http-methods)
12. [Sending Data to an API](#12-sending-data-to-an-api)
13. [AbortController](#13-abortcontroller)
14. [Common Mistakes](#14-common-mistakes)
15. [Promises vs Callbacks](#15-promises-vs-callbacks)
16. [Interview Questions](#16-interview-questions)
17. [Practice Questions](#17-practice-questions)

---

# 1. Introduction to Asynchronous JavaScript

JavaScript normally executes code one statement at a time. However, some operations take time to complete, such as:

* Fetching data from a server.
* Reading files.
* Waiting for a timer.
* Sending information to an API.
* Loading images or other resources.

If JavaScript had to wait for every operation to finish before executing the next statement, applications could become slow and unresponsive.

**Asynchronous JavaScript** allows certain operations to complete in the background while JavaScript continues executing other code.

### Example

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 2000);

console.log("End");
```

### Output

```text
Start
End
Inside setTimeout
```

### Explanation

1. `"Start"` is printed first.
2. `setTimeout()` schedules a callback to run after approximately two seconds.
3. JavaScript continues executing and prints `"End"`.
4. The callback runs later, printing `"Inside setTimeout"`.

**Important concepts:**

* Callbacks
* Promises
* Async/await
* Fetch API
* Event loop
* API requests

---

# 2. Promises in JavaScript

## What Is a Promise?

A **Promise** is a JavaScript object that represents the eventual success or failure of an asynchronous operation.

For example, imagine ordering food online:

1. You place the order.
2. The restaurant accepts or rejects the order.
3. The order is eventually completed or cancelled.

A JavaScript Promise works similarly. It represents an operation whose result may not be available immediately.

### Three States of a Promise

A Promise has three possible states:

| State     | Meaning                               |
| --------- | ------------------------------------- |
| Pending   | The operation has not finished yet.   |
| Fulfilled | The operation completed successfully. |
| Rejected  | The operation failed.                 |

Once a Promise is fulfilled or rejected, it is **settled**. A settled Promise does not change to another state.

## Creating a Promise

```javascript
const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Operation completed successfully!");
    } else {
        reject("Something went wrong!");
    }
});

console.log(myPromise);
```

### Explanation

* `new Promise()` creates a Promise.
* The executor function runs immediately when the Promise is created.
* `resolve()` fulfills the Promise with a value.
* `reject()` rejects the Promise with a reason.
* The Promise itself represents the operation's eventual result.

## Handling a Promise Using `.then()`

The `.then()` method handles a fulfilled Promise.

```javascript
const myPromise = new Promise((resolve, reject) => {
    resolve("Data received successfully!");
});

myPromise.then((result) => {
    console.log(result);
});
```

### Output

```text
Data received successfully!
```

The `result` parameter receives the value passed to `resolve()`.

## Handling Errors Using `.catch()`

The `.catch()` method handles a rejected Promise.

```javascript
const myPromise = new Promise((resolve, reject) => {
    reject("Unable to fetch data!");
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
```

### Output

```text
Unable to fetch data!
```

**Remember:**

* `.then()` handles fulfillment.
* `.catch()` handles rejection.
* `.finally()` runs after the Promise settles, regardless of whether it fulfilled or rejected.

## Using `.finally()`

```javascript
const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task completed!");
    }, 2000);
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Promise operation finished.");
    });
```

### Output

```text
Task completed!
Promise operation finished.
```

The final callback is useful for tasks such as hiding a loading indicator.

---

# 3. Promise Methods

JavaScript provides several useful methods for working with Promises.

## 3.1 Promise.resolve()

Creates an already-fulfilled Promise.

```javascript
Promise.resolve("Success!")
    .then((result) => {
        console.log(result);
    });
```

Output:

```text
Success!
```

## 3.2 Promise.reject()

Creates an already-rejected Promise.

```javascript
Promise.reject("Something went wrong!")
    .catch((error) => {
        console.log(error);
    });
```

Output:

```text
Something went wrong!
```

## 3.3 Promise.all()

Waits for all supplied Promises to fulfill.

```javascript
const promise1 = Promise.resolve("Task 1");
const promise2 = Promise.resolve("Task 2");
const promise3 = Promise.resolve("Task 3");

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.log(error);
    });
```

Output:

```text
["Task 1", "Task 2", "Task 3"]
```

**Important:** If any input Promise rejects, `Promise.all()` rejects with that reason. The other operations are not automatically cancelled.

**Use case:** Fetching data from several APIs when all results are required.

## 3.4 Promise.allSettled()

Waits for every supplied Promise to settle, whether fulfilled or rejected.

```javascript
const promise1 = Promise.resolve("Success");
const promise2 = Promise.reject("Failed");

Promise.allSettled([promise1, promise2])
    .then((results) => {
        console.log(results);
    });
```

The result contains an object for each Promise, with a `status` of `"fulfilled"` or `"rejected"` and the corresponding `value` or `reason`.

**Use case:** Collecting the results of multiple independent operations, including failures.

## 3.5 Promise.race()

Settles with the result of the first input Promise to settle.

```javascript
const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve("First result"), 1000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("Second result"), 2000);
});

Promise.race([promise1, promise2])
    .then((result) => {
        console.log(result);
    });
```

Output:

```text
First result
```

**Use case:** Choosing the first result from competing asynchronous operations.

Note that `Promise.race()` does not automatically cancel the slower operations.

## 3.6 Promise.any()

Fulfills with the first input Promise that fulfills. It rejects with an `AggregateError` if all input Promises reject.

```javascript
const promise1 = Promise.reject("Error 1");
const promise2 = Promise.resolve("Successful result");
const promise3 = Promise.resolve("Another result");

Promise.any([promise1, promise2, promise3])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
```

Output:

```text
Successful result
```

### Quick Comparison

| Method                 | Behaviour                                                      |
| ---------------------- | -------------------------------------------------------------- |
| `Promise.resolve()`    | Creates a fulfilled Promise.                                   |
| `Promise.reject()`     | Creates a rejected Promise.                                    |
| `Promise.all()`        | Fulfills when all inputs fulfill; rejects if an input rejects. |
| `Promise.allSettled()` | Waits for all inputs to settle.                                |
| `Promise.race()`       | Settles with the first input to settle.                        |
| `Promise.any()`        | Fulfills with the first successful input.                      |

---

# 4. Promise Chaining

Promise chaining allows us to perform multiple operations in sequence.

The value returned by one `.then()` callback becomes the input to the next `.then()` callback.

```javascript
Promise.resolve(5)
    .then((number) => {
        console.log(number);
        return number * 2;
    })
    .then((number) => {
        console.log(number);
        return number + 10;
    })
    .then((number) => {
        console.log(number);
    });
```

### Output

```text
5
10
20
```

### Explanation

1. The first callback receives `5`.
2. It returns `5 * 2`, which is `10`.
3. The next callback receives `10`.
4. It returns `10 + 10`, which is `20`.
5. The final callback receives `20`.

### Why Is `return` Important?

Incorrect example:

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        response.json();
    })
    .then((data) => {
        console.log(data);
    });
```

The first callback does not return the Promise produced by `response.json()`. Consequently, the next callback receives `undefined` instead of the parsed data.

Correct example:

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
```

You can also use an implicit return with an arrow function:

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
```

---

# 5. Async and Await

`async` and `await` provide a cleaner way to write asynchronous JavaScript code.

They make Promise-based code easier to read.

## 5.1 The `async` Keyword

An `async` function always returns a Promise.

```javascript
async function greet() {
    return "Hello, JavaScript!";
}

greet().then((message) => {
    console.log(message);
});
```

Output:

```text
Hello, JavaScript!
```

Although the function returns a string in its body, calling the function returns a Promise fulfilled with that string.

## 5.2 The `await` Keyword

The `await` keyword waits for a Promise's result within an async function, without blocking the entire JavaScript thread.

```javascript
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received!");
        }, 2000);
    });
}

async function displayData() {
    console.log("Fetching data...");

    const result = await getData();

    console.log(result);
}

displayData();
```

Output:

```text
Fetching data...
Data received!
```

The function pauses at `await getData()` until the Promise settles. Other JavaScript work can continue while it waits.

## 5.3 Error Handling with `try...catch`

```javascript
async function getData() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

getData();
```

### Explanation

* `try` contains the code that may fail.
* `await fetch()` waits for the HTTP response.
* `response.ok` checks whether the HTTP status is in the successful range.
* `response.json()` parses the response body as JSON.
* `catch` handles errors thrown in the `try` block, including network failures and the explicit HTTP error above.

**Important:** `fetch()` does not automatically reject for HTTP errors such as `404 Not Found` or `500 Internal Server Error`. Check `response.ok` when you need to treat these as errors.

---

# 6. What Is an API?

API stands for **Application Programming Interface**.

An API allows different software applications to communicate with each other.

For example, a weather application can request weather information from a weather service's API rather than collecting all weather data itself.

### Example

A website might request user data from:

```text
https://jsonplaceholder.typicode.com/users
```

The server returns data that JavaScript can process and display.

### Typical API Communication

```text
JavaScript Application
        |
        | Sends an API request
        v
      Server
        |
        | Processes the request
        v
      Database
        |
        | Returns the requested result
        v
      Server
        |
        | Sends an HTTP response
        v
JavaScript Application
```

This is a simplified illustration. The exact architecture depends on the application.

### Common API Response Formats

**JSON:**

```json
{
    "id": 1,
    "name": "John",
    "email": "john@example.com"
}
```

**XML:**

```xml
<user>
    <id>1</id>
    <name>John</name>
    <email>john@example.com</email>
</user>
```

JSON is commonly used in modern web APIs.

---

# 7. What Is an API Request?

An API request is a message sent to a server to retrieve information or perform an operation.

A typical HTTP request may contain:

* **URL:** The endpoint being requested.
* **Method:** The type of operation, such as GET or POST.
* **Headers:** Additional information, such as the content type or authorization credentials.
* **Body:** Data sent with requests such as POST or PUT.

The server processes the request and sends an HTTP response.

A response commonly includes:

* **Status code:** Indicates the result of the request.
* **Headers:** Provide information about the response.
* **Body:** Contains returned data, if any.

### Common HTTP Status Codes

| Status Code                 | Meaning                                     |
| --------------------------- | ------------------------------------------- |
| `200 OK`                    | Request succeeded.                          |
| `201 Created`               | A resource was created successfully.        |
| `204 No Content`            | Request succeeded without a response body.  |
| `400 Bad Request`           | The request was invalid.                    |
| `401 Unauthorized`          | Authentication is missing or invalid.       |
| `403 Forbidden`             | The server refuses the requested operation. |
| `404 Not Found`             | The requested resource was not found.       |
| `500 Internal Server Error` | The server encountered an error.            |

---

# 8. XMLHttpRequest

`XMLHttpRequest`, often abbreviated as XHR, is a browser API used to make HTTP requests from JavaScript.

It was widely used before the Fetch API became common.

### Example

```javascript
const xhr = new XMLHttpRequest();

xhr.open(
    "GET",
    "https://jsonplaceholder.typicode.com/users"
);

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
    } else {
        console.error("HTTP error:", xhr.status);
    }
};

xhr.onerror = function () {
    console.error("Network error occurred.");
};

xhr.send();
```

### Explanation

* `new XMLHttpRequest()` creates an XHR object.
* `open()` configures the request method and URL.
* `onload` handles completion of the request.
* `status` provides the HTTP status code.
* `responseText` contains the response body as text.
* `JSON.parse()` converts JSON text into a JavaScript value.
* `onerror` handles certain network-level failures.
* `send()` sends the request.

### XMLHttpRequest vs Fetch

| XMLHttpRequest                                 | Fetch                                                 |
| ---------------------------------------------- | ----------------------------------------------------- |
| Uses an XHR object.                            | Uses `fetch()`.                                       |
| Commonly uses event handlers such as `onload`. | Returns a Promise.                                    |
| Can report request progress through events.    | Supports Promises and stream-based response handling. |
| Often requires more setup code.                | Usually provides a cleaner API for common requests.   |

Fetch is generally a good starting point for modern JavaScript development.

---

# 9. Fetch API

The **Fetch API** provides a modern way to make HTTP requests from JavaScript.

It returns a Promise that normally fulfills with a `Response` object when the response is available.

## 9.1 Basic GET Request

A GET request is commonly used to retrieve data.

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
```

### Explanation

**Step 1: Send the request**

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
```

Sends a GET request by default.

**Step 2: Receive the response**

```javascript
.then((response) => response.json())
```

Reads and parses the response body as JSON. The `json()` method returns another Promise.

**Step 3: Access the data**

```javascript
.then((data) => console.log(data))
```

Receives the parsed JavaScript value.

**Step 4: Handle errors**

```javascript
.catch((error) => console.error("Error:", error))
```

Handles rejected Promises in the chain, such as network failures or parsing errors.

For robust handling, also check `response.ok` to detect unsuccessful HTTP statuses.

## 9.2 Fetch with Async/Await

```javascript
async function getUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const users = await response.json();

        console.log(users);
    } catch (error) {
        console.error("Failed to fetch users:", error.message);
    }
}

getUsers();
```

This example performs the same basic operation using async/await and explicit HTTP status checking.

## 9.3 Display API Data on a Webpage

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fetch API Example</title>
</head>
<body>
    <h1>Users</h1>

    <button id="fetchBtn">Load Users</button>

    <p id="status"></p>
    <ul id="userList"></ul>

    <script src="script.js"></script>
</body>
</html>
```

### JavaScript (`script.js`)

```javascript
const fetchBtn = document.getElementById("fetchBtn");
const userList = document.getElementById("userList");
const statusText = document.getElementById("status");

fetchBtn.addEventListener("click", async () => {
    statusText.textContent = "Loading users...";
    userList.replaceChildren();

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const users = await response.json();

        users.forEach((user) => {
            const li = document.createElement("li");
            li.textContent = `${user.name} - ${user.email}`;

            userList.appendChild(li);
        });

        statusText.textContent = "Users loaded successfully!";
    } catch (error) {
        statusText.textContent = `Failed to load users: ${error.message}`;
    }
});
```

### Concepts Used

* Fetch API
* Promises
* Async/await
* `try...catch`
* DOM manipulation
* Event handling
* `forEach()`
* `createElement()`
* `appendChild()`
* `textContent`

**Security note:** When displaying data received from an API, prefer `textContent` for plain text. Avoid inserting untrusted data directly through `innerHTML`, which can create cross-site scripting (XSS) vulnerabilities.

---

# 10. Handling API Errors

API requests can fail for several reasons:

* The internet connection is unavailable.
* The server cannot be reached.
* The endpoint does not exist.
* The server returns an unsuccessful HTTP status.
* The response contains invalid JSON.
* The server requires authentication.

### Example: Robust Error Handling

```javascript
async function fetchPosts() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
        }

        const posts = await response.json();

        console.log(posts);
    } catch (error) {
        console.error("Unable to fetch posts:", error.message);
    }
}

fetchPosts();
```

### Important Distinction

```javascript
fetch("https://example.com/api")
```

A network failure can cause the Fetch Promise to reject. However, an HTTP response such as `404` usually still fulfills the Fetch Promise.

Therefore, use both:

1. `try...catch` to handle rejected Promises.
2. `response.ok` to detect unsuccessful HTTP responses.

---

# 11. HTTP Methods

HTTP methods describe the type of operation requested from a server.

| Method | Purpose                           | Typical Use                   |
| ------ | --------------------------------- | ----------------------------- |
| GET    | Retrieve data.                    | Get a list of users.          |
| POST   | Submit data or create a resource. | Create a user.                |
| PUT    | Replace a resource.               | Replace a user's information. |
| PATCH  | Partially update a resource.      | Update a user's email.        |
| DELETE | Delete a resource.                | Delete a user.                |

The server ultimately determines which methods an endpoint supports.

---

# 12. Sending Data to an API

## 12.1 POST Request

A POST request is commonly used to submit data to a server.

```javascript
async function createPost() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    title: "Learning JavaScript",
                    body: "Practising API requests and Promises.",
                    userId: 1
                })
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const result = await response.json();

        console.log("Created post:", result);
    } catch (error) {
        console.error("Failed to create post:", error.message);
    }
}

createPost();
```

### Explanation

**`method`**

```javascript
method: "POST"
```

Specifies the HTTP method.

**`headers`**

```javascript
headers: {
    "Content-Type": "application/json"
}
```

Indicates that the request body contains JSON.

**`JSON.stringify()`**

```javascript
body: JSON.stringify({
    title: "Learning JavaScript",
    body: "Practising API requests and Promises.",
    userId: 1
})
```

Converts a JavaScript object into a JSON string suitable for sending in the request body.

The example API is intended for testing. Its simulated responses do not necessarily represent persistent database changes.

## 12.2 PUT and PATCH Requests

The same approach can be used for updates.

```javascript
async function updatePost() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1",
            {
                method: "PATCH",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    title: "Updated JavaScript Notes"
                })
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const updatedPost = await response.json();

        console.log(updatedPost);
    } catch (error) {
        console.error(error.message);
    }
}

updatePost();
```

## 12.3 DELETE Request

```javascript
async function deletePost() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1",
            {
                method: "DELETE"
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        console.log("Delete request completed successfully.");
    } catch (error) {
        console.error("Delete request failed:", error.message);
    }
}

deletePost();
```

Some successful requests return `204 No Content`. In that case, do not call `response.json()` because there is no response body to parse.

---

# 13. AbortController

`AbortController` allows JavaScript to cancel a supported Fetch request.

For example, you may want to cancel a request that takes too long.

```javascript
async function fetchData() {
    const controller = new AbortController();

    const timeoutId = setTimeout(() => {
        controller.abort();
    }, 5000);

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                signal: controller.signal
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        if (error.name === "AbortError") {
            console.log("Request was cancelled.");
        } else {
            console.error("Error:", error.message);
        }
    } finally {
        clearTimeout(timeoutId);
    }
}

fetchData();
```

### Explanation

* `AbortController()` creates a controller.
* `controller.signal` connects the controller to the Fetch request.
* `controller.abort()` requests cancellation.
* `AbortError` identifies the cancellation error.
* `clearTimeout()` cleans up the timer when the request finishes or fails.

In this example, the timer aborts the request after approximately five seconds unless the operation completes first.

---

# 14. Common Mistakes

## Mistake 1: Forgetting to Return Data

Incorrect:

```javascript
fetch(url)
    .then((response) => {
        response.json();
    })
    .then((data) => {
        console.log(data);
    });
```

Correct:

```javascript
fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
```

**Reason:** The first callback must return the Promise created by `response.json()` so the next callback receives its result.

## Mistake 2: Ignoring HTTP Errors

Incorrect:

```javascript
const response = await fetch(url);
const data = await response.json();
```

Better:

```javascript
const response = await fetch(url);

if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
}

const data = await response.json();
```

**Reason:** Fetch does not automatically reject for HTTP error statuses such as `404` or `500`.

## Mistake 3: Forgetting `await`

Incorrect:

```javascript
const data = response.json();

console.log(data);
```

Here, `data` is a Promise, not the parsed JSON value.

Correct:

```javascript
const data = await response.json();

console.log(data);
```

## Mistake 4: Using `JSON.stringify()` Instead of `JSON.parse()`

* `JSON.stringify()` converts a JavaScript value into a JSON string.
* `JSON.parse()` converts valid JSON text into a JavaScript value.

Example:

```javascript
const user = {
    name: "John",
    age: 25
};

const jsonString = JSON.stringify(user);

console.log(jsonString);

const parsedUser = JSON.parse(jsonString);

console.log(parsedUser.name);
```

## Mistake 5: Forgetting `JSON.stringify()` in a JSON Request

Incorrect:

```javascript
body: {
    name: "John"
}
```

Correct:

```javascript
body: JSON.stringify({
    name: "John"
})
```

**Reason:** Fetch expects the body to be a supported body type, such as a string or `FormData`. JavaScript objects are not automatically serialized into JSON.

## Mistake 6: Assuming Every Promise Runs in Parallel

Promises represent asynchronous results, but creating or awaiting them does not automatically make every operation concurrent.

For independent tasks, start both operations before awaiting them:

```javascript
const promise1 = fetch(url1);
const promise2 = fetch(url2);

const [response1, response2] = await Promise.all([
    promise1,
    promise2
]);
```

For dependent tasks, the second operation may need the first operation's result before it can start.

## Mistake 7: Forgetting to Handle Errors

Use `.catch()` with Promise chains or `try...catch` with async/await when you need to handle failures.

## Mistake 8: Assuming API Data Is Always Available

An API may return an empty array, missing fields, unexpected data, or an error response.

Always validate the response and handle empty or unexpected results appropriately.

---

# 15. Promises vs Callbacks

| Feature        | Callbacks                                       | Promises                                       |
| -------------- | ----------------------------------------------- | ---------------------------------------------- |
| Basic idea     | Pass a function to be called later.             | Represent the eventual result of an operation. |
| Error handling | Often uses error-first callback conventions.    | Supports `.catch()` and rejection handling.    |
| Chaining       | Can become deeply nested.                       | Supports chaining through `.then()`.           |
| Readability    | Can become difficult with nested operations.    | Often easier to organise.                      |
| Async/await    | Not directly supported by callbacks themselves. | Can be consumed using async/await.             |

### Callback Example

```javascript
setTimeout(() => {
    console.log("Task completed!");
}, 1000);
```

### Promise Example

```javascript
const task = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task completed!");
    }, 1000);
});

task.then((result) => {
    console.log(result);
});
```

**Remember:** Promises help organise asynchronous results and errors. They do not make an operation automatically faster.

---

# 16. Interview Questions

### Q1. What is a Promise in JavaScript?

A Promise is an object representing the eventual fulfillment or rejection of an asynchronous operation.

### Q2. What are the three states of a Promise?

Pending, fulfilled, and rejected.

### Q3. What is the difference between `resolve()` and `reject()`?

`resolve()` fulfills a Promise with a result, while `reject()` rejects it with a reason.

### Q4. What is the difference between `.then()` and `.catch()`?

`.then()` handles fulfillment and can also accept a rejection handler as its second argument. `.catch()` handles rejection and is equivalent to `.then(undefined, onRejected)`.

### Q5. What is `async/await`?

It is syntax that makes Promise-based asynchronous code easier to read and write.

### Q6. What is an API?

An API is an interface that allows software components or applications to communicate.

### Q7. What is the Fetch API?

Fetch is a browser API used to make HTTP requests. It returns a Promise that normally fulfills with a `Response` object.

### Q8. Why do we use `response.json()`?

It reads the response body and parses it as JSON, returning a Promise for the resulting JavaScript value.

### Q9. Does Fetch reject when the server returns a 404 status?

No. Fetch normally fulfills with a `Response` object for HTTP statuses such as `404` and `500`. Check `response.ok` to detect unsuccessful statuses.

### Q10. What is the difference between `JSON.stringify()` and `JSON.parse()`?

`JSON.stringify()` converts a JavaScript value into JSON text. `JSON.parse()` converts valid JSON text into a JavaScript value.

### Q11. What is the difference between `Promise.all()` and `Promise.allSettled()`?

`Promise.all()` rejects if any input Promise rejects. `Promise.allSettled()` waits for all input Promises to settle and reports each result.

### Q12. What is the difference between `Promise.race()` and `Promise.any()`?

`Promise.race()` settles with the first input Promise to settle. `Promise.any()` fulfills with the first input Promise to fulfill, or rejects with an `AggregateError` if all inputs reject.

### Q13. What is `AbortController`?

It allows code to abort supported asynchronous operations, including Fetch requests.

### Q14. What is the difference between XMLHttpRequest and Fetch?

XMLHttpRequest uses an object and event-based API, while Fetch provides a Promise-based interface for HTTP requests.

### Q15. What is CORS?

Cross-Origin Resource Sharing (CORS) is a browser security mechanism that controls whether a web page can access resources from another origin. The server generally needs to provide appropriate CORS response headers.

---

# 17. Practice Questions

Try solving these exercises to improve your understanding.

### Beginner Level

1. Create a Promise that resolves with `"Hello JavaScript"`.
2. Create a Promise that rejects with an error message.
3. Handle a Promise using `.then()` and `.catch()`.
4. Use `setTimeout()` inside a Promise.
5. Write an async function that returns your name.

### Intermediate Level

6. Fetch all users from `https://jsonplaceholder.typicode.com/users`.
7. Display each user's name and email on a webpage.
8. Fetch posts using async/await.
9. Handle HTTP errors using `response.ok`.
10. Send a POST request with a title, body, and user ID.
11. Compare `Promise.all()` with `Promise.allSettled()`.
12. Cancel a Fetch request using `AbortController`.

### Mini Project

**Build a User Directory using the Fetch API.**

Requirements:

* Add a button to load users.
* Fetch data from `https://jsonplaceholder.typicode.com/users`.
* Display each user's name, email, and city.
* Show a loading message while the request is running.
* Display an error message if the request fails.
* Handle an empty result.
* Use `async/await` and `try...catch`.
* Use DOM manipulation to display the results.

---

# Key Takeaways

* Asynchronous JavaScript allows operations to complete without blocking all other JavaScript execution.
* A Promise represents the eventual result of an asynchronous operation.
* `.then()`, `.catch()`, and `.finally()` help handle Promise outcomes.
* `Promise.all()`, `Promise.allSettled()`, `Promise.race()`, and `Promise.any()` handle multiple Promises in different ways.
* `async/await` provides readable syntax for working with Promises.
* APIs allow applications to communicate with other software and servers.
* The Fetch API is a modern way to make HTTP requests.
* `response.json()` returns a Promise containing the parsed response data.
* Check `response.ok` because Fetch does not automatically reject on HTTP error statuses.
* Use `try...catch` or `.catch()` to handle errors.
* Use `JSON.stringify()` to serialize data for JSON requests.
* Use `AbortController` when you need to cancel a supported Fetch request.

**Best way to learn:** Practise each example, run it in your browser, inspect the output in the console, and then build the User Directory mini project.
