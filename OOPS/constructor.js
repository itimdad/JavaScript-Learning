
class Student {

    //constructor 
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    study() {
        console.log("Studying............");
    }
}

const s1 = new Student("Imdad" , 22);
console.log("Name: " , s1.name);
console.log("Age: ", s1.age);