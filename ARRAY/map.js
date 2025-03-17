// let number = [2,4,6,8,10]
// let num = number.map(numbers => numbers*2)
// console.log(num)

// let s1 = ['m', 'n', 'n', 'o']
// let double = s1.map(char => char + char)
// console.log(double)

// let s1 = ['m', 'n', 'n', 'o']
// let triple = s1.map(char => char.repeat(3))
// console.log(triple)


// let students =[
//     {name:'mehtab', age:23},
//     {name:'shyam', age:27},
//     {name:'arbaj', age:25},
//     {name:'abdul', age:26}
// ]

// let names = students.map(student => student.name)
// console.log(names)

// let ages = students.map(student => student.age)
// console.log(ages)


// let numbers = [1, 2, 3, 4, 5]
// let res = numbers
//     .map(num => num * 2)
//     .filter(num => num > 5)

// console.log(res)


let numbers = [1,4,9,16]

function squareRoot(x){
    return Math.sqrt(x)
}
let result = numbers.map(squareRoot)
console.log(result)
console.log(numbers)



let pricesInUSD = [10, 20, 30]
let exchangeRate = 87

let pricesInINR = pricesInUSD.map(price => price * exchangeRate)
console.log(pricesInINR)