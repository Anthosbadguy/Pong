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
	displayMaxScore:function(){

		$('.maxscore').text(_maxScore);
	},
	getCurrentScore:function(){
		return _currentScore;
	},
	setCurrentScore:function(time){
		_currentScore = parseInt(time*20);
	},
	displayCurrentScore:function(){

		$('.score').text(_currentScore);
	}

}


return public;
})();