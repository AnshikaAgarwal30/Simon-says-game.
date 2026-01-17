async function greet() {
   // throw "404 page not found";    //is line se humare code mai error print ho jaaygi
    return "hello" ;
}

greet()
.then((result) => {
    console.log("promise was resolved");
    console.log("result was :", result);
})
.catch((err)  => {
    console.log("promise was rejected with err : ", err);
});

/*let demo = async() => {
    return 5;
};
demo();*/

function getNum(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let num =  Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        },1000);
    });
}

async function demo() {
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    getNum();
}
demo();



h1 = document.querySelector("h1");
function changeColor(color, delay, ) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5)+1;
            if(num > 3) {
                reject("promise rejected");
            }
        h1.style.color = color;
        console.log(`color changes to: ${color}`)
        resolve("color changed")
       // if (nextColorChange) nextColorChange(); //if ke andr ka mtlb hai ki function exist krta hai ya nhi ye cond. check krega true or false agar krta hai tou aage call krdo function ko or agr false aayi condition tou chain whi ruk jaaygi
    }, delay);
    })
    
}

async function demo() {
 try{
await changeColor("red", 1000);
    await changeColor("green", 1000); 
    await changeColor("pink", 1000) ;
    await changeColor("blue", 1000);
    await changeColor("orange", 1000);
 }catch (err) {
    console.log("error")
    console.log(err);
 }
    //changeColor("purple", 1000);

    let a = 5;
    console.log(a);
    console.log("new number= ", a+3);
    

    }
