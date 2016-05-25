PLAYERS.resizePlayers(CANVAS.getDimensions());
PLAYERS.getPlayers();
BALL.setCenter(CANVAS.getDimensions());
BALL.drawBall(CANVAS.getContext());

var interval= setInterval(function(){	
BALL.setPosition(BALL.calculatePosition());
BALL.checkCollision(CANVAS.getDimensions(),PLAYERS.getPlayer1(),PLAYERS.getPlayer2());
PLAYERS.setPlayer2(BALL.getPosition());
PLAYERS.playerMovement(MOUSE.getVerticalPosition());
PLAYERS.drawPlayers(CANVAS.getContext(),CANVAS.getDimensions(),PLAYERS.getPlayer1(), PLAYERS.getPlayer2());
BALL.drawBall(CANVAS.getContext());

//Experimental time code
TIME.addToCurrentTime(0.01);
TIME.displayCurrentTime(TIME.getCurrentTime());
}, 10);

$('canvas').mousemove(function(event){

				MOUSE.setVerticalPosition(event.pageY ,CANVAS.getOffset().top);
				
					});
