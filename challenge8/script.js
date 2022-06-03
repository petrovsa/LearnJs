/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];
const calcTip = (billValue) => {
    const tip = (300 >= billValue) && (billValue >= 50) ? billValue*0.15 : billValue*0.20;
    tips.push(tip);
    const totalCalc = billValue + tip;
    total.push(totalCalc);
    return tip, totalCalc;
}

for (let i = 0; i < bills.length; i++ ) {
    calcTip(bills[i]);
}

console.log(tips);
console.log(total);

const calcAverage = (arr) => {
// let average = 0;
let sum = 0;
for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
}
const average = sum/arr.length;
return average;
}

console.log(calcAverage(total));

// (10) [4.4, 44.25, 26.4, 88, 7.4, 15.75, 2, 220, 12.9, 7.8]
// (10) [26.4, 339.25, 202.4, 528, 44.4, 120.75, 12, 1320, 98.9, 59.8]

//BONUS
//275.19