//Initializes score values of both entities
let playerScore = 0;
let computerScore = 0;

//Prompts user to enter input
let playerSelection = prompt('Please enter in one of the following choices: rock, paper, or scissors.').toLowerCase();

let computerSelection = computerPlay();

game();

//Randomly returns 'Rock', 'Paper', or 'Scissors' based on getRandomInt function
function computerPlay() {
    let getComputerDecision = Math.floor(Math.random() * 3);
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

//Function to declare who won after 5 rounds
function declareWinOrLose() {
    if (playerScore > computerScore) {
        return 'THE GAME IS OVER! YOU WIN!';
    } else if (playerScore < computerScore) {
        return 'THE GAME IS OVER! YOU LOST!';
    } else if (playerScore === computerScore) {
        return 'THE GAME IS OVER! IT\'S A TIE!';
    }
}

//Function to play 5 rounds and declare winner and loser
//DELETED
