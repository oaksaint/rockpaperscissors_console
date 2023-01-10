// declare score variables initial values
let playerScore = 0;
let computerScore = 0;

let playerSelection;
let computerSelection;
let result;

let playerRock = document.querySelector(".rockButton");
let playerPaper = document.querySelector(".paperButton");
let playerScissors = document.querySelector(".scissorsButton");

let resetButton;

// gets player selection as rock and runs the function to get the computer selection, prints both on screen
playerRock.addEventListener("click", function () {
  playerSelection = "rock";
  document.querySelector(".playerChoice").style.visibility = "visible";
  document.querySelector(".playerChoice").textContent = "Rock";
  getComputerChoice();
  playRound(playerSelection, computerSelection);
  whoWon();
  finalScore();
});

// gets player selection as paper and runs the function to get the computer selection, prints both on screen
playerPaper.addEventListener("click", function () {
  playerSelection = "paper";
  document.querySelector(".playerChoice").style.visibility = "visible";
  document.querySelector(".playerChoice").textContent = "Paper";
  getComputerChoice();
  playRound(playerSelection, computerSelection);
  whoWon();
  finalScore();
});

// gets player selection as scissors and runs the function to get the computer selection, prints both on screen
playerScissors.addEventListener("click", function () {
  playerSelection = "scissors";
  document.querySelector(".playerChoice").style.visibility = "visible";
  document.querySelector(".playerChoice").textContent = "Scissors";
  getComputerChoice();
  playRound(playerSelection, computerSelection);
  whoWon();
  finalScore();
});

//function randomly generate an input from 3 possible choices for the computer player
const getComputerChoice = function () {
  computerSelection = Math.floor(Math.random() * 3) + 1;
  if (computerSelection === 1) {
    computerSelection = "rock";
    document.querySelector(".computerChoice").style.visibility = "visible";
    document.querySelector(".computerChoice").textContent = "Rock";
  } else if (computerSelection === 2) {
    computerSelection = "paper";
    document.querySelector(".computerChoice").style.visibility = "visible";
    document.querySelector(".computerChoice").textContent = "Paper";
  } else if (computerSelection === 3) {
    computerSelection = "scissors";
    document.querySelector(".computerChoice").style.visibility = "visible";
    document.querySelector(".computerChoice").textContent = "Scissors";
  }
};

// compare player variable to computer player variable, print and log the winner
const playRound = function (playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    result = "draw";
    document.querySelector(".whoWinsRound").style.visibility = "visible";
    document.querySelector(".whoWinsRound").textContent = "It's a draw!";
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    result = "loss";
    document.querySelector(".whoWinsRound").style.visibility = "visible";
    document.querySelector(
      ".whoWinsRound"
    ).textContent = `You lose, ${computerSelection} beats ${playerSelection}!`;
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    result = "win";
    document.querySelector(".whoWinsRound").style.visibility = "visible";
    document.querySelector(
      ".whoWinsRound"
    ).textContent = `You win, ${playerSelection} beats ${computerSelection}!`;
  }
};

// adds up the scores based on who won the round, or logs no scores if it was a draw
const whoWon = function () {
  if (result === "win") {
    ++playerScore;
    document.querySelector(".playerScore").textContent = playerScore;
  } else if (result === "loss") {
    ++computerScore;
    document.querySelector(".computerScore").textContent = computerScore;
  }
};

// prints out who was the winner based on who had more points in the end
const finalScore = function () {
  if (playerScore >= 5) {
    document.querySelector(".whoWinsGame").style.visibility = "visible";
    document.querySelector(".whoWinsGame").textContent = "You won the game!";
    gameOver();
  } else if (computerScore >= 5) {
    document.querySelector(".whoWinsGame").style.visibility = "visible";
    document.querySelector(".whoWinsGame").textContent = "You lost the game!";
    gameOver();
  }
};

// ends the game, hides the buttons, and show the reset button
const gameOver = function () {
  playerRock.style.display = "none";
  playerPaper.style.display = "none";
  playerScissors.style.display = "none";
  resetButton = document.createElement("button");
  document.querySelector(".buttons").appendChild(resetButton);
  resetButton.textContent = "RESET GAME";
  resetButton.style.fontSize = "100px";
  resetButton.style.padding = "20px";
  resetGame();
};

// resets the game
const resetGame = function () {
  resetButton.addEventListener("click", function () {
    playerScore = 0;
    computerScore = 0;
    document.querySelector(".playerScore").textContent = playerScore;
    document.querySelector(".computerScore").textContent = computerScore;
    playerRock.style.display = "flex";
    playerPaper.style.display = "flex";
    playerScissors.style.display = "flex";
    resetButton.remove();
    document.querySelector(".playerChoice").style.visibility = "hidden";
    document.querySelector(".computerChoice").style.visibility = "hidden";
    document.querySelector(".whoWinsRound").style.visibility = "hidden";
    document.querySelector(".whoWinsGame").style.visibility = "hidden";
  });
};
