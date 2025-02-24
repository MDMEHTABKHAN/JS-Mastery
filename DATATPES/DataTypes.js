// String
// Enclosed in single (' '), double (" "), or backticks (` `).
txt = ''
console.log(txt);
console.log(typeof txt);

let name = "Mehtab";
console.log(name);

let greeting = `Hello, ${name}!`; // Template literal
console.log(greeting);


// Number
let age = 25;
console.log(age, typeof age);
let price = 99.99;

console.log(price, typeof price);

// Boolean

let isStudent = true;
console.log(isStudent, typeof isStudent);

let isWorking = false;
console.log(isWorking, typeof isWorking);


// Undefined:
// Represents a variable that has been declared but not assigned a value.

let a;
console.log(a, typeof a);

// Null:

// Represents an intentional absence of any value.
let y = null;
console.log(y, typeof null); // object

Symbol:

// Introduced in ES6.
// Represents a unique and immutable value.

// let id = Symbol("id");
// console.log(id, typeof id);

// BigInt:
// Introduced in ES2020.
// Represents large integers beyond the range of the Number type.

// let bigNumber = 1234567890123456789012345678901234567890n;
// console.log(bigNumber, typeof bigNumber);


// Object (Non-primitive):
// Represents a collection of key-value pairs.

let person = {
    name: "John",
    age: 30
};

console.log(person);
