// look at a simple program without function
let temperatures;
let sum;
let meanTemp;

temperatures = [12, 12, 35, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25];
sum = 0;
for (let i = 0; i < temperatures.length; i++) {
     sum += temperatures[i];
}
meanTemp = sum / temperatures.length;
console.log(`mean: ${meanTemp}`);

temperatures = [17, 16, 30, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 18, 17, 16];
sum = 0;
for (let i = 0; i < temperatures.length; i++) {
     sum += temperatures[i];
}
meanTemp = sum / temperatures.length;
console.log(`mean: ${meanTemp}`);


let sum1  = 0
let studentsMarks = [67,77,87,90,56,40,48,99,95,73,6245,76,91,50,60,72];
for(let i = 0; i <studentsMarks.length; i++){
    sum1 = sum1 + studentsMarks[i];
}
console.log(sum1);

let avg = sum1 / studentsMarks.length;
console.log(avg);

