const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const clear = document.getElementById("clear");

const score = {
  wins: 0,
  losses: 0,
  draw: 0,
};

function onRock() {
  playGame(rock);
}
function onPaper() {
  playGame(paper);
}
function onScissors() {
  playGame(scissors);
}

function playGame(playerMove) {
  const computerMove = compMove();

  let result;

  if (playerMove === rock) {
    if (computerMove === rock) {
      result = "Its a draw";
    } else if (computerMove === paper) {
      result = "HAHAHA you lost";
    } else {
      result = "Damn you won";
    }
  }

  if (playerMove === paper) {
    if (computerMove === rock) {
      result = "Damn you won";
    } else if (computerMove === paper) {
      result = "Its a draw";
    } else {
      result = "HAHAHA you lost";
    }
  }

  if (playerMove === scissors) {
    if (computerMove === rock) {
      result = "HAHAHA you lost";
    } else if (computerMove === paper) {
      result = "Damn you won";
    } else {
      result = "Its a draw";
    }
  }

  if (result === "Damn you won") {
    score.wins += 1;
  } else if (result === "Its a draw") {
    score.draw += 1;
  } else if ("HAHAHA you lost") {
    score.losses += 1;
  }
  alert(`${result}
  Wins: ${score.wins}, Losses:${score.losses}, Ties: ${score.draw}`);
}

function compMove() {
  const randomNumber = Math.ceil(Math.random() * 3);
  let computerMove;

  if (randomNumber === 1) {
    computerMove = rock;
  } else if (randomNumber === 2) {
    computerMove = paper;
  } else {
    computerMove = scissors;
  }

  return computerMove;
}

function onClear() {
  (score.wins = 0), (score.losses = 0), (score.draw = 0);
  alert(`Game Reset
    Wins: ${score.wins}, Losses:${score.losses}, Ties: ${score.draw}`);
}

// function onRock() {
//   const rock = Math.floor(Math.random() * 3 + 1);
//   let computerMove;

//   if (rock === 1) {
//     computerMove = rock;
//   } else if (rock === 2) {
//     computerMove = paper;
//   } else if (computerMove === 3) {
//     computerMove = scissors;
//   }

//   if (computerMove === rock) {
//     console.log("Computer plays ROCK!!, Its a draw ");
//   } else if (computerMove === paper) {
//     console.log("Computer plays PAPER!!, HAHAHA you lost ");
//   } else {
//     console.log("Computer plays SCISSORS!!, Damn you won");
//   }
// }

// function onPaper() {
//   const paper = Math.ceil(Math.random() * 3);
//   let computerMove;

//   if (paper === 1) {
//     computerMove = rock;
//   } else if (paper === 2) {
//     computerMove = paper;
//   } else {
//     computerMove = scissors;
//   }

//   if (computerMove === rock) {
//     console.log("Computer plays ROCK!!, Damn you won");
//   } else if (computerMove === paper) {
//     console.log("Computer plays PAPER!!, Its a draw");
//   } else {
//     console.log("Computer plays SCISSORS!!, HAHAHA you lost");
//   }
// }

// function onScissors() {
//   const scissors = Math.ceil(Math.random() * 3);
//   let computerMove;

//   if (scissors === 1) {
//     computerMove = rock;
//   } else if (scissors === 2) {
//     computerMove = paper;
//   } else {
//     computerMove = scissors;
//   }

//   if (computerMove === rock) {
//     console.log("Computer plays ROCK!!, HAHAHA you lost ");
//   } else if (computerMove === paper) {
//     console.log("Computer plays PAPER!!, Damn you won ");
//   } else {
//     console.log("Computter plays SCISSORS!!, Its a draw ");
//   }
// }

rock.addEventListener("click", onRock);
paper.addEventListener("click", onPaper);
scissors.addEventListener("click", onScissors);
clear.addEventListener("click", onClear);
