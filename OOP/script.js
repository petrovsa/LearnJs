"use strict";
// console.log(Object.prototype);

const Person = function (firstName, birthDay) {
  this.firstName = firstName;
  this.birthDay = birthDay;
};

const Student = function (firstName, birthDay, course) {
  Person.call(this, firstName, birthDay);
  this.course = course;
};
Student.prototype = Object.create(Person.prototype);

const petrov = new Person("Serg", 1978);
const morozov = new Student("Alex", 2005, 2);
console.log(petrov);
console.log(morozov);
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
