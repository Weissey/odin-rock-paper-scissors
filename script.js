//Initializes score values
let playerScore = 0;
let computerScore = 0;

//Initializes core variables
let playerSelection;
let computerSelection;

const buttons = document.querySelectorAll('button');
const div = document.querySelector('div');
const activeDiv = document.querySelector(".activeDiv");

div.textContent = `The score currently is PLAYER: ${playerScore} VS COMPUTER: ${computerScore}`;
activeDiv.textContent = 'Let\'s begin!';

buttons.forEach(button => button.addEventListener('click', decidePlayer));

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
    div.textContent = `The score currently is PLAYER: ${playerScore} VS COMPUTER: ${computerScore}`;
    activeDiv.textContent = 'You chose ' + playerSelection.toUpperCase() + ', your opponent chose ' + computerSelection.toUpperCase();
    
    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
}

//Function to declare who won after 5 rounds
function endGame() {
    if (playerScore > computerScore) {
        div.textContent = 'The game is over, you win.';
    } else if (playerScore < computerScore) {
        div.textContent = 'The game is over, you lost.';
    } else if (playerScore === computerScore) {
        div.textContent = 'The game is over, it\'s a tie.';
    }
    let collection = document.querySelectorAll('button');
    for (const elem of collection) {
        elem.remove();
    }
    activeDiv.remove();
}