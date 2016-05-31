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
		$('.maxtime').text(_maxTime.toFixed(2));
	},
	getCurrentTime:function(){
		return _currentTime;
	},
	resetCurrentTime:function(){
		_currentTime=0;
	},
	addToCurrentTime:function(time){
		_currentTime+=time;
	},
	displayCurrentTime:function(){

		$('.time').text(_currentTime.toFixed(2));
	}

}

return public;


})();