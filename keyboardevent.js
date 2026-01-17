let input = document.querySelector("input");
input.addEventListener("keydown", function(event){
    console.log("code = ", event.code);
    if(event.code == "ArrowUp"){
        console.log("character moves forward");
    } else if(event.code == "ArrowDown"){
        console.log("character moves backward");

    }else if(event.code == "ArrowLeft"){
        console.log("character moves leftward");
    }else if(event.code == "ArrowRight"){
        console.log("character moves right");
    }

    //console.log(event.key);
    //console.log("key was pressed");
});


/*let inputs = document.querySelector("input");
inputs.addEventListener("keyup", function(){
    console.log("key was released");
})*/
