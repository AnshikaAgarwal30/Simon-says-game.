let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.dir(form);

    let user = this.elements[0];
    let pass = this.elements[1];

    //or

    

    /*let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");*/

    console.log(user.value);
    console.log(pass.value);
});
   //alert("form submitted");








//extracting form data

let user = document.querySelector("#user");
    user.addEventListener("change", function () {
        console.log("input changed");
        console.log("final value =", user.value);
    });

    user.addEventListener("input", function () {
        console.log("input event");
        console.log("final value = ", this.value);
    })
/*let forms = document.querySelector("forms");

forms.addEventListener("submit", function(event){
    event.preventDefault();


    let inp = document.querySelector("input");
    console.dir(inp);
    console.log(inp.value);
});*/

let inp = document.querySelector("#text");
let p = document.querySelector("p");
inp.addEventListener("input", function() {
    console.log(inp.value);
    p.innerText = inp.value;
})

