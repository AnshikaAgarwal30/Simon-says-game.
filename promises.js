//ye without promises
/*function savetoDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if(internetSpeed > 4) {
        success();
       // console.log("your data was saved : ", data);
    }else{
        failure();
        //console.log("weak connection. data not saved");
    }
}
savetoDb(
    "apna college",
() => {     //for success callback
    console.log("success: your data was saved  ");
    savetoDb(
        "hello world",
        () => {
            console.log("success2: data2 saved");   //nested success

            savetoDb("anshika",
                 ()=>{
                console.log("success3: data3 saved");   //nested se bhi nested success
            },
            () => {
                console.log("failure3: weak connection")
            }
        );
        },
        () => {
            console.log("failure2: weak connection");
        }
        /*() => {
            console.log("success2: data2 saved");
        }
    );
},
() => {     //for failure callback
    console.log("failure: weak connection. your data was not saved  ");
}
);*/


//with promises

function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4) {
            resolve("success: data was saved");
        }else {
            reject("failure: weak connection");
        }
    });
}
//savetoDb("5");

//with .then and .catch methods

/*let request =*/ savetoDb("apna college") //req = promise object
//request
.then(() =>{
    console.log("promise1 saved");
    return savetoDb("helloworld");
})
/*.then(() => {
    console.log("promise2 saved");
})
.then(() => {
    console.log("promise3 saved");
})*/

.catch(() => {
    console.log("promise was rejected")
});


//improved promise
/*savetoDb("hello world")
.then(() => {
    console.log("data1 saved.");
    savetoDb("apna college")
    .then(() => {         
        console.log("data2 saved");
    });
})
.catch(() => {                              //agar then wale mai se koi sa bhi case false hua tou catch wala print hojayga
    console.log("promise was rejected");
});*/


//promise chaining
savetoDb("apna college")

.then((result) =>{
    console.log("data1 saved");
    console.log("result of promise: ", result);
    return savetoDb("helloworld");
})
.then((result) =>{
    console.log("data2 saved");
    console.log("result of promise: ", result);
   return savetoDb("agarwal");
})
.then((result) =>{
    console.log("data3 saved");
    console.log("result of promise: ", result);
    return savetoDb("anshika");
})


.catch((error) => {
    console.log("promise was rejected")
    console.log("error of promise: ", error)
});

