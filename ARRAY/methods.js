// push(): Adds one or more elements to the end of an array
let fruits = ["Apple", "Banana"];
fruits.push("Cherry");
console.log(fruits);


// pop(): Removes the last element from an array
fruits.pop();
console.log(fruits);


// shift(): Removes the first element from an array

fruits.shift();
console.log(fruits); 


// unshift(): Adds one or more elements to the beginning of an array

fruits.unshift("Mango");
console.log(fruits); 

let arr = [10,20,30,40,50,60]
console.log(arr);

// using splice to remove element
// let remove = arr.splice(3,2)
// let remove = arr.splice(3,1,5)

// console.log(remove);
// console.log(arr);

// using splice to add element
// let add = arr.splice(3,0,100)
// console.log(add);

// find indexOf of item
console.log(arr.indexOf(30));
console.log(arr.indexOf(40));
console.log(arr.indexOf(100));

console.log(arr.includes(40));
console.log(arr.includes(400));










