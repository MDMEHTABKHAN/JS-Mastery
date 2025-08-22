let greet = () => "Hello, World!";
console.log(greet());

const sqr = (num) => num * num;
console.log(sqr(5));


// arrow function with multiple parameters
let sum = (num, num1) => num + num1;
console.log(sum(10,9));

let add = (str, num) => str + num;
console.log(add("Mehtab",19));


// arrow function with block body
const multiply = (a, b, c) => {
    let result = a * b + c;
    return result;
};

console.log(multiply(8,2,3));


const cond = (a,b,c,d) =>{
    if(a > b && a > c && a > d){
        return a;
    }else if(b > a && b > c && b > d){
        return b;
    }else if(c > a && c > b && c > d){
        return c;
    }else{
        return d;
    }
};

console.log(cond(8, 9, 19, 10));


let chechNumber = (number) =>{
    if(number % 2 === 0){
        console.log("Even number");
    }else{
        console.log("Odd number");
    }
};

let res = chechNumber(19);
console.log(res);



