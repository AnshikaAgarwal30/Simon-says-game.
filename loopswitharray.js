/*let heroes = [
    ["ironman" , "ball" , "radha"],
    ["krishna" , "superman" , "shiv"]
]
for(let i = 0; i<heroes.length; i++) {
    console.log(i, heroes[i], heroes[i].length);
    for(let j = 0; j<heroes[i].length; j++) {
        console.log(`j=${j}, ${heroes[i][j]}`);
    }
}*/

let student = [["aman", 95], ["anshika", 95.2], ["radha" , 100]];
for(let i = 0; i<student.length;i++) {
    console.log(`info of student #${i+1}`);
    for(let j=0; j<student[i].length; j++) {
        console.log(student[i][j]);
    }
}

let fruits = ['mango', ' apple', 'litchi', 'orange','papaya'];
for(fruit of fruits) {
    console.log(fruit);
}
for(char of "apnacollege") {
    console.log(char);
}
