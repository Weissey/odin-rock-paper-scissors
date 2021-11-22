//Initializes score values of both entities
let playerScore = 0;
let computerScore = 0;

//Determines computer's decision, which then gets assigned to computerPlay later
let getComputerDecision = getRandomInt(3);
//Function to get a random integer between 1, 2, or 3
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

//Prompts user to enter input
let playerSelection = prompt('Please enter in one of the following choices: rock, paper, or scissors.').toLowerCase();

computerSelection = computerPlay();

game();

//Randomly returns 'Rock', 'Paper', or 'Scissors' based on getRandomInt function
function computerPlay() {
    if (getComputerDecision === 0) {
        return 'rock';
    } else if (getComputerDecision === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

//Function to play a single round
function playRound (playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore++;
            return 'You lose! Paper beats rock.';
        } else if (computerSelection === 'scissors') {
            playerScore++;
            return 'You win! Rock beats scissors.';
        } else {
            return 'It\'s a tie';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
            return 'You win! Paper beats rock.';
        } else if (computerSelection === 'scissors') {
            computerScore++;
            return 'You lose! Scissors beats paper.';
        } else {
            return 'It\s a tie.';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++;
            return 'You lose! Rock beats scissors.';
        } else if (computerSelection === 'paper') {
            playerScore++;
            return 'You win! Scissors beats paper.';
        } else {
            return 'It\'s a tie';
        }
    }
}

//Function to display both entities' score
function showScore () {
    return 'The score currently is PLAYER: ' + playerScore + ', VS COMPUTER: ' + computerScore;
}

//Function to play 5 rounds and declare winner and loser
function game () {
    playRound ();
    console.log(playRound(playerSelection, computerSelection));
    console.log(showScore());
    playerSelection = prompt('Please enter in one of the following choices: rock, paper, or scissors.').toLowerCase();
    playRound ();
    console.log(playRound(playerSelection, computerSelection));
    console.log(showScore());
    playerSelection = prompt('Please enter in one of the following choices: rock, paper, or scissors.').toLowerCase();
    playRound ();
    console.log(playRound(playerSelection, computerSelection));
    console.log(showScore());
    playerSelection = prompt('Please enter in one of the following choices: rock, paper, or scissors.').toLowerCase();
    playRound ();
    console.log(playRound(playerSelection, computerSelection));
    console.log(showScore());
    playerSelection = prompt('Please enter in one of the following choices: rock, paper, or scissors.').toLowerCase();
    playRound ();
    console.log(playRound(playerSelection, computerSelection));
    console.log(showScore());
    playerSelection = prompt('Please enter in one of the following choices: rock, paper, or scissors.').toLowerCase();
}