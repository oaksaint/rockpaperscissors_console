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
    console.log(`You play ${playerSelection}`);
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
  console.log(`Computer plays ${computerSelection}`);
  window.computerSelection = computerSelection;
};

//compare player variable to computer player variable and log the winner
const playRound = function () {
  if (playerSelection == "rock" && computerSelection == "rock") {
    console.log("It's a draw!");
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    console.log("You lose!");
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log("You win!");
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("You win!");
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    console.log("It's a draw!");
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    console.log("You lose!");
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    console.log("You lose!");
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log("You win!");
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    console.log("It's a draw!");
  }
};

// functions running in order
getPlayerChoice();
getComputerChoice();
playRound();
