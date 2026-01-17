//q1 write an arrow func. named arrayAverage that accepts an array of numbers and return the avg of those numbers.
let array = [1, 2, 3,4 ,5,6];
const arrayAverage = (array) =>{
    let sum = 0;
    for(let i =0; i<array.length; i++){
        sum = sum +array[i];
    }
    return sum/array.length;
};
console.log(arrayAverage(array));
// write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.
let num = 4;
const isEven = (num) => num%2 == 0;
console.log(isEven(4));