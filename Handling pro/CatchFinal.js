function isEvenOdd(x){
    try{
        // console.lo("Hello");
        if(x % 2 == 0){
            // throw "not even";
            console.log("Even");
            
        }else{
            console.log("Odd"); 
        }
        console.log("Ending");
    }catch (err){
        console.log("Handled", err);
        
    }finally{
        console.log("End");   
    }
}

isEvenOdd(10)
