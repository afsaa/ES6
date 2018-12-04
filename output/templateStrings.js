"use strict";

//Template strings are used to get rid of the old insertion of variables on strings.
var name = "Andres";
var age = 24; //Old way

console.log("My name is " + name + " and im " + age); //New way

console.log("My name is ".concat(name, " and im ").concat(age));