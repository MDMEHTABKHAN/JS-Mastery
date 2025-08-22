function isEvenoOrOdd(x){
    try{
        if(x % 2 == 0){
            console.log("Even");
        }else{
            console.lo("Odd");  // here i did wrong 
        }
        console.log("Ending");
    }catch{
        console.log("Handled"); 
    }
}

isEvenoOrOdd(11);
console.log("Ending");
