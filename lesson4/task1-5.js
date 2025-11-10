//task1 : Create a basic function


function greet() {
  console.log("Hello! Welcome to the program!");
}

// Call function
greet();


//task2 : Pass arguments to a function


function greet(name) {
  console.log(`Hello, ${name}! Welcome to the program!`);
}

greet("John");
greet("Taiwo");
greet("Chukwunonso");

//task3 : Return a value from a function


function multiply(num1, num2) {
  return num1 * num2; 
}

let result = multiply(7, 4);

console.log("The result is:", result);

//task4 : Use default parameter values


function greet(name = "Guest") {
  console.log(`Hello, ${name}! Welcome to the interface!`);
}

greet("Chukwunonso");
greet();

//task5 : Create a function expression


const add = function(num1, num2) {
  return num1 + num2;
};

const answer = add(8, 5);
console.log(answer);



