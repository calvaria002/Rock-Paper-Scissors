const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const clear = document.getElementById("clear");

// const score = {
//   wins: 0,
//   losses: 0,
//   draw: 0,
// };

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  draw: 0,
  losses: 0,
};

// if (score === null) {
//   score = {
//     wins: 0,
//     draw: 0,
//     losses: 0,
//   };
// }

function onRock() {
  playGame("rock");
}
function onPaper() {
  playGame("paper");
}
function onScissors() {
  playGame("scissors");
}

function playGame(playerMove) {
  const computerMove = compMove();
  console.log(playerMove);

  let result;
  let gameMove;

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Its a draw";
      // gameMove = "rock";
    } else if (computerMove === "paper") {
      result = "HAHAHA you lost";
    } else if (computerMove === "scissors") {
      result = "Damn you won";
    }
  }

  if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "Damn you won";
    } else if (computerMove === "paper") {
      result = "Its a draw";
    } else if (computerMove === "scissors") {
      result = "HAHAHA you lost";
    }
  }

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "HAHAHA you lost";
    } else if (computerMove === "paper") {
      result = "Damn you won";
    } else if (computerMove === "scissors") {
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

  localStorage.setItem("score", JSON.stringify(score));

  // alert(`${result}
  // Wins: ${score.wins}, Losses:${score.losses}, Ties: ${score.draw}
  // `);

  scoreUpdate();

  document.querySelector(".game-result").innerHTML = `${result}`;

  document.querySelector(
    ".game-move"
  ).innerHTML = ` You <img class="move-icon" src="images/${playerMove}-emoji.png" alt="" />
   Computer <img class="move-icon" src="images/${computerMove}-emoji.png" alt="" />
  `;
}

function compMove() {
  const randomNumber = Math.ceil(Math.random() * 9);
  let computerMove;

  if (randomNumber <= 3) {
    computerMove = "rock";
  } else if (randomNumber > 3 && randomNumber <= 6) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }

  return computerMove;
}

function onClear() {
  (score.wins = 0), (score.losses = 0), (score.draw = 0);

  scoreUpdate();

  document.querySelector(".game-result").innerHTML = " Game reset";

  localStorage.removeItem("score");
}

function scoreUpdate() {
  const gameInfo = document.querySelector(".game-info");

  const gameScore = document.querySelector(".game-score");
  gameScore.innerHTML = `
   Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.draw}`;
}

rock.addEventListener("click", onRock);
paper.addEventListener("click", onPaper);
scissors.addEventListener("click", onScissors);
clear.addEventListener("click", onClear);

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
