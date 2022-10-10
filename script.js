const choices = ["rock", "paper", "scissors"];
const selectionBtns = document.querySelectorAll("[data-selection]");

selectionBtns.forEach(selectionBtn => {
    selectionBtn.addEventListener("click", e => {
        const selectionName = selectionBtn.dataset.selection;
        game(selectionName);
    })
})


function getComputerChoice() {
    return Math.floor(Math.random() * choices.length);
}


function playRound(pChoiceInt, cChoiceInt) {
    const outcomes = [[0, 2, 1], 
                    [1, 0, 2], 
                    [2, 1, 0]];

    return outcomes[pChoiceInt][cChoiceInt];
}

let playerPts = 0;
let compPts = 0;

function game(playerChoice) {
    if (playerPts == 5 || compPts == 5) {
        return document.getElementById("announcement").innerHTML = winner();
    }

    const pChoiceInt = choices.indexOf(playerChoice);
    const cChoiceInt = getComputerChoice();
    outcome = playRound(pChoiceInt, cChoiceInt);

    if (outcome == 1) {
        playerPts += 1;
        document.getElementById("player_result").innerHTML = playerPts;
    }

    else if (outcome == 2) {
        compPts += 1;
        document.getElementById("comp_result").innerHTML = compPts;
    }
}
    
function winner() {
    if (playerPts > compPts) {
        return `Congratulations, you won ${playerPts} to ${compPts}`
    }
    else if (compPts > playerPts) {
        return `Whoops, you lost ${compPts} to ${playerPts}`
    }
}