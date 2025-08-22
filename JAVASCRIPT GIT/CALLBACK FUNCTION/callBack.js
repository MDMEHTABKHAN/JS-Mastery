/*cllback -:
a function that is passed as an argument to another fucntion
Reading file
network request 
Interacting with datbase
*/


// function callBack(){
//     console.log("Mehtab");
    
// };

// let add = ((a,b, callBack)=> {
//     let sum = a + b;
//     callBack();
//     return sum; 
// });

// let res = add(10,9,callBack);
// console.log(res);


function callBack(){
    console.log("Mehtab");
    
};

let add = function(a,b, callBack) {
    let sum = a + b;
    callBack();
    return sum; 
};

let res = add(10,9,callBack);
console.log(res);
