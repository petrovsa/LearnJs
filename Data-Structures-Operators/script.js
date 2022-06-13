"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  pizzaIngridients: function (mainIngridients, ...oterIngridients) {
    console.log(mainIngridients, oterIngridients);
  },
};
const [sterter, main] = restaurant.order(0, 2);
console.log(sterter, main);

// const nested = [1, 5, [9, 0]];
// const [a, b, [c, d]] = nested;
// console.log(a, b, c, d);

// const { name, categories, openingHours } = restaurant;
// console.log(name, categories, openingHours);

// let a = 111;
// let b = 999;
// const obj = { a: 1, b: 2, c: 3 };
// ({ a, b } = obj);
// console.log(a, b);

// const arr2 = [1, 2, 3];
// const arr3 = [...arr2, 5, 6];
// console.log(arr3);

// const mainMenuCopy = [...restaurant.mainMenu];
// const menu = [...restaurant.starterMenu, ...mainMenuCopy];
// console.log(menu);

// const str = "Petrov";
// const full = [...str, " ", "S"];
// console.log(full);

//Rest
const arr = [1, 2, 3, 4, 5];
const [a, b, ...arr2] = arr;
console.log(arr2);

const addNumbers = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

const x = [10, 11, 12]; //33

console.log(addNumbers(1, 2)); //3
console.log(addNumbers(1, 2, 3, 4, 5)); //15
console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9)); //45
console.log(addNumbers(...x)); //33

restaurant.pizzaIngridients("oregano", "calarano", "italiano");

//Short circuits ||
// restaurant.greatMenu = 23;
// const result = restaurant.greatMenu ? restaurant.greatMenu : 10;
// console.log(result);

// const result2 = restaurant.greatMenu || 15;
// console.log(result2);

// restaurant.greatMenu = false;
// const result3 = restaurant.greatMenu ?? 77;
// console.log(result3);

// New operators in ES2021

const rest1 = {
  name: "Carry",
  numberGuests: 20,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovani Gatuzo",
};

// rest2.numberGuests = rest2.numberGuests ?? 10;
// rest1.owner = rest1.owner || "Santi Clokori";

// rest2.numberGuests ||= 10; // instead reapiting
// rest1.owner ||= "Santi Clokori";

// console.log(rest1);
// console.log(rest2);

const days = ["mon", "thu", "widn", "tu", "fri", "sat", "sun"];
for (let day of days) {
  console.log(restaurant.openingHours[day]?.open ?? "closed");
}

console.log(restaurant.order?.(0, 1) ?? "Method upsent");
console.log(restaurant.orderMy?.(0, 1) ?? "Method upsent");

for (const d of Object.keys(restaurant.openingHours)) {
  console.log(d);
}

for (const d2 of Object.values(restaurant.openingHours)) {
  console.log(d2);
}
const entries = Object.entries(restaurant.openingHours);

//Destructuring of Objects
for (const [key, { open, close }] of entries) {
  console.log(`I have ${key} with value open: ${open} and close: ${close}`);
}

//Set
const orderSet = new Set(["Pizza", "Garling", "Pizza"]);
console.log(orderSet);

orderSet.add("Pasta");
orderSet.add("Pasta");
console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has("Buter"));
console.log(orderSet.has("Pizza"));
orderSet.delete("Garling");
console.log(orderSet);
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) {
  console.log(order);
}

let arrMy = [1, 2, 3, 2, 4, 3, 5, 6, 7, 8, 7, 6, 0];
console.log(arrMy);
const arrSet = [...new Set(arrMy)];
console.log(arrSet);
//Ьфз

const city = new Map();
city.set("name", "Mukachevo");
city.set(1, "Mira");
city.set(2, "Duhnovucha");

console.log(city.set(3, "Chehova"));
city
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23);
console.log(city);

console.log(city.get("categories"));

const languages = new Map([
  ["question", "How do you prefer programming Language&"],
  [1, "Java"],
  [2, "JavaScript"],
  [3, "C++"],
  [4, "Python"],
  ["correct", 2],
  [true, "Correct"],
  [false, "Wrong"],
]);

console.log(languages);

//Conver Object to Map

// const opening = new Map(Object.entries(restaurant.openingHours));
// console.log(opening);

console.log(languages.get("question"));

for (const [key, value] of languages) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

const answer = Number(prompt("How is number of js?"));
console.log(languages.get(languages.get("correct") === answer));

//Conver Map to Array
const langArray = [...languages];
console.log(langArray);
