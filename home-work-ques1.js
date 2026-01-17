let num = 20;
if(num%10==0){
    console.log("good");
}
else{
    console.log("bad");
}

//ques2

/*let username = prompt("enter user name : ");
let age = prompt("enter your age : ");
//console.log("welcome", firstname, lastname, "!");
let msg = username  + " " + "is"+ " " + age + " " + "years" + " " + "old"
alert(msg);*/

//ques3
let quarter = 3;
switch(quarter){
    case 1:
        console.log("january, febraury, march");
        break;

case 2:
        console.log("april , may , june");
        break;

case 3:
        console.log("july, august, september");
        break;

    case 4:
        console.log("october , november , december");
        break;
        default:
            console.log("invalid quarter")
}


let str = "anshika";
if(str[0] = "a" && str.length > 5){
    console.log("golden string");
}
else{
    console.log("not a golden string");
}

//ques5

let a = 5;
let b = 18;
let c = 13;
if(a>b){
    if(a>c) {
        console.log(a , "is largest");
    }
    else{
            console.log(c, "is largest");
        }

}
else{
        if(b>c){
            
                console.log(b, "is largest");
            }else{
                console.log(c, "is largest");
            }
        }
    

        //ques6
        let num1 = 32;
        let num2 = 47852;
        if( (num1 % 10) == (num2 % 10)) {
            console.log("numbers have the same last digit");
        }
        else {
            console.log("numbers not have the same last digit");
        }





