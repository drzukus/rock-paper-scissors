const choices = ["rock", "paper", "scissors"];

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    playerChoice = playerChoice.toLowerCase().trim();

    return choices.indexOf(playerChoice)
}

getPlayerChoice()

function getComputerChoice() {
    return Math.floor(Math.random() * choices.length);
}


