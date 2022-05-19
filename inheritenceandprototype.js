console.log("Working...");

//Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

let personPrototype = {
    calAge(){
        console.log(2022-this.byear);
    },
    displayinformation(fname,lname,byear){
        this.fname=fname;
        this.lname=lname;
        this.byear=byear;
    },
    display(fname,lname,byear){
        console.log(`my name is ${this.fname} ${this.lname}`);
    }
}

let person1 =Object.create(personPrototype);
person1.displayinformation("kalvakollu","kusumakrishna",2000);
console.log(person1);
person1.calAge();
person1.display();

//Write code to explain prototype chaining

console.log(person1.__proto__);
console.log(person1.__proto__.__proto__);
console.log(person1.__proto__.__proto__.__proto__);
//Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

let arr = [2,3,4,5,6];
let result = arr.reduce((a,b) => a+b , 0);
console.log(result);

//Write a JavaScript function to retrieve all the names of object's own and inherited properties.

function person(){
    console.log(Object.keys(person1));
}
person();


