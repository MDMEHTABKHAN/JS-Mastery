let name = ['Mehtab', 'shyam', 'abdul', 'arbaj']

name.sort()
console.log(name);

let num = [12,2,34,56,1,4,6,55,60,70]

// let sort_array = num.sort()
// console.log(sort_array);

let sum = 0;

// for (let element of num) {
//     sum += element
// }
// console.log(sum);

for(let i = 0; i < num.length; i++){
    sum = sum + num[i]
}
console.log(sum);

let avg = sum / num.length
console.log(avg);





