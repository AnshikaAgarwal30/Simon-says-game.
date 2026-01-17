let btn  = document.querySelector("button");
let h1  = document.querySelector("h1");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");


btn.addEventListener("click", function(){
    console.log("clicked");
});

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);
    console.log(inp.value);
    inp.value= "";


    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value="";
});


ul.addEventListener("click", function(event) {

    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    
    }
    console.log("button clicked");
})

/*let delBtns = document.querySelectorAll(".delete");
for(delBtn of delBtns){
    delBtn.addEventListener("click", function(){
        let par = this.parentElement;
        console.log("element deleted")
        //console.log(par);
        par.remove();
    })

}*/
