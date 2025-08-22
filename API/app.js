Url = "https://cat-fact.herokuapp.com/facts";
const para1 = document.querySelector(".para");
const button = document.querySelector(".btn");

const getFacts = async () => {
    let response = await fetch(Url);
    console.log(response);
    let data = await response.json();
    para1.innerText = data[1].text;
    // para1.innerText = data[2].text;
    para1.style.color = "red";
    para1.style.fontSize = "24px";
    para1.style.fontWeight = "800";
    
};

button.addEventListener("click", getFacts);
