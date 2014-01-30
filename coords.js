(function (root){

	var Snakes = root.Snakes = ( root.Snakes || {} );

	var Coords = Snakes.Coords = function () {};

	Coords.plus = function(array, element) {
		array.unshift(element);
	};

})(this);