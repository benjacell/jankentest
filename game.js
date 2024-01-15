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
    else {return "Scissors"}
}
function outcome(playerSelection, computerSelection) {
    if (String.toLowerCase(playerSelection)) == (String.toLowerCase(computerSelection)) {return "Your weapons were too evenly matched. Tie."}
    
}