// declare score variables initial values
let playerScore = 0;
let computerScore = 0;

// get a case insensitive input from the player, convert the input to lowercase and assign the player input to a variable
const getPlayerChoice = function () {
  let playerSelection = prompt("Rock, Paper or Scissors?");
  if (typeof playerSelection == "string") {
    playerSelection = playerSelection.toLowerCase();
  }
  if (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  ) {
    alert("You have to choose one!");
    getPlayerChoice();
  } else {
    window.playerSelection = playerSelection;
  }
};

//randomly generate an input from 3 possible choices for the computer player
const getComputerChoice = function () {
  let computerSelection = Math.floor(Math.random() * 3) + 1;
  if (computerSelection === 1) {
    computerSelection = "rock";
  } else if (computerSelection === 2) {
    computerSelection = "paper";
  } else if (computerSelection === 3) {
    computerSelection = "scissors";
  }
  window.computerSelection = computerSelection;
};

//compare player variable to computer player variable, print and log the winner
const playRound = function (playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "rock") {
    console.log("It's a draw!");
    let result = "draw";
    window.result = result;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    console.log("You lose! Paper beats Rock!");
    let result = "loss";
    window.result = result;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    let result = "win";
    window.result = result;
    console.log("You win! Rock beats Scissors!");
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    let result = "win";
    window.result = result;
    console.log("You win! Paper beats Rock!");
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    let result = "draw";
    window.result = result;
    console.log("It's a draw!");
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    let result = "loss";
    window.result = result;
    console.log("You lose! Scissors beats Paper!");
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    let result = "loss";
    window.result = result;
    console.log("You lose! Rock beats Scissors!");
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    let result = "win";
    window.result = result;
    console.log("You win! Scissors beats Paper!");
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    let result = "draw";
    window.result = result;
    console.log("It's a draw!");
  }
};

// adds up the scores based on who won the round, or logs no scores if it was a draw
const whoWon = function () {
  if (result === "win") {
    ++playerScore;
    console.log(`Your score: ${playerScore} | Computer score ${computerScore}`);
  } else if (result === "loss") {
    ++computerScore;
    console.log(
      `Your score: ${playerScore} | Computer score: ${computerScore}`
    );
  } else {
    console.log(`Your score: ${playerScore} | Computer score ${computerScore}`);
  }
};

// prints out who was the winner based on who had more points in the end
const finalScore = function () {
  if (playerScore > computerScore) {
    console.log(
      `You have won the game! Final score ${playerScore}x${computerScore}.`
    );
  } else if (computerScore > playerScore) {
    console.log(
      `You have lost the game! Final score ${computerScore}x${playerScore}.`
    );
  } else {
    console.log(
      `The game ended in a draw! Final score ${computerScore}x${playerScore}.`
    );
  }
};

// for loop to run all rounds and give out a final score once it has run
for (let i = 0; i < 5; i++) {
  getPlayerChoice();
  getComputerChoice();
  console.log(
    `You play ${playerSelection} and the computer plays ${computerSelection}`
  );
  playRound(playerSelection, computerSelection);
  whoWon();
}
finalScore();
