//class 

class Student {

    id = 102;
    name = "Imdad";
    grad;

    study() {
        console.log("Student studying ");
    }

    eat() {
        console.log("eating food by student ");
    }
}

const st1 = new Student();
st1.eat();
st1.study();
console.log(st1.id);
console.log(st1.name);
st1.grad = 1;
console.log(st1.grad);