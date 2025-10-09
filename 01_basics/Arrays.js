//learning array and its methods in JavaScript

const letters = ['d', 'f','a', 'z', 'm'];
console.log(letters.indexOf('x'));

letters.sort();
console.log(letters)

letters.reverse();
console.log(letters)

//checking included or not
console.log(letters.includes('c'))   //do not present so false 
console.log(letters.includes('d'))   // present  so true

//sort numbers and reverse ;
let nums = [223,4,142,424];
nums.sort();
console.log(nums);

nums.reverse();
console.log(nums);

//slice method 
let arr = [2,4,5,1,2,5,6];
const newArr = arr.slice(2, 4);
console.log(newArr);
