function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

try {
    let result = divide(10, 0);
    console.log(result);
} catch (error) {
    console.log("An error occurred:", error.message);
}