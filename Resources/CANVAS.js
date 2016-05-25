var CANVAS = (function(){
var offset= $('canvas').offset();
var context= $('canvas')[0].getContext("2d");
var width= $('canvas').width();
var height= $('canvas').height();
var public= {

	getContext:function(){

		return context;
	},
	getWidth:function(){

		return width;
	},
	getHeight:function(){

		return height;
	},
	getDimensions:function(){

		return {W:width, H:height};
	},
	getOffset:function(){
		return offset;
	}
}

return public;
})();
