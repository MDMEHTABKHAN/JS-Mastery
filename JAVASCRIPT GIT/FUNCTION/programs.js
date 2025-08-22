// Calculate the Area of a Rectangle

function areaOfRectangle(length, width){
    return length * width;
}

let area = areaOfRectangle(10,12);
console.log(area);



// Convert Celsius to Fahrenheit

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

let fahrenheit = celsiusToFahrenheit(25);
console.log(`25°C is equal to: ${fahrenheit} °F`);


// find the maximum three number

function findMax(a,b,c){
    if(a > b && a > c){
        return a;
    }else if(b > a && b > c){
        return b;
    }else{
        return c;
    }
}
let max = findMax(10,12,14);
console.log(max);


function findMaxFour(a,b,c,d){
    if(a > b && a > c && a > d){
        return a;
    }else if(b > a ** b > c && b > d){
        return b;
    }else if(c > a && c > b && c > d){
        return c
    }else{
        return d;
    }
}

let max1 = findMaxFour(13,45,12,34);
console.log(max1);
 
