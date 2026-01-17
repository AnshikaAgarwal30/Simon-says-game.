//to get the first n elements of an array
let arr = [7, 9, 0, -2];
let n = 3;
let ans = arr.slice(0, n);
console.log(ans);

//q2- to get the last n element of an array
console.log(arr.slice(arr.length-n));

//check whether the string is blank or not
/*let str = prompt("please enter a string");
if(str.length == 0) {
    console.log("String is empty");
}
else {
    console.log("string is not empty");
}*/

//to test whether the character at the given index is lower case
let string = "Anshika Agarwal";
let idx = 0;
if(string[idx] == string[idx].toLowerCase()){
    console.log("character is lower case");
}
else {
    console.log("character is not in lowercase");
}


//q5 - to check if an element exists in an array or not
let array = ["hello", 'a', 23, 64, 99, -6];
let item = 64;
if(arr.indexOf(item) != -1) {
    console.log("elements exist in an array");
}
else {
    console.log("elements not exist  in an array");
}
