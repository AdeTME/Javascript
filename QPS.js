function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    let ans = getRandomInt(3);
    let shoot;
    if (ans===0){
        shoot = "rock"
    } else if (ans===1){
        shoot = "paper"
    } else {
        shoot = "scissors"
    }
    return shoot;
}

function getHumanChoice(){
    let ans = prompt("rock, paper, scissors?");
    return ans.toLowerCase();
}


function playRound(human, computer){

    if (human === "rock" && computer === "scissors"){
        console.log("rock beats scissors");
        humanScore++;
    } else if (human === "rock" && computer === "paper"){
        console.log("paper beats rock");
        computerScore++;
    } else if (human === "paper" && computer === "rock"){
        console.log("paper beats rock");
        humanScore++;
    } else if (human === "paper" && computer === "scissors"){
        console.log("scissors beats paper");
        computerScore++;
    } else if (human === "scissors" && computer === "rock"){
        console.log("rock beats scissors");
        computerScore++;
    } else if (human === "scissors" && computer === "paper"){
        console.log("scissors beats paper");
        humanScore++;
    } else {
        console.log("tied, no score change");
    }
}

function playGame(rounds){
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i< rounds;i++){
    let computer = getComputerChoice();
    let human = getHumanChoice();
    playRound(human, computer);
    }
    console.log(`Final score — You: ${humanScore}, Computer: ${computerScore}`);
}
playGame(5);