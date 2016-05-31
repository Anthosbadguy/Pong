var BALL=(function(){
	preXcord=0;
	preYcord=0;
	Xcord=0;
	Ycord=0;
	radius=10;
	acceleration=0;
	baseXSpeed=-4;
	baseYSpeed=-1.8;
	Xspeed=-4;
	Yspeed=-1.8;
	public={

		setCenter:function(position){
			Xcord=position.W/2;
			Ycord=position.H/2;
		},
		setPosition:function(position){
			Xcord=position.x;
			Ycord=position.y;
		},
		getPosition:function(){
			return {Xcord:Xcord,Ycord:Ycord};
		},
		checkCollision: function(canvas, leftplayer, rightplayer){

	//Collides with left player
			if((Xcord-radius)-(leftplayer.x+leftplayer.width)<=0 && Ycord+radius>=leftplayer.y && Ycord-radius <=leftplayer.y+leftplayer.height)
			{

				
			Xspeed=(-1)*Xspeed;	

			return 1;
			}

//collides with right player
			if((Xcord+radius)-(rightplayer.x)>=0 && Ycord+radius>=rightplayer.y && Ycord-radius <=rightplayer.y+rightplayer.height)
			{

			Xspeed=(-1)*Xspeed;	

			}
//bounces off of top and bottom
			if(Ycord+radius >=canvas.H || Ycord-radius <=0)
			{
				Yspeed=(-1)*Yspeed;
			}

			//reaches right or left goal

			if(Xcord+radius>=canvas.H ||Xcord-radius<=0)
			{
				this.setCenter({W:canvas.W, H:canvas.H});
				return 2;
			}

			return 0;

		},
		increaseSpeed:function(){

			Xspeed*=1.03;
			Yspeed*=1.04;
		},
		getSpeed:function(){
			return;
		},
		setToBaseSpeed:function(){
			Xspeed=baseXSpeed;
			Yspeed=baseYSpeed;

		},
		drawBall:function(context){

		context.beginPath();
      	context.arc(preXcord, preYcord, radius, 0, 2 * Math.PI, false);
      	context.lineWidth = 5;
      	context.strokeStyle = 'white';
      	context.stroke();
		//context.fillStyle='white';
		//context.fillRect(preXcord-7,preYcord-7,14,14);
		context.beginPath();
      	context.arc(Xcord, Ycord, radius, 0, 2 * Math.PI, false);
      	context.lineWidth = 3;
      	context.strokeStyle = 'black';
      	context.stroke();
      	context.fillStyle='black';
      	
		},
		calculatePosition: function(){


			preXcord=this.getPosition().Xcord;
			preYcord=this.getPosition().Ycord;


			var position={x:Xspeed +this.getPosition().Xcord,
			y:Yspeed +this.getPosition().Ycord};

			this.setPosition(position);
			return position;

		}

	};

	return public;
})(); 
