// Variables declared inside a function are local to that function.
// They cannot be accessed outside the function.

// function mul(){
//     let a = 2
//     let b = 3
//     let c = a * b
//     console.log(c);
// }

// mul()
// console.log(a); //error: a is not defined


// function greet(){
//     var name = 'Mehtab'
//     console.log(name);
// }
// greet()
// console.log(name); // error: name is not defined


function sub(){
    var x = 10
    var y = 3
    let z = x - y
    console.log(z);
}

sub()
console.log(x);

