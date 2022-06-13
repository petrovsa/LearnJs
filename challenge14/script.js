///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
first_name
Some_Variable 
calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

//1.
const convertVariable = function () {
  const fullString = document.getElementById("w3review").value;
  const arrayOfVariables = fullString.trim().split("\n");
  let splitVariable = [];
  let newVariables = [];
  for (const varName of arrayOfVariables) {
    splitVariable = varName.toLowerCase().split("_");
    splitVariable[1] =
      splitVariable[1][0].toUpperCase() + splitVariable[1].slice(1);
    newVariables.push(splitVariable.join(""));
  }
  console.log(newVariables);
  for (const [idx, finalName] of newVariables.entries()) {
    console.log(finalName + "  ", "✅".repeat(idx + 1));
  }
};
