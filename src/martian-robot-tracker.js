var Planet = require('./planet');

function MartianRobotTracker( input ){
  this.planet = new Planet();
}

MartianRobotTracker.prototype.getPlanet = function() {
  return this.planet;
};

module.exports = MartianRobotTracker;
