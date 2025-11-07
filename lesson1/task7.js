let person = "Taiwo Animakun";

console.log(typeof person);

const num1 = "4";
const num2 = 4;

const check1 = num1 == num2;

const check2 = num1 === num2;

console.log(check1);

console.log(check2);

let myFalsy = "";
if (myFalsy) {
  console.log("This will not be printed because an empty string is falsy.");
}

let myTruthy = 3.14;
if ("myTruthy") {
  console.log("This will be printed because '3.14' is truthy.");
}

//task8

//const myVar;
//console.log(myVar); crashes the terminal 


const myVar2 = null;

console.log(myVar2);
console.log(typeof myVar2);

