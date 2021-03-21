// Ginseng Game Manager

function GinsengGameManager(actuator, ignoreActuate, isCopy) {
	this.gameLogText = '';
	this.isCopy = isCopy;

	this.actuator = actuator;

	this.tileManager = new GinsengTileManager();

	this.setup(ignoreActuate);
}

// Set up the game
GinsengGameManager.prototype.setup = function (ignoreActuate) {

	this.board = new GinsengBoard();

	// Update the actuator
	if (!ignoreActuate) {
		this.actuate();
	}
};

// Sends the updated board to the actuator
GinsengGameManager.prototype.actuate = function (moveToAnimate) {
	if (this.isCopy) {
		return;
	}
	this.actuator.actuate(this.board, this.tileManager, moveToAnimate);
	setGameLogText(this.gameLogText);
};

GinsengGameManager.prototype.runNotationMove = function(move, withActuate) {
	debug("Running Move: " + move.fullMoveText);

	if (move.moveType === INITIAL_SETUP) {
		var pointList = [];
		if (move.player === HOST) {
			// North side of board
			pointList.push(new NotationPoint("-5,4"));
			pointList.push(new NotationPoint("-4,4"));
			pointList.push(new NotationPoint("-3,5"));
			pointList.push(new NotationPoint("-2,6"));
			pointList.push(new NotationPoint("-1,7"));
			pointList.push(new NotationPoint("0,8"));
			pointList.push(new NotationPoint("1,7"));
			pointList.push(new NotationPoint("2,6"));
			pointList.push(new NotationPoint("3,5"));
			pointList.push(new NotationPoint("4,4"));
			pointList.push(new NotationPoint("5,4"));
			pointList.push(new NotationPoint("0,5"));
		} else if (move.player === GUEST) {
			// South side of board
			pointList.push(new NotationPoint("-5,-4"));
			pointList.push(new NotationPoint("-4,-4"));
			pointList.push(new NotationPoint("-3,-5"));
			pointList.push(new NotationPoint("-2,-6"));
			pointList.push(new NotationPoint("-1,-7"));
			pointList.push(new NotationPoint("0,-8"));
			pointList.push(new NotationPoint("1,-7"));
			pointList.push(new NotationPoint("2,-6"));
			pointList.push(new NotationPoint("3,-5"));
			pointList.push(new NotationPoint("4,-4"));
			pointList.push(new NotationPoint("5,-4"));
			pointList.push(new NotationPoint("0,-5"));
		}
	} else if (move.moveType === DEPLOY) {
		// Just placing tile on board
		var tile = this.tileManager.grabTile(move.player, move.tileType);
		this.board.placeTile(tile, move.endPoint);

		this.buildDeployGameLogText(move, tile);
	} else if (move.moveType === MOVE) {
		var moveDetails = this.board.moveTile(move.player, move.startPoint, move.endPoint);

		move.capturedTile = moveDetails.capturedTile;

		this.buildMoveGameLogText(move, moveDetails);
	}

	if (move.moveType === DRAW_ACCEPT) {
		this.gameHasEndedInDraw = true;
		this.buildAcceptDrawGameLogText(move);
	}

	if (withActuate) {
		this.actuate(move);
	}
};

GinsengGameManager.prototype.buildDeployGameLogText = function(move, tile) {
	this.gameLogText = move.moveNum + move.playerCode + '. '
		+ move.player + ' placed ' + GinsengTile.getTileName(tile.code) + ' at ' + move.endPoint.pointText
		+ this.getPlayerHasOfferedDrawGameLogTextIfDrawOffered(move);
};
GinsengGameManager.prototype.buildMoveGameLogText = function(move, moveDetails) {
	this.gameLogText = move.moveNum + move.playerCode + '. '
		+ move.player + ' moved ' + GinsengTile.getTileName(moveDetails.movedTile.code) + ' from ' + move.startPoint.pointText + ' to ' + move.endPoint.pointText;
	if (moveDetails.capturedTile) {
		this.gameLogText += ' and captured ' + getOpponentName(move.player) + '\'s ' + GinsengTile.getTileName(moveDetails.capturedTile.code);
	}
	this.gameLogText += this.getPlayerHasOfferedDrawGameLogTextIfDrawOffered(move);
};
GinsengGameManager.prototype.buildAcceptDrawGameLogText = function(move) {
	this.gameLogText = move.moveNum + move.playerCode + '. '
		+ 'Draw offer accepted. Game has ended in a draw.';
};

GinsengGameManager.prototype.getPlayerHasOfferedDrawGameLogTextIfDrawOffered = function(move) {
	if (move.offerDraw) {
		return ". A draw has been offered.";
	}
	return "";
};

GinsengGameManager.prototype.hasEnded = function() {
	return this.getWinResultTypeCode() > 0;
};

GinsengGameManager.prototype.revealPossibleMovePoints = function(boardPoint, ignoreActuate) {
	if (!boardPoint.hasTile()) {
		return;
	}
	this.board.setPossibleMovePoints(boardPoint);

	if (!ignoreActuate) {
		this.actuate();
	}
};

GinsengGameManager.prototype.hidePossibleMovePoints = function(ignoreActuate) {
	this.board.removePossibleMovePoints();
	this.tileManager.removeSelectedTileFlags();
	if (!ignoreActuate) {
		this.actuate();
	}
};

GinsengGameManager.prototype.revealDeployPoints = function(player, tileCode, ignoreActuate) {
	this.board.setDeployPointsPossibleMoves(player, tileCode);

	if (!ignoreActuate) {
		this.actuate();
	}
};

GinsengGameManager.prototype.getWinner = function() {
	if (this.board.winners.length === 1) {
		return this.board.winners[0];
	}
};

GinsengGameManager.prototype.getWinReason = function() {
	return " has captured the White Lotus and won the game!";
};

GinsengGameManager.prototype.getWinResultTypeCode = function() {
	if (this.board.winners.length === 1) {
		return 1;	// Standard win is 1
	} else if (this.gameHasEndedInDraw) {
		return 4;	// Tie/Draw is 4
	}
};

GinsengGameManager.prototype.getCopy = function() {
	var copyGame = new GinsengGameManager(this.actuator, true, true);
	copyGame.board = this.board.getCopy();
	copyGame.tileManager = this.tileManager.getCopy();
	return copyGame;
};
