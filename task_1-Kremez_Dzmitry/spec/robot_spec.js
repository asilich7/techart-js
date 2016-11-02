describe('Robot', function () {
  var Robot = require('../lib/robot');

  describe('move', function () {
    it('change y by 1 step on default move', function () {
      var robot = new Robot();
      expect(robot.y).toEqual(0);
      robot.move();
      expect(robot.y).toEqual(1);
    });

    it('change x by 1 step after turn to right', function () {
      var robot = new Robot();
      expect(robot.x).toEqual(0);
      robot.right();
      robot.move();
      expect(robot.x).toEqual(1);
    });

    it("don't move to negative coordinates", function () {
      var robot = new Robot();
      expect(robot.x).toEqual(0);
      expect(robot.y).toEqual(0);
      robot.left();
      robot.move();
      robot.left();
      robot.move();
      expect(robot.x).toEqual(0);
      expect(robot.y).toEqual(0);
    });

  });

  describe('left', function () {
    var robot = new Robot();
    it('turn from NORTH to WEST', function () {
      expect(robot.direction).toEqual('NORTH');
      robot.left();
      expect(robot.direction).toEqual('WEST');
    });

    it('turn from WEST to SOUTH', function () {
      expect(robot.direction).toEqual('WEST');
      robot.left();
      expect(robot.direction).toEqual('SOUTH');
    });

    it('turn from SOUTH to EAST', function () {
      expect(robot.direction).toEqual('SOUTH');
      robot.left();
      expect(robot.direction).toEqual('EAST');
    });

    it('turn from EAST to NORTH', function () {
      expect(robot.direction).toEqual('EAST');
      robot.left();
      expect(robot.direction).toEqual('NORTH');
    });
  });

  describe('right', function () {
    var robot = new Robot();
    it('turn from NORTH to EAST', function () {
      expect(robot.direction).toEqual('NORTH');
      robot.right();
      expect(robot.direction).toEqual('EAST');
    });

    it('turn from EAST to SOUTH', function () {
      expect(robot.direction).toEqual('EAST');
      robot.right();
      expect(robot.direction).toEqual('SOUTH');
    });

    it('turn from SOUTH to SOWESTUTH', function () {
      expect(robot.direction).toEqual('SOUTH');
      robot.right();
      expect(robot.direction).toEqual('WEST');
    });

    it('turn from WEST to NORTH', function () {
      expect(robot.direction).toEqual('WEST');
      robot.right();
      expect(robot.direction).toEqual('NORTH');
    });
  });

  describe('report', function () {
    it('turn from EAST to NORTH', function () {
      var robot = new Robot();
      expect(robot.report()).toEqual('0,0,NORTH');
    });
  });


});