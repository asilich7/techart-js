'use strict';

function Robot() {
  this.DIRECTIONS = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
  this.x = 0;
  this.y = 0;
  this.direction = 'NORTH';
}

Robot.prototype.report = function () {
  var report = this.x + ',' + this.y + ',' + this.direction;
  console.log(report);
  return report;
};

Robot.prototype.left = function () {
  var currentIndex = this.DIRECTIONS.indexOf(this.direction);
  if (currentIndex === 0) {
    this.direction = this.DIRECTIONS[this.DIRECTIONS.length - 1];
  } else {
    this.direction = this.DIRECTIONS[currentIndex - 1];
  }
};

Robot.prototype.right = function () {
  var currentIndex = this.DIRECTIONS.indexOf(this.direction);
  if (currentIndex === (this.DIRECTIONS.length - 1)) {
    this.direction = this.DIRECTIONS[0];
  } else {
    this.direction = this.DIRECTIONS[currentIndex + 1];
  }
};

Robot.prototype.move = function () {
  switch (this.direction) {
    case 'NORTH':
      this.y++;
      break;
    case 'EAST':
      this.x++;
      break;
    case 'SOUTH':
      if (this.y - 1 >= 0)
        this.y--;
      break;
    case 'WEST':
      if (this.x - 1 >= 0)
        this.x--;
      break;
  }
};

module.exports = Robot;