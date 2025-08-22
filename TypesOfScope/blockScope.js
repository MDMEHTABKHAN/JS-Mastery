// Variables declared with let or const inside a block {} are scoped only to that block.

// This doesn't apply to var (see the next point).
// {
//     let a = 20
//     const b = 30
//     var c = 10
// }
// console.log(a);
// console.log(b);
// console.log(c);


// function printTillNum(num){
//     for(var i = 1; i <= num; i++){
//         console.log(i);
//     }
//     console.log("final value of i = ", i);
    
// }
// printTillNum(5)



function printTillNum(num){
    for(let j = 1; j <= num; j++){
        console.log(j);
    }
    console.log("final value of j = ", j); // error : j is not defined
    
}
printTillNum(5)







