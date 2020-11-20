alert("Make sure your zoom level is 100%, or else the page will not display as intended."); // Something I do in every project, its a habit.

 // Initialize the variables in global scope so that both round() and reset() can use them.

var scriptWeapon;
var scriptScore = 0;
var playerScore = 0;

function round(){

    /* Announce the randomizer and userWeapon here so that :-
    1. The script changes its weapon.
    2. It doesnt ask for the weapon on startup.*/

    var randomizer = Math.floor(Math.random() * 3) + 1 ;
    var userWeapon = prompt("Choose your weapon.");

    // Randomizer so that the script randomly chooses rock, paper or scissors.

    if(randomizer == 1){
            scriptWeapon = "rock";
        } else if(randomizer == 2){
            scriptWeapon = "paper";
        } else if(randomizer == 3){
            scriptWeapon = "scissors";
    }

    // If user chooses rock.

    if(scriptWeapon == "rock" && userWeapon == "rock"){
        document.getElementById("result").innerHTML = "Draw!";
    } else if (scriptWeapon == "paper" && userWeapon == "rock"){
        document.getElementById("result").innerHTML = "Script wins!! Paper beats Rock.";
        scriptScore++
    } else if (scriptWeapon == "scissors" && userWeapon == "rock"){
        document.getElementById("result").innerHTML = "You win!! Rock beats Scissors.";
        playerScore++
    }

    // If user chooses paper.

    if(scriptWeapon == "paper" && userWeapon == "paper"){
        document.getElementById("result").innerHTML = "Draw!";
    } else if (scriptWeapon == "scissors" && userWeapon == "paper"){
        document.getElementById("result").innerHTML = "Script wins!! Scissors beat paper.";
        scriptScore++
    } else if (scriptWeapon == "rock" && userWeapon == "paper"){
        document.getElementById("result").innerHTML = "You win!! Paper beats rock.";
        playerScore++
    }

    // If user chooses scissors.

    if(scriptWeapon == "scissors" && userWeapon == "scissors"){
        document.getElementById("result").innerHTML = "Draw!";
    } else if (scriptWeapon == "rock" && userWeapon == "scissors"){
        document.getElementById("result").innerHTML = "Script wins!! Rock beats scissors";
        scriptScore++
    } else if (scriptWeapon == "paper" && userWeapon == "scissors"){
        document.getElementById("result").innerHTML = "You win!! Scissors beat paper";
        playerScore++
    }

    // Make the reset button visible, after the function score has been decided.

    document.getElementById("reset-button").style.display = "block";

    // Display the scores.

    document.getElementById("userScore").innerHTML = "Player's Score " + "<br>" + playerScore;
    document.getElementById("scriptScore").innerHTML = "Script's Score " + "<br>" + scriptScore;

    // First to 3 system.

    if(playerScore == 5){
        document.getElementById("result").innerHTML = "You Won!! Press reset to play again !";
        document.getElementById("play-button").style.display = "none";
    } else if (scriptScore == 5){
        document.getElementById("result").innerHTML = "Script Won!! Press reset to play again !";
        document.getElementById("play-button").style.display = "none";
    }
}

// Reset button function.

function reset(){
        playerScore = 0;
        scriptScore = 0;
        document.getElementById("result").innerHTML = "";
        document.getElementById("reset-button").style.display = "none";
        document.getElementById("userScore").innerHTML = "Player's Score " + "<br>";
        document.getElementById("scriptScore").innerHTML = "Script's Score " + "<br>";
        document.getElementById("play-button").style.display = "block";
}