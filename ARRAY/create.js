let emptyArray = [];
console.log(emptyArray);
console.log(typeof emptyArray);

let arr = [12]
console.log(typeof arr);

let age = [12,34,56,23,24,28]
console.log(age);

let games = ['Cricket', 'Football', 'Basketball', 'Hockey']
let mixedArray = ['Cricket', 12, 34, 67, 76.8, true, 'Football']


// accessing
console.log(mixedArray);
console.log(mixedArray[2]);
console.log(mixedArray[0]);
console.log(mixedArray[5]);





let mixedArray1 = [1,23.4, true, {name: "Mehtab", age: 23, isStudent: false, isWorking: true}, [1, 2, 3]];
console.log(mixedArray1);
console.log(typeof mixedArray1);

console.log(mixedArray1[1]);
console.log(mixedArray1[3]);
console.log(mixedArray1[4][1]);




let arr1 = new Array(5)

arr1[0] = 23
arr1[1] = 21
arr1[2] = 33
arr1[3] = 24
arr1[4] = 27

console.log(arr1);
// console.log(arr1[0]);
// console.log(arr1[1]);


// fot loop
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

// reverse loops
for (let i = arr1.length -1; i >= 0; i--) {
    console.log(arr1[i]);
}
// for of loop
let element;
for (element of arr1) {
    console.log(element);
    
}
