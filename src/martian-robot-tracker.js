var Planet = require('./planet');
var Robot = require('../src/robot');

function MartianRobotTracker( input ){
  this.planet = new Planet(input[0]);
  this.bounds = this.planet.getBounds();

  var robotData = groupDataByRobot(input.slice(1)) || [];
  this.robots = robotData.map(function ( data ) {
    return new Robot(data);
  });
}

MartianRobotTracker.prototype.getPlanet = function () {
  return this.planet;
};

MartianRobotTracker.prototype.getBounds = function () {
  return this.bounds;
};

MartianRobotTracker.prototype.getRobots = function() {
  return this.robots;
};

module.exports = MartianRobotTracker;

function groupDataByRobot( data ) {
  return data.reduce(function ( ret, robot, i ) {
    if (
      i === 0 ||
      ( i % 2 === 0 )
    ) {
      ret.push([
        robot,
        data[ i + 1]
      ]);
    }
    return ret;
  }, []);
}
