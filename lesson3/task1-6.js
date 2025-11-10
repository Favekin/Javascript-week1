//task1

var myArr = [2, 4, 6, 8, 10];

for (var i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
}

//task2
var fruits = ["apple", "banana", "cherry", "mango", "orange"];

for (var i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}


//task3
const person = {
  name: 'Nonso',
  age: 25,
  city: 'Lagos',
  occupation: 'Developer'
}

for (const key in person) {
  console.log(key + ': ' + person[key])
}

//task4
var count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}


//task5

let incr = 1

do {
  console.log(incr)
  incr++
} while (incr <= 7)

//task6
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break
  }
  console.log(i)
}


//task7
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue
  }
  console.log(i)
}



