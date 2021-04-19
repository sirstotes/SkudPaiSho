// Vababond Board Point

function GinsengBoardPoint() {
	this.types = [];
	this.row = -1;
	this.col = -1;
}

GinsengBoardPoint.prototype.addType = function(type) {
	if (!this.types.includes(type)) {
		this.types.push(type);
	}
};

GinsengBoardPoint.prototype.removeType = function(type) {
	for (var i = 0; i < this.types.length; i++) {
		if (this.types[i] === type) {
			this.types.splice(i, 1);
		}
	}
};

GinsengBoardPoint.prototype.putTile = function(tile) {
	this.tile = tile;
};

GinsengBoardPoint.prototype.hasTile = function() {
	if (this.tile) {
		return true;
	}
	return false;
};

GinsengBoardPoint.prototype.isType = function(type) {
	return this.types.includes(type);
};

GinsengBoardPoint.prototype.isOpenTemple = function() {
	return !this.hasTile() && this.types.includes(TEMPLE);
};

GinsengBoardPoint.prototype.removeTile = function() {
	var theTile = this.tile;

	this.tile = null;

	return theTile;
};

GinsengBoardPoint.prototype.drainTile = function() {
	if (this.tile) {
		this.tile.drain();
	}
};

GinsengBoardPoint.prototype.restoreTile = function() {
	if (this.tile) {
		this.tile.restore();
	}
};

GinsengBoardPoint.prototype.canHoldTile = function(tile, ignoreTileCheck) {
	// Validate this point's ability to hold given tile

	if (this.isType(NON_PLAYABLE)) {
		return false;
	}

	if (!ignoreTileCheck && this.hasTile()) {
		// This function does not take into account capturing abilities
		return false;
	}

	return true;
};

GinsengBoardPoint.prototype.getCopy = function() {
	var copy = new GinsengBoardPoint();

	copy.types = copyArray(this.types);

	copy.row = this.row;
	copy.col = this.col;

	if (this.hasTile()) {
		copy.tile = this.tile.getCopy();
	}

	return copy;
};



// Point makers

GinsengBoardPoint.neutral = function() {
	var point = new GinsengBoardPoint();
	point.addType(NEUTRAL);

	return point;
};

GinsengBoardPoint.temple = function() {
	var point = new GinsengBoardPoint();
	point.addType(TEMPLE);

	return point;
};

GinsengBoardPoint.red = function() {
	var point = new GinsengBoardPoint();
	point.addType(RED);

	return point;
};

GinsengBoardPoint.white = function() {
	var point = new GinsengBoardPoint();
	point.addType(WHITE);

	return point;
};

GinsengBoardPoint.redWhite = function() {
	var point = new GinsengBoardPoint();
	point.addType(RED);
	point.addType(WHITE);

	return point;
};

GinsengBoardPoint.redWhiteNeutral = function() {
	var point = new GinsengBoardPoint();
	point.addType(RED);
	point.addType(WHITE);
	point.addType(NEUTRAL);

	return point;
};

GinsengBoardPoint.redNeutral = function() {
	var point = new GinsengBoardPoint();
	point.addType(RED);
	point.addType(NEUTRAL);

	return point;
};

GinsengBoardPoint.whiteNeutral = function() {
	var point = new GinsengBoardPoint();
	point.addType(WHITE);
	point.addType(NEUTRAL);

	return point;
};



