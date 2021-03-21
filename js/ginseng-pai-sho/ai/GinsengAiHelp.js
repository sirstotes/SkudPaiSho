/* Ginseng AI Help */

function GinsengAiHelp() {
	this.moveNum = 0;
}

GinsengAiHelp.prototype.getAllPossibleMoves = function(game, player) {
	/* There are deployment moves and movement moves */
	var deploymentMoves = this.getPossibleDeploymentMoves(game, player);
	var movementMoves = this.getPossibleMovementMoves(game, player);

	return deploymentMoves.concat(movementMoves);
};

GinsengAiHelp.prototype.getPossibleDeploymentMoves = function(game, player) {
	var moves = [];

	var tilePile = this.getTilePile(game, player);

	for (var i = 0; i < tilePile.length; i++) {
		var tile = tilePile[i];
		game.revealDeployPoints(player, tile.code, true);
		var endPoints = this.getPossibleMovePoints(game);

		for (var j = 0; j < endPoints.length; j++) {
			var notationBuilder = new GinsengNotationBuilder();
			notationBuilder.moveType = DEPLOY;
			notationBuilder.tileType = tile.code;
			notationBuilder.status = WAITING_FOR_ENDPOINT;

			var endPoint = endPoints[j];
			notationBuilder.endPoint = new NotationPoint(this.getNotation(endPoint));
			var move = notationBuilder.getNotationMove(this.moveNum, player);

			game.hidePossibleMovePoints(true);

			var isDuplicate = false;
			for (var x = 0; x < moves.length; x++) {
				if (moves[x].equals(move)) {
					isDuplicate = true;
				}
			}
			if (!isDuplicate) {
				moves.push(move);
			}
		}
	}

	return moves;
};

GinsengAiHelp.prototype.getPossibleMovementMoves = function(game, player) {
	var moves = [];

	var startPoints = this.getMovementStartPoints(game, player);

	for (var i = 0; i < startPoints.length; i++) {
		var startPoint = startPoints[i];

		game.revealPossibleMovePoints(startPoint, true);

		var endPoints = this.getPossibleMovePoints(game);

		for (var j = 0; j < endPoints.length; j++) {
			var notationBuilder = new GinsengNotationBuilder();
			notationBuilder.moveType = MOVE;
			notationBuilder.startPoint = new NotationPoint(this.getNotation(startPoint));
			notationBuilder.status = WAITING_FOR_ENDPOINT;

			var endPoint = endPoints[j];

			notationBuilder.endPoint = new NotationPoint(this.getNotation(endPoint));
			var move = notationBuilder.getNotationMove(this.moveNum, player);

			game.hidePossibleMovePoints(true);

			var isDuplicate = false;
			for (var x = 0; x < moves.length; x++) {
				if (moves[x].equals(move)) {
					isDuplicate = true;
				}
			}

			if (!isDuplicate) {
				moves.push(move);
			}
		}
	}

	return moves;
};

GinsengAiHelp.prototype.getTilePile = function(game, player) {
	var tilePile = game.tileManager.hostTiles;
	if (player === GUEST) {
		tilePile = game.tileManager.guestTiles;
	}
	return tilePile;
};

GinsengAiHelp.prototype.getPossibleMovePoints = function(game) {
	var points = [];
	for (var row = 0; row < game.board.cells.length; row++) {
		for (var col = 0; col < game.board.cells[row].length; col++) {
			if (game.board.cells[row][col].isType(POSSIBLE_MOVE)) {
				points.push(game.board.cells[row][col]);
			}
		}
	}
	return points;
};

GinsengAiHelp.prototype.getNotation = function(boardPoint) {
	return new RowAndColumn(boardPoint.row, boardPoint.col).notationPointString;
};

GinsengAiHelp.prototype.getMovementStartPoints = function(game, player) {
	var points = [];
	for (var row = 0; row < game.board.cells.length; row++) {
		for (var col = 0; col < game.board.cells[row].length; col++) {
			var startPoint = game.board.cells[row][col];
			if (startPoint.hasTile() && startPoint.tile.ownerName === player) {
				points.push(game.board.cells[row][col]);
			}
		}
	}
	return points;
};

