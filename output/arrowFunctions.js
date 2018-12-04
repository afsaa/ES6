"use strict";

//The arrow functions are made to reduce or simplify functions and also make them more readable.
var names = ["Carlos", "Andre", "Stiven"]; //Without arrow functions
// let numberOfChars = names.map(function (name) {
//     console.log(`The name ${name} has ${name.length} letters.`);
// });
//With arrow functions

var numberOfChars = names.map(function (name) {
  return "The name ".concat(name, " has ").concat(name.length, " letters.");
});
console.log(numberOfChars);