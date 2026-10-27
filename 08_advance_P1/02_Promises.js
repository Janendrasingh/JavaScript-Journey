// A Promise is a proxy for a value not necessarily known when the promise is created.
// It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.
// This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value,
// the asynchronous method returns a promise to supply the value at some point in the future.

// A Promise is in one of these states:

// 1. pending: initial state, neither fulfilled nor rejected.
// 2. fulfilled: meaning that the operation was completed successfully.
// 3. rejected: meaning that the operation failed.

// The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error).
// When either of these options occurs, the associated handlers queued up by a promise's then method are called.
//  If the promise has already been fulfilled or rejected when a corresponding handler is attached,
//  the handler will be called, so there is no race condition between an asynchronous operation
//  completing and its handlers being attached.

const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is compelete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

// second approch to do it

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolve");
});

//---------------------------------------------------------------------------------

const PromiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "Jai@gmail.com" });
  }, 1000);
});
PromiseThree.then(function (user) {
  console.log(user);
});

//------------------------------------------------------------------------------------

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // let error = false;
    let error = true;
    if (!error) {
      resolve({ username: "jai", password: "123456" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 2000);
});
const username = promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("promise resolve"));

//-------------------------------------------------------------------------------

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // let error = false
    let error = true;

    if (!error) {
      resolve({ username: "ji", password: "159357" });
    } else {
      reject("ERRORR");
    }
  }, 2000);
});
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log("ERRROR");
  }
}
consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://api.github.com/users/janendrasingh");
//     // console.log(response);

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }
// getAllUsers();

fetch('https://api.github.com/users/janendrasingh').then((response) => {
    return response.json()
}).then((data) => {console.log(data);
}).catch((error) => console.log(error))

//----------------------------------------------------------------------------------------

