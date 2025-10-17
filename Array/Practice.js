//find average of an arr elements

let marks = [85, 97, 44, 37, 76, 60];

let sum = 0;
for(let i = 0; i < marks.length; i++) {
    sum += marks[i];
}

const average = sum / marks.length;
console.log(`The average of marks is ${average}`);

//apply offer of 10 percent in each items means element 

let items = [250, 645, 300, 900, 50];

for(let i = 0; i < items.length; i++) {
    offer = items[i] / 10;
    items[i] = items[i] - offer;

    console.log(`Value after offer : ${items[i]}`);
}
console.log(items);