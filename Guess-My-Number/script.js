"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct number";
// document.querySelector(".number").textContent = 20;
// document.querySelector(".score").textContent = 20;
// document.querySelector(".guess").value = 2;
const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  let inputField = Number(document.querySelector(".guess").value);

  if (!inputField) {
    document.querySelector(".message").textContent = "Input value";
  } else if (inputField === number) {
    document.querySelector(".message").textContent = "Correct number";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = number;
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
