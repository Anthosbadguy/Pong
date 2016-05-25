var MOUSE = (function(){

	var mouseposition=0;
		
	
	var public={
		getPosition:function(){
			return mouseposition;
	},
	setPosition:function(position){
		mouseposition=position;
	},

	};

	return public;

})();
