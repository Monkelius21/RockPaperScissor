function getComputerChoice(){

    const randomN = Math.floor(Math.random() * 3);
    switch (randomN){
        case 0:
            interrogation.src = "file:///home/odin/repos/RockPaperScissor/images/Rock.png";
            return("Rock");
        case 1:
            interrogation.src = "file:///home/odin/repos/RockPaperScissor/images/Paper.png";
            return("Paper");
        case 2:
            interrogation.src = "file:///home/odin/repos/RockPaperScissor/images/Scissor.png";
            return("Scissor");
    }
}

function playGame(){

    function playRound (humanChoice, computerChoice){
        if(humanChoice == "Rock" && computerChoice == "Rock"){
            message.textContent = "It's a tie";
        } else if(humanChoice == "Rock" && computerChoice == "Paper"){
            message.textContent ="You lose! Paper beats Rock";
            computerScore += 1;
            computerScoreShow.textContent = "Computer : " + computerScore;
        } else if(humanChoice == "Rock" && computerChoice == "Scissor"){
            message.textContent = "You win! Rock beats Scissor";
            playerScore += 1;
            playerScoreShow.textContent = "You : " + playerScore;
        } else if(humanChoice == "Paper" && computerChoice == "Rock"){
            message.textContent = "You win! Paper beats Rock";
            playerScore += 1;
            playerScoreShow.textContent = "You : " + playerScore;
        } else if(humanChoice == "Paper" && computerChoice == "Scissor"){
            message.textContent = "You lose! Scissor beats Paper";
            computerScore += 1;
            computerScoreShow.textContent = "Computer : " + computerScore;
        } else if(humanChoice == "Paper" && computerChoice == "Paper"){
            message.textContent = "It's a tie";
        } else if(humanChoice == "Scissor" && computerChoice == "Rock"){
            message.textContent = "You lose! Rock beats Scissor";
            computerScore += 1;
            computerScoreShow.textContent = "Computer : " + computerScore;
        } else if(humanChoice == "Scissor" && computerChoice == "Paper"){
            message.textContent = "You win! Scissor beats Paper";
            playerScore += 1;
            playerScoreShow.textContent = "You : " + playerScore;
        } else if(humanChoice == "Scissor" && computerChoice == "Scissor"){
            message.textContent = "It' a tie";
        }
    }

    if(humanChoice == "default"){
        alert("Click rock, paper or scissor");
    }
    else {
        let computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
    }
}

function reset(){
    playerScore = 0;
    computerScore = 0;
    humanChoice = "default";
    playerScoreShow.textContent = "You : " + playerScore;
    computerScoreShow.textContent = "Computer : " + computerScore;
    rock.style.backgroundColor = "transparent";
    paper.style.backgroundColor = "transparent";
    scissor.style.backgroundColor = "transparent";
    interrogation.src = "file:///home/odin/repos/RockPaperScissor/images/Interrogation.png";

}

let humanChoice = "default"; 

let message = document.querySelector("#message");

let interrogation = document.querySelector("#interrogation");

let playerScoreShow = document.querySelector("#playerScoreShow");

let computerScoreShow = document.querySelector("#computerScoreShow");

let playerScore = 0;

let computerScore = 0;

const rock = document.querySelector("#rock");
rock.addEventListener("click",function(e) {
    humanChoice = "Rock";
    rock.style.backgroundColor = "white";
    paper.style.backgroundColor = "transparent";
    scissor.style.backgroundColor = "transparent";
});

const paper = document.querySelector("#paper");
paper.addEventListener("click",function(e) {
    humanChoice= "Paper";
    rock.style.backgroundColor = "transparent";
    paper.style.backgroundColor = "white";
    scissor.style.backgroundColor = "transparent";
});

const scissor = document.querySelector("#scissor");
scissor.addEventListener("click",function(e) {
    humanChoice = "Scissor";
    rock.style.backgroundColor = "transparent";
    paper.style.backgroundColor = "transparent";
    scissor.style.backgroundColor = "white";
});

const fightreset = document.querySelector("#fightreset");
fightreset.addEventListener("click", function (e) {
    playGame(humanChoice);
    if(playerScore == 5){
        reset();
        message.textContent = "You won ! Play again.";
    }
    else if (computerScore == 5){
        reset();
        message.textContent = "You lost... Play again.";
    }
});