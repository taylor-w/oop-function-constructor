class Person {
  constructor({ name, age, occupation, hobbies }) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.hobbies = hobbies;
  }

  listHobbies() {
    return this.hobbies
      .map((hobby, index) => `${index + 1}. ${hobby}`)
      .join("");
  }
}

const tay = new Person({
  name: "Taylor",
  age: 39,
  occupation: "Programmer",
  hobbies: ["Fishing", "Gaming"],
});

tay.listHobbies();
