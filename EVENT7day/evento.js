
// event object
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) =>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// };


let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
    console.log("button was clicked - handler1");
});

btn1.addEventListener("click", () =>{
    console.log("button was clicked - handler2");
})


// i want to remove this handler that's why i want to store variable
const handler3 = () =>{
    console.log("button was clicked - handler3");
}
btn1.addEventListener("click", handler3)

btn1.addEventListener("click", () =>{
    console.log("button was clicked - handler4");
})

// remove handler three
btn1.removeEventListener("click", handler3)
