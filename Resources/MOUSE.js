var MOUSE = (function(){

	var verticalPosition=0;
		
	
	var public={
		getVerticalPosition:function(){
			return verticalPosition;
	},
	setVerticalPosition:function(eventY,elementY){
		//Set the vertical position of mouse
		//taking the event Y coordinate and the elementY  coordinate
		verticalPosition=eventY-elementY;
	},

	};

	return public;

})();
