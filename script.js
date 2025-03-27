const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const clear = document.getElementById("clear");
const autoPlay = document.getElementById("autoplay")

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

// function onRock() {
//   playGame("rock");
// }
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

let isAutoPlaying = false;
let intervalid;

// function onAutoPlay(){
//   if (!isAutoPlaying) {
//     intervalid = setInterval(() =>{
//       const playerMove = compMove();
//       playGame(playerMove);

//   }, 1000);
//   isAutoPlaying = true

//   }else{
//     clearInterval(intervalid);
//  isAutoPlaying = false }
  

//   }


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

// function onClear() {
//   (score.wins = 0), (score.losses = 0), (score.draw = 0);

//   scoreUpdate();

//   document.querySelector(".game-result").innerHTML = " Game reset";

//   localStorage.removeItem("score");
// }

function scoreUpdate() {
  const gameInfo = document.querySelector(".game-info");

  const gameScore = document.querySelector(".game-score");
  gameScore.innerHTML = `
   Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.draw}`;
}

// ------------------------EVENT LISTENERS

rock.addEventListener("click", () => {
  playGame("rock");
} );


paper.addEventListener("click", () => {
  playGame("paper");
});

scissors.addEventListener("click", () => {
  playGame("scissors");
});

document.body.addEventListener("keydown", () => {
  if (event.key === "P" || event.key === "p" ) {
    playGame("paper");
  }else if (event.key === "s" || event.key === "S" ) {
    playGame("scissors");
  }else if (event.key === "r" || event.key === "R" ) {
    playGame("rock");
  }
});


clear.addEventListener("click", () => {
   (score.wins = 0), (score.losses = 0), (score.draw = 0);

  scoreUpdate();

  document.querySelector(".game-result").innerHTML = " Game reset";

  localStorage.removeItem("score");
});

autoPlay.addEventListener("click", () => {
  if (!isAutoPlaying) {
    intervalid = setInterval(() =>{
      const playerMove = compMove();
      playGame(playerMove);

  }, 1000);
  isAutoPlaying = true
 
  }else{
    clearInterval(intervalid);
 isAutoPlaying = false }
});




