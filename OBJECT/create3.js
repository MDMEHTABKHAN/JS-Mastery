// Using Class Syntax (ES6)
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
const person3 = new PersonClass("John", 28);
console.log(person3);

person3.greet()
