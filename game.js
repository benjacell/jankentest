const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
};

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection)    {
        return "Tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }

}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {return "Neither side could vanquish the other."}
    else if (result == "Player") {return `Your ${playerSelection} triumphed over the enemy's ${computerSelection}.`}
    else {return `The enemy's ${computerSelection} defended the land against your ${playerSelection}.`}
}

function getPlayerChoice(){
    let validatedInput = false;
    while (validatedInput == false) {
        const choice = prompt("Rock, Paper, Scissors. Select one.");
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
console.log("Game Startup")
    for (i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        if (checkWinner(playerSelection,computerSelection) == "Player") {
            scorePlayer++;
        }
        else if (checkWinner(playerSelection,computerSelection) == "Computer") {
            scoreComputer++;
        }
}
console.log("Game End")
if (scorePlayer > scoreComputer) {
    console.log("You won the battle.")
}
else if (scorePlayer < scoreComputer) {
    console.log("The enemy (computer) won the battle.")
}  else {
        console.log("The victor could not be decided.")
    }
}


game()