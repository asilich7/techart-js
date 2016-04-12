(function() {

  'use strict';

  function Robot() {

    function Direction(title, incrX, incrY) {
      this.title = title;
      this.incrX = incrX;
      this.incrY = incrY;
      this.toString = function() {
        return this.title;
      };
    };

    Robot.allDirections = [new Direction('NORTH', 0, 1), new Direction('EAST', 1, 0), new Direction('SOUTH', 0, -1), new Direction('WEST', -1, 0)];

    this.x = 0;
    this.y = 0;
    this.directionIndex = 0;

    this.move = function() {
      var direction = Robot.allDirections[this.directionIndex];
      this.x = this.x + direction.incrX;
      this.y = this.y + direction.incrY;
      if (this.x < 0) {
        this.x = 0;
      }
      if (this.y < 0) {
        this.y = 0;
      }
    };

    this.right = function() {
      if (this.directionIndex == 3) {
        this.directionIndex = 0;
      } else {
        this.directionIndex++;
      }
    };

    this.left = function() {
      if (this.directionIndex == 0) {
        this.directionIndex = 3;
      } else {
        this.directionIndex--;
      }
    };

    this.report = function() {
      console.log(this.x + ', ' + this.y + ', ' + Robot.allDirections[this.directionIndex]);
    };
  };

  (function() {

    var robot = new Robot();
    robot.move();
    robot.move();
    robot.move();
    robot.right();
    robot.move();
    robot.move();
    robot.report();
  })();
})();
