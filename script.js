//Function to get a random integer between 1, 2, or 3
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

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

//Determines computer's decision, which then gets assigned to computerPlay later
let getComputerDecision = getRandomInt(3);