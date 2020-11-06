const Person = require("./Person");

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
