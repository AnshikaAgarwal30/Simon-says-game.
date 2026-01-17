//write a js function that returns array elements larger than a number.
let arr = [8,9,10,1,2,3,4,5,6,7];
let num = 5;
function getelements(arr, num) {
    for(let i = 0; i<arr.length; i++) {
        if(arr[i] > num){
            console.log(arr[i]);
        }
    }
}
getelements(arr, num);


//q2 write a js function to extract unique characters from a string .
//example : str = "abcdabcdefggh"
// ans = "abcdefgh"
let str = "abcdabcdefggh";
function getunique(str) {
    let ans = "";
    for(let i = 0; i<str.length; i++) {
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1) {
            //if current char is not added, then add it in ans.
            //otherwise it is duplicate.
            ans += currChar;
        }
    }
    return ans;
}
console.log(getunique(str));



//q3 write a js func. that accepts a list of country names as input and returns the longest country name as output.


let countries = ["austrailia" , "germany" , "united states of America"];
function longestcountry(countries) {
    let longest = "";
    for (let i = 0; i< countries.length; i++) {
        if(countries[i].length > longest.length){
            longest = countries[i];
        }
    }
    return longest;
}
console.log(longestcountry(countries));


//q4  write a javascript to count a no. of vowels in a string argument.
let string = "apnacollege";
function countVowels(string) {
    let count = 0;
    for(let i = 0; i<string.length; i++){
        if(
            string[i] == "a" ||
            string[i] == "e" ||
             
             string[i] == "i" ||
             
              string[i] == "o" ||
             
               string[i] == "u" 
             

        ){
            count++;
        }
        
    }
    return count;
}
console.log(countVowels(string));

//q5 write a js func. to generate a random no. within a range(start,end).
let start = 100;
let end = 200;
let diff = end - start;
function generaterandom(start, end) {
   
    //return Math.floor(Math.random() * diff) + start;
}
console.log(Math.floor(Math.random() * diff) + start);