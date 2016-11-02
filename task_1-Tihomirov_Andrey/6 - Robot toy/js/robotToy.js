var App = {};

App.RobotToy = (function() {
	'use strict';
	
	var directions = ["NORTH", "EAST", "SOUTH", "WEST"];
	
	var robot = {
		direction: 0,
		x: 0,
		y: 0,
		
		report: function() {
			return "Current Robot Location: [" + this.x + ", " + this.y + "], direction: [" + directions[this.direction] + "] ";
		},
		
		move: function() {
			if(this.direction == 0) {
				this.y++;
			} else if(this.direction == 1) {
				this.x++;
			} else if((this.direction == 2) && (this.y != 0)) {
				this.y--;
			} else if(this.direction == 3 && (this.x != 0)) {
				this.x--;
			} else {
				
			}			
		},
		
		right: function() {
			if (this.direction == 3) {
				this.direction = 0;
			} else {
				this.direction++;
			}
		},
		
		left: function() {
			if (this.direction == 0) {
				this.direction = 3;
			} else {
				this.direction--;
			}
		}
	}

	return {
		robot: robot
	}	
	
})();

(function() {
	'use strict';
	var robot = App.RobotToy.robot;
	console.log(robot.report()); // direction is [NORTH] (by default)
	
	// turn [SOUTH]
	robot.left();
	robot.left();
	
	console.log(robot.report());
	robot.move(); // trying to go on negative area
	console.log(robot.report());
	
	// turn [NORTH]
	robot.right();
	robot.right();
	console.log(robot.report());
	robot.move();
	console.log(robot.report());
	robot.move();
	console.log(robot.report());
	robot.move();
	console.log(robot.report());
	
	// turn [EAST]
	robot.right();
	console.log(robot.report());
	robot.move();
	console.log(robot.report());
	robot.move();
	console.log(robot.report());
})();


