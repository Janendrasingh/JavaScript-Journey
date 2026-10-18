// String arrays

const marvel = ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow'];
const dc = ['Batman', 'Superman', 'Wonder Woman', 'Flash', 'Aquaman'];

marvel.push(dc); // Adding the entire dc array as a single element to the marvel array
console.log("Marvel after push:", marvel); // Marvel after push: ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', ['Batman', 'Superman', 'Wonder Woman', 'Flash', 'Aquaman']]
console.log("Marvel length after push:", marvel.length); // Marvel length after push: 6
console.log("Marvel[5]:", marvel[5]); // Marvel[5]: ['Batman', 'Superman', 'Wonder Woman', 'Flash', 'Aquaman']

marvel.pop(); // Removing the last element (which is the dc array) from the marvel array
console.log("Marvel after pop:", marvel); // Marvel after pop: ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow']

const allHeros = marvel.concat(dc); // Concatenating the dc array to the marvel array without modifying the original marvel array
console.log("All heroes:", allHeros); // All heroes: ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Batman', 'Superman', 'Wonder Woman', 'Flash', 'Aquaman']

// Using the spread operator to concatenate the marvel and dc arrays
const allHerosSpread = [...marvel, ...dc];
console.log("All heroes (spread):", allHerosSpread); // All heroes (spread): ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Batman', 'Superman', 'Wonder Woman', 'Flash', 'Aquaman']

const another_array = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];
console.log("Another array:", another_array);
const flattened_array = another_array.flat(2); // Flattening the array to a depth of 2
console.log("Flattened array:", flattened_array); // Flattened array: [1, 2, 3, 4, 5, 6, 7, [8, 9 ]]
const flattened_array_depth_1 = another_array.flat(Infinity); // Flattening the array to infinite depth
console.log("Flattened array (infinity):", flattened_array_depth_1); // Flattened array (infinity): [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log("Is marvel an array?", Array.isArray(marvel)); // Is marvel an array? true
console.log(Array.from("Hello")); // ['H', 'e', 'l', 'l', 'o'] (converting a string to an array of characters)
console.log(Array.from({name: "Janendra"})); // [undefined] (converting an object to an array, but since the object doesn't have indexed properties, it returns an array with undefined)

let scores = [10, 20, 30, 40, 50];
// Using map() to create a new array with each score doubled
const doubledScores = scores.map(score => score * 2);
console.log("Doubled Scores:", doubledScores); // Doubled Scores: [20, 40, 60, 80, 100]

let score1 = 100
let score2 = 200
let score3 = 300
console.log("Scores:", score1, score2, score3); // Scores: 100 200 300
console.log(Array.of(score1, score2, score3)); // [100, 200, 300] (creating an array from the given arguments)
