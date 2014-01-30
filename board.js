(function(root){
	var Snakes = root.Snakes = ( root.Snakes || {} );

	var Board = Snakes.Board = function () {
		this.snake = new Snakes.Snake("n", [[5,5],[5,6],[5,7]]);
		this.matrix = boardMaker();
	}

	Board.DIMENSION = 20;

	var appleGenerator = function (matrix) {
		var apples = 0;
		for(i=0;i<matrix.length; i++){
			for(j=0;j<matrix.length; j++){
				if(matrix[i][j] === "A"){
					apples += 1
				};
			};
		};
		flag = true;
		if(apples < 3){
			while(flag){
				var coords = [Math.floor(Math.random()*Board.DIMENSION), 
					Math.floor(Math.random()*Board.DIMENSION)]
				if(matrix[coords[0]][coords[1]] === "."){
					matrix[coords[0]][coords[1]] = "A";
					flag = false;
				};
			};
		};
	}

	var boardMaker = function() {
		var outArray = [];
		for(var i=0; i<Board.DIMENSION; i++){
			outArray.push([]);
			for(var j=0; j<Board.DIMENSION; j++){
				outArray[i][j] = ".";
			}
		}
		return outArray;
	};

	Board.prototype.setTile = function() {
		var id = 0;
		for(i=0;i<this.matrix.length; i++){
			for(j=0;j<this.matrix.length; j++){
				$('body').append('<div data-id= ' + id + '></div>');
				id++;
			}
			$('body').append('<br  />');
		}
	};
	
	Board.prototype.render = function(lastMove) {
		var snake = this.snake.segments;
		var nextTile = this.matrix[snake[0][0]][snake[0][1]];
		if(nextTile === "A"){
			console.log(lastMove);
			console.log(snake);
			this.snake.segments = this.snake.segments.concat([lastMove]);
		};
		for (var i = 0; i < snake.length; i++) {
			this.matrix[snake[i][0]][snake[i][1]] = 'S';
		}
		
		var id = 0;
		for(i=0;i<this.matrix.length; i++){
			for(j=0;j<this.matrix.length; j++){
				if(this.matrix[i][j] === "."){
					$('div').eq(id).addClass("empty");
					$('div').eq(id).removeClass("snake");
					$('div').eq(id).removeClass("apple");
				} else if(this.matrix[i][j] === "S") {
					$('div').eq(id).addClass("snake");
					$('div').eq(id).removeClass("empty");
					$('div').eq(id).removeClass("apple");
				} else if(this.matrix[i][j] === "A"){
					$('div').eq(id).addClass("apple");
					$('div').eq(id).removeClass("empty");
					$('div').eq(id).removeClass("snake");
				};
				id++;
			}

		}
		var snake = this.snake.segments;
		for (var i = 0; i < snake.length; i++) {
			this.matrix[snake[i][0]][snake[i][1]] = '.';
		}
		appleGenerator(this.matrix);
	}

})(this);