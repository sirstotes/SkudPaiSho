// Tile

var GinsengTiles = {
	Lotus: {
		Code:'L',
		Name:'White Lotus',
		Type:FLOWER,
		Abilities: [],
		Movement: [{
			Type:'Jump',
			Amount:99,
		}]
	},
	Koi: {
		Code:'K',
		Name:'Koi',
		Type:BENDER,
		Abilities: [CAPTURE, BLOCK_SURROUNDING],
		Movement: [{
			Type:'Default',
			Amount:5,
		}]
	},
	Badgermole: {
		Code:'B',
		Name:'Badgermole',
		Type:BENDER,
		Abilities: [CAPTURE, PROTECT_SURROUNDING],
		Movement: [{
			Type:'Default',
			Amount:5,
		}]
	},
	Dragon: {
		Code:'D',
		Name:'Dragon',
		Type:BENDER,
		Abilities: [CAPTURE, CAPTURE_SURROUNDING],
		Movement: [{
			Type:'Default',
			Amount:5,
		}]
	},
	SkyBison: {
		Code:'S',
		Name:'Sky Bison',
		Type:BENDER,
		Abilities: [CAPTURE, PUSH_SURROUNDING],
		Movement: [{
			Type:'Default',
			Amount:5,
		}]
	},
	LionTurtle: {
		Code:'T',
		Name:'Lion Turtle',
		Type:TURTLE,
		Abilities: [CAPTURE_WITHOUT_TURTLES, CAPTURE_ADJACENT_BENDERS],
		Movement: [{
			Type:'Default',
			Amount:6,
		}]
	},
	Rhododendron: {
		Code:'R',
		Name:'Rhododendron',
		Type:FLOWER,
		Abilities: [HARMONIZE, EXCHANGE],
		Movement: [{
			Type:'Default',
			Amount:6,
		}]
	},
	Jade: {
		Code:'J',
		Name:'Jade',
		Type:FLOWER,
		Abilities: [HARMONIZE, EXCHANGE],
		Movement: [{
			Type:'Default',
			Amount:6,
		}]
	},
	Orchid: {
		Code:'O',
		Name:'Orchid',
		Type:FLOWER,
		Abilities: [BANISH, EXCHANGE],
		Movement: [{
			Type:'Default',
			Amount:6,
		}]
	},
	Wheel: {
		Code:'W',
		Name:'Wheel',
		Type:WHEEL,
		Abilities: [CAPTURE],
		Movement: [{
			Type:'Rook',
			Amount:99,
		}]
	},
}

function GinsengTile(code, ownerCode) {
	this.code = code;
	this.ownerCode = ownerCode;
	if (this.ownerCode === 'G') {
		this.ownerName = GUEST;
	} else if (this.ownerCode === 'H') {
		this.ownerName = HOST;
	} else {
		debug("INCORRECT OWNER CODE");
	}
	this.id = tileId++;
	this.selectedFromPile = false;

	this.tile = GinsengTiles.Lotus;
	if (this.code == 'K') {
		this.tile = GinsengTiles.Koi;
	} else if (this.code == 'B') {
		this.tile = GinsengTiles.Badgermole;
	} else if (this.code == 'D') {
		this.tile = GinsengTiles.Dragon;
	} else if (this.code == 'S') {
		this.tile = GinsengTiles.SkyBison;
	} else if (this.code == 'T') {
		this.tile = GinsengTiles.LionTurtle;
	} else if (this.code == 'R') {
		this.tile = GinsengTiles.Rhododendron;
	} else if (this.code == 'J') {
		this.tile = GinsengTiles.Badgermole;
	} else if (this.code == 'O') {
		this.tile = GinsengTiles.Badgermole;
	} else if (this.code == 'W') {
		this.tile = GinsengTiles.Badgermole;
	}
}

GinsengTile.prototype.getImageName = function() {
	return this.ownerCode + "" + this.code;
};

GinsengTile.prototype.getName = function() {
	return GinsengTile.getTileName(this.code);
};

GinsengTile.prototype.getCopy = function() {
	return new GinsengTile(this.code, this.ownerCode);
};
GinsengTile.prototype.hasAbility = function(ability) {
	for(var i = 0; i < this.tile.Abilities.length; i ++) {
		if (this.tile.Abilities[i] === ability) {
			return true;
		}
	}
	return false;
};


GinsengTile.getTileName = function(tileCode) {
	var name = "";
	
	if (tileCode === 'L') {
		name = "White Lotus";
	} else if (tileCode === 'S') {
		name = "Sky Bison";
	} else if (tileCode === 'B') {
		name = "Badgermole";
	} else if (tileCode === 'W') {
		name = "Wheel";
	} else if (tileCode === 'C') {
		name = "Chrysanthemum";
	} else if (tileCode === 'F') {
		name = "Fire Lily";
	} else if (tileCode === 'D') {
		name = "White Dragon";
	} else if (tileCode === GinsengTileCodes.FlyingLemur) {
		name = "Flying Lemur";
	}

	return name;
};


