"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent =
      "You need to input an integer between 1 and 20";
  } else if (!(guess >= 1 && guess <= 20)) {
    document.querySelector(".message").textContent =
      "You need to input an integer between 1 and 20";
  } else if (guess !== Math.trunc(guess)) {
    document.querySelector(".message").textContent =
      "You need to input an integer between 1 and 20";
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "Correct Number!🎉";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (Number(document.querySelector(".score").textContent) > highScore) {
      highScore = Number(document.querySelector(".score").textContent);
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too high!";
    document.querySelector(".score").textContent -= 1;
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too low!";
    document.querySelector(".score").textContent -= 1;
  }

  if (document.querySelector(".score").textContent === "0") {
    document.querySelector(".message").textContent = "You lost the game";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = "20";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
