let jsonResponse = `{"fact":"A cat\u2019s hearing is better than a dog\u2019s. And a cat can hear high-frequency sounds up to two octaves higher than a human.","length":119}`;

let validResponse = JSON.parse(jsonResponse);
console.log(validResponse.fact);

let student = {
    name:"anshika",
    marks:95,
};
let validRes=JSON.stringify(student);
console.log(validRes);