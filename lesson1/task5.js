let person = {
  name: "Taiwo Animakun",
  age: 18,
  location: "Anambra"
};

console.log(person);

console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("Location:", person.location);


person.age = 19;
person.occupation = "Student";
person["location"] = "Lagos";
person["hobbies"] = ["gaming", "coding", "swimming"];

console.log(person);