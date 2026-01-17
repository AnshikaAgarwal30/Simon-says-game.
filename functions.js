function hello() {
    console.log("hello anshika!!")
}
hello();
hello();
hello();
hello();
function printname() {
    console.log("print anshika");
}
printname();

function print1to5() {
    for(let i = 1; i<=5; i++) {
        console.log(i);
    }
}
print1to5();

//practice ques
function printpoem() {
    console.log("Twinkle Twinkle little star");
    console.log("How i wonder what you are");
    console.log("up ubove the world so high");
    console.log("like a diamond in the sky");
}
printpoem();

//create the func. to roll a dice and always display the value of the dice(1to6).
function rolldice() {
let random = Math.floor(Math.random() * 6)+1;
console.log(random);
}
rolldice();
rolldice();
rolldice();
rolldice();

function printInfo(name, age) {
    console.log(name,age);
}
printInfo("anshika",21);

//sum
function sum(a,b) {
    console.log(a+b);
}
sum(1,2),
sum(5,7);

//create afunc. that gives the avg of 3 numbers.
function avg(a,b,c) {
    console.log((a+b+c)/3);
}
avg(1,2,3);

//create a func. that prints the multiplication table of a number.
function table(n) {
    for(i=n;i<=n*10;i+=n){
        console.log(i)
    }

}
table(2);
table(7);

//create the function that retuens the sum of numbers from 1 to n.
function getsum(n) {
    let sum = 0;
    for(let i = 1; i<=n; i++) {
        sum += i;
    }
    return sum;
}
console.log(getsum(3));

//create a func. that returns the cocatenation of all string  in an array.

let str =["hi", "hello", "bye", "!"];
function concat(str) {
    let result = "";
    for(let i = 0; i<str.length; i++) {
        result += str[i];
    }
    return result;
}
console.log(concat(str));

//function scope
let sums = 54;//global scope
function calSum(a,b) {
    let sums = a+b; //func. scope
    console.log(sums);
}
calSum(1,2);
console.log(sums);


//block scope
/*{
    let a = 5;
}
console.log(a);//ye block k bhr hai tou error dega isliy*/
for(let i = 1; i<=5; i++){
    console.log(i);
}
//use variable for print outside the block
 {
   var a = 56;
 }
 console.log(a);

 //lexical scope
 function outerFunc() {
    let x = 5;
    let y = 6;
    function innerFunc() {
        console.log(x);
        console.log(y);
}
   innerFunc();
 }
 outerFunc();

 //practice ques
 let greet = "hello";//global scope
 function changegreet() {
    let greet = "namaste"; //function scope
    console.log(greet);
    function innergreet() {
        console.log(greet);  //lexical scope
    }
    innergreet();  //ye bhi outer func. wale ko hi print krayga
 }
 console.log(greet);
 changegreet();
 

 //function expression

 const sume = function(a,b) {
    return a+b;
    //console.log(sume);
 } 
 console.log(sume(2,3));
 
 //higher order function
 function multiplegreet(func,count) {  //higher order function
    for(let i = 1; i<=count; i++) {
        func();
    }

 }
 let greets = function() {
    console.log("hii!!");
 }
  multiplegreet(greets, 10);

  //odd or even factory(higher order function)

  function oddorevenfactory(request) {
    if(request === "odd") {
        let odd = function(n) {
            console.log(!(n%2 == 0));
        }
        return odd;

    }
    else if(request === "even"){
        let even = function(n) {
            console.log(n%2 == 0);
        }
        return even;
    }else {
        console.log("wrong request");
    }
  }
  let request = "odd";
  checkodd = oddorevenfactory("odd");
  checkodd(4);
  checkodd(5);
  checkodd = oddorevenfactory("even");
  checkodd(4);
  checkodd(5);


  //methods
  const calculator = {
    num:55,
    add: function(a,b) {
        return a+b;
    },
    sub: function(a,b) {
        return a-b;
    },
    mul: function(a,b) {
        return a*b;  
      }
  };
  console.log(calculator);
  console.log(calculator.add(2,3));
  console.log(calculator.sub(3,2));

  //methods (shorthand)
  const calculators = {
    add(a,b) {
        return a + b;
    },
    sub(a,b) {
        return a - b;
    }
  };
  console.log(calculator.add(3,4));




 
