/*
Steven wonts to build a very simple tip calculator
for whenewer he goes eating in a resturant. In this
country, it's usual to tip 15% if the bill value is
between 50 and 300. If the value is different, the tip is 20%.

1. Your task is calculate the tip, depending on
the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement
(If it's easer for you, you can start with an if/
else statement, and then try to convert it to a
ternary operator)
2. Print a string to the console containing the bill
value, the tip, and the final value (bill + tip) via template.

TEST DATA: Test for bill values 275, 40 430
*/

const billValue = 430;
const tip = (300 >= billValue) && (billValue >= 50) ? billValue*0.15 : billValue*0.20;
const total = billValue + tip;

console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${total}`);