//square and sum the array elements using the  arrow function and then find the average of the array.

let nums = [1, 2,3 , 4 , 5];
const square = nums.map((num)=> num * num);
console.log(square);

let sum = square.reduce((acc, curr) => acc+curr, 0);
let avg = sum / nums.length;
console.log(avg);

//create a new array using the map function whose each element is equal to the original element plus 5.
let num =[1, 2,3 ,4 ];
let double = num.map((element) => {
    return element + 5;
});
console.log(double);
//create a new array whose elements are in uppercase of words present in the original array.
let strings = ["anshika","sneha", "akshita","ananya", "neha", "eve"];
console.log(strings.map((string) => string.toUpperCase()));



//write a function called mergeObject that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2});
const result = mergeObjects({ a:1, b:2},{c:3,d:4});
console.log(result);