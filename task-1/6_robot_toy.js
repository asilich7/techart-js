(function() {
  'use strict';

  function RobotToy() {
    var directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
    var state = {
      x: 0,
      y: 0,
      direction: 0
    };

    this.report = function() {
      return [state.x, state.y, directions[state.direction]].toString();
    };
    this.move = function() {
      switch(state.direction) {
        case 0:
          state.y += 1;
          break;
        case 1:
          state.x += 1;
          break;
        case 2:
          if(y > 0) state.y -= 1;
          break;
        case 3:
          if(x > 0) state.x -= 1;
          break;
      }
    };
    this.right = function() {
      state.direction = state.direction === 3 ? 0 : state.direction + 1;
    };
    this.left = function() {
      state.direction = state.direction === 0 ? 3 : state.direction - 1;
    };
  }

  module.exports.RobotToy = RobotToy;
})();
