let nums = [2,4,6,8,10];
console.log(nums);

let fruits = ["mango", "banana", "grapes"];

fruits[1]="guava";
fruits[0]="apple";
fruits[10]="litchi";
fruits.push("pineapple")
fruits.pop();
fruits.unshift("kiwi");
fruits.shift();




console.log(fruits);
console.log(fruits.length);

//example
let followers = ['a','b','c'];
let blocked = followers.shift();
console.log(followers);
console.log(blocked);

//ques
let months = ["january", "july", "march", "august"];
console.log(months);
console.log(months.shift());
console.log(months);
console.log(months.shift());
console.log(months);
console.log(months.unshift("june"));
console.log(months);
console.log(months.unshift("july"));
console.log(months);

//indexing
console.log(months.indexOf("july"));
console.log(months.indexOf("june"));
console.log(months.indexOf("may"));
console.log(months.includes("july"));
console.log(months.includes("january"));

//concat
let primary = ["red" , "yellow" , "blue"];
let secondary = ["orange", "green" , "violet"];

console.log(primary.concat(secondary));

//reverse

//console.log(primary.reverse());  
//  or
primary.reverse();
console.log(primary);

//slicing
let colors = ["red", "yellow" ,  'blue' , "orange", "pink" , "white"];
console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(2,3));
console.log(colors.slice(-2));

//splicing
console.log(colors.splice(4));
console.log(colors);
console.log(colors.splice(0,1));
console.log(colors);
console.log(colors.splice(0, 1, "black", "grey"));
console.log(colors);
console.log(colors.splice(1, 0, "green"));
console.log(colors);

//sort
let squares = [25, 16, 4, 49, 36, 9];
console.log(squares.sort());
console.log(colors.sort());

//ques on splice
let start = ["january", "july" , "march", "august"];
console.log(start.splice(0,1));
console.log(start);
 //anotherques
 let language = ["c", "c++", "html" , "javascript", "python" , "java" , "c#", "sql"];
 console.log(language.reverse());
 console.log(language.indexOf("javascript"));

 //array-references
 let arr = ['a', 'b', 'c'];
 let arrcopy = arr;
 console.log(arr == arrcopy);
 console.log(arrcopy == arr);
 console.log(arr.push('d'));
 console.log(arr);
 console.log(arrcopy);
 console.log(arrcopy.pop());
 console.log(arrcopy);
 console.log(arr);

 //array-constant
/*const array = [1,3,4,];
 console.log(array);
 arr.push(5);
 console.log(array);
 arr.pop(4);
 console.log(array);
 array = [1,3,4];
 console.log(array);*/

 //nested array
 let numbers = [ [1,2],[3,4],[4,5]];
 console.log(numbers);
 console.log(numbers.length);
 console.log(numbers[0].length);

 
 console.log(numbers[0][0]);

 //tic-tac-toe-game
 let game =[ ['X', null , 0] , [null, 'X', null] , ['0', null , 'X']];
 console.log(game);
 console.log([0][1]='o');



