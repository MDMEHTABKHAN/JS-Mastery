let age = [1,14,15,16,19,5,34,19,32,66,56]

function checkAge(x){
    if(x > 18){
        return true
    }
    else{
        return false
    }
}

let res = age.filter(checkAge)
console.log(res)


// let number = [10,20,30,50,40,60,70,80,90,100]
// let result = number.filter(num => num > 40)
// console.log(result);


let numbers = [1, 2, 3, 4, 5, 6]
let evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers)




let words = ["apple", "banana", "cherry", "date"]
let longWords = words.filter(word => word.length > 5)
console.log(longWords)


let nums = [10, 20, 30, 40, 50]
let evenIndexNumbers = nums.filter((num, index) => index % 2 === 0)
console.log(evenIndexNumbers)