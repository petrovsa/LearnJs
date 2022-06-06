"use strict";
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  let inputField = Number(document.querySelector(".guess").value);

  if (!inputField) {
    document.querySelector(".message").textContent = "Input value";
  } else if (inputField === number) {
    document.querySelector(".message").textContent = "Correct number";
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "#60b347";
  } else if (inputField > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "It is your lost game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (inputField < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "It is your lost game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
});
