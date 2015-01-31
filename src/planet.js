function Planet ( bounds ) {
  this.bounds = getBounds(bounds);
}

Planet.prototype.getBounds = function () {
  return this.bounds;
};

module.exports = Planet;

function getBounds( data ) {
  return [
    [0, 0],
    data.split(' ').map(function ( int ) {
      return parseInt(int);
    })
  ];
}
