"use strict";

// We use let and const as a substitute of var, cause var can have problems with re declarations.
var pi = 3.1416; //We use const for variables that we need to keep constant.

var age = 23; //We use let for wariables that we need to change later.

console.log("The number pi is " + pi);
console.log("I am " + age + " years old."); //Also let and const use block scope. If I define a variable on any block with brackets (if, while, for, etc.) it cant be accessed from outside of that block.

if (pi) {
  var _e = 4.30; // pi = 3.1518;
  // console.log(age);
}

console.log(e);