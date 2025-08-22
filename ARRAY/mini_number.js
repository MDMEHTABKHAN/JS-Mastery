let arr = [10,20,304,48,5,66,8,67,89,5,10,45,55,9,68,]


let minimum = arr[0]


for(let num of arr){
    if(num < minimum){
        minimum = num
    }
}
console.log(minimum);


let sum = 0

for(let nums of arr){
    sum += nums 
}
console.log(sum);
