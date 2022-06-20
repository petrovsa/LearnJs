const movements = [200, -200, 340, -300, -20, 50, 400, -460];

//map method
const euroToUsd = 1.1;
const movementsUsd = movements.map(function (mov) {
  return Math.trunc(mov * euroToUsd);
});
console.log(movements);
console.log(movementsUsd);

// arrow function
const movementsUsd2 = movements.map((mov) => Math.trunc(mov * euroToUsd));
const deposites = movements.filter((mov) => mov > 0);
const withdrawals = movements.filter((mov) => mov < 0);

console.log(movements);
console.log(movementsUsd2);
console.log(deposites);
console.log(withdrawals);

const maximum = movements.reduce(
  (max, mov) => Math.max(max, mov),
  movements[0]
);
console.log(maximum);

const arr = [1, 2, [[3, 4], [5, 6], 7], 8, 9];
const result = arr.flatMap((el) => el).flat();
console.log(result);

movements.sort((a, b) => a - b);

console.log(movements);

const x = new Array(7);
x.fill((Math.random() + 1).toFixed(2));
console.log(x);

const y = Array.from({ length: 7 }, () => (Math.random() + 1).toFixed(2));
console.log(y);
