PLAYERS.resizePlayers(CANVAS.getDimensions());
PLAYERS.getPlayers();
BALL.setCenter(CANVAS.getDimensions());
BALL.drawBall(CANVAS.getContext());

var interval= setInterval(function(){	
BALL.setPosition(BALL.calculatePosition());

switch(BALL.checkCollision(CANVAS.getDimensions(),PLAYERS.getPlayer1(),PLAYERS.getPlayer2())){

case 0:
	//Experimental time code
	TIME.addToCurrentTime(0.01);
	SCORE.setCurrentScore(TIME.getCurrentTime());
break;
case 1:
	console.log("increase speed");
	BALL.increaseSpeed();
break;
case 2:
	if(TIME.getMaxTime()<TIME.getCurrentTime())
	{
		TIME.setMaxTime(TIME.getCurrentTime());
		SCORE.setMaxScore(SCORE.getCurrentScore());
	}
	//BALL.setToBaseSpeed();
	TIME.resetCurrentTime();
break;


}


SCORE.displayCurrentScore();
SCORE.displayMaxScore();
TIME.displayCurrentTime();
TIME.displayMaxTime();
PLAYERS.setPlayer2(BALL.getPosition());
PLAYERS.playerMovement(MOUSE.getVerticalPosition());
PLAYERS.drawPlayers(CANVAS.getContext(),CANVAS.getDimensions(),PLAYERS.getPlayer1(), PLAYERS.getPlayer2());
BALL.drawBall(CANVAS.getContext());




}, 10);


$('canvas').mousemove(function(event){

				MOUSE.setVerticalPosition(event.pageY ,CANVAS.getOffset().top);
				
					});
