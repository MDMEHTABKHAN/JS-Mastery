try {
    console.log("Try block executed.");
    throw new Error("Something went wrong.");
} catch (error) {
    console.log("Catch block executed:", error.message);
} finally {
    console.log("Finally block executed.");
}