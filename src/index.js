const Person = require("./Person");

class Student extends Person {
  constructor({ name, age, occupation, hobbies, major }) {
    super({ name, age, occupation, hobbies });
    this.major = major;
  }
}

const matt = new Student({
  name: "Matt",
  age: 30,
  occupation: "Frontend Dev",
  hobbies: ["Destiny", "GameDev"],
  major: "CIS",
});

const tay = new Person({
  name: "Taylor",
  age: 39,
  occupation: "Programmer",
  hobbies: ["Fishing", "Gaming"],
});

tay.listHobbies();

// use getter
console.log(tay.info);

// use setter
tay.newHobby = "Training";
tay.listHobbies();

console.log(matt);
