///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

////////////////////////////////////
///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

"use strict";

class Car {
  constructor(speed) {
    this.speed = speed;
  }
  s;
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

Car.prototype.accelerate = function () {
  this.speed += 10;
  return this.speed;
};

Car.prototype.brake = function () {
  this.speed -= 5;
  return this.speed;
};

const bmv = new Car(120);
const mercedes = new Car(95);

console.log("Bmv increase", bmv.accelerate());
console.log("Bmv decrease", bmv.brake());

console.log("Mercedes increase", mercedes.accelerate());
console.log("Mercedes decrease", mercedes.brake());

console.log("---");
console.log(bmv.speedUS);
bmv.speedUS = 200;
console.log(bmv);

console.log(mercedes.speedUS);
mercedes.speedUS = 50;
console.log(mercedes);
