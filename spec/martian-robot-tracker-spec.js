var MartianRobotTracker = require('../src/martian-robot-tracker');
var Planet = require('../src/planet');

describe('MartianRobotTracker', function () {
  var sampleInput = [ '5 3',
                      '1 1 E',
                      'RFRFRFRF',
                      '3 2 N',
                      'FRRFLLFFRRFLL',
                      '0 3 W',
                      'LLFFFLFLFL'
                    ];

  var tracker = new MartianRobotTracker(sampleInput);

  it('tracks on a planet', function () {
    expect(tracker.planet instanceof Planet).toBeTruthy();
  });

  it('has the same boundaries as its planet', function () {
    var planet = new Planet('5 3');
    expect(tracker.getBounds()).toEqual(planet.getBounds());
  });
});
