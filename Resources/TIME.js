var TIME = (function(){ 

var _maxTime=0;
var _currentTime=0;

var public={


	getMaxTime:function(){
		return _maxTime;
	},
	setMaxTime:function(time){
		_maxTime=time;
	},
	displayMaxTime:function(time){
		$('.maxtime').text(_maxTime);
	},
	getCurrentTime:function(){
		return _currentTime;
	},
	addToCurrentTime:function(time){
		console.log(_currentTime);
		console.log(time);
		_currentTime+=time;
	},
	displayCurrentTime:function(time){

		$('.time').text(_currentTime);
	}

}

return public;


})();