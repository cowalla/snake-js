(function (root){

	var Snakes = root.Snakes = ( root.Snakes || {} );

	var Snake = Snakes.Snake = function (dir, segment){
		this.dir = dir;
		this.segments = segment;
	};

	Snake.MOVEMENT = {
		"n" : [0,-1],
		"s" : [0, 1],
		"e" : [-1, 0],
		"w" : [1, 0]
	};

	Snake.prototype.move = function() {
		var nextSeg = [this.segments[0][0] + Snake.MOVEMENT[this.dir][0],
									this.segments[0][1] + Snake.MOVEMENT[this.dir][1]];
		var prevSeg = this.segments[1];
		if(nextSeg[0] == prevSeg[0] && nextSeg[1] == prevSeg[1]){
			nextSeg = [this.segments[0][0] - Snake.MOVEMENT[this.dir][0],
										this.segments[0][1] - Snake.MOVEMENT[this.dir][1]];
		};
		Snakes.Coords.plus(this.segments, nextSeg);
		return(this.segments.pop());
	};

	Snake.prototype.turn = function(dir) {
		this.dir = dir;
	};


})(this)