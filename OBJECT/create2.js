  // Using Constructor Functions
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name}`);
    };
}
const person2 = new Person("Mehtab", 23);

console.log(person2);
console.log(person2.name);
console.log(person2.age);
person2.greet()




