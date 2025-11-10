//task6 : Use arrow functions

const greet = (name = "Guest") => {
  console.log(`Hello, ${name}! Welcome to the program!`);
};

greet("Alice");
greet("Chukwunonso");
greet();

//Task 7: Understand function scope
//(I had to comment out so that the code can work)


//function myFunc() {
  //let insideVar = "inside function";
//  console.log(insideVar);
//}

//myFunc();

//console.log(insideVar);   //error message: insideVar is not defined

let outsideVar = "outside function";

function anotherFunc() {
  console.log(outsideVar);
}

anotherFunc();


//Task 8: Use closure


function outerFunction() {
  let outerVariable = "I'm from the outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const myInnerFunction = outerFunction();
myInnerFunction();


//Task 9: Use immediately invoked function expressions (IIFE)


(function() {
    console.log("Hello! The page has loaded.");
})();



