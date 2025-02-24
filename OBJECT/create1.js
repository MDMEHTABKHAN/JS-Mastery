// Using Object Literals

const person = {
    name: "Mehtab",
    age: 23,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log(person.name);
// does not return a value 
console.log(person.greet());


// call the function
person.greet()