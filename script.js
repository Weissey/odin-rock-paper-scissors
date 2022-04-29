//Initializes score values of both entities
let playerScore = 0;
let computerScore = 0;

//Initializes core variables
let playerSelection;
let computerSelection;

const buttons = document.querySelectorAll('button');
const div = document.querySelector('div');

buttons.forEach(button => button.addEventListener('click', decidePlayer));

const score = playerScore.addEventListener('change', updateScore);

div.textContent = updateScore(); 

function updateScore() {
    return `The score currently is PLAYER: ${playerScore} VS COMPUTER: ${computerScore}`;
}

//Decides playerSelection value, then plays a round. Occurs everytime the player presses a button
function decidePlayer() {
    if (this.classList.value === 'rock') {
        playerSelection = 'rock';
        playRound(playerSelection, computerPlay());
    } else if (this.classList.value === 'paper') {
        playerSelection = 'paper';
        playRound(playerSelection, computerPlay());
    } else {
        playerSelection = 'scissors';
        playRound(playerSelection, computerPlay());
    }
}


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
    console.log(playerSelection, computerSelection);

    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore++;
        } else if (computerSelection === 'scissors') {
            playerScore++;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
        } else if (computerSelection === 'scissors') {
            computerScore++;
        } 
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++;
        } else if (computerSelection === 'paper') {
            playerScore++;
        }
    }
    console.log(playerScore, computerScore);

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