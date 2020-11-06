function SWICPerson({ name, id, currentSchedule = [] } = {}) {
  this.name = name;
  this.id = id;
  this.currentSchedule = currentSchedule;
}

SWICPerson.prototype.greet = function () {
  return `Hi, my name is ${this.name}`;
};

const stu = new SWICPerson({ name: "Fred", id: "12344321" });
const stu2 = new SWICPerson({ name: "Frank", id: "00999392" });
const stu3 = new SWICPerson({ name: "Fiona", id: "29239877" });
const rudeStu = new SWICPerson({ name: "Rudy", id: "29239877" });

rudeStu.greet = () => "Mind your own business";

console.log(stu.greet());
console.log(stu2.greet());
console.log(stu3.greet());
console.log(rudeStu.greet());

// .call calls a function with a given 'this' value
function Student({ name, id, currentSchedule = [], major } = []) {
  SWICPerson.call(this, { name, id, currentSchedule });
  this.major = major;
}
function Faculty({ name, id, currentSchedule = [], wage } = []) {
  SWICPerson.call(this, { name, id, currentSchedule });
  this.wage = wage;
}

Student.prototype = SWICPerson.prototype;
Faculty.prototype = SWICPerson.prototype;

const realStudent = new Student({
  name: "Proton",
  id: "777432123",
  major: "Psych",
});

console.log(realStudent);
console.log(realStudent.greet());

const realProfessor = new Faculty({
  name: "Tim",
  id: "7773332299",
  wage: 50000,
});

Faculty.prototype.greet = function () {
  return `Hi, I'm ${this.name} and I make ${this.wage}`;
};

console.log(realProfessor);
console.log(realProfessor.greet());

Faculty.prototype.raiseWage = function (amount) {
  this.wage += amount;
};

realProfessor.raiseWage(5000);

Faculty.prototype.greet = function () {
  return `And after raise, I make this amount ${this.wage}`;
};

console.log(realProfessor.greet());

// const student = {
// 	name: "Taylor",
// 	id: "12345678",
// 	major: "Software Development",
// 	accumlatedCredits: 40,
// 	currentSchedule: [{
// 		className: "CIS 277",
// 		credits: 3,
// 		// TODO: Use a class to describe 'scheduled' format
// 		// Allows for real date and time
// 		scheduled: {
// 			days: "Th",
// 			time: "6-850P"
// 		}]
// 	}
// }

// const faculty = {
// 	name: "Tim",
// 	id: "22345678",
// 	dept: "CIS",
// 	payGrade: 50000,
// 	currentSchedule: [{
// 		className: "CIS 262",
// 		credits: 3,
// 		// TODO: Use a class to describe 'scheduled' format
// 		// Allows for real date and time
// 		scheduled: {
// 			days: "Wed",
// 			time: "6-850P"
// 		}]
// 	}
// }
