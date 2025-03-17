console.log('start');

function calculate(a, b, callback) {
    return callback(a, b)
}

function add(x, y) {
    return x + y
}

console.log(calculate(5, 3, add))
console.log('end');

