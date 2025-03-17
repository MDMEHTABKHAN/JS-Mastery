function circleArea(radius){
    return Math.PI * radius * radius
}

function squareArea(side){
    return side * side
}

function calculateArea(side){
    return (Math.sqrt(3) / 4) * side * side
}


function calc(value, callback){
    console.log(callback(value));
}

calc(5, circleArea)
calc(10,calculateArea)

