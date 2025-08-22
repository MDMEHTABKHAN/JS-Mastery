// Variables declared outside any function or block have global scope.

// They are accessible anywhere in the code after declaration.
let name = 'Mehtab';

function greet(){
    console.log(name);
} 
greet();
console.log(name);


let a = 2;
let b = 3

function add(){
    let c;
    c = a + b
    console.log(c);
    
}
add()
console.log(a);
console.log(b);

