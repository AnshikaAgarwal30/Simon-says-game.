//write js program to delete all occurences of element 'numl in a given array.
let arr =[1,2,3,4,5,6,2,3]
let num=2;
for(let i = 0; i<arr.length; i++) {
    if(arr[i] == num) {
        arr.splice(i, 1);
    }
}
console.log(arr);

// write js program to find the no. of digits in a no.
//example : if number = 287152, count=6
/*let number = 287152;
let count = 0;
let copy = number;
while(copy > 0) {
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);*/

// write js program to sum the no. of digits in a no.

let numb = 287152;
let sum=0;
let copy=numb;
while(copy>0) {
    digit = copy%10;
    sum+= digit;
    copy=Math.floor(copy/10);
}
console.log(sum);

//print the factorial of a number n.
let n = 5;
let factorial = 1;
for(let i=1; i<=n; i++) {
    factorial *= i;
} 

console.log(factorial);


//find the largest number in an array with only positive numbers.
let array = [2,5,10,4,2,7,1,9];
let largest = 0;
for(let i = 0; i<=array.length; i++) {
    if(largest < array[i]){
        largest = array[i];
    }
}
console.log(largest);