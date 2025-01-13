//Step 2: Write the logic to get the computer choice
//Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.
//Create a new function named getComputerChoice.
//Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
//Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.
//Note: Some learners might think that arrays are necessary for this problem, but they aren’t. If you’re unfamiliar with arrays, don’t worry - they’ll be covered later in the curriculum.

function getComputerChoice() {
    let computerChoice = Math.random() > 1 / 3 ? 'rock' : 2 / 3 ? 'paper' : 'scissors';
    return computerChoice;
}

//Step 3: Write the logic to get the human choice
//Your game will be played by a human player. You will write a function that takes the user choice and returns it.
//Create a new function named getHumanChoice.
//Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
//Hint: Use the prompt method to get the user’s input.
//Test what your function returns by using console.log.

function getHumanChoice() {
    let humanChoice = prompt('Pick rock, paper or scissors');
    humanChoice = String(humanChoice).toLowerCase();

    if (humanChoice != 'rock' && humanChoice != 'paper' && humanChoice != 'scissors') {
        alert('You input is incorrect, repeat');
    }
    else {
        return humanChoice;
    }
}

//Step 4: Declare the players score variables
//Your game will keep track of the players score. You will write variables to keep track of the players score.

//Create two new variables named humanScore and computerScore in the global scope.
//Initialize those variables with the value of 0.

let humanScore = 0;
let computerScore = 0;

//Step 5: Write the logic to play a single round
//Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

//Create a new function named playRound.
//Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
//Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
//Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
//Increment the humanScore or computerScore variable based on the round winner.

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'rock') {
        if (computerChoice == 'rock') {
            console.log('Computer pick Rock');
            console.log('Draw');
        }
        else if (computerChoice == 'paper') {
            console.log('Computer pick paper');
            console.log('You Lose! Paper beats Rock');
            computerScore++;
        }
        else if (computerChoice == 'scisscors') {
            console.log('Computer pick scissors');
            console.log('You Win! Rock beats Scissors');
            humanScore++;
        }
    }
    else if (humanChoice == 'paper') {
        if (computerChoice == 'rock') {
            console.log('Computer picks Rock');
            console.log('You win! Paper beats Rock');
            humanScore++;
        }
        else if (computerChoice == 'paper') {
            console.log('Computer picks paper');
            console.log('Draw');
        }
        else if (computerChoice == 'scissors') {
            console.log('Computer picks scissors');
            console.log('You lose! Scissors beats Paper');
            computerScore++;
        }
    } else if (humanChoice == 'scissors') {
        if (computerChoice == 'rock') {
            console.log('Computer picks Rock');
            console.log('You lose! Rock beats Scissors');
            computerScore++;
        }
        else if (computerChoice == 'paper') {
            console.log('Computer picks Paper');
            console.log('You won! Scissors beats Paper');
            humanScore++;
        }
        else if (computerChoice == 'scissors') {
            console.log('Computer picks scissors');
            console.log('Draw');
        }
    }
}

//Step 6: Write the logic to play the entire game
//Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.

//Create a new function named playGame.
//Move your playRound function and score variables so that they’re declared inside of the new playGame function
//Play 5 rounds by calling playRound 5 times

function playGame() {
    for (let i = 0; i <= 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log('Game over! Your Score: ' + humanScore + '.' + 'Computer score: ' + computerScore);
}
