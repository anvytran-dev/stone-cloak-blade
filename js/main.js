var botScore = 0,
	playerScore = 0;
document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("scissors").onclick=playerThrowsScissors
document.getElementById("paper").onclick=playerThrowsPaper;

function playerThrowsRock(){
	getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
	console.log(botsWeapon)
}
function playerThrowsScissors(){
	getRandomWeapon();
	checkWhoWon(botsWeapon, "scissors");
	console.log(botsWeapon)
}
function playerThrowsPaper(){
	getRandomWeapon();
	checkWhoWon(botsWeapon, "paper");
	console.log(botsWeapon)
}
function getRandomWeapon(){
	var randomNumber=Math.random();

	if(randomNumber < .3333){
		botsWeapon="scissors";
	}
	else if(randomNumber < .6666){
		botsWeapon="paper";
	}
	else {
		botsWeapon = "rock";
	}

	return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("Tie!");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Hehe, Ori wins!");
}
function increasePlayerScore(){
	playerScore += 1;
	document.querySelector('#humanScore').innerHTML = playerScore;
	displayCompleteMessage("You win!");

}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}

document.querySelector('.secPlay').addEventListener('click', playGame)

function playGame(){
	document.querySelector('.secIntr').style.display = "none"
	document.querySelector('main').style.display = "flex"
}