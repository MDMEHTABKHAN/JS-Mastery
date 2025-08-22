// let h2 = document.querySelector("h2")
// console.dir(h2)
// console.log(h2);
// h2.innerText = h2.innerText + " " + "From apna College"

// console.log(h2.innerText);

let divs = document.querySelectorAll(".box")

// console.log(divs[0]); // access 

// divs[0].innerText = "First New unique value";
// divs[1].innerText = "second New unique value";
// divs[2].innerText = "third New unique value";

let indx = 1;
for (let i of divs){
    i.innerText = `new unique value ${indx}`;
    i.style.border = "5px dotted red";
    i.style.margin = "20px";
    i.style.padding = "30px";
    indx++
}

divs[1].style.color = "blue";

divs[2].style.fontSize = "30px";
divs[2].style.height = "350px";
divs[2].style.width = "450px";
divs[0].style.textDecoration = "underline dashed red";
