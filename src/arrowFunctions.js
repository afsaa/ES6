//The arrow functions are made to reduce or simplify functions and also make them more readable.
const names = ["Carlos", "Andre", "Stiven"];
//Without arrow functions
// let numberOfChars = names.map(function (name) {
//     console.log(`The name ${name} has ${name.length} letters.`);
// });
//With arrow functions
let numberOfChars = names.map(name => `The name ${name} has ${name.length} letters.`);

console.log(numberOfChars);