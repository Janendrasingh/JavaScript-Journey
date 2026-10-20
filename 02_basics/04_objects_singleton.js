const tinder = new Object(); // singleton object creating an object using the Object constructor 
console.log(tinder); // {} (empty object)

const tinderUser = {} // non singleton object creating an object using the object literal syntax
console.log(tinderUser); // {} (empty object)

tinderUser.id = "123abc";
tinderUser.name = "Janendra";
tinderUser.isLoggedIn = false;
console.log(tinderUser); // { id: "123abc", name: "Janendra", isLoggedIn: false }

const regularUser = {
    email: "john@example.com",
    Fullname: {
        userfullname: {
            firstname: "John",
            lastname: "Doe"
        }
    }
};
console.log(regularUser); // { email: "john@example.com", Fullname: { userfullname: { firstname: "John", lastname: "Doe" } } }
console.log(regularUser.Fullname.userfullname.firstname); // John (accessing nested object properties)
console.log(regularUser.Fullname?.userfullname.firstname); // John (accessing nested object properties)

const obj1 = { key1: "value1", key2: "value2" };
const obj2 = { key3: "value3", key4: "value4" };
const obj3 = { ...obj1, ...obj2 }; // Merging two objects
const obj4 = Object.assign({}, obj1, obj2); // Merging two objects using Object.assign()
console.log(obj3); // { key1: "value1", key2: "value2", key3: "value3", key4: "value4" }
console.log(obj4); // { key1: "value1", key2: "value2", key3: "value3", key4: "value4" }

const user = [{
    id: 1,
    name: "Janendra"
},{
    id: 2,
    name: "Rahul"
}];
user[1].name = "Rahul Kumar"; // Modifying the name of the second user in the array
console.log(user); // [{ id: 1, name: "Janendra" }, { id: 2, name: "Rahul Kumar" }] (the name of the second user has been modified)
console.log(tinderUser); // { id: "123abc", name: "Janendra", isLoggedIn: false } (the tinderUser object remains unchanged)
console.log(Object.keys(tinderUser)); // ["id", "name", "isLoggedIn"] (getting the keys of the tinderUser object)
console.log(Object.values(tinderUser)); // ["123abc", "Janendra", false] (getting the values of the tinderUser object)
console.log(Object.entries(tinderUser)); // [["id", "123abc"], ["name", "Janendra"], ["isLoggedIn", false]] (getting the key-value pairs of the tinderUser object)
console.log(tinderUser.hasOwnProperty("name")); // true (checking if the tinderUser object has the property "name")


const course = {
    courseName: "JavaScript",
    price: "999",
    courseInstructor: "Jai Singh",
}
course.courseInstructor = "Janendra Singh"; // Modifying the courseInstructor property of the course object
const {} = course; // Destructuring the course object
const {courseName} = course; // Destructuring the course object to get the courseName property
const {price: coursePrice} = course; // Destructuring the course object to get the price property and renaming it to coursePrice
console.log(courseName); // JavaScript
console.log(coursePrice);
// Destructuring in JavaScript is a feature that allows you to extract values from arrays or 
// properties from objects and store them in variables easily.
