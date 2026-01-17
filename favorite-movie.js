const favMovie = "avtar";
let guess = prompt("guess my favorite movie");
while((guess != favMovie) && (guess != "quit")) {
    guess = prompt("wrong guess . please try again");
}
if(guess == favMovie) {
    console.log("congrats!");

} else{
    console.log("you quit");
}

let i = 1;
while(i<=5) {
    if(i == 3) {
        break;
    }
    console.log(i);
    i++;
}

//loops with array
let fruits = ["mango","apple","litchi","orange", "banana"];
//for(let i = 0; i<fruits.length; i++) {
   // console.log(i , fruits[i]);
   for(let i=fruits.length-1; i>=0 ; i--) {
    console.log(i , fruits[i]);
}

