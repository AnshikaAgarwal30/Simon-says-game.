//create a btn on the page using js . add an event listener to the button that changes the button's color to green when it is clicked.
let btn = document.querySelector("button");


function changecolor() {
    console.dir(this.innerText);
    this.style.backgroundColor ="green";
}

btn.addEventListener("click", changecolor);

