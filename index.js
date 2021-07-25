let gamePattern=[];
let varColours=["red","blue","green","yellow"];
let userClickedPattern = [];

var started=false;
var level=0;
// $("div").remove();
$(".start").click(function(){
restart();
if(!started){
$("h1").text("Level "+level)
nextSequence();
started=true;
$(".start").text("Restart").css("font-size","20px");
$(".rules").css("font-size","20px");

}




});
$(".btnn").click(function(){


var userChosenColor=$(this).attr("id");

userClickedPattern.push(userChosenColor);
playsound(userChosenColor);
animatePress(userChosenColor);

checkAnswer(userClickedPattern.length-1);


});

function checkAnswer(lastindex){

if(userClickedPattern[lastindex]===gamePattern[lastindex]){

	if(userClickedPattern.length===gamePattern.length){

		setTimeout(function(){


			nextSequence();
		},800);


	}


}
else{
	$("h1").html("Game Over!<br>Press Restart<br><hr>Your score: "+level);
	playsound("wrong");
	$("body").addClass("redscreen");
	setTimeout(function(){
	$("body").removeClass("redscreen");	
	},400);
	
	restart();
}

}
function restart(){
	$("body").fadeIn(800);
	level=0;
	gamePattern=[];
	started=false;
// 	$(document).keypress(function(){

// if(!started){
// $("h1").text("Level "+level)
// nextSequence();
// started=true;

}









function nextSequence(){

	$(".start").text("Restart").css("font-size","20px");
	userClickedPattern =[];
	level++;
	$("h1").text("Level "+level);
    var random_color=varColours[Math.floor(Math.random()*4)];
    gamePattern.push(random_color);
    $("#"+random_color).fadeIn(100).fadeOut(100).fadeIn(100);

    playsound(random_color);






}
function playsound(random){
var audio=new Audio("sounds/"+random+".mp3");
audio.play();


}

function animatePress(c){
	$("#"+c).addClass("pressed");
	
	setTimeout(function(){
	$("#"+c).removeClass("pressed");	
	},100);
}
function isEqual(a,b)
{

  if(a.length!=b.length)
   return false;
  else
  {
  // comapring each element of array
   for(var i=0;i<a.length;i++)
   if(a[i]!=b[i])
    return false;
    return true;
  }
}

