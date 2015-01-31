function Robot ( input ) {
  var initialState = input[0].split(' ');

  this.startCoords = initialState.slice(0, 2).map(function ( int ) {
    return parseInt(int);
  });

  this.orientation = initialState[2];
  this.instructions = input[1].split('');
  this.currCoords = this.startCoords;
  this.endCoords = null;
  this.isLost = false;
}

Robot.prototype.hasFinishedInstructions = function () {
  return this.currCoords != this.startCoords;
};

module.exports = Robot;
