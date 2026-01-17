//axios sending headers
/*const url = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        const config = { headers: {Accept: "application/json"}};
        let result = await axios.get(url, config);
        console.log(result.data);
    }catch(err) {
        console.log(err);
    }
}

getJokes();*/


//

let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async() => {
    let country = document.querySelector("input").value;
    console.log(country);
    //console.log("button was clicked");
    let colleges = await getColleges(country);
    //console.log(colleges);
    show(colleges);
});

function show(colleges) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colleges) {
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

//let country = "nepal";
async function getColleges(country){
    try {
        let result = await axios.get(url + country);
        //console.log(result.data);
        return result.data;
    }catch(e) {
        console.log("error :", e);
        return[];
    }
}
getColleges();