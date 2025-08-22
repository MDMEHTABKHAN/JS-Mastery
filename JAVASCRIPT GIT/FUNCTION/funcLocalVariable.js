let temperatures;
let meanTemp;

function getMeanTemp(){
    let sum = 0;
    for(let i = 0; i <temperatures.length; i++){
        sum += temperatures[i];
    }
    meanTemp = sum / temperatures.length;
}

temperatures = [20,24,17,28,14,15,43,36,24,37];
getMeanTemp()
console.log(meanTemp);

temperatures = [23,33,35,20,19,18,17,16,15,14,34,35,37,38];
getMeanTemp();
console.log(`the mean of: ${meanTemp}`);

