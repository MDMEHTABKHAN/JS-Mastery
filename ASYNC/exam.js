function fun1(){
    console.log('fun1 is starting');
    console.log('fun1 is starting');
}

function sum(){
    let a = 12
    let b = 12
    console.log(a+b);
}

function fun3(){
    console.log('fun3 is starting');
}

fun1()
setTimeout(sum, 2000)
fun3()