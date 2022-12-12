//compare player variable to computer player variable
//print out winner

// get an input from the player and assign the player input to a variable
const getPlayerChoice = function () {
  let playerPrompt = prompt("Rock, Paper or Scissors?").toLowerCase();
  console.log(playerPrompt);
  return playerPrompt;
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
  return computerSelection;
};

getPlayerChoice();
getComputerChoice();
