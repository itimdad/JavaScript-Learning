let Student = {
    name : "Imdad",
    id : 101,
    age: 22,
    cgpa : 8.5,
    isPass : true,
}

for(let key in Student) {
    console.log("key: " , key, "value :", Student[key]);
}