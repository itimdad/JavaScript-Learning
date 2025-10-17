
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

//remove the first company from the array
companies.shift();
console.log(companies);

//remove uber and Add ola from its place
companies.splice(1, 1, "Ola");
console.log(companies);

//add amazone at the end
companies.push("Amazone");
console.log(companies);