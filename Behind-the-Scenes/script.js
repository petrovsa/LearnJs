"use strict";

var firstName = "Victory";

const serg = {
  firstName: "Sergey",
  year: 1991,
  calcAge: function () {
    console.log(2022 - this.year);
    const isMillanial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillanial();
  },
  great: function () {
    console.log(`Hey ${this.firstName}`);
  },
};

serg.calcAge();

const addNumbers = function (a, b) {
  console.log(arguments);
};

addNumbers(5, 6);

const jesica = {
  lastName: "Petrova",
  age: 22,
};

const jesica2 = Object.assign({}, jesica);
jesica2.lastName = "Murova";
console.log(jesica);
console.log(jesica2);
