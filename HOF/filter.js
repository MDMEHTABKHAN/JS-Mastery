const numbers = [1, 2, 3, 4, 5, 7, 9, 14, 24, 34, 44];
const evens = numbers.filter(num => (num % 2 == 0))
console.log(evens);


// const evens = numbers.filter(function(num) {
//   return num % 2 === 0;
// });
// console.log(evens); 