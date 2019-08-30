var score = 0;
const scoreKeeper = document.createElement('div');
const currentWinKeeper = document.createElement('div');
function computerPlay(){
  var x = Math.floor((Math.random() * 3) + 1);
  if(x == 1){
    return "rock";
  }else if(x==2){
    return "paper";
  }else{
    return "scissors";
  }
}
function playerPlay(){
  return prompt("Enter rock, paper or scissors").toLowerCase();
}
function playRound(playerSelection, computerSelection){
  if(playerSelection == "rock"){
    if(computerSelection == "rock"){
      currentWinKeeper.textContent = "Draw";
    }
    if(computerSelection =="paper"){
      currentWinKeeper.textContent = "You Lose";
    }
    if(computerSelection =="scissors"){
      currentWinKeeper.textContent = "You Win";
      score += 1;
    }
  }
  if(playerSelection == "paper"){
    if(computerSelection == "rock"){
      currentWinKeeper.textContent = "You Win";
      score += 1;
    }
    if(computerSelection =="paper"){
      currentWinKeeper.textContent = "Draw";
    }
    if(computerSelection =="scissors"){
      currentWinKeeper.textContent = "You Lose";
    }
  }
  if(playerSelection == "scissors"){
    if(computerSelection == "rock"){
      currentWinKeeper.textContent = "You Lose";
    }
    if(computerSelection =="paper"){
      currentWinKeeper.textContent = "You Win";
      score += 1;
    }
    if(computerSelection =="scissors"){
      currentWinKeeper.textContent = "Draw";
    }
  }
  scoreKeeper.innerHTML = '<p> score = ' + score + '</p>';
}
var btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', playRound("rock", computerPlay()));
var btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', playRound("paper", computerPlay()));
var btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', playRound("scissors", computerPlay()));