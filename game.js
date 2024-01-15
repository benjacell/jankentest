function getRandomInInclusive(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1) + min);
}
function compMove() {
    const ans = getRandomInInclusive(1, 3);
    if (ans == 1) {
    return "Rock"
    }
    else if (ans == 2) {
        return "Paper"
    }
    else {return "Scissors"};
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {return "It's a tie."};
        else if (playerSelection == "Rock") && (computerSelection == "Scissors") ||
        (playerSelection = "Paper") && (computerSelection = "Rock") ||
        (playerSelection == "Scissors") && (computerSelection = "Paper")
        return `You win; Your ${playerSelection} triumphed over the oppoment's ${computerSelection}`
}
computerSelection = compMove;