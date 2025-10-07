//Primitive Data Typess..................

//undefined
let a ;
console.log(a);
console.log(typeof a);

//String
let b = "hi"
console.log(b)
console.log(typeof b);

//Number
let c = 4
console.log(c)
console.log(typeof c);

//Null
var d = null;
console.log(d)
console.log(typeof d);

//boolean
var e = true;
console.log(e)
console.log(typeof e);


//Complex Data Type;

//Array
var arr = [2,3,8,4,5,6];
console.log(arr)
console.log(arr[4]);

//object
var person = {
    id : 102,
    name: "Imdad",
    age: 22
}
console.log(person)
//if want to access age from person object
console.log("age is: ",person.age)

//function
function hello(){
    console.log("Hello world")
}

hello()