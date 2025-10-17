
let arr = [1,3,5,8,9,5];

//for of loop
for(let n of arr) {
    console.log(n);
}

arr[0] = 4;
//for loop
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}