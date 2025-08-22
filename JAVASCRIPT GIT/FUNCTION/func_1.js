// declaring a function
// function functionName(){
//     code
// }


// declare variable outside the function

let temperatures;
let sum;
let meanTemp;
function getMeanTemp() {
     sum = 0;
     for (let i = 0; i < temperatures.length; i++) {
      sum += temperatures[i];
     }
     meanTemp = sum / temperatures.length;
}


temperatures = [23,13,15,34,40,50,32,35,18,10,20,23,28,25,15,13,43,38,39]
// call function
getMeanTemp()
console.log(`mean: ${meanTemp}`);


// let name  = "mehtab khan";
// function showName(){
//     console.log(name);
// }
// showName();


const name = "md mehtab khan";
showName();
function showName(){
console.log(name);

}
