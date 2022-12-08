//get an input from the player
//assign the player input to a variable
//assign computer player input to a variable
//compare player variable to computer player variable
//print out winner



//randomly generate an input from 3 possible choices for the computer player
const getComputerChoice = function() {
    const computerPlay = Math.floor(Math.random() * 3) + 1;
    if (computerPlay === 1) {
        console.log("Computer plays Rock");
    } else if (computerPlay === 2) {
        console.log("Computer plays Paper");
    } else if (computerPlay === 3) {
        console.log("Computer plays Scissors");
    }
}
getComputerChoice();