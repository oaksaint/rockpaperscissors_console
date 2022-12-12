//compare player variable to computer player variable
//print out winner

// get a case insensitive input from the player, convert the input to lowercase and assign the player input to a variable
const getPlayerChoice = function () {
  let playerPrompt = prompt("Rock, Paper or Scissors?");
  if (typeof playerPrompt == "string") {
    playerPrompt = playerPrompt.toLowerCase();
  }
  if (
    playerPrompt !== "rock" &&
    playerPrompt !== "paper" &&
    playerPrompt !== "scissors"
  ) {
    alert("You have to choose one!");
    getPlayerChoice();
  } else {
    console.log(`You play ${playerPrompt}`);
    return playerPrompt;
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
  return computerSelection;
};

// functions running in order
getPlayerChoice();
getComputerChoice();
