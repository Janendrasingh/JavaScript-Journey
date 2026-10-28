# JavaScript Objects, OOP, Classes, and Prototypes

This README covers the fundamental concepts of Object-Oriented Programming (OOP) in JavaScript, including objects, object literals, classes, constructor functions, prototypes, instances, the `new` keyword, and the `this` keyword.

The goal is to understand how JavaScript organizes data and behavior into objects and how objects can share properties and methods.

---

## 📚 Table of Contents

1. [Introduction to Objects](#1-introduction-to-objects)
2. [Why Do We Use OOP?](#2-why-do-we-use-oop)
3. [Object-Oriented Programming (OOP)](#3-object-oriented-programming-oop)
4. [Object Literals](#4-object-literals)
5. [Accessing Object Properties and Methods](#5-accessing-object-properties-and-methods)
6. [The `this` Keyword](#6-the-this-keyword)
7. [Constructor Functions](#7-constructor-functions)
8. [The `new` Keyword](#8-the-new-keyword)
9. [Instances in JavaScript](#9-instances-in-javascript)
10. [Prototypes in JavaScript](#10-prototypes-in-javascript)
11. [JavaScript Classes](#11-javascript-classes)
12. [The `constructor()` Method](#12-the-constructor-method)
13. [Inheritance in JavaScript](#13-inheritance-in-javascript)
14. [Class Methods and Static Methods](#14-class-methods-and-static-methods)
15. [Object Literal vs Constructor Function vs Class](#15-object-literal-vs-constructor-function-vs-class)
16. [Complete Practical Example](#16-complete-practical-example)
17. [Important Interview Questions](#17-important-interview-questions)
18. [Key Takeaways](#18-key-takeaways)

---

## 1. Introduction to Objects

An **object** is a collection of properties and methods.

* **Properties** store information about an object.
* **Methods** are functions associated with an object.

For example, a student can have a name, age, and course. The student can also perform actions, such as introducing themselves.

### Example

```javascript
const student = {
    name: "Rahul",
    age: 22,
    course: "MCA",

    introduce: function () {
        console.log(`Hi, my name is ${this.name}.`);
    }
};

console.log(student.name);
console.log(student.age);

student.introduce();
```

### Output

```text
Rahul
22
Hi, my name is Rahul.
```

### Explanation

* `student` is an object.
* `name`, `age`, and `course` are properties.
* `introduce()` is a method.
* `this.name` refers to the `name` property of the object that calls the method.

### Why Are Objects Useful?

Objects allow us to group related data and functionality together.

Without an object:

```javascript
let studentName = "Rahul";
let studentAge = 22;
let studentCourse = "MCA";
```

With an object:

```javascript
const student = {
    name: "Rahul",
    age: 22,
    course: "MCA"
};
```

The object approach keeps related information organized.

---

## 2. Why Do We Use OOP?

**OOP stands for Object-Oriented Programming.**

It is a programming approach in which we organize code around objects that contain data and behavior.

Consider a college management application containing hundreds of students.

Without a structured approach, we might create separate variables and functions for every student. This becomes difficult to manage.

OOP helps us organize such applications by creating reusable structures.

### Main Benefits of OOP

**1. Code Reusability**

We can reuse existing code instead of writing the same logic repeatedly.

**2. Better Organization**

Related data and functionality can be grouped together.

**3. Maintainability**

Well-organized code is easier to update, test, and debug.

**4. Encapsulation**

We can organize an object's internal data and control how it is accessed or modified.

**5. Inheritance**

One class can reuse and extend functionality from another class.

**6. Polymorphism**

Different objects can provide different implementations of a shared interface or method.

### Example Without a Reusable Structure

```javascript
const student1 = {
    name: "Rahul",
    course: "MCA"
};

const student2 = {
    name: "Priya",
    course: "BCA"
};

const student3 = {
    name: "Aman",
    course: "B.Tech"
};
```

For a small example, this is fine. However, creating and maintaining hundreds of similar objects manually can become repetitive.

We can use a class to create them more consistently.

```javascript
class Student {
    constructor(name, course) {
        this.name = name;
        this.course = course;
    }
}

const student1 = new Student("Rahul", "MCA");
const student2 = new Student("Priya", "BCA");
const student3 = new Student("Aman", "B.Tech");
```

Now, all students follow the same structure while having different values.

**Important:** OOP is useful when an application benefits from organizing related data and behavior. It is not mandatory for every JavaScript program.

---

## 3. Object-Oriented Programming (OOP)

OOP is commonly explained through four fundamental principles.

### 3.1 Encapsulation

Encapsulation means keeping related data and behavior together and controlling access to internal data.

JavaScript supports private class fields using the `#` prefix.

```javascript
class BankAccount {
    #balance = 0;

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();

account.deposit(1000);

console.log(account.getBalance());
```

Output:

```text
1000
```

The private field `#balance` cannot be accessed directly from outside the class.

```javascript
console.log(account.#balance); // SyntaxError
```

This is an illustration of encapsulation through private data and public methods.

### 3.2 Inheritance

Inheritance allows one class to reuse and extend another class.

```javascript
class Animal {
    eat() {
        console.log("Animal is eating.");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog is barking.");
    }
}

const dog = new Dog();

dog.eat();
dog.bark();
```

Output:

```text
Animal is eating.
Dog is barking.
```

The `Dog` class inherits the `eat()` method from `Animal`.

### 3.3 Polymorphism

Polymorphism means that different objects can provide different behavior through a shared method name or interface.

```javascript
class Animal {
    speak() {
        console.log("Animal makes a sound.");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks.");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Cat meows.");
    }
}

const dog = new Dog();
const cat = new Cat();

dog.speak();
cat.speak();
```

Output:

```text
Dog barks.
Cat meows.
```

Both objects have a `speak()` method, but each provides different behavior.

### 3.4 Abstraction

Abstraction means exposing essential functionality while hiding unnecessary implementation details.

For example, when we call:

```javascript
console.log("Hello World");
```

We use the `console.log()` method without needing to understand its complete internal implementation.

In application design, we can also expose simple methods that hide more complicated internal operations.

```javascript
class CoffeeMachine {
    makeCoffee() {
        this.#heatWater();
        this.#brewCoffee();

        console.log("Coffee is ready.");
    }

    #heatWater() {
        console.log("Heating water...");
    }

    #brewCoffee() {
        console.log("Brewing coffee...");
    }
}

const machine = new CoffeeMachine();

machine.makeCoffee();
```

Output:

```text
Heating water...
Brewing coffee...
Coffee is ready.
```

The user of the class only needs to call `makeCoffee()`.

**Note:** JavaScript does not have a dedicated `abstract class` keyword. Abstraction can be implemented through public interfaces, private methods, and class design.

---

## 4. Object Literals

An **object literal** is a direct way to create an object using curly braces `{}`.

### Syntax

```javascript
const objectName = {
    property1: value1,
    property2: value2,
    methodName() {
        // Code
    }
};
```

### Example

```javascript
const car = {
    brand: "Toyota",
    model: "Fortuner",
    year: 2025,

    start() {
        console.log(`${this.brand} ${this.model} has started.`);
    }
};

console.log(car.brand);
console.log(car.model);
console.log(car.year);

car.start();
```

Output:

```text
Toyota
Fortuner
2025
Toyota Fortuner has started.
```

### Important Features

* Objects are created directly without defining a class.
* Properties store data.
* Methods define behavior.
* Objects can contain strings, numbers, arrays, other objects, and functions.
* Each object literal creates a distinct object.

### Nested Objects

An object can contain another object.

```javascript
const user = {
    name: "Rahul",

    address: {
        city: "Greater Noida",
        state: "Uttar Pradesh"
    }
};

console.log(user.name);
console.log(user.address.city);
console.log(user.address.state);
```

Output:

```text
Rahul
Greater Noida
Uttar Pradesh
```

### When Should We Use Object Literals?

Use object literals when:

* You need a single object.
* You are storing related data.
* You need a simple configuration object.
* You do not need a reusable object-creation structure.

---

## 5. Accessing Object Properties and Methods

JavaScript provides two common ways to access object properties.

### 5.1 Dot Notation

```javascript
const user = {
    name: "Rahul",
    age: 22
};

console.log(user.name);
console.log(user.age);
```

### 5.2 Bracket Notation

```javascript
const user = {
    name: "Rahul",
    age: 22
};

console.log(user["name"]);
console.log(user["age"]);
```

Bracket notation is particularly useful when the property name is stored in a variable.

```javascript
const property = "name";

console.log(user[property]);
```

Output:

```text
Rahul
```

### Adding and Updating Properties

```javascript
const user = {
    name: "Rahul"
};

// Add a property
user.age = 22;

// Update a property
user.name = "Aman";

// Add a method
user.greet = function () {
    console.log(`Hello, ${this.name}`);
};

console.log(user);
user.greet();
```

### Deleting a Property

```javascript
const user = {
    name: "Rahul",
    age: 22
};

delete user.age;

console.log(user);
```

Output:

```text
{ name: 'Rahul' }
```

The exact formatting of an object in the console may vary by environment.

---

## 6. The `this` Keyword

The `this` keyword refers to a value determined by how a function is called.

In a regular object method, `this` usually refers to the object through which the method is called.

### Example

```javascript
const person = {
    name: "Rahul",
    age: 22,

    introduce() {
        console.log(`My name is ${this.name}.`);
        console.log(`My age is ${this.age}.`);
    }
};

person.introduce();
```

Output:

```text
My name is Rahul.
My age is 22.
```

Here, `this` refers to `person`.

### Why Do We Use `this`?

It allows methods to access the properties of the object they operate on.

Without `this`, we might need to refer to a particular variable name directly, making the method less reusable.

### `this` Inside a Constructor Function

```javascript
function Student(name, age) {
    this.name = name;
    this.age = age;
}

const student1 = new Student("Rahul", 22);
const student2 = new Student("Priya", 23);

console.log(student1.name);
console.log(student2.name);
```

Output:

```text
Rahul
Priya
```

When a constructor function is called with `new`, `this` refers to the newly created object.

### `this` Inside a Class

```javascript
class Student {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, I am ${this.name}.`);
    }
}

const student = new Student("Rahul");

student.greet();
```

Output:

```text
Hello, I am Rahul.
```

### Important: Arrow Functions and `this`

Arrow functions do not create their own `this`. They inherit it lexically from the surrounding scope.

For object methods, use regular method syntax when you need `this` to refer to the object.

```javascript
const user = {
    name: "Rahul",

    greet() {
        console.log(this.name);
    }
};

user.greet();
```

Output:

```text
Rahul
```

Avoid using an arrow function as an object method when you expect it to receive the object as its own `this` value.

```javascript
const user = {
    name: "Rahul",

    greet: () => {
        console.log(this.name);
    }
};

user.greet();
```

This will generally not print `"Rahul"` because the arrow function inherits `this` from its surrounding scope rather than receiving `user` as `this`.

**Interview tip:** The value of `this` depends on the calling context for regular functions. Arrow functions inherit `this` from their surrounding lexical scope.

---

## 7. Constructor Functions

A **constructor function** is a regular JavaScript function conventionally used with the `new` keyword to create and initialize objects.

Before JavaScript classes became available, constructor functions were commonly used to create objects with a shared structure.

### Example

```javascript
function Student(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
}

const student1 = new Student("Rahul", 22, "MCA");
const student2 = new Student("Priya", 23, "BCA");

console.log(student1);
console.log(student2);
```

Each call creates a different student object.

### Explanation

```javascript
function Student(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
}
```

* `Student` is the constructor function.
* `name`, `age`, and `course` are parameters.
* `this.name`, `this.age`, and `this.course` define properties on the new object.
* `new Student(...)` creates and initializes an object.

### Adding Methods Through the Constructor

```javascript
function Student(name, course) {
    this.name = name;
    this.course = course;

    this.introduce = function () {
        console.log(`I am ${this.name}, studying ${this.course}.`);
    };
}

const student1 = new Student("Rahul", "MCA");
const student2 = new Student("Priya", "BCA");

student1.introduce();
student2.introduce();
```

Output:

```text
I am Rahul, studying MCA.
I am Priya, studying BCA.
```

### A More Memory-Efficient Approach

Defining a method inside the constructor creates a separate function for each instance.

When instances should share the same method, we can place it on the constructor's prototype.

```javascript
function Student(name, course) {
    this.name = name;
    this.course = course;
}

Student.prototype.introduce = function () {
    console.log(`I am ${this.name}, studying ${this.course}.`);
};

const student1 = new Student("Rahul", "MCA");
const student2 = new Student("Priya", "BCA");

student1.introduce();
student2.introduce();
```

Both objects can use the same `introduce` method through their prototype chain.

---

## 8. The `new` Keyword

The `new` keyword is used to create an object from a constructor function or class.

### Example

```javascript
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

const car1 = new Car("Toyota", "Fortuner");

console.log(car1.brand);
console.log(car1.model);
```

Output:

```text
Toyota
Fortuner
```

### What Happens When We Use `new`?

Conceptually, the `new` operator performs these steps:

1. Creates a new object.
2. Links the new object's internal prototype to the constructor's `prototype` object.
3. Calls the constructor with the new object as `this`.
4. Returns the new object, unless the constructor explicitly returns another object.

For example:

```javascript
function Person(name) {
    this.name = name;
}

const person1 = new Person("Rahul");

console.log(person1.name);
console.log(person1 instanceof Person);
```

Output:

```text
Rahul
true
```

### What Happens If We Forget `new`?

Consider this constructor:

```javascript
function Person(name) {
    this.name = name;
}
```

Calling it without `new` is not equivalent to constructing an object.

```javascript
const person1 = Person("Rahul");
```

In this example, `person1` will be `undefined` because the function does not explicitly return a value.

In strict mode, an ordinary function call also has `this` set to `undefined`; assigning `this.name` will throw a `TypeError`. In a non-strict script, `this` may instead refer to the global object, causing an unintended global property to be created.

**Important:** Use `new` when calling traditional constructor functions. JavaScript classes must also be called with `new`.

---

## 9. Instances in JavaScript

An **instance** is an individual object created from a constructor function or class.

Think of a class as a blueprint and an instance as an individual item created using that blueprint.

For example:

* `Student` is the class.
* `student1` is an instance of `Student`.
* `student2` is another instance of `Student`.

### Example

```javascript
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const student1 = new Student("Rahul", 22);
const student2 = new Student("Priya", 23);

console.log(student1.name);
console.log(student2.name);

console.log(student1 instanceof Student);
console.log(student2 instanceof Student);
```

Output:

```text
Rahul
Priya
true
true
```

### Instances Have Their Own Property Values

```javascript
class Car {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
}

const car1 = new Car("Toyota", "Black");
const car2 = new Car("BMW", "White");

console.log(car1.brand);
console.log(car2.brand);
```

Output:

```text
Toyota
BMW
```

Although both objects were created from the same class, their property values are different.

### Checking an Instance

Use `instanceof` to check whether an object's prototype chain contains a constructor's `prototype` object.

```javascript
console.log(car1 instanceof Car);
```

Output:

```text
true
```

**Note:** `instanceof` checks the prototype chain; it is not a universal test for every possible definition of an object's type.

---

## 10. Prototypes in JavaScript

Prototypes are one of the most important concepts in JavaScript.

JavaScript uses **prototype-based inheritance**. Objects can access properties and methods through their prototype chain.

When JavaScript cannot find a property directly on an object, it checks the object's prototype. If the property is not found there, it continues searching up the chain.

### Example

```javascript
const person = {
    greet() {
        console.log("Hello!");
    }
};

const student = Object.create(person);

student.name = "Rahul";

console.log(student.name);

student.greet();
```

Output:

```text
Rahul
Hello!
```

The `student` object does not have its own `greet()` method. It can access that method through its prototype, `person`.

### What Is a Prototype?

A prototype is an object that another object can delegate property and method lookups to.

For example, arrays can use methods such as `map()` and `filter()` because those methods are available through the array prototype chain.

```javascript
const numbers = [1, 2, 3];

console.log(numbers.map(number => number * 2));
```

Output:

```text
[2, 4, 6]
```

### The Constructor's `prototype` Property

Constructor functions have a `prototype` property used when creating objects with `new`.

```javascript
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}.`);
};

const person1 = new Person("Rahul");
const person2 = new Person("Priya");

person1.greet();
person2.greet();
```

Output:

```text
Hello, my name is Rahul.
Hello, my name is Priya.
```

Both instances can access the same `greet()` function through `Person.prototype`.

### Why Are Prototypes Useful?

**1. Method Sharing**

Multiple objects can share the same method instead of storing separate copies on each instance.

**2. Inheritance**

Objects can access behavior provided by other objects in their prototype chain.

**3. Dynamic Extension**

Methods can be added to a constructor's prototype and become available to objects linked to that prototype.

### Checking a Prototype

```javascript
function Person(name) {
    this.name = name;
}

const person1 = new Person("Rahul");

console.log(Object.getPrototypeOf(person1) === Person.prototype);
```

Output:

```text
true
```

### Important Difference

These two expressions refer to different things:

```javascript
person1.__proto__
Person.prototype
```

* `Person.prototype` is the object used as the prototype for instances created by `new Person()`.
* `person1.__proto__` is a legacy accessor for the instance's internal prototype.

Prefer `Object.getPrototypeOf(person1)` when you need to inspect an object's prototype.

### Prototype Chain

Consider:

```javascript
const animal = {
    eat() {
        console.log("Eating...");
    }
};

const dog = Object.create(animal);

dog.bark = function () {
    console.log("Barking...");
};

dog.eat();
dog.bark();
```

Output:

```text
Eating...
Barking...
```

The lookup process for `dog.eat()` is:

1. JavaScript checks whether `dog` has its own `eat` property.
2. It does not find one.
3. JavaScript checks the prototype of `dog`, which is `animal`.
4. It finds `eat()` and calls it.

This process is called **prototype-chain lookup**.

---

## 11. JavaScript Classes

JavaScript introduced class syntax in ECMAScript 2015 (ES6).

A class provides a convenient syntax for creating objects and implementing inheritance.

Although class syntax resembles classes in languages such as Java and C++, JavaScript's inheritance model is still prototype-based.

### Basic Class Syntax

```javascript
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}

const student1 = new Student("Rahul", 22);

student1.introduce();
```

Output:

```text
My name is Rahul and I am 22 years old.
```

### Explanation

**`class Student`**

Defines a class named `Student`.

**`constructor(name, age)`**

Initializes each new instance with the provided values.

**`this.name = name`**

Stores the provided name on the current instance.

**`introduce()`**

Defines a method that instances can access through `Student.prototype`.

**`new Student("Rahul", 22)`**

Creates a new instance and initializes it.

### Creating Multiple Instances

```javascript
class Student {
    constructor(name, course) {
        this.name = name;
        this.course = course;
    }

    display() {
        console.log(`${this.name} is studying ${this.course}.`);
    }
}

const student1 = new Student("Rahul", "MCA");
const student2 = new Student("Priya", "BCA");
const student3 = new Student("Aman", "B.Tech");

student1.display();
student2.display();
student3.display();
```

Output:

```text
Rahul is studying MCA.
Priya is studying BCA.
Aman is studying B.Tech.
```

### Important Features of JavaScript Classes

* Classes use the `class` keyword.
* Instances are normally created with `new`.
* The `constructor()` method initializes instances.
* Methods defined in the class body are placed on the class's prototype.
* Classes support inheritance using `extends`.
* Class bodies execute in strict mode.
* Classes must be called with `new`; calling a class as an ordinary function throws a `TypeError`.

---

## 12. The `constructor()` Method

The `constructor()` method initializes a new class instance.

It is called automatically when a class is instantiated with `new`.

### Example

```javascript
class Employee {
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
}

const employee1 = new Employee("Rahul", 50000, "Development");

console.log(employee1.name);
console.log(employee1.salary);
console.log(employee1.department);
```

Output:

```text
Rahul
50000
Development
```

### How Does It Work?

When this line executes:

```javascript
const employee1 = new Employee("Rahul", 50000, "Development");
```

JavaScript creates a new instance and invokes the constructor with the supplied arguments.

The constructor assigns the arguments to the instance's properties.

### Can a Class Have Multiple Constructors?

No. A JavaScript class can have only one constructor method.

The constructor can, however, use default parameters or conditional logic to handle different kinds of input.

```javascript
class Student {
    constructor(name = "Unknown", course = "Not Assigned") {
        this.name = name;
        this.course = course;
    }
}

const student1 = new Student();
const student2 = new Student("Rahul", "MCA");

console.log(student1.name);
console.log(student2.name);
```

Output:

```text
Unknown
Rahul
```

---

## 13. Inheritance in JavaScript

Inheritance allows a class to extend another class.

The existing class is called the **parent class** or **base class**.

The class that extends it is called the **child class** or **derived class**.

### Example

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} is barking.`);
    }
}

const dog1 = new Dog("Tommy");

dog1.eat();
dog1.bark();
```

Output:

```text
Tommy is eating.
Tommy is barking.
```

### Understanding `extends`

```javascript
class Dog extends Animal
```

This declares that `Dog` inherits from `Animal`.

As a result, instances of `Dog` can access inherited methods such as `eat()`.

### Understanding `super()`

When a child class defines its own constructor, it must call `super()` before accessing `this`.

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
}

const dog1 = new Dog("Tommy", "Labrador");

console.log(dog1.name);
console.log(dog1.breed);
```

Output:

```text
Tommy
Labrador
```

`super(name)` calls the parent class constructor and initializes the inherited `name` property.

### Method Overriding

A child class can provide its own implementation of an inherited method.

```javascript
class Animal {
    speak() {
        console.log("Animal makes a sound.");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks.");
    }
}

const animal = new Animal();
const dog = new Dog();

animal.speak();
dog.speak();
```

Output:

```text
Animal makes a sound.
Dog barks.
```

This demonstrates method overriding and is a common example of polymorphism.

---

## 14. Class Methods and Static Methods

### 14.1 Instance Methods

Instance methods are available through the class's prototype and can normally be called on instances.

```javascript
class Calculator {
    add(a, b) {
        return a + b;
    }
}

const calculator = new Calculator();

console.log(calculator.add(10, 20));
```

Output:

```text
30
```

### 14.2 Static Methods

A static method belongs to the class itself rather than being available as an ordinary instance method.

```javascript
class Calculator {
    static multiply(a, b) {
        return a * b;
    }
}

console.log(Calculator.multiply(5, 4));
```

Output:

```text
20
```

The method is called directly on the class.

```javascript
const calculator = new Calculator();

// calculator.multiply(5, 4); // TypeError
```

### When Should We Use Static Methods?

Static methods are useful for functionality that relates to the class but does not require a particular instance.

Examples include:

* Utility calculations
* Validation helpers
* Factory methods
* Operations that do not depend on instance-specific state

---

## 15. Object Literal vs Constructor Function vs Class

| Feature                    | Object Literal             | Constructor Function            | Class                       |
| -------------------------- | -------------------------- | ------------------------------- | --------------------------- |
| Syntax                     | `{}`                       | `function`                      | `class`                     |
| Creates an object directly | Yes                        | With `new`                      | With `new`                  |
| Reusable structure         | Manual                     | Yes                             | Yes                         |
| Initialization             | Direct property assignment | Constructor function body       | `constructor()`             |
| Prototype-based sharing    | Possible                   | Yes                             | Yes                         |
| Inheritance support        | Via prototype mechanisms   | Via prototypes                  | `extends` and `super`       |
| Typical use                | Simple, individual objects | Traditional object construction | Modern object-oriented code |

### Example: Object Literal

```javascript
const user = {
    name: "Rahul",
    greet() {
        console.log(`Hello, ${this.name}`);
    }
};

user.greet();
```

### Example: Constructor Function

```javascript
function User(name) {
    this.name = name;
}

User.prototype.greet = function () {
    console.log(`Hello, ${this.name}`);
};

const user = new User("Rahul");

user.greet();
```

### Example: Class

```javascript
class User {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, ${this.name}`);
    }
}

const user = new User("Rahul");

user.greet();
```

All three approaches can represent objects. The best choice depends on the application's needs.

---

## 16. Complete Practical Example

This example combines classes, objects, constructors, instances, methods, `this`, and inheritance.

### Student Management System

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }

    study() {
        console.log(`${this.name} is studying ${this.course}.`);
    }
}

const student1 = new Student("Rahul", 22, "MCA");
const student2 = new Student("Priya", 23, "BCA");

student1.introduce();
student1.study();

student2.introduce();
student2.study();

console.log(student1 instanceof Student);
console.log(student1 instanceof Person);
```

### Output

```text
My name is Rahul and I am 22 years old.
Rahul is studying MCA.
My name is Priya and I am 23 years old.
Priya is studying BCA.
true
true
```

### Concepts Used

* `class`: Defines a reusable structure.
* `constructor()`: Initializes instances.
* `this`: Refers to the current instance in the constructor and methods.
* `new`: Creates an instance.
* `extends`: Establishes inheritance.
* `super()`: Calls the parent class constructor.
* `instanceof`: Checks the prototype chain.
* Methods: Define the behavior of objects.

---

## 17. Important Interview Questions

### Q1. What is an object in JavaScript?

An object is a collection of properties and methods that represent related data and behavior.

### Q2. What is OOP?

OOP stands for Object-Oriented Programming. It organizes code around objects and commonly uses principles such as encapsulation, inheritance, polymorphism, and abstraction.

### Q3. Why do we use OOP?

OOP can improve code organization, reusability, maintainability, and the management of complex applications.

### Q4. What is an object literal?

An object literal is a direct way to create an object using curly braces.

Example:

```javascript
const user = {
    name: "Rahul",
    age: 22
};
```

### Q5. What is a constructor function?

A constructor function is a regular function conventionally used with `new` to create and initialize objects.

### Q6. What is a class in JavaScript?

A class is syntax for defining a reusable structure for creating objects and implementing inheritance. JavaScript classes use prototype-based inheritance internally.

### Q7. What is an instance?

An instance is an individual object created from a class or constructor function.

### Q8. What is the purpose of the `new` keyword?

It creates a new object, links its prototype, calls the constructor with the new object as `this`, and returns the object unless the constructor explicitly returns another object.

### Q9. What is the `this` keyword?

`this` is a value determined by the calling context for regular functions. In a regular object method, it usually refers to the object used to call the method.

### Q10. What is a prototype?

A prototype is an object that another object can use as a source of properties and methods through the prototype chain.

### Q11. What is prototype inheritance?

Prototype inheritance allows an object to access properties and methods from other objects linked through its prototype chain.

### Q12. What is the difference between `prototype` and `__proto__`?

* `prototype` is a property on constructor functions and is used as the prototype for instances created with `new`.
* `__proto__` is a legacy accessor for an object's internal prototype.
* `Object.getPrototypeOf()` is the preferred way to inspect an object's prototype.

### Q13. Are JavaScript classes the same as classes in Java or C++?

No. JavaScript provides class syntax, but its inheritance model is prototype-based. Some class behaviors and rules also differ from those in Java and C++.

### Q14. What is the difference between an instance method and a static method?

An instance method is normally called on an instance. A static method is called on the class itself.

### Q15. What is inheritance?

Inheritance allows a class to reuse and extend functionality from another class.

### Q16. What is method overriding?

Method overriding occurs when a child class provides its own implementation of an inherited method.

### Q17. Why are prototypes useful?

Prototypes allow objects to share methods and support JavaScript's inheritance and property-lookup mechanisms.

### Q18. Can a JavaScript class have multiple constructors?

No. A class can define only one `constructor()` method. Default parameters and conditional logic can handle different input combinations.

### Q19. What happens if we call a class without `new`?

JavaScript throws a `TypeError` because classes cannot be called as ordinary functions.

### Q20. What is the difference between `Object.create()` and `new`?

`Object.create(proto)` creates an object with the specified prototype. The `new` operator constructs an object using a constructor function or class and performs constructor initialization.

---

## 18. Key Takeaways

* **Objects:** Store related data and behavior.
* **OOP:** Organizes code around objects.
* **Object literals:** Provide a direct way to create individual objects.
* **Constructor functions:** Create and initialize objects when used with `new`.
* **Classes:** Provide a modern syntax for object creation and inheritance.
* **`constructor()`:** Initializes a new class instance.
* **`new`:** Creates an object and invokes its constructor.
* **`this`:** Refers to a context-dependent value.
* **Instances:** Are individual objects created from a class or constructor.
* **Prototypes:** Enable property lookup, method sharing, and inheritance.
* **`extends`:** Establishes class inheritance.
* **`super()`:** Calls the parent constructor in a derived class.
* **Static methods:** Belong to the class rather than being ordinary instance methods.
* **Encapsulation:** Helps control access to internal data.
* **Polymorphism:** Allows different objects to provide different behavior through a shared method or interface.
* **Abstraction:** Hides implementation details behind a simpler interface.

---

## 🎯 Practice Questions

Try solving these questions without looking at the examples above.

1. Create a `Book` object using an object literal with `title`, `author`, and `price` properties.
2. Create a `Student` constructor function that accepts `name`, `age`, and `course`.
3. Create three instances of the `Student` constructor.
4. Add a `introduce()` method to `Student.prototype`.
5. Create an `Employee` class with `name`, `salary`, and `department`.
6. Add a method that displays an employee's information.
7. Create a `Vehicle` parent class and a `Car` child class.
8. Use `super()` to initialize the parent class properties.
9. Create a `BankAccount` class with a private `#balance` field.
10. Create a static method that converts Celsius to Fahrenheit.
11. Explain what happens when `new` is used with a constructor function.
12. Explain how JavaScript finds a method through the prototype chain.
13. Demonstrate the difference between an instance method and a static method.
14. Explain why an arrow function used as an object method may not receive the object as `this`.
15. Build a small library management system using classes and inheritance.

---

**Recommended Learning Order:**

1. Objects and object literals
2. Properties, methods, and `this`
3. Constructor functions
4. The `new` keyword and instances
5. Prototypes and prototype inheritance
6. Classes and constructors
7. Inheritance with `extends` and `super`
8. Encapsulation, polymorphism, and abstraction

Master these concepts with small coding examples before moving on to advanced JavaScript topics.
