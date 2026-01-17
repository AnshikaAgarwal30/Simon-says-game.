console.log("hello");
//let a = 5;
try {
    console.log(a);  // becasuse humne a define hi ni kr rkha agr hum try nhi lgaate then ye yhi error dedeta or aage ka shi code bhi run nhi kr paata.
} catch {
    console.log("caught an error...a is not defined");
    
}
console.log("hello");
console.log("hello");
console.log("hello");

//arrow function
const sum = (a,b) => 
{
    console.log(a + b);
}
sum(2,3);

const cube = (n) => {
console.log(n *n * n);
}
cube(3);

const pow = (a,b) => {
    //return a ** b;
    console.log(a ** b);
}
pow(2,3);


//arrow func. (implicit return)
const mul = (c, d) => c*d;


//set timeout
console.log("hi there!");
setTimeout(() => {
    console.log("apna college");
}, 4000);

console.log("welcome to");
console.log("welcome to");
console.log("welcome to");

//set interval
console.log("hi there");
let id = setInterval(() => {
    console.log("anshika");
}, 2000);
console.log(id);

let id2 = setInterval(() => {
    console.log("you are so smart");
}, 3000);
console.log(id2);
clearInterval(id);
clearInterval(id2);

//this with arrow function
const student = {
    name: "anshika",
    marks: 95,
    prop: this, //global scope
    getnamme: function () {
        console.log(this);
        return this.name;
    },
    getmarks: () => {
        console.log(this); //parent's scope ->window
        return this.marks;
    },
    getinfo1: function () {
        setTimeout(() => {
            console.log(this);//student
        },2000
    );
    },

    getinfo2: function () {
        setTimeout(() => {
            console.log(this);//window
        },2000
    );
    },
};


//practiceques
//write an arrow func. that returns the square of  a number 'n'.
const square = (n) => n*n;
console.log (square(3));
//write a func. that prints "hello world " 5 times at intervals of 2s each.
let ids = setInterval(() => {
    console.log("helllo world");
}, 2000);
setTimeout(() => {
    clearInterval(ids);
}, 10000
);


