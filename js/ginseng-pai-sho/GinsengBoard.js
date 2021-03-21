// Ginseng Board

function GinsengBoard() {
	this.size = new RowAndColumn(17, 17);
	this.cells = this.brandNew();

	this.winners = [];

	this.hlPlayed = false;
	this.glPlayed = false;
}

GinsengBoard.prototype.brandNew = function () {
	var cells = [];

	cells[0] = this.newRow(9, 
		[GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.temple(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral()
		]);

	cells[1] = this.newRow(11, 
		[GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.redWhiteNeutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(), 
		GinsengBoardPoint.neutral()
		]);

	cells[2] = this.newRow(13, 
		[GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.whiteNeutral(), 
		GinsengBoardPoint.redWhite(),
		GinsengBoardPoint.redNeutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral()
		]);

	cells[3] = this.newRow(15,
		[GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.whiteNeutral(), 
		GinsengBoardPoint.white(),
		GinsengBoardPoint.redWhite(),
		GinsengBoardPoint.red(),
		GinsengBoardPoint.redNeutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral()
		]);

	cells[4] = this.newRow(17,
		[GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.whiteNeutral(), 
		GinsengBoardPoint.white(),
		GinsengBoardPoint.white(),
		GinsengBoardPoint.redWhite(),
		GinsengBoardPoint.red(),
		GinsengBoardPoint.red(),
		GinsengBoardPoint.redNeutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral()
		]);

	cells[5] = this.newRow(17,
		[GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.whiteNeutral(), 
		GinsengBoardPoint.white(),
		GinsengBoardPoint.white(),
		GinsengBoardPoint.white(),
		GinsengBoardPoint.redWhite(),
		GinsengBoardPoint.red(),
		GinsengBoardPoint.red(),
		GinsengBoardPoint.red(),
		GinsengBoardPoint.redNeutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral()
		]);

	cells[6] = this.newRow(17,
		[GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.whiteNeutral(), 
		GinsengBoardPoint.white(),
		GinsengBoardPoint.white(),
		GinsengBoardPoint.white(),
		GinsengBoardPoint.white(),
		GinsengBoardPoint.redWhite(),
		GinsengBoardPoint.red(),
		GinsengBoardPoint.red(),
		GinsengBoardPoint.red(),
		GinsengBoardPoint.red(),
		GinsengBoardPoint.redNeutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral()
		]);

	cells[7] = this.newRow(17,
		[GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.whiteNeutral(), 
		GinsengBoardPoint.white(),
		GinsengBoardPoint.white(),
		GinsengBoardPoint.white(),
		GinsengBoardPoint.white(),
		GinsengBoardPoint.white(),
		GinsengBoardPoint.redWhite(),
		GinsengBoardPoint.red(),
		GinsengBoardPoint.red(),
		GinsengBoardPoint.red(),
		GinsengBoardPoint.red(),
		GinsengBoardPoint.red(),
		GinsengBoardPoint.redNeutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral()
		]);

	cells[8] = this.newRow(17,
		[GinsengBoardPoint.temple(),
		GinsengBoardPoint.redWhiteNeutral(), 
		GinsengBoardPoint.redWhite(),
		GinsengBoardPoint.redWhite(),
		GinsengBoardPoint.redWhite(),
		GinsengBoardPoint.redWhite(),
		GinsengBoardPoint.redWhite(),
		GinsengBoardPoint.redWhite(),
		GinsengBoardPoint.redWhite(),
		GinsengBoardPoint.redWhite(),
		GinsengBoardPoint.redWhite(),
		GinsengBoardPoint.redWhite(),
		GinsengBoardPoint.redWhite(),
		GinsengBoardPoint.redWhite(),
		GinsengBoardPoint.redWhite(),
		GinsengBoardPoint.redWhiteNeutral(),
		GinsengBoardPoint.temple()
		]);

	cells[9] = this.newRow(17,
		[GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.redNeutral(), 
		GinsengBoardPoint.red(),
		GinsengBoardPoint.red(),
		GinsengBoardPoint.red(),
		GinsengBoardPoint.red(),
		GinsengBoardPoint.red(),
		GinsengBoardPoint.redWhite(),
		GinsengBoardPoint.white(),
		GinsengBoardPoint.white(),
		GinsengBoardPoint.white(),
		GinsengBoardPoint.white(),
		GinsengBoardPoint.white(),
		GinsengBoardPoint.whiteNeutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral()
		]);

	cells[10] = this.newRow(17,
		[GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.redNeutral(), 
		GinsengBoardPoint.red(),
		GinsengBoardPoint.red(),
		GinsengBoardPoint.red(),
		GinsengBoardPoint.red(),
		GinsengBoardPoint.redWhite(),
		GinsengBoardPoint.white(),
		GinsengBoardPoint.white(),
		GinsengBoardPoint.white(),
		GinsengBoardPoint.white(),
		GinsengBoardPoint.whiteNeutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral()
		]);

	cells[11] = this.newRow(17,
		[GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.redNeutral(), 
		GinsengBoardPoint.red(),
		GinsengBoardPoint.red(),
		GinsengBoardPoint.red(),
		GinsengBoardPoint.redWhite(),
		GinsengBoardPoint.white(),
		GinsengBoardPoint.white(),
		GinsengBoardPoint.white(),
		GinsengBoardPoint.whiteNeutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral()
		]);

	cells[12] = this.newRow(17,
		[GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.redNeutral(), 
		GinsengBoardPoint.red(),
		GinsengBoardPoint.red(),
		GinsengBoardPoint.redWhite(),
		GinsengBoardPoint.white(),
		GinsengBoardPoint.white(),
		GinsengBoardPoint.whiteNeutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral()
		]);

	cells[13] = this.newRow(15,
		[GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.redNeutral(), 
		GinsengBoardPoint.red(),
		GinsengBoardPoint.redWhite(),
		GinsengBoardPoint.white(),
		GinsengBoardPoint.whiteNeutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral()
		]);

	cells[14] = this.newRow(13,
		[GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.redNeutral(), 
		GinsengBoardPoint.redWhite(),
		GinsengBoardPoint.whiteNeutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral()
		]);

	cells[15] = this.newRow(11,
		[GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.redWhiteNeutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral()
		]);

	cells[16] = this.newRow(9,
		[GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.temple(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral(),
		GinsengBoardPoint.neutral()
		]);

	for (var row = 0; row < cells.length; row++) {
		for (var col = 0; col < cells[row].length; col++) {
			cells[row][col].row = row;
			cells[row][col].col = col;
		}
	}

	return cells;
};

GinsengBoard.prototype.newRow = function(numColumns, points) {
	var cells = [];

	var numBlanksOnSides = (this.size.row - numColumns) / 2;

	var nonPoint = new GinsengBoardPoint();
	nonPoint.addType(NON_PLAYABLE);

	for (var i = 0; i < this.size.row; i++) {
		if (i < numBlanksOnSides) {
			cells[i] = nonPoint;
		} else if (i < numBlanksOnSides + numColumns) {
			if (points) {
				cells[i] = points[i - numBlanksOnSides];
			} else {
				cells[i] = nonPoint;
			}
		} else {
			cells[i] = nonPoint;
		}
	}

	return cells;
};

GinsengBoard.prototype.placeTile = function(tile, notationPoint) {
	this.putTileOnPoint(tile, notationPoint);

	// if (tile.code === 'L') {
	// 	if (tile.ownerName === HOST) {
	// 		this.hlPlayed = true;
	// 	} else {
	// 		this.glPlayed = true;
	// 	}
	// }

	// Things to do after a tile is placed
	this.setPointFlags();
};

GinsengBoard.prototype.putTileOnPoint = function(tile, notationPoint) {
	var point = notationPoint.rowAndColumn;
	point = this.cells[point.row][point.col];
	
	point.putTile(tile);
};

GinsengBoard.prototype.getSurroundingRowAndCols = function(rowAndCol) {
	var rowAndCols = [];
	for (var row = rowAndCol.row - 1; row <= rowAndCol.row + 1; row++) {
		for (var col = rowAndCol.col - 1; col <= rowAndCol.col + 1; col++) {
			if ((row !== rowAndCol.row || col !== rowAndCol.col)	// Not the center given point
				&& (row >= 0 && col >= 0) && (row < 17 && col < 17)) {	// Not outside range of the grid
				var boardPoint = this.cells[row][col];
				if (!boardPoint.isType(NON_PLAYABLE)) {	// Not non-playable
					rowAndCols.push(new RowAndColumn(row, col));
				}
			}
		}
	}
	return rowAndCols;
};

GinsengBoard.prototype.getSurroundingBoardPoints = function(initialBoardPoint) {
	var surroundingPoints = [];
	for (var row = initialBoardPoint.row - 1; row <= initialBoardPoint.row + 1; row++) {
		for (var col = initialBoardPoint.col - 1; col <= initialBoardPoint.col + 1; col++) {
			if ((row !== initialBoardPoint.row || col !== initialBoardPoint.col)	// Not the center given point
				&& (row >= 0 && col >= 0) && (row < 17 && col < 17)) {	// Not outside range of the grid
				var boardPoint = this.cells[row][col];
				if (!boardPoint.isType(NON_PLAYABLE)) {	// Not non-playable
					surroundingPoints.push(boardPoint);
				}
			}
		}
	}
	return surroundingPoints;
};

GinsengBoard.prototype.getAdjacentRowAndCols = function(rowAndCol) {
	var rowAndCols = [];

	if (rowAndCol.row > 0) {
		rowAndCols.push(this.cells[rowAndCol.row - 1][rowAndCol.col]);
	}
	if (rowAndCol.row < 16) {
		rowAndCols.push(this.cells[rowAndCol.row + 1][rowAndCol.col]);
	}
	if (rowAndCol.col > 0) {
		rowAndCols.push(this.cells[rowAndCol.row][rowAndCol.col - 1]);
	}
	if (rowAndCol.col < 16) {
		rowAndCols.push(this.cells[rowAndCol.row][rowAndCol.col + 1]);
	}

	return rowAndCols;
};

GinsengBoard.prototype.pointIsOpenTemple = function(notationPoint) {
	var point = notationPoint.rowAndColumn;
	point = this.cells[point.row][point.col];

	return point.isOpenTemple();
};

GinsengBoard.prototype.moveTile = function(player, notationPointStart, notationPointEnd) {
	var startRowCol = notationPointStart.rowAndColumn;
	var endRowCol = notationPointEnd.rowAndColumn;

	if (startRowCol.row < 0 || startRowCol.row > 16 || endRowCol.row < 0 || endRowCol.row > 16) {
		debug("That point does not exist. So it's not gonna happen.");
		return false;
	}

	var boardPointStart = this.cells[startRowCol.row][startRowCol.col];
	var boardPointEnd = this.cells[endRowCol.row][endRowCol.col];

	if (!this.canMoveTileToPoint(player, boardPointStart, boardPointEnd)) {
		debug("Bad move bears");
		showBadMoveModal();
		return false;
	}

	var tile = boardPointStart.removeTile();

	if (!tile) {
		debug("Error: No tile to move!");
	}

	// If tile is White Lotus moving over the line, there's a winner.
	if (tile.code === 'L' && this.isTileOverLine(tile.code, tile.ownerCode)) {
		this.winners.push(tile.ownerName);
	}

	var capturedTile = boardPointEnd.tile;

	boardPointEnd.putTile(tile);

	this.setPointFlags();

	return {
		movedTile: tile,
		startPoint: boardPointStart,
		endPoint: boardPointEnd,
		capturedTile: capturedTile
	}
};

GinsengBoard.prototype.setPointFlags = function() {
	// First, unblock, unprotect
	for (var row = 0; row < this.cells.length; row++) {
		for (var col = 0; col < this.cells[row].length; col++) {
			var bp = this.cells[row][col];
			if (bp.hasTile()) {
				bp.tile.blocked = false;
				bp.tile.protected = false;
			}
		}
	}
	// Find Chrysanthemum tiles, then check surrounding Bison tiles to set them as blocked
	for (var row = 0; row < this.cells.length; row++) {
		for (var col = 0; col < this.cells[row].length; col++) {
			var bp = this.cells[row][col];
			this.blockTilesSurroundingPointIfNeeded(bp);
			this.protectTilesSurroundingPointIfNeeded(bp);
		}
	}
};

GinsengBoard.prototype.hasLotusExitedTemple = function(ownerName) {
	for (var row = 0; row < this.cells.length; row++) {
		for (var col = 0; col < this.cells[row].length; col++) {
			var bp = this.cells[row][col];
			if(bp.hasTile()) {
				if(bp.tile.code === 'L' && bp.tile.ownerName == ownerName) {
					return true;
				}
			}
		}
	}
	return false;
}

GinsengBoard.prototype.blockTilesSurroundingPointIfNeeded = function(boardPoint) {
	if (!boardPoint.hasTile()) {
		return;
	}
	if (!boardPoint.tile.hasAbility(BLOCK_SURROUNDING)) {
		return;
	}

	var blockerOwner = boardPoint.tile.ownerName;

	var rowCols = this.getSurroundingRowAndCols(boardPoint);

	for (var i = 0; i < rowCols.length; i++) {
		var bp = this.cells[rowCols[i].row][rowCols[i].col];
		if (bp.hasTile()) {
			if (this.hasLotusExitedTemple(boardPoint.tile.ownerName)) {
				bp.tile.blocked = true;
			}
		}
	}
};

GinsengBoard.prototype.protectTilesSurroundingPointIfNeeded = function(boardPoint) {
	if (!boardPoint.hasTile()) {
		return;
	}
	if (!boardPoint.tile.hasAbility(PROTECT_SURROUNDING)) {
		return;
	}

	var rowCols = this.getSurroundingRowAndCols(boardPoint);

	for (var i = 0; i < rowCols.length; i++) {
		var bp = this.cells[rowCols[i].row][rowCols[i].col];
		if (bp.hasTile()) {
			if (this.hasLotusExitedTemple(boardPoint.tile.ownerName)) {
				bp.tile.protected = true;
			}
		}
	}
};

GinsengBoard.prototype.canCapture = function(boardPointStart, boardPointEnd) {
	var tile = boardPointStart.tile;
	var otherTile = boardPointEnd.tile;

	if (tile.ownerName === otherTile.ownerName) {
		return false;	// Cannot capture own tile
	}

	if (otherTile.protected) {
		return false;	// Cannot capture protected tiles
	}

	// Is tile even a tile that can capture at all?
	if (!tile.hasAbility(CAPTURE) || !tile.hasAbility(CAPTURE_WITHOUT_TURTLES) || !tile.hasAbility(BANISH)) {
		debug(tile.getName() + " cannot capture anything.");
		return false;
	}

	var playerLotusPlayed = this.hasLotusExitedTemple(tile.ownerName);
	var otherLotusPlayed = this.hasLotusExitedTemple(otherTile.ownerName);
	if (tile.ownerName === GUEST) {
		playerLotusPlayed = this.hasLotusExitedTemple(otherTile.ownerName);
		otherLotusPlayed = this.hasLotusExitedTemple(tile.ownerName);
	}

	// Okay, so the tile is a tile that is able to capture things... 
	// Can the player capture Flower Tiles? (if they've played Lotus)
	if (tile.hasAbility(CAPTURE_WITHOUT_TURTLES) && otherTile.tile.type !== TURTLE) {
		return playerLotusPlayed && otherLotusPlayed;
	} else {
		return playerLotusPlayed && otherLotusPlayed;
	}
};

GinsengBoard.prototype.canMoveTileToPoint = function(player, boardPointStart, boardPointEnd) {
	// start point must have a tile
	if (!boardPointStart.hasTile()) {
		return false;
	}

	// Tile must belong to player
	if (boardPointStart.tile.ownerName !== player) {
		return false;
	}

	// Cannot move blocked tile (Bison blocked by Chrysanthemum)
	if (boardPointStart.tile.blocked) {
		return false;
	}
	
	var canCapture = false;
	if (boardPointEnd.hasTile()) {
		canCapture = this.canCapture(boardPointStart, boardPointEnd);
	}

	// If endpoint is a temple with no tile, that's wrong.
	if (!boardPointEnd.hasTile() && boardPointEnd.isType(temple)) {
		return false;
	}

	// If endpoint has a tile there that can't be captured, that is wrong.
	if (boardPointEnd.hasTile() && !canCapture) {
		return false;
	}

	for (var i = 0; i < boardPointStart.tile.tile.Movement.length; i ++) {
		var movementAbility = boardPointStart.tile.tile.Movement[i];
		if (movementAbility.Type === 'Default') {
			var numMoves = movementAbility.Amount;
			if (Math.abs(boardPointStart.row - boardPointEnd.row) + Math.abs(boardPointStart.col - boardPointEnd.col) > numMoves) {
				// end point is too far away, can't move that far
				return false;
			} else {
				// Move may be possible. But there may be tiles in the way...
				if (!this.verifyAbleToReach(boardPointStart, boardPointEnd, numMoves, boardPointStart.tile)) {
					return false;
				}
			}
		} else if (movementAbility.Type === 'Rook') {
			var bp = boardPointStart;
			var bp2 = boardPointEnd;
			if (bp.col === bp2.col) {
				// Up or Down
				// Verify no tiles in the way
				var rowStart = bp.row + 1;
				var rowEnd = bp2.row;
				if (bp.row > bp2.row) {
					rowStart = bp2.row + 1;
					rowEnd = bp.row;
				}
	
				// Scan for tile in the way from start to end point
				for (var row = rowStart; row < rowEnd; row++) {
					if (this.cells[row][bp.col].hasTile()) {
						return false;
					}
				}
	
				return true;
			} else if (bp.row === bp2.row) {
				// Left or Right
				// Verify no tiles in the way
				var colStart = bp.col + 1;
				var colEnd = bp2.col;
				if (bp.col > bp2.col) {
					colStart = bp2.col + 1;
					colEnd = bp.col;
				}
	
				// Scan for tile in the way from start to end point
				for (var col = colStart; col < colEnd; col++) {
					if (this.cells[bp.row][col].hasTile()) {
						return false;
					}
				}
	
				return true;
			} else {
				return false;
			}
		} else if (movementAbility.Type === 'Jump') {
			var numMoves = movementAbility.Amount;
			// Move may be possible. But there may be tiles in the way...
			if (!this.verifyAbleToJump(boardPointStart, boardPointEnd, numMoves)) {
				return false;
			}
		}
	}
	return true;
};

GinsengBoard.prototype.verifyAbleToReach = function(boardPointStart, boardPointEnd, numMoves, movingTile) {
  // Recursion!
  return this.pathFound(boardPointStart, boardPointEnd, numMoves, movingTile);
};

GinsengBoard.prototype.pathFound = function(boardPointStart, boardPointEnd, numMoves, movingTile) {
  if (!boardPointStart || !boardPointEnd) {
    return false; // start or end point not given
  }

  if (boardPointStart.isType(NON_PLAYABLE) || boardPointEnd.isType(NON_PLAYABLE)) {
  	return false;	// Paths must be through playable points
  }

  if (boardPointStart.row === boardPointEnd.row && boardPointStart.col === boardPointEnd.col) {
    return true; // Yay! start point equals end point
  }
  if (numMoves <= 0) {
    return false; // No more moves left
  }
	// If this point is surrounded by a Chrysanthemum and moving tile is Sky Bison, cannot keep moving.
	// if (this.pointIsNextToOpponentTile(boardPointStart, movingTile.ownerCode, 'C')) {
	// 	return false;
	// }
  // Idea: Get min num moves necessary!
  var minMoves = Math.abs(boardPointStart.row - boardPointEnd.row) + Math.abs(boardPointStart.col - boardPointEnd.col);
  
  if (minMoves === 1) {
    return true; // Yay! Only 1 space away (and remember, numMoves is more than 0)
  }

  // Check moving UP
  var nextRow = boardPointStart.row - 1;
  if (nextRow >= 0) {
    var nextPoint = this.cells[nextRow][boardPointStart.col];
    if (!nextPoint.hasTile() && this.pathFound(nextPoint, boardPointEnd, numMoves - 1, movingTile)) {
      return true; // Yay!
    }
  }

  // Check moving DOWN
  nextRow = boardPointStart.row + 1;
  if (nextRow < 17) {
    var nextPoint = this.cells[nextRow][boardPointStart.col];
    if (!nextPoint.hasTile() && this.pathFound(nextPoint, boardPointEnd, numMoves - 1, movingTile)) {
      return true; // Yay!
    }
  }

  // Check moving LEFT
  var nextCol = boardPointStart.col - 1;
  if (nextCol >= 0) {
    var nextPoint = this.cells[boardPointStart.row][nextCol];
    if (!nextPoint.hasTile() && this.pathFound(nextPoint, boardPointEnd, numMoves - 1, movingTile)) {
      return true; // Yay!
    }
  }

  // Check moving RIGHT
  nextCol = boardPointStart.col + 1;
  if (nextCol < 17) {
    var nextPoint = this.cells[boardPointStart.row][nextCol];
    if (!nextPoint.hasTile() && this.pathFound(nextPoint, boardPointEnd, numMoves - 1, movingTile)) {
      return true; // Yay!
    }
  }
};

GinsengBoard.prototype.verifyAbleToJump = function(boardPointStart, boardPointEnd, numMoves) {
	// Recursion!
	return this.jumpPathFound(boardPointStart, boardPointEnd, numMoves);
};

GinsengBoard.prototype.jumpPathFound = function(boardPointStart, boardPointEnd, numMoves, moving) {
	if (!boardPointStart || !boardPointEnd) {
		return false; // start or end point not given
	}

	if (boardPointStart.isType(NON_PLAYABLE) || boardPointEnd.isType(NON_PLAYABLE)) {
		return false;	// Paths must be through playable points
	}

	if (boardPointStart.row === boardPointEnd.row && boardPointStart.col === boardPointEnd.col) {
		return true; // Yay! start point equals end point
	}
	if (numMoves <= 0) {
		return false; // No more moves left
	}
	// If this point is surrounded by a Chrysanthemum and moving tile is Sky Bison, cannot keep moving.
	// if (this.pointIsNextToOpponentTile(boardPointStart, movingTile.ownerCode, 'C')) {
	// 	return false;
	// }

	// // Idea: Get min num moves necessary!
	// var minMoves = Math.abs(boardPointStart.row - boardPointEnd.row) + Math.abs(boardPointStart.col - boardPointEnd.col);

	// if (minMoves === 1) {
	// 	return true; // Yay! Only 1 space away (and remember, numMoves is more than 0)
	// }

	// Check moving Up-Right
	var jumpPoint = this.cells[boardPointStart.row - 1][boardPointStart.col + 1];//The tile you are jumping over
	if (boardPointStart.row - 1 >= 0 && boardPointStart.col + 1 < 17 && jumpPoint.hasTile()) {
		var nextPoint = this.cells[boardPointStart.row - 2][boardPointStart.col + 2];//The space you are jumping to
		if (!nextPoint.hasTile() && this.jumpPathFound(nextPoint, boardPointEnd, numMoves - 1)) {
			return true; // Yay!
		}
	}
	// Check moving Down-Right
	var jumpPoint = this.cells[boardPointStart.row + 1][boardPointStart.col + 1];//The tile you are jumping over
	if (boardPointStart.row - 1 < 17 && boardPointStart.col + 1 < 17 && jumpPoint.hasTile()) {
		var nextPoint = this.cells[boardPointStart.row + 2][boardPointStart.col + 2];//The space you are jumping to
		if (!nextPoint.hasTile() && this.jumpPathFound(nextPoint, boardPointEnd, numMoves - 1)) {
			return true; // Yay!
		}
	}
	// Check moving Up-Left
	var jumpPoint = this.cells[boardPointStart.row - 1][boardPointStart.col - 1];//The tile you are jumping over
	if (boardPointStart.row - 1 >= 0 && boardPointStart.col + 1 >= 0 && jumpPoint.hasTile()) {
		var nextPoint = this.cells[boardPointStart.row - 2][boardPointStart.col - 2];//The space you are jumping to
		if (!nextPoint.hasTile() && this.jumpPathFound(nextPoint, boardPointEnd, numMoves - 1)) {
			return true; // Yay!
		}
	}
	// Check moving Down-Left
	var jumpPoint = this.cells[boardPointStart.row + 1][boardPointStart.col - 1];//The tile you are jumping over
	if (boardPointStart.row - 1 < 17 && boardPointStart.col + 1 >= 0 && jumpPoint.hasTile()) {
		var nextPoint = this.cells[boardPointStart.row + 2][boardPointStart.col - 2];//The space you are jumping to
		if (!nextPoint.hasTile() && this.jumpPathFound(nextPoint, boardPointEnd, numMoves - 1)) {
			return true; // Yay!
		}
	}
};

  
GinsengBoard.prototype.pointIsNextToOpponentTile = function(bp, originalPlayerCode, tileCode) {
	var adjacentPoints = this.getAdjacentRowAndCols(bp);
	for (var i = 0; i < adjacentPoints.length; i++) {
		if (adjacentPoints[i].hasTile()
			&& adjacentPoints[i].tile.code === tileCode
			&& adjacentPoints[i].tile.ownerCode !== originalPlayerCode) {
			return true;
		}
	}
	return false;
}

GinsengBoard.prototype.setPossibleMovePoints = function(boardPointStart) {
	if (!boardPointStart.hasTile()) {
		return;
	}
	// Apply "possible move point" type to applicable boardPoints
	var player = boardPointStart.tile.ownerName;
	for (var row = 0; row < this.cells.length; row++) {
		for (var col = 0; col < this.cells[row].length; col++) {
			if (this.canMoveTileToPoint(player, boardPointStart, this.cells[row][col])) {
				this.cells[row][col].addType(POSSIBLE_MOVE);
			}
		}
	}
};

GinsengBoard.prototype.removePossibleMovePoints = function() {
	this.cells.forEach(function(row) {
		row.forEach(function(boardPoint) {
			boardPoint.removeType(POSSIBLE_MOVE);
		});
	});
};

GinsengBoard.prototype.setGuestTempleOpen = function() {
	var row = 16;
	var col = 8;
	if (this.cells[row][col].isOpenTemple()) {
		this.cells[row][col].addType(POSSIBLE_MOVE);
	}
};

GinsengBoard.prototype.getCopy = function() {
	var copyBoard = new GinsengBoard();

	copyBoard.cells = copyArray(this.cells);

	copyBoard.winners = copyArray(this.winners);

	copyBoard.hlPlayed = this.hlPlayed;
	copyBoard.glPlayed = this.glPlayed;
	
	return copyBoard;
};