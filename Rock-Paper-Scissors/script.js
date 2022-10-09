window.onload = function() {
  $(".choiceButton").click(buttonClick);
}

function buttonClick() {
  if (this.id == "rockButton"){
    userPlay("rock");
  }
  else if (this.id == "paperButton"){
    userPlay("paper");
  }
  else if (this.id == "scissorButton"){
    userPlay("scissors");
  }
}

var userMove, computerMove, lastPlay;

var userPlay = function(move){
  resetHands();

  userMove = move;

  if (move == "rock"){
    rockHand("user");
  }
  else if (move == "paper"){
    paperHand("user");
  }
  else if (move == "scissors"){
    scissorHand("user");
  }

  computerPlay();

}

var resetHands = function(){
  $(".finger").css("width","70px");
  $(".finger").css("height","30px");
  $(".finger").css("border-radius","20px");
  $(".finger").css("left","80px");
  $(".finger").css("transform-origin","0 50%");

  $(".finger-1").css("top","50px");
  $(".finger-1").css("--dif","0px");

  $(".finger-2").css("top","78px");
  $(".finger-2").css("left","84px");
  $(".finger-2").css("--dif","4px");

  $(".finger-3").css("top","106px");
  $(".finger-3").css("--dif","0px");

  $(".finger-4").css("top","134px");
  $(".finger-4").css("height","26px");
  $(".finger-4").css("left","76px");
  $(".finger-4").css("--dif","-8px");

  $("div #user-hand .finger-1").css("transform","rotate(0deg)");
  $("div #user-hand .finger-2").css("transform","rotate(0deg)");

  $("div #computer-hand .finger-1").css("transform","rotate(0deg)");
  $("div #computer-hand .finger-2").css("transform","rotate(0deg)");
}

var computerPlay = function(){
  options = ["rock","paper","scissors"];
  computerMove = options[Math.floor(Math.random() * 3)];

  if ( computerMove == "rock"){
    rockHand("computer");
  }
  else if ( computerMove == "paper"){
    paperHand("computer");
  }
  else if ( computerMove == "scissors"){
    scissorHand("computer");
  }

  console.log(computerMove, userMove);
  if (computerMove == "rock"){
    if (userMove == "rock"){
      lastPlay = "Tied";
    }
    else if (userMove == "paper"){
      lastPlay = "Won";
    }
    else if (userMove == "scissors"){
      lastPlay = "Lost";
    }
  }

  else if (computerMove == "paper"){
    if (userMove == "rock"){
      lastPlay = "Lost";
    }
    else if (userMove == "paper"){
      lastPlay = "Tied";
    }
    else if (userMove == "scissors"){
      lastPlay = "Won";
    }
  }
  else if (computerMove == "scissors"){
    if (userMove == "rock"){
      lastPlay = "Won";
    }
    else if (userMove == "paper"){
      lastPlay = "Lost";
    }
    else if (userMove == "scissors"){
      lastPlay = "Tied";
    }
  }

  console.log(lastPlay);
  $("#message h2").html(lastPlay);

}

var rockHand = function(player){
  
  var userID;
  if (player == "user"){
    userID = "#user-hand"
  }
  else if (player == "computer"){
    userID = "#computer-hand"
  }

  $(userID + ".finger").css("width","70px");
  $(userID + ".finger").css("height","30px");
  $(userID + ".finger").css("border-radius","20px");
  $(userID + ".finger").css("left","80px");
  $(userID + ".finger").css("transform-origin","0 50%");

  $(userID + ".finger-1").css("top","50px");
  $(userID + ".finger-1").css("--dif","0px");

  $(userID + ".finger-2").css("top","78px");
  $(userID + ".finger-2").css("left","84px");
  $(userID + ".finger-2").css("--dif","4px");

  $(userID + ".finger-3").css("top","106px");
  $(userID + ".finger-3").css("--dif","0px");

  $(userID + ".finger-4").css("top","134px");
  $(userID + ".finger-4").css("height","26px");
  $(userID + ".finger-4").css("left","76px");
  $(userID + ".finger-4").css("--dif","-8px");

}

var scissorHand = function(player){

  var userID;
  if (player == "user"){
    userID = "#user-hand"
  }
  else if (player == "computer"){
    userID = "#computer-hand"
  }

  $("div "+ userID +" .finger-1").css("width","130px");
  $("div "+ userID +" .finger-1").css("transform","rotate(-5deg)");
  $("div "+ userID +" .finger-2").css("width","130px");
  $("div "+ userID +" .finger-2").css("transform","rotate(5deg)");

}

var paperHand = function(player){

  var userID;
  if (player == "user"){
    userID = "#user-hand"
  }
  else if (player == "computer"){
    userID = "#computer-hand"
  }

  $("div "+ userID +" .finger").css("left", "124px");
  $("div "+ userID +" .finger").css("left", "calc(124px + var(--dif))");
  $("div "+ userID +" .finger").css("width", "80px");
  $("div "+ userID +" .finger").css("border-left", "0");
  $("div "+ userID +" .finger").css("border-radius", "0 20px 20px 0");

}


if(annyang){
  console.log("We have annyang!");
  var commands = {
    'stone' : function() { userPlay("rock"); },
    'rock' : function() { userPlay("rock"); },
    'paper' : function() { userPlay("paper"); },
    'scissors' : function() { userPlay("scissors"); }
  }

  annyang.addCommands(commands);

  annyang.start();

}