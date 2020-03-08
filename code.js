var playerChoice;
var compChoice;
var randomNumber;
var playerWin = 0;
var compWin=0;

function rock(){
    playerChoice = 1;
    randomNumber = Math.floor(Math.random() * 100);
    computerDecide();
}

function paper(){
    playerChoice = 2;
    randomNumber = Math.floor(Math.random() * 100);
    computerDecide();
}

function scissors(){
    playerChoice = 3;
    randomNumber = Math.floor(Math.random() * 100);
    computerDecide();
}

function computerDecide(){
    if(randomNumber <= 33){
        compChoice = 1;
        compare();
    } else if (randomNumber <= 66){
        compChoice = 2;
        compare();
    } else if (randomNumber <=100){
        compChoice = 3;
        compare();
    }
}

function compare(){
    if(playerChoice==compChoice){
        document.getElementById("result").innerHTML = "<h2>It was a tie.</h2>";
    } else if(playerChoice==1 && compChoice ==2){
        document.getElementById("result").innerHTML = "<h2>Paper covers Rock</h2>";
        compWin++;
        document.getElementById("comp-score").innerHTML = compWin;
    }else if(playerChoice==1 && compChoice ==3){
        document.getElementById("result").innerHTML = "<h2>Rock smashes Scissors</h2>";
        playerWin ++;
        document.getElementById("user-score").innerHTML = playerWin;
    }else if(playerChoice==2 && compChoice ==1){
        document.getElementById("result").innerHTML = "<h2>Paper covers Rock</h2>";
        playerWin ++;
        document.getElementById("user-score").innerHTML = playerWin;
    }else if(playerChoice==2 && compChoice ==3){
        document.getElementById("result").innerHTML = "<h2>Scissors cut Paper</h2>";
        compWin++;
        document.getElementById("comp-score").innerHTML = compWin;
    }else if(playerChoice==3 && compChoice ==1){
        document.getElementById("result").innerHTML = "<h2>Rock smashes Scissors</h2>";
        compWin++;
        document.getElementById("comp-score").innerHTML = compWin;
    }else if(playerChoice==3 && compChoice ==2){
        document.getElementById("result").innerHTML = "<h2>Scissors cut Paper</h2>";
        playerWin ++;
        document.getElementById("user-score").innerHTML = playerWin;
    }
}