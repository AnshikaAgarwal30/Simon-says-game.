const student = {
    name: "anshika",
    age: 21,
    eng: 85,
    maths: 95,
    phy: 97,
     getAvg() { //method(inside the object)
        console.log(this);
     
        let avg = (this.eng + this.maths + this.phy)/3;
        console.log(`${this.name} got avg marks = ${avg}`);
        
    }
}
student.getAvg();
function getAvg() {
   // console.log(this);
     
}