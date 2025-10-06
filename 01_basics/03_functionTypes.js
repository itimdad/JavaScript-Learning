//function declaration;
function declaration() {
    console.log("Function declartion");
 
}

//function Expression
let square = function (n) {
     console.log(n * n);
     console.log("Function Expression");
};


//Arrow function
let mult = (num) => num * num;


//calling functions
square(5);
declaration();
console.log(mult(3));




