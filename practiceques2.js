//add the following elements to the  container using only javascript and the DOM methods.
//i) a <p> with red rext that syas "hey i.'m red"
// ii) an <h3> with blue text that says "i'm a blue h3"
// iii) a <div> with a black border and pink background color with the following elements inside of it:
//another <h1> that says "i'm in a div"
//a<p> that says "me too"

let para1 = document.createElement("p");
para1.innerText = "hey I'm red";
document.querySelector("body").append(para1);

para1.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
document.querySelector("body").append(h3);

h3.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("para2");

h1.innerText = "I'm in a div";
para2.innerText = "Me Too!!";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector("body").append(div);





//q1 create a new input and button element on the page using js only. set the text of button to "click me".
let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "click me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

//q2 add following attributes to the element:
// change placeholder value of input to "username"
//change the id of button to "btn"

button.setAttribute("id", "btn");
input.setAttribute("placeholder","username");


//q3 access the btn using the querySelector and button id. change  the button background color to blue and text color to white.

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");


//q4  create an h1 element on the page and set its text to "DOM practice" underlined. changes its color to purple.

let head = document.createElement("h1");
head.innerHTML = "<u>DOM practice</u>";
head.style.color = "purple";
document.querySelector("body").append(head);


//q5 create a p tag on the page and set its text to "Apna college Delta Practice", where Delta is bold

let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> practice";
document.querySelector("body").append(p);