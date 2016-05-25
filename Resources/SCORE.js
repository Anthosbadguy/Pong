var SCORE = (function(){ 

var _maxScore=0;
var _currentScore=0;

var public={


	getMaxScore:function(){

		return _maxScore;
	},
	setMaxScore:function(score){
		_maxScore=score;
	},
	getCurrentScore:function(){
		return _currentScore;
	},
	setCurrentScore:function(time){
		_currentScore=time*100;
	}

}


return public;
})();