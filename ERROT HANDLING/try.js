try {
    let result = 10 / 0;
    if (!isFinite(result)) {
        throw new Error("Division by zero is not allowed.");
    }
    console.log(result);
} catch (error) {
    console.log("An error occurred:", error.message);
}