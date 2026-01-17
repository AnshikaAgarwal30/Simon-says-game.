let smallImages = document.getElementsByClassName("oldImg");

for(let i = 0; i< smallImages.length; i++) {
    smallImages[i].src = "spiderman1.jpeg";
    console.log(`value of image no. ${1} is changed.`);
}
let links = document.querySelectorAll(".box a");
for (let i = 0; i < links.length; i++) {
    links[i].style.color= "green";
}

let btn = document.createElement('button');
btn.innerHTML = "NEW BUTTON!!";
console.log(btn);
let p = document.querySelector('P');
p.insertAdjacentElement('beforebegin', btn);
//<button>NEW BUTTON</button>
