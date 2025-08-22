function showMessage(){
    console.log("Hello World");
    return;
}
showMessage();

function showMessage(){
    console.log("Hello World!");
    return;
    // code after ruturn statement will not be executed
    console.log("Hello Mehtab");
    
}
showMessage();


function sumOfTwoNumber(num, num1){
    return num + num1;
}

let sum = sumOfTwoNumber(10,13);
console.log(sum);


function divide(a,b){
    return a / b
}
let div = divide(12,5);
console.log(div);
