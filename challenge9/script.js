/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1. Understanding problem

//How to display temperature value from array to string?

// 2. Separate task on subtasks

// - Recive value from array
// - Define element position in array
// - pass value to string

// const temp = [17, 21, 23];
const temp = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = ``;
  for (let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]}C in ${[i + 1]} days `;
  }

  return str;
};

console.log(printForecast(temp));
