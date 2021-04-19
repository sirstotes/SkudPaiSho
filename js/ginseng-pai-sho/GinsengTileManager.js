// Tile Manager

function GinsengTileManager() {
	this.hostTiles = this.loadTileSet('H');
	this.guestTiles = this.loadTileSet('G');
}

GinsengTileManager.prototype.loadTileSet = function(ownerCode) {
	var tiles = [];

	tiles.push(new GinsengTile('L', ownerCode));
	tiles.push(new GinsengTile('K', ownerCode));
	tiles.push(new GinsengTile('B', ownerCode));
	tiles.push(new GinsengTile('D', ownerCode));
	tiles.push(new GinsengTile('S', ownerCode));
	tiles.push(new GinsengTile('T', ownerCode));
	tiles.push(new GinsengTile('R', ownerCode));
	tiles.push(new GinsengTile('J', ownerCode));
	tiles.push(new GinsengTile('O', ownerCode));
	tiles.push(new GinsengTile('O', ownerCode));
	tiles.push(new GinsengTile('W', ownerCode));
	tiles.push(new GinsengTile('W', ownerCode));

	return tiles;
};

GinsengTileManager.prototype.grabTile = function(player, tileCode) {
	var tilePile = this.hostTiles;
	if (player === GUEST) {
		tilePile = this.guestTiles;
	}

	var tile;
	for (var i = 0; i < tilePile.length; i++) {
		if (tilePile[i].code === tileCode) {
			newTileArr = tilePile.splice(i, 1);
			tile = newTileArr[0];
			break;
		}
	}

	if (!tile) {
		debug("NONE OF THAT TILE FOUND");
	}

	return tile;
};

GinsengTileManager.prototype.peekTile = function(player, tileCode, tileId) {
	var tilePile = this.hostTiles;
	if (player === GUEST) {
		tilePile = this.guestTiles;
	}

	var tile;
	if (tileId) {
		for (var i = 0; i < tilePile.length; i++) {
			if (tilePile[i].id === tileId) {
				return tilePile[i];
			}
		}
	}

	for (var i = 0; i < tilePile.length; i++) {
		if (tilePile[i].code === tileCode) {
			tile = tilePile[i];
			break;
		}
	}

	if (!tile) {
		debug("NONE OF THAT TILE FOUND");
	}

	return tile;
};

GinsengTileManager.prototype.removeSelectedTileFlags = function() {
	this.hostTiles.forEach(function(tile) {
		tile.selectedFromPile = false;
	});
	this.guestTiles.forEach(function(tile) {
		tile.selectedFromPile = false;
	});
};

GinsengTileManager.prototype.unselectTiles = function(player) {
	var tilePile = this.hostTiles;
	if (player === GUEST) {
		tilePile = this.guestTiles;
	}

	tilePile.forEach(function(tile) {
		tile.selectedFromPile = false;
	});
}

// GinsengTileManager.prototype.putTileBack = function(tile) {
// 	var player = tile.ownerName;
// 	var tilePile = this.hostTiles;
// 	if (player === GUEST) {
// 		tilePile = this.guestTiles;
// 	}

// 	tilePile.push(tile);
// };

GinsengTileManager.prototype.getCopy = function() {
	var copy = new GinsengTileManager();

	// copy this.hostTiles and this.guestTiles
	copy.hostTiles = copyArray(this.hostTiles);
	copy.guestTiles = copyArray(this.guestTiles);
	
	return copy;
};
