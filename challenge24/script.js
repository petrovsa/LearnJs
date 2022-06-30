///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

"use strict";

class CarCl {
  constructor(speed) {
    this.speed = speed;
  }
  brake() {
    this.speed -= 5;
    return this;
  }
  accelerate() {
    this.speed += 20;
    return this;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(speed, charge) {
    super(speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `'Rivian' going at ${this.speed} km/h, with a charge of ${this.#charge}`
    );
    return this;
  }
}

const rivian = new EVCl(120, 23);
console.log(rivian);
console.log(rivian.accelerate().accelerate().chargeBattery(5).accelerate());
