function add(){
    let a = 10
    let b = 20
    function sum(){
        console.log(a+b);
    }
    sum()
}
add()


function fun1(){
    console.log('Inside fun1')
    function fun2(){
        console.log('Inside fun2')
    }
    return fun2
}

exam = fun1()
exam()



function add(a, b){
    function sum(){
        console.log(a+b);
    }
    sum()
}
add(12,34)


function createCounter(){
    let count = 0
    return function(){
        count += 1
        console.log(count);
        
    }
    
}

let counterA = createCounter()
counterA()
counterA()
counterA()
