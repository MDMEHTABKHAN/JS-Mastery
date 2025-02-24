// let c = 10
// let d  = 20
// function sum(){
//     let f
//     f = c + d
//     console.log(f);
// }
// sum()


let c = 10
let d  = 20
function sum(){
    let f
    f = c + d
    return f
}
let res = sum()
console.log(res);


function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"))

function add(a,b){
    console.log(a+b);   
}
add(3,5)


function grade(marks){
    if(marks >= 90){
        return '+A'
    }else if(marks >= 80){
        return 'A'
    }else if(marks >= 70){
        return 'B+'
    }else if(marks >= 60){
        return 'B'
    }else if(marks >= 50){
        return 'C'
    }else{
        return 'F'
    }
}
console.log(grade(89));
