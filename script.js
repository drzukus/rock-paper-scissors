const choices = ["rock", "paper", "scissors"];

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    playerChoice = playerChoice.toLowerCase().trim();

    if (!choices.includes(playerChoice)) {
        console.log("Invalid choice, try again")
        return getPlayerChoice()
    }

    return choices.indexOf(playerChoice)
}


function getComputerChoice() {
    return Math.floor(Math.random() * choices.length);
}


function playRound(pChoiceInt, cChoiceInt) {
    const outcomes = [[0, 2, 1], 
                    [1, 0, 2], 
                    [2, 1, 0],
                    [3, 3, 3]];

    return outcomes[pChoiceInt][cChoiceInt];
}

function game() {
    let playerPts = 0;
    let compPts = 0;
    
    for (let i = 0; i < 5; i++) {
        const pChoiceInt = getPlayerChoice();
        const cChoiceInt = getComputerChoice();

        outcome = playRound(pChoiceInt, cChoiceInt);

        if (outcome == 1) {
            playerPts += 1;
        }

        else if (outcome == 2) {
            compPts += 1;
        }
    }

    if (playerPts > compPts) {
        return `Congratulations, you won ${playerPts} to ${compPts}`
    }
    else if (compPts > playerPts) {
        return `Whoops, you lost ${compPts} to ${playerPts}`
    }
    else {
        return `It's a tie! ${playerPts} to ${compPts} `
    }
}

console.log(game())