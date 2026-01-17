let msg = "   Hello   ";
console.log(msg.trim().toUpperCase());
//console.log(msg.toUpperCase());
console.log(msg.toLowerCase());


//indexing
let str = "ILoveCoding";

console.log(str.indexOf('Love'));
console.log(str.indexOf('J'));
console.log(str.indexOf('o'));

//slicing
let msgs = "apnacollege";
console.log(msgs.slice(-2));//11-2=>9
console.log(msgs.slice(3));
console.log(msgs.slice(5)); 
console.log(msgs.slice(0,4)); 


//replace
let string = "ilovecoding";
console.log(string.replace("love", "hate"));

//repeat
let a = "Anshika Agarwal ";
console.log(a.repeat(4));

//practice ques.
let message = "  help!  ";
console.log(message.trim().toUpperCase());

//ques2
let name = "ApnaCollege";
console.log(name.slice(4,9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna", "Our"));
console.log(name.slice(4).replace("l", "t").replace("l", "t"));
