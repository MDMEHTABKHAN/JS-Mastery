// parameter validation

function getMeanTemp(temperatures){
    if(!(temperatures instanceof Array)){
        return NaN;
    }
    let sum = 0;
    for(let i = 0; i < temperatures.length; i++){
        sum = sum + temperatures[i];
    }
    return sum / temperatures.length;
}

let first = getMeanTemp(10);
console.log(first);
let second = getMeanTemp([10,20,30]);
console.log(second);


