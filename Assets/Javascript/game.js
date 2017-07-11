$(document).ready(function() {
	// this function will return a random # and be reference to generate a random number for the target number and the 4 characters.
function randomNum (min, max) {
  var rnd = Math.floor(Math.random() * max) + min; // this will get a random # and assign to rnd (the varaible). So now "rnd" is equal to the random math equation.
  //document.getElementById("numberGuess").innerHTML = rnd; // We assign rnd to the #numberGuess div
  return rnd; // we return the random number 

};

// *******VARIABLES*******

// code the function of picking a random number, then give that function a name, and then have the targetNumber variable equal that function's variable name.
var targetNumber = randomNum(50, 19); // TargetNumber will get value returned from randomNum 
var bobafett = randomNum(1,12);
var darthvader = randomNum(1,12);
var stormtrooper = randomNum(1,12);
var darthmaul = randomNum(1,12);
var yourscore = 0;
wins = 0;
losses = 0;



// *****FUNCTIONS*****

function startGame() {
targetNumber = randomNum(50, 19); 
bobafett = randomNum(1,12);
darthvader = randomNum(1,12);
stormtrooper = randomNum(1,12);
darthmaul = randomNum(1,12);
yourscore = 0;
wins = 0;
losses = 0;

$("#numberGuess").html(targetNumber);
$("#myScore").html(yourscore);
$("#win").html(losses);
$("#loss").html(losses);

}

$("#darthvader").easyAudioEffects({
   ogg : "./Assets/Audio/light-saber-battle.ogg",
   // mp3 : "./path/to/sound.mp3",
    eventType : "click"
});

$("#darthMaul").easyAudioEffects({
   ogg : "./Assets/Audio/light-saber-battle.ogg",
   // mp3 : "./path/to/sound.mp3",
    eventType : "click"
});

$("#bobafett").easyAudioEffects({
   // ogg : "./Assets/Audio/light-saber-battle.ogg",
   mp3 : "./Assets/Audio/blaster-firing.mp3",
    eventType : "click"
});

$("#stormtrooper").easyAudioEffects({
   // ogg : "./Assets/Audio/light-saber-battle.ogg",
   mp3 : "./Assets/Audio/blaster-firing.mp3",
    eventType : "click"
});


$("#numberGuess").html(targetNumber);
$("img").on("click", function() {
	var darkSide = $(this).attr("id");
// 
	if (darkSide === "bobafett") {
		yourscore += bobafett;
		$("#myScore").html(yourscore)
	}
 	
 	else if (darkSide === "darthMaul") {
 		yourscore += darthmaul;
 		$("#myScore").html(yourscore)
 	}

 	else if (darkSide === "darthvader") {
 		yourscore += darthvader;
 		$("#myScore").html(yourscore)
 	}

 	else {
 		yourscore += stormtrooper;
 		$("#myScore").html(yourscore)
 	}

 	if (yourscore === targetNumber) {
 		wins++;
 		alert("Yes, my master!")
 	}

 	else if (yourscore > targetNumber) {
 		losses++;
 		alert("You should not have come back!")
 	}
 
  });  
});





