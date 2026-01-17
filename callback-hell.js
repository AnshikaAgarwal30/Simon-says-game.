//callback-hell
/*h1 = document.querySelector("h1");
function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange(); //if ke andr ka mtlb hai ki function exist krta hai ya nhi ye cond. check krega true or false agar krta hai tou aage call krdo function ko or agr false aayi condition tou chain whi ruk jaaygi
    }, delay);
}

changeColor("red", 1000, () => {
    changeColor("green", 1000, () => {
    changeColor("pink", 1000, () => {
    changeColor("blue", 1000, () => {
    changeColor("orange", 1000, () => {
    
})
})
})
})
});



//TRADITIONAL METHOD
/*h1 = document.querySelector("h1");
setTimeout(() => {
    h1.style.color = "red";
}, 1000);

setTimeout(() => {
    h1.style.color = "pink";
}, 2000);

setTimeout(() => {
    h1.style.color = "blue";
}, 3000);*/



//promises with callback-hell

h1 = document.querySelector("h1");
function changeColor(color, delay, ) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        h1.style.color = color;
        resolve("color changed")
       // if (nextColorChange) nextColorChange(); //if ke andr ka mtlb hai ki function exist krta hai ya nhi ye cond. check krega true or false agar krta hai tou aage call krdo function ko or agr false aayi condition tou chain whi ruk jaaygi
    }, delay);
    })
    
}
let requestPromise = changeColor("red", 1000);
console.log(requestPromise);

changeColor("red", 1000)
.then(() => {
    console.log("red color was completed");
    return changeColor("orange", 1000);
})

.then(() => {
    console.log("orange color was completed");
    return changeColor("green", 1000);
})

.then(() => {
    console.log("green color was completed");
    return changeColor("pink", 1000);
})

.then(() => {
    console.log("pink color was completed");
    return changeColor("blue", 1000);
})

