(function (root) {
	var Snakes = root.Snakes = (root.Snakes || {});

	var View = Snakes.View = function(HTMLelt){
		this.$el=HTMLelt;
	}
	
	var Lose = Snakes.Lose = function(snake, board){
		useSnake = snake.segments;
		sL = useSnake.length
		if( (useSnake[0][0] === 21 || useSnake[0][1] === 21) || (useSnake[0][0] === -1 || useSnake[0][1] === -1)
		|| (useSnake[sL-1][0] === 21 || useSnake[sL-1][1] === 21) || (useSnake[sL-1][0] === -1 || useSnake[sL-1][1] === -1) ){
			return true;
		};
		for(var i=1; i<useSnake.length; i++){
			if(useSnake[i][0] === useSnake[0][0] && useSnake[i][1] === useSnake[0][1]){
				return true;
			};
		}
	}
	

	View.FPS = 4;

	View.prototype.start = function() {
		this.board = new Snakes.Board();
		this.board.setTile();
	 $(document).keydown(handleKeyEvent.bind(this));
		this.timerId = setInterval(this.step.bind(this), 1000/View.FPS);
	}

	View.prototype.step = function() {
		var last_move = this.board.snake.move();
		this.board.render(last_move);
		if(Lose(this.board.snake, this.board)){
			clearInterval(this.timerId);
			alert("You Lost!");
		};
	}

	handleKeyEvent = function(event){
		var pressedKey = event.keyCode;
		console.log(pressedKey);
		switch(pressedKey){
		case 65:
			this.board.snake.turn("n");
			break;
		case 83:
			this.board.snake.turn("w");
			break;
		case 68:
			this.board.snake.turn("s");
			break;
		case 87:
			this.board.snake.turn("e");
			break;
		}
	}


})(this);