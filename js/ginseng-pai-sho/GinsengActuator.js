// Actuator

function GinsengActuator(gameContainer, isMobile, enableAnimations) {
	this.gameContainer = gameContainer;
	this.mobile = isMobile;

	this.animationOn = enableAnimations;

	this.orientalLilyDivs = [];

	var containers = setupPaiShoBoard(
		this.gameContainer, 
		GinsengController.getHostTilesContainerDivs(),
		GinsengController.getGuestTilesContainerDivs(), 
		true, 
		GinsengOptions.viewAsGuest ? Ginseng_GUEST_ROTATE : Ginseng_ROTATE,
		true
	);

	this.boardContainer = containers.boardContainer;
	this.hostTilesContainer = containers.hostTilesContainer;
	this.guestTilesContainer = containers.guestTilesContainer;
}

GinsengActuator.hostTeamTilesDivId = "hostTilesContainer";
GinsengActuator.guestTeamTilesDivId = "guestTilesContainer";

GinsengActuator.prototype.setAnimationOn = function(isOn) {
	this.animationOn = isOn;
};

GinsengActuator.prototype.actuate = function(board, tileManager, capturedTiles, moveToAnimate) {
	var self = this;
	this.orientalLilyDivs = [];

	window.requestAnimationFrame(function () {
		self.htmlify(board, tileManager, moveToAnimate, capturedTiles);
	});
};

GinsengActuator.prototype.htmlify = function(board, tileManager, moveToAnimate, capturedTiles) {
	this.clearContainer(this.boardContainer);

	var self = this;

	board.cells.forEach(function(column) {
		column.forEach(function(cell) {
			if (cell) {
				self.addBoardPoint(cell, moveToAnimate);
			}
		});
	});

	self.clearContainerWithId(GinsengActuator.hostTeamTilesDivId);
	self.clearContainerWithId(GinsengActuator.guestTeamTilesDivId);

	// Host Tile Reserve
	var hostTileReserveContainer = document.createElement("span");
	hostTileReserveContainer.classList.add("tileLibraryNoMargin");
	// var hostReserveLabel = document.createElement("span");
	// hostReserveLabel.innerText = "--Host Tile Reserve--";
	// hostTileReserveContainer.appendChild(hostReserveLabel);
	hostTileReserveContainer.appendChild(document.createElement("br"));
	this.hostTilesContainer.appendChild(hostTileReserveContainer);

	var hostCapturedTiles = this.getTilesForPlayer(capturedTiles, HOST);
	var guestCapturedTiles = this.getTilesForPlayer(capturedTiles, GUEST);

	var showHostCapturedTiles = hostCapturedTiles.length > 0;
	if (showHostCapturedTiles) {
		var hostCapturedTilesContainer = document.createElement("span");
		hostCapturedTilesContainer.classList.add("tileLibrary");
		var capturedTileLabel = document.createElement("span");
		capturedTileLabel.innerText = "--Captured Tiles--";
		hostCapturedTilesContainer.appendChild(capturedTileLabel);
		hostCapturedTilesContainer.appendChild(document.createElement("br"));
		this.hostTilesContainer.appendChild(hostCapturedTilesContainer);
	}

	// Guest Tile Reserve
	var guestTileReserveContainer = document.createElement("span");
	guestTileReserveContainer.classList.add("tileLibraryNoMargin");
	// var guestReserveLabel = document.createElement("span");
	// guestReserveLabel.innerText = "--Guest Tile Reserve--";
	// guestTileReserveContainer.appendChild(guestReserveLabel);
	guestTileReserveContainer.appendChild(document.createElement("br"));
	this.guestTilesContainer.appendChild(guestTileReserveContainer);

	var showGuestCapturedTiles = guestCapturedTiles.length > 0;
	if (showGuestCapturedTiles) {
		var guestCapturedTilesContainer = document.createElement("span");
		guestCapturedTilesContainer.classList.add("tileLibrary");
		var capturedTileLabel = document.createElement("span");
		capturedTileLabel.innerText = "--Captured Tiles--";
		guestCapturedTilesContainer.appendChild(capturedTileLabel);
		guestCapturedTilesContainer.appendChild(document.createElement("br"));
		this.guestTilesContainer.appendChild(guestCapturedTilesContainer);
	}

	var prevTile = null;
	tileManager.hostTiles.forEach(function(tile) {
		self.addTile(tile, hostTileReserveContainer);
		prevTile = tile;
	});
	prevTile = null;
	tileManager.guestTiles.forEach(function(tile) {
		self.addTile(tile, guestTileReserveContainer);
		prevTile = tile;
	});
	if (showHostCapturedTiles) {
		hostCapturedTiles.forEach(function(tile) {
			self.addTile(tile, hostCapturedTilesContainer, true);
		});
	}
	if (showGuestCapturedTiles) {
		guestCapturedTiles.forEach(function(tile) {
			self.addTile(tile, guestCapturedTilesContainer, true);
		});
	}
};

GinsengActuator.prototype.getTilesForPlayer = function(tiles, player) {
	var playerTiles = [];
	if (tiles && tiles.length > 0) {
		tiles.forEach(function(tile) {
			if (tile.ownerName === player) {
				playerTiles.push(tile);
			}
		});
	}
	return playerTiles;
};

GinsengActuator.prototype.clearContainer = function (container) {
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
};

GinsengActuator.prototype.clearContainerWithId = function(containerIdName) {
	var container = document.getElementById(containerIdName);
	if (container) {
		this.clearContainer(container);
	}
};

GinsengActuator.prototype.clearTileContainer = function (tile) {
	var container = document.querySelector("." + tile.getNotationName());
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
};

GinsengActuator.prototype.addTile = function(tile, tileContainer, isCaptured) {
	if (!tile) {
		return;
	}
	var theDiv = document.createElement("div");

	theDiv.classList.add("point");
	theDiv.classList.add("hasTile");

	if (tile.selectedFromPile) {
		theDiv.classList.add("selectedFromPile");
		theDiv.classList.add("drained");
	}

	var theImg = document.createElement("img");
	
	var srcValue = this.getTileSrcPath(tile);
	theImg.src = srcValue + tile.getImageName() + ".png";
	theDiv.appendChild(theImg);

	theDiv.setAttribute("name", tile.getNotationName());
	theDiv.setAttribute("id", tile.id);

	if (!isCaptured) {
		if (this.mobile) {
			theDiv.setAttribute("onclick", "unplayedTileClicked(this); showTileMessage(this);");
		} else {
			theDiv.setAttribute("onclick", "unplayedTileClicked(this);");
			theDiv.setAttribute("onmouseover", "showTileMessage(this);");
			theDiv.setAttribute("onmouseout", "clearMessage();");
		}
	}

	tileContainer.appendChild(theDiv);
};

GinsengActuator.prototype.getTileSrcPath = function(tile) {
	var srcValue = "images/";
	var gameImgDir = "Ginseng/" + localStorage.getItem(GinsengOptions.tileDesignTypeKey);
	srcValue = srcValue + gameImgDir + "/";
	return srcValue;
};

GinsengActuator.prototype.addBoardPoint = function(boardPoint, moveToAnimate) {
	var self = this;

	var theDiv = createBoardPointDiv(boardPoint);
	
	if (!boardPoint.isType(NON_PLAYABLE)) {
		theDiv.classList.add("activePoint");
		if (GinsengOptions.viewAsGuest) {
			theDiv.classList.add("GinsengGuestPointRotate");
		} else {
			theDiv.classList.add("GinsengPointRotate");
		}

		if (boardPoint.isType(POSSIBLE_MOVE)) {
			theDiv.classList.add("possibleMove");
		}
		
		if (this.mobile) {
			theDiv.setAttribute("onclick", "pointClicked(this); showPointMessage(this);");
		} else {
			theDiv.setAttribute("onclick", "pointClicked(this);");
			theDiv.setAttribute("onmouseover", "showPointMessage(this);");
			theDiv.setAttribute("onmouseout", "clearMessage();");
		}
	}

	if (boardPoint.gardenHighlightNumbers.length > 0) {
		boardPoint.gardenHighlightNumbers.forEach(function(number) {
			theDiv.classList.add("Ginseng_highlight" + number);
		});
		this.orientalLilyDivs.push(theDiv);
	}

	if (boardPoint.hasTile()) {
		theDiv.classList.add("hasTile");
		
		var theImg = document.createElement("img");

		if (moveToAnimate) {
			this.doAnimateBoardPoint(boardPoint, moveToAnimate, theImg, theDiv);
		}

		var srcValue = this.getTileSrcPath(boardPoint.tile);

		var tileMoved = boardPoint.tile;

		var showMovedTileDuringAnimation = this.animationOn && moveToAnimate && moveToAnimate.moveTileResults && moveToAnimate.moveTileResults.tileMoved
											&& isSamePoint(moveToAnimate.endPoint, boardPoint.col, boardPoint.row);
		if (showMovedTileDuringAnimation) {
			tileMoved = moveToAnimate.moveTileResults.tileMoved;
		}

		theImg.src = srcValue + tileMoved.getImageName() + ".png";
		
		theDiv.appendChild(theImg);

		var capturedTile = this.getCapturedTileFromMoveToAnimate(moveToAnimate);

		if (showMovedTileDuringAnimation) {
			setTimeout(function() {
				requestAnimationFrame(function(){
					theImg.src = srcValue + boardPoint.tile.getImageName() + ".png";
				});
			}, pieceAnimationLength);
		}

		if (this.animationOn && moveToAnimate && capturedTile && isSamePoint(moveToAnimate.endPoint, boardPoint.col, boardPoint.row)) {
			var theImgCaptured = document.createElement("img");
			theImgCaptured.src = srcValue + capturedTile.getImageName() + ".png";
			theImgCaptured.classList.add("underneath");
			theDiv.appendChild(theImgCaptured);

			/* After animation, hide captured tile */
			setTimeout(function() {
				requestAnimationFrame(function() {
					theImgCaptured.style.visibility = "hidden";
				});
			}, pieceAnimationLength);
		}
	}

	this.boardContainer.appendChild(theDiv);
};

GinsengActuator.prototype.getCapturedTileFromMoveToAnimate = function(moveToAnimate) {
	if (moveToAnimate && moveToAnimate.placeTileResults) {
		return moveToAnimate.placeTileResults.capturedTile;
	} else if (moveToAnimate && moveToAnimate.moveTileResults) {
		return moveToAnimate.moveTileResults.capturedTile;
	}
};

GinsengActuator.prototype.doAnimateBoardPoint = function(boardPoint, moveToAnimate, theImg, theDiv) {
	if (!this.animationOn) return;

	var x = boardPoint.col, y = boardPoint.row, ox = x, oy = y;

	if (moveToAnimate.moveType === MOVE && boardPoint.tile) {
		if (isSamePoint(moveToAnimate.endPoint, x, y)) {// Piece moved
			x = moveToAnimate.startPoint.rowAndColumn.col;
			y = moveToAnimate.startPoint.rowAndColumn.row;
			theImg.style.transform = "scale(1.2)";	// Make the pieces look like they're picked up a little when moving, good idea or no?
			theDiv.style.zIndex = 99;	// Make sure "picked up" pieces show up above others
		}
	} else if (moveToAnimate.moveType === DEPLOY) {
		if (isSamePoint(moveToAnimate.endPoint, ox, oy)) {// Piece planted
			if (piecePlaceAnimation === 1) {
				theImg.style.transform = "scale(2)";
				theDiv.style.zIndex = 99;
				requestAnimationFrame(function() {
					theImg.style.transform = "scale(1)";
				});
			}
		}
	}

	var pointSizeMultiplierX = 34;
	var pointSizeMultiplierY = pointSizeMultiplierX;
	var unitString = "px";

	/* For small screen size using dynamic vw units */
	if (window.innerWidth <= 612) {
		pointSizeMultiplierX = 5.5555;
		pointSizeMultiplierY = 5.611;
		unitString = "vw";
	}

	var left = (x - ox);
	var top = (y - oy);
	if (GinsengOptions.viewAsGuest) {
		theImg.style.left = ((left * -cos135 - top * -sin135) * pointSizeMultiplierX) + unitString;
		theImg.style.top = ((top * -cos135 + left * -sin135) * pointSizeMultiplierY) + unitString;
	} else {
		theImg.style.left = ((left * cos135 - top * sin135) * pointSizeMultiplierX) + unitString;
		theImg.style.top = ((top * cos135 + left * sin135) * pointSizeMultiplierY) + unitString;
	}

	requestAnimationFrame(function() {
		theImg.style.left = "0px";
		theImg.style.top = "0px";
	});
	setTimeout(function() {
		requestAnimationFrame(function() {
			theImg.style.transform = "scale(1)";	// This will size back to normal after moving
		});
	}, pieceAnimationLength);
};
