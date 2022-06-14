"use strict";

const booking = [];
const createBooking = function (flightNum, numPassengers = 50, price = 400) {
  const flight = {
    flightNum,
    numPassengers,
    price,
  };
  booking.push(flight);
};
createBooking("A332", 25, 200);
createBooking("A335", 25, 150);
createBooking("A400", 15, 100);
createBooking("A500");
createBooking("A400", undefined, 700);
console.log(booking);

["jonas", "Martha", "Adam"].forEach((el) => console.log(el));

const greet = function (message) {
  return function (name) {
    console.log(`${message} ${name}`);
  };
};

const great2 = (message) => (name) => {
  console.log(`${message} ${name}`);
};
great2("Hy")("Serg");

const rateTax = (tax, value) => value * tax + value;
console.log(rateTax(0.1, 200));

const rateVAT = rateTax.bind(null, 0.23);
console.log(rateVAT(100));

const rateTax2 = function (value) {
  return function (tax) {
    return value * tax + value;
  };
};

console.log(rateTax2(1000)(0.2));

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [], //orders
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};

lufthansa.book(23, "Petrov Sergey");
lufthansa.book(44, "Filipov Alex");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [], //orders
};

const book = lufthansa.book;
// this keyword is undefined because function is regular function
// this function also isn`t method still
// Does NOT work
//book(27, "Petrova Elena");
book.call(eurowings, 27, "Petrova Elena"); // first argument (this points to object)
book.call(lufthansa, 11, "Joel Brown");
console.log(eurowings);

const swees = {
  airline: "Swiss Airlines",
  iataCode: "SA",
  bookings: [], //orders
};

book.call(swees, 74, "Vanessa Wiliams");
console.log(swees);
book.apply(swees, [77, "Robert Hook"]);
console.log(swees);
// Bind Method
const newBook = book.bind(eurowings); // this points on eurowings object always in newBook function
newBook(33, "Kris Tomlin");
console.log(eurowings);

const newSwiss = book.bind(swees, 45);
newSwiss("Angelina");
newSwiss("Mariya");
console.log(swees);

(function () {
  console.log("Hey everybody");
})();

(() => console.log("Hey everybody"))();

const TheSecureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = TheSecureBooking();
booker();
booker();
booker();

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
g();
f();
