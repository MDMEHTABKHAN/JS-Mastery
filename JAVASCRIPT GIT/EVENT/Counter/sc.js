let para = document.getElementById("para").textContent = "Hello Md Mehtab Khan";
document.getElementById("para").style.color = "Red";
document.getElementById("para").style.fontSize = "30px";
document.getElementById("para").style.textAlign = "center";
document.getElementById("para").style.marginTop = "40px";


const decreasebtn = document.getElementById("dec");
const resestbtn = document.getElementById("res");
const increasebtn = document.getElementById("inc");
const countlabel = document.getElementById("countlabel");
let count = 0;

increasebtn.onclick = function(){
    count += 2;
    countlabel.textContent = count;
}
decreasebtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}
resestbtn.onclick = function(){
    count = 1;
    countlabel.textContent = count;
}


