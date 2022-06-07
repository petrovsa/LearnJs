"use strict";

const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const dice = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const currentScoreEl0 = document.getElementById("current--0");
const currentScoreEl1 = document.getElementById("current--1");

const switchPlayar = function () {
  currentScore = 0;
  document.getElementById(`current--${currentPlayer}`).textContent =
    currentScore;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

let scores, currentScore, currentPlayer, playing;

const initGame = function () {
  scores = [0, 0];
  currentScore = 0;
  currentPlayer = 0;
  playing = true;

  dice.classList.add("hidden");

  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player1.classList.remove("player--active");
  player0.classList.add("player--active");
  score0.textContent = 0;
  score1.textContent = 0;
  currentScoreEl0.textContent = 0;
  currentScoreEl1.textContent = 0;
};

//Starting conditions
initGame();

btnRoll.addEventListener("click", function () {
  if (playing) {
    const rollDice = Math.trunc(Math.random() * 6) + 1;
    console.log(rollDice);
    // 2. Display dice roll
    dice.src = `dice-${rollDice}.png`;
    dice.classList.remove("hidden");
    // 3. Check ih roll = 1. If true then switch to next player. If not then game continue
    if (rollDice !== 1) {
      // Add to current score
      currentScore += rollDice;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      switchPlayar();
    }
  } else {
    // Disable button
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. Add active player's score to score
    scores[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent =
      scores[currentPlayer];
    // 2. Check if score >= 100
    //Finish Game
    if (scores[currentPlayer] < 100) {
      // 3. Switch to other player
      switchPlayar();
    } else {
      playing = false;
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove("player--active");
    }
  } else {
    // Disable button
  }
});

btnNew.addEventListener("click", initGame);
