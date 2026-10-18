// Array is an ordered collection of elements, which can be of any type (primitive or non-primitive).
// Arrays are used to store multiple values in a single variable. In JavaScript, 
// arrays are objects that come with built-in methods and properties to manipulate the data they hold.

const MyArray = [1, 2, 3, 4, 5];
console.log(MyArray);

// Shallow Copy: A shallow copy of an array creates a new array that contains references to the same elements as the original array.
const shallowCopy = MyArray.slice(); // Using slice() method to create a shallow copy of the array
console.log("Shallow Copy:", shallowCopy);
 
// Deep Copy: A deep copy of an array creates a new array with copies of the original elements,
// so that changes to the new array do not affect the original array.
const deepCopy = JSON.parse(JSON.stringify(MyArray)); // Using JSON methods to create a deep copy of the array
console.log("Deep Copy:", deepCopy);

// Methods to manipulate arrays:

// 1. push(): Adds one or more elements to the end of an array and returns the new length of the array.
MyArray.push(6);
console.log("After push:", MyArray);
// 2. pop(): Removes the last element from an array and returns that element.
const poppedElement = MyArray.pop();
console.log("Popped Element:", poppedElement);
console.log("After pop:", MyArray);
// 3. shift(): Removes the first element from an array and returns that element.
const shiftedElement = MyArray.shift();
console.log("Shifted Element:", shiftedElement);
console.log("After shift:", MyArray);
// 4. unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
MyArray.unshift(0);
console.log("After unshift:", MyArray);
// 5. indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
const index = MyArray.indexOf(3);
console.log("Index of 3:", index);
//  6. includes(): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const includesValue = MyArray.includes(4);
console.log("Includes 4:", includesValue); 
// 7. slice(): Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
const slicedArray = MyArray.slice(1, 4);
console.log("Sliced Array:", slicedArray);
// 8. splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
const splicedArray = MyArray.splice(2, 2, 7, 8);// Removes 2 elements starting from index 2 and adds 7 and 8 in their place
console.log("Spliced Array:", splicedArray);
console.log("After splice:", MyArray);
// Difference between slice() and splice():
// slice() does not modify the original array and returns a new array, 
// while splice() modifies the original array and returns the removed elements.

// 9. join(): Joins all elements of an array into a string and returns this string.
const joinedString = MyArray.join(", ");
console.log("Joined String:", joinedString);
// 10. reverse(): Reverses the order of the elements of an array in place. (The first array element becomes the last, and the last array element becomes the first.)
MyArray.reverse();
console.log("Reversed Array:", MyArray);
// 11. sort(): Sorts the elements of an array in place and returns the sorted array.    
MyArray.sort((a, b) => a - b); // Sorting in ascending order
console.log("Sorted Array:", MyArray);