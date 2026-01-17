/*let btn = document.querySelector("button");
console.dir(btn);

//btn.onclick = function () {
    //alert("button was clicked")
    //console.log("button was clicked");
//};

function sayHello() {
     alert("Hello");

}
btn.onclick = sayHello;*/

let btns = document.querySelectorAll("button");

for(btn of btns) {
    btn.onclick = sayHello;
    btn.onmouseenter = function () {
        console.log("you enterd a button")
    };
    console.dir(btn);
}

function sayHello() {
    alert("Hello!");
}

function sayName() {
    alert("Hello!");
}