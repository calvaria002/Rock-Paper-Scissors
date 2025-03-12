const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function onRock() {
  const rock = Math.floor(Math.random() * 3 + 1);
  let computerMove;

  if (rock === 1) {
    computerMove = rock;
  } else if (rock === 2) {
    computerMove = paper;
  } else if (computerMove === 3) {
    computerMove = scissors;
  }

  if (computerMove === rock) {
    console.log("Computer plays ROCK!!, Its a draw ");
  } else if (computerMove === paper) {
    console.log("Computer plays PAPER!!, HAHAHA you lost ");
  } else {
    console.log("Computer plays SCISSORS!!, Damn you won");
  }
}

function onPaper() {
  const paper = Math.ceil(Math.random() * 3);
  let computerMove;

  if (paper === 1) {
    computerMove = rock;
  } else if (paper === 2) {
    computerMove = paper;
  } else {
    computerMove = scissors;
  }

  if (computerMove === rock) {
    console.log("Computer plays ROCK!!, Damn you won");
  } else if (computerMove === paper) {
    console.log("Computer plays PAPER!!, Its a draw");
  } else {
    console.log("Computer plays SCISSORS!!, HAHAHA you lost");
  }
}

function onScissors() {
  const scissors = Math.ceil(Math.random() * 3);
  let computerMove;

  if (scissors === 1) {
    computerMove = rock;
  } else if (scissors === 2) {
    computerMove = paper;
  } else {
    computerMove = scissors;
  }

  if (computerMove === rock) {
    console.log("Computer plays ROCK!!, HAHAHA you lost ");
  } else if (computerMove === paper) {
    console.log("Computer plays PAPER!!, Damn you won ");
  } else {
    console.log("Computter plays SCISSORS!!, Its a draw ");
  }
}

rock.addEventListener("click", onRock);
paper.addEventListener("click", onPaper);
scissors.addEventListener("click", onScissors);
