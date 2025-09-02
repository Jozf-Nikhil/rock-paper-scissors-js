//   const score = {
//     wins: 0,
//     losses: 0,
//     tie: 0,
//   };

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  tie: 0,
};

updateScoreElement();

//   if (score === null) {
//     score = {
//       wins: 0,
//       losses: 0,
//       tie: 0,
//     };
//   }

//   if (!score) {
//     score = {
//       wins: 0,
//       losses: 0,
//       tie: 0,
//     };
//   }
let isAutoPlaying = false;
let intervalId;

// const autoPlay = () => {

// };
function autoPlay() {
  if (!isAutoPlaying) {
      intervalId = setInterval(() => {
          const playerMove = pickComputerMove();
          playGames(playerMove);
      }, 1000);
      isAutoPlaying = true;
  } else {
      clearInterval(intervalId);
      isAutoPlaying = false;
  }
  
}

function playGames(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      // console.log('Tie.');
      result = "You win.";
    } else if (computerMove === "paper") {
      // console.log('You lose.');
      result = "Tie.";
    } else if (computerMove === "scissors") {
      // console.log(' You win.')
      result = "You lose.";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      // console.log('Tie.');
      result = "You lose.";
    } else if (computerMove === "paper") {
      // console.log('You lose.');
      result = "You win.";
    } else if (computerMove === "scissors") {
      // console.log(' You win.')
      result = "Tie.";
    }
  }

  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.tie += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(
    ".js-moves"
  ).innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
computer`;

  // console.log(result);
  //         alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
  // Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.tie}`);
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.tie}`;
}

function pickComputerMove() {
  // console.log(Math.random());
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;

  // console.log(computerMove);
}