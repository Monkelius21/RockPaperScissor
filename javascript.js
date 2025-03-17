function getComputerChoice(){
    const randomN = Math.floor(Math.random() * 3);
    switch (randomN){
        case 0:
            console.log("Rock");
            return("Rock");
        case 1:
            console.log("Paper");
            return("Paper");
        case 2:
            console.log("Scissor");
            return("Scissor");
        default:
            console.log("Null");
    }
}

function getHumanChoice(){
    let number = prompt("What's your weapon? (Choose a number)\n 0 - Rock\n 1 - Paper\n 2 - Scissor");
    switch (parseInt(number)){
        case 0:
            console.log("Rock");
            return("Rock");
        case 1:
            console.log("Paper");
            return("Paper");
        case 2:
            console.log("Scissor");
            return("Scissor");
        default:
            getHumanChoice();
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice){
        if(humanChoice == "Rock" && computerChoice == "Rock"){
            console.log("It's a tie");
        } else if(humanChoice == "Rock" && computerChoice == "Paper"){
            console.log("You lose! Paper beats Rock");
            computerScore += 1;
        } else if(humanChoice == "Rock" && computerChoice == "Scissor"){
            console.log("You win! Rock beats Scissor");
            humanScore += 1;
        } else if(humanChoice == "Paper" && computerChoice == "Rock"){
            console.log("You win! Paper beats Rock");
            humanScore += 1;
        } else if(humanChoice == "Paper" && computerChoice == "Scissor"){
            console.log("You lose! Scissor beats Paper");
            computerScore += 1;
        } else if(humanChoice == "Paper" && computerChoice == "Paper"){
            console.log("It's a tie");
        } else if(humanChoice == "Scissor" && computerChoice == "Rock"){
            console.log("You lose! Rock beats Scissor");
            computerScore += 1;
        } else if(humanChoice == "Scissor" && computerChoice == "Paper"){
            console.log("You win! Scissor beats Paper");
            humanScore += 1;
        } else if(humanChoice == "Scissor" && computerChoice == "Scissor"){
            console.log("It' a tie");
        }
    }

/*    while (humanScore < 5 && computerScore < 5){
        playRound(getHumanChoice(),getComputerChoice());
    }


    if (humanScore === 5){
        console.log("You won!");
    } else {
        console.log("You lost!");
    }
*/
}