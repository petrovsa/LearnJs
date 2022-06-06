"use strict";

const number = Math.trunc(Math.random() * 20) + 1;
const showMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  let inputField = Number(document.querySelector(".guess").value);

  if (!inputField) {
    showMessage("Input value");
  } else if (inputField === number) {
    showMessage("Correct number");

    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (inputField !== number) {
    if (score > 1) {
      showMessage(inputField > number ? "Too high" : "Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      showMessage("It is your lost game");

      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  score = 20;
  document.querySelector(".score").textContent = score;
  showMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
});
