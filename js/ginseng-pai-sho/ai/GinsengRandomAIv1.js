/* Ginseng Random AI */

function GinsengRandomAIv1() {
	this.aiHelp = new GinsengAiHelp();
}

GinsengRandomAIv1.prototype.getName = function() {
	return "Ginseng Random AI";
};

GinsengRandomAIv1.prototype.getMessage = function() {
	return "This AI makes moves completely randomly, so you should be able to beat it easily if it even manages to play its Lotus. ";
};

GinsengRandomAIv1.prototype.setPlayer = function(playerName) {
	this.player = playerName;
};

GinsengRandomAIv1.prototype.getMove = function(game, moveNum) {
	this.aiHelp.moveNum = moveNum;
	var moves = this.aiHelp.getAllPossibleMoves(game, this.player);
	return removeRandomFromArray(moves);
};

