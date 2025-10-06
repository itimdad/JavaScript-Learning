//fuction with input and output 
function add(a,b) {
    let sum = a + b;
    return sum;
}


//function without output with input
function division(a , b) {
    let divide = a / b;
    console.log("with input no output" , divide);
}

//function with output without input
function multiplication(){
    let a  = 8;
    let b = 2;
    let mult = a*b;

    return mult;
}

//function without input without output
function substraction() {
    let a = 8;
    let b = 4;
    let sub = a - b;
    console.log("no input and no output + substraction",sub);
}





//calling functions.....
console.log("with output with input : "  , add(10 , 9));
division(100, 10);
console.log("without input with output : ",multiplication());
substraction();

