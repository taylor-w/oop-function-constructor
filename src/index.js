class Person {
  constructor({ name, age, occupation, hobbies }) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.hobbies = hobbies;
  }

  listHobbies() {
    return this.hobbies
      .map(
        (hobby, index) => `
		${index + 1}. ${hobby}`
      )
      .join("");
  }

  get info() {
    return `
			Hi, my name is: ${this.name}
			My Hobbies are: ${this.hobbies}
		`;
  }

  set newHobby(hobby) {
    this.hobbies.push(hobby);
  }
}

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
