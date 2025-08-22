for (let i = 0; i < 10; i++) {
    console.log("Value of i:", i)
}
let i = 1
for(i = 1; i <= 10; i++){
    console.log(i); 
}



for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    console.log(i);
}



for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue; // Skip to the next iteration when i is 3
    }
    console.log(i);
}



for (let k = 1; k <= 10; k++) {
  console.log(`Number: ${k}`);
}

