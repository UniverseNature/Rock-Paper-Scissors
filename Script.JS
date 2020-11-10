alert("Make sure your zoom level is 100%, or else the page will not display as intended.");

function round(){
    var randomizer = Math.floor(Math.random() * 3) + 1 ;
    var scriptWeapon;
    var userWeapon = prompt("Choose your weapon.");

    if(randomizer == 1){
            scriptWeapon = "rock";
        } else if(randomizer == 2){
            scriptWeapon = "paper";
        } else if(randomizer == 3){
            scriptWeapon = "scissors";
    }

    if(scriptWeapon == "rock" && userWeapon == "rock"){
        document.getElementById("result").innerHTML = "Draw!";
    } else if (scriptWeapon == "paper" && userWeapon == "rock"){
        document.getElementById("result").innerHTML = "Script wins!! Paper beats Rock.";
    } else if (scriptWeapon == "scissors" && userWeapon == "rock"){
        document.getElementById("result").innerHTML = "You win!! Rock beats Scissors.";
    }

    if(scriptWeapon == "paper" && userWeapon == "paper"){
        document.getElementById("result").innerHTML = "Draw!";
    } else if (scriptWeapon == "scissors" && userWeapon == "paper"){
        document.getElementById("result").innerHTML = "Script wins!! Scissors beat paper.";
    } else if (scriptWeapon == "rock" && userWeapon == "paper"){
        document.getElementById("result").innerHTML = "You win!! Paper beats rock.";
    }

    if(scriptWeapon == "scissors" && userWeapon == "scissors"){
        document.getElementById("result").innerHTML = "Draw!";
    } else if (scriptWeapon == "rock" && userWeapon == "scissors"){
        document.getElementById("result").innerHTML = "Script wins!! Rock beats scissors";
    } else if (scriptWeapon == "paper" && userWeapon == "scissors"){
        document.getElementById("result").innerHTML = "You win!! Scissors beat paper";
    }
}