///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const ages = [5, 2, 4, 1, 15, 8, 3];
const ages2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = (arr) =>
  arr
    .map((age) => (age <= 2 ? 2 * age : 4 * age + 16))
    .filter((age) => age >= 18)
    .reduce((acc, age, idx, arr) => acc + age / arr.length, 0);
console.log(calcAverageHumanAge(ages), calcAverageHumanAge(ages2));
