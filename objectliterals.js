const student = {
    name : "anshika",
    age : 21,
    marks : 96
};
console.log(student["name"]); //use square [] for print only key value
const item = {
    price: 100,
    discount: 50,
    colors : ["red","pink"]
};
console.log(item);
console.log(item.colors); //also use dot for print single key value

const post = {
    username:"@anshikaagarwal",
    content:"this is my first post as #anshikaagarwal so please support me!"
};
console.log(post);


const obj = {
    1:"a",
    2:"b",
    true:"c",
    null:"d",
    undefined:"e"
};
console.log(obj);

//add/update value
let stu = {
    age:20,
    city:"delhi",
    marks:95,
    name:"anshika"
};
console.log(stu);
stu.city="mumbai";
console.log(stu);
stu.std="btech";
console.log(stu);
delete stu.marks;
console.log(stu);

//object of objects
const classinfo = {
    aman: {
        grade :"A+",
        city:"mumbai"
    },
    shradha: {
         grade :"A+",
        city:"pune"
    },
    karan: {
         grade :"0",
        city:"delhi"
    }
};
console.log(classinfo);
console.log(classinfo.shradha);
console.log(classinfo.shradha.city);
console.log(classinfo.aman);

//array of objects
const classInfo = [
    {
        name:"anshika",
        age:21
    },
    {
        name:"aparna",
        age:22
    },
    {
        name:"arpita",
        age:19
    }

];
console.log(classInfo);
console.log(classInfo[0]);
console.log(classInfo[1]);
console.log(classInfo[2]);
console.log(classInfo[0].name);
classInfo[0].gender = "female"
console.log(classInfo[0]);

//MATH Objects
console.log(Math.PI);
console.log(Math.abs(-12));  //12(give positive number)
console.log(Math.floor(5.9)); //5
console.log(Math.floor(5.3)); //5
console.log(Math.ceil(5.3)); //6
console.log(Math.ceil(5.9));  //6
console.log(Math.pow(5,3));  //125
console.log(Math.random());  //any random no. will print
console.log(Math.random());
console.log(Math.abs(5.3));

//random integers
let num = Math.random();
console.log(num);
num = num *10;
console.log(num);

console.log(Math.floor(num));
num = num+1;
console.log(num);

console.log(Math.random());
console.log(Math.random());
console.log(Math.floor(Math.random()));

// generate a random no. between 1 and 100.(jitni range mai chaiye ussae multiply krdo tou usi range mai ajayenge)
let randomnumber = Math.floor(Math.random()*100)+1;
console.log(randomnumber);

//b/w 1 to 5
//let randomnumber = Math.floor(Math.random()*5)+1;
//console.log(randomnumber);

//b/w 21 to 25 (bs last mai 1 k place pr 20 add krdo)




