const arr = [1, [2, 3], 7];
[a, b, c] = arr;
const arr2 = [a, ...b, c];
console.log(arr2);

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//
//converDirection
const convertDirection = function (str) {
  return str.slice(0, 3).toUpperCase();
};

//separate on 4 pasts
for (const flight of flights.split("+")) {
  // Separate on elements and destructuring
  const [type, from, to, time] = flight.split(";");
  //Display string
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} from ${convertDirection(from)} to ${convertDirection(to)} (${time.replace(
    ":",
    "h"
  )})`.padStart(50);
  console.log(output);
}
