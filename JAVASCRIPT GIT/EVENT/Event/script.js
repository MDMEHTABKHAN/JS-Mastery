let btn = document.querySelector("#btn1");

btn.onclick = (number) =>{
    console.log("Buttom was click");
    number = 19;
    if(number % 2 === 0){
        console.log("Even Number");
    }else{
        console.log("Odd Number");
        console.log("Sallu");    
    }
};



let btn2 = document.querySelector("#btn2");
btn2.onclick = (number, number1) =>{
    number = 10;
    number1 = 9;
    let sum = number + number1;
    if(sum === 19){
        console.log("Hello");
    }else{
        console.log("Hii");
    }
};