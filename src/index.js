const Person = require("./Person");

class Faculty extends Person {
  constructor({ name, age, occupation, hobbies, wage }) {
    super({ name, age, occupation, hobbies });
    this.wage = wage;
  }
}

// class Student extends Person {
//   constructor({ name, age, occupation, hobbies, major }) {
//     super({ name, age, occupation, hobbies });
//     this.major = major;
//   }
// }

// const matt = new Student({
//   name: "Matt",
//   age: 30,
//   occupation: "Frontend Dev",
//   hobbies: ["Destiny", "GameDev"],
//   major: "CIS",
// });

const tay = new Person({
  name: "Taylor",
  age: 39,
  occupation: "Programmer",
  hobbies: ["Fishing", "Gaming"],
});

const lawrence = new Faculty({
  name: "Appelbaum",
  age: 45,
  occupation: "Professor",
  hobbies: ["Radio", "Fishing"],
  wage: 60000,
});

tay.listHobbies();

// use getter
console.log(tay.info);

// use setter
tay.newHobby = "Training";
tay.listHobbies();

// console.log(matt);
console.log(lawrence);
