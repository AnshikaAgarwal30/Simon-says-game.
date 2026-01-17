let btn = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async ()=> {
    
    let link = await getImage() 
    //console.log(link);
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
    console.log(link);


});

async function getImage(){
    try {
        let result = await axios.get(url2);
        return result.data.message;
        

    }catch(e) {
        console.log("error - " ,e);
        return "/";
    }
}




/*btn.addEventListener("click", async ()=> {
    //console.log("button was clicked");
    let fact = await getFacts();
    console.log(fact);
});


let url = "https://catfact.ninja/fact";


async function getFacts(){
    try {
        let result = await axios.get(url);
        return result.data.fact;
        
        //console.log(res.data.fact);

    }catch(e) {
        console.log("error - " ,e);
        return "No fact found"
    }
}
getFacts();*/


