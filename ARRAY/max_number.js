let arr = [10,30,40,33,54,56,87,900,98,98,78,11, 27, 87,90]



// let maximum = Math.max(...arr)
// console.log(maximum);



let maximum = arr[0];
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > maximum) {
        maximum = arr[i];
    }
}
console.log(maximum);

let minimum = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minimum) {
        minimum = arr[i];
    }
}
console.log(minimum);



let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

let average = sum / arr.length;
console.log(average);

console.log(arr.sort((a, b) => a - b));


