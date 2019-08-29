var score = 0;
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
      console.log("Draw");
    }
    if(computerSelection =="paper"){
      console.log("Player loses");
    }
    if(computerSelection =="scissors"){
      console.log("Player wins");
      score += 1;
    }
  }
  if(playerSelection == "paper"){
    if(computerSelection == "rock"){
      console.log("Player wins");
      score += 1;
    }
    if(computerSelection =="paper"){
      console.log("Draw");
    }
    if(computerSelection =="scissors"){
      console.log("Player loses");
    }
  }
  if(playerSelection == "scissors"){
    if(computerSelection == "rock"){
      console.log("Player loses");
    }
    if(computerSelection =="paper"){
      console.log("Player wins");
      score += 1;
    }
    if(computerSelection =="scissors"){
      console.log("Draw");
    }
  }
  console.log("Score = " + score)
}
playRound(playerPlay(), computerPlay());
playRound(playerPlay(), computerPlay());
playRound(playerPlay(), computerPlay());
playRound(playerPlay(), computerPlay());
playRound(playerPlay(), computerPlay());