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

"use strict";

const Car = function (speed) {
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  return this.speed;
};

Car.prototype.brake = function () {
  this.speed -= 5;
  return this.speed;
};

const car = new Car(10);
console.log(car);
console.log(car.accelerate());
console.log(car.brake());

const bmv = new Car(120);
const mercedes = new Car(95);
console.log("Bmv increase", bmv.accelerate());
console.log("Bmv decrease", bmv.brake());
console.log("Bmv decrease", bmv.brake());
console.log("Mercedes increase", mercedes.accelerate());
console.log("Mercedes increase", mercedes.accelerate());
console.log("Mercedes decrease", mercedes.brake());
