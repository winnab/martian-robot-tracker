var Planet = require('./planet');

function MartianRobotTracker( input ){
  this.planet = new Planet(input[0]);
  this.bounds = this.planet.getBounds();
}

MartianRobotTracker.prototype.getPlanet = function () {
  return this.planet;
};

MartianRobotTracker.prototype.getBounds = function () {
  return this.bounds;
};

module.exports = MartianRobotTracker;
