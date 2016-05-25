PLAYERS.resizePlayers(CANVAS.getDimensions());
PLAYERS.getPlayers();
BALL.setCenter(CANVAS.getDimensions());
BALL.drawBall(CANVAS.getContext());

var interval= setInterval(function(){	
BALL.setPosition(BALL.calculatePosition());
BALL.checkCollision(CANVAS.getDimensions(),PLAYERS.getPlayer1(),PLAYERS.getPlayer2());
PLAYERS.setPlayer2(BALL.getPosition());
PLAYERS.playerMovement(MOUSE.getPosition());
PLAYERS.drawPlayers(CANVAS.getContext(),CANVAS.getDimensions(),PLAYERS.getPlayer1(), PLAYERS.getPlayer2());
BALL.drawBall(CANVAS.getContext());

}, 10);

$('canvas').mousemove(function(event){

				MOUSE.setPosition(event.pageY-$('canvas').offset().top);
				
				PLAYERS.getPlayers();
				
					});
