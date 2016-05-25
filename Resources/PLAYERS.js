var PLAYERS = (function(){

var player1={};
var player2={};
public={
	resizePlayers:function(canvasDimensions){


		player1.width= canvasDimensions.W/40;
		player1.height= canvasDimensions.H/5;
		player1.x=0;
		player1.prex=0; 
		player1.y=player1.height*2;
		player1.prey=0;

		player2.width= canvasDimensions.W/40;
		player2.height= canvasDimensions.H/5;
		player2.x=canvasDimensions.W-player2.width;
		player1.prex=0;
		player2.y=player2.height*2;
		player2.prey=0;
	},
	playerMovement:function(mouse){
		player1.prey=player1.y;
		player1.y=mouse-(player1.height/2);
	},

	drawPlayer1:function(canvas,context){
		context.fillStyle="white";
		context.fillRect(player1.x,0,player1.width,canvas.H);
		context.fillStyle="black";
		context.fillRect(player1.x, player1.y, player1.width, player1.height);
	},
	getPlayer1:function(){
		var player1Public=player1;
		return player1Public;
	},
	drawPlayer2:function(canvas, context){
		context.fillStyle="white";
		context.fillRect(player2.x,0,player2.width,canvas.H);
		context.fillStyle="black";
		context.fillRect(player2.x, player2.y, player2.width, player2.height);
	},
	setPlayer2:function(coordinates){
		player2.prey =player2.y;
		player2.y =coordinates.Ycord-(player2.height/2);
	},
	getPlayer2:function(){
		var player2Public=player2;
		return player2Public;
	},
	drawPlayers:function(context, canvasDimensions, player1, player2){

		this.drawPlayer1(canvasDimensions, context);
		this.drawPlayer2(canvasDimensions, context);
	},

	getPlayers:function(){

	}
};

return public;
})();
