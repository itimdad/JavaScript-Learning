
let fooditems = ["burger", "chips", "choclate", "egg"];

//push() => add items in the end
fooditems.push("white egg");
fooditems.push("mango" , "ornage");
console.log(fooditems);

//pop() => delete item form end and print
fooditems.pop();
fooditems.pop();

console.log(fooditems);

//toString() => convert array to String format

console.log(fooditems.toString());

//splice
let n = fooditems.splice(2 , 0 , "Banana");
console.log(fooditems);