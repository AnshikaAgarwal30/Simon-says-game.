let arr = [1, 2, 3, 4, 5,6];
arr.forEach((element) => {
    console.log(element);
});
arr.forEach(function(element) {
    console.log(element);
});


let array = [ {
    name:"anshika",
    marks:97,
}, {
    name:"sneha",
    marks:96,
} ,{
    name:"neha",
    marks:95,
},

] ;



array.forEach((student) => {
    console.log(student.marks);
}
);

let gpa = array.map((element) => {
    return element.marks/10;
   
});
 console.log(gpa);

//map
let num =[1, 2,3 ,4 ];
let double = num.map((element) => {
    return element * element;
});
console.log(double);

//filter
let nums =[1,2,3,4,5,6,7,8,2,9,10,12,11];
let ans = nums.filter((elements) => {
    return elements %2 == 0;
});
console.log(ans);

//every
console.log([2,4,6].every((element) => element%2 == 0));
console.log([2,4,6,8].every((element) => element%2 == 0));
console.log([1,2,4,6].every((element) => element%2 == 0));

//some
console.log([2,4,6].some((element) => element%2 == 0));
console.log([1,2,4,6].some((element) => element%2 == 0));

//reduce

let number =[1,2,3,4];
let finVal = number.reduce((result, element) => result + element);
console.log(finVal);


//find maximum value with reduce function
let a = [1,2,3,4,5,6,7,8];
let max = a.reduce((max, el) => {
    if(max <el){
        return el;
    }else{
        return max;
    }
});
console.log(max);

//check if all numberts in our array are multiples of 10 or not.
console.log([10,4,6].every((element) => element%10 == 0));
console.log([20,40,60].every((element) => element%10 == 0));

//find minimum value in an array
let b = [1,2,3,4,5,6,7,8];
let min = b.reduce((min, el) => {
    if(min <el){
        return min;
    }else{
        return el;
    }
});
console.log(min);

//default parameter
function sum(a,b = 3){
    return a + b;
}

console.log(sum(1));

//spread function(...abc)

console.log("apna college")
console.log(..."apna college");
let arrays = [1,2,3,4,5,6];
console.log(arrays);
let newArr = [...arrays];
console.log(...newArr);
let chars = [..."hello"];
console.log(...chars);
let odd = [1,3,5,7,9];
let even = [2,4,6,8,10];
let numb = [...odd, ...even];
console.log(numb);
console.log(...numb);


///spread using object literals
const data = {
    email:"anshika@gmail.com",
    password: "abcd",
};

const datacopy = {...data,id:123};
console.log(datacopy);


let arrayss = [1,2,3,4,5,6,7,8]
let obj1 = {
    ...arrayss
};//object -> key:value
console.log(obj1);

function sumss(...args) {
    return args.reduce((sumss , el)=> sumss + el);
}
console.log(sumss(1,2,3));

//destructuring for array
let names = [ "anshika", "sneha","mahima","vanshika", "neha"];
//let winner = names[0];

//let runnerup = names[1];
//let secondrunnerup = names[2];

let[winner, runnerup, ...others]= names;
console.log(winner, runnerup,others);


//destructuring for object
const student = {
    name:"anshika",
    age:21,
    class:"btech",
    subject: ["c++", "coa" ,"dbms", "html"],
    username:"anshika@123",
    password:"abcd",
    city:"meerut",

};
let {username:user, password:secret, city:place = "MUMBAI"} = student;
console.log(user,secret,place);
                                                                                                                                                                                                                                                    