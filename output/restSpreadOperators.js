"use strict";

var getInfo = function getInfo() {
  for (var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++) {
    data[_key] = arguments[_key];
  }

  return console.log(data);
}; //Rest parameters.


var dataArray = ["Andre", 32, "Student", "10th Semester"];
getInfo("Andre", 32, "Student");
getInfo.apply(void 0, dataArray); //Using Spread parameters.