const getInfo = (...data) => console.log(data); //Rest parameters.
const dataArray = ["Andre", 32, "Student", "10th Semester"];

getInfo("Andre", 32, "Student");
getInfo(...dataArray); //Using Spread parameters.
