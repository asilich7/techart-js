//Implement a robot toy class with move(), left(), right(), report() functions.
// Robot has 0, 0 as initial coordinates and sees on NORTH. move() should change coordinate by one, left() and right() will rotate the robot 90 degrees in the specified direction without changing the position of the robot.
// Coordinates can't be negative - ignore any move that change it on negative. report() should print robot coordinates and position.
//
//robot.move();
//robot.move();
//robot.move();
//robot.right();
//robot.move();
//robot.move();
//robot.report(); // 2,3,EAST

var Robot = (function() {
    var xCoordinate = 0;
    var yCoordinate = 0;
    var currentDirection = "NORTH";
    var possibleRightDirections = ["NORTH", "EAST", "SOUTH", "WEST"];
    var possibleLeftDirections = ["NORTH", "WEST", "SOUTH", "EAST"];

    function changeDirection(array) {
        for(var i=0; i < array.length; i++) {
            if(array[i] == currentDirection) {
                currentDirection = i == array.length - 1 ? array[0] : array[++i];
                break;
            }
        }
    }

    return {
        move : function() {
            switch (currentDirection) {
                case "NORTH":
                    yCoordinate += 1;
                    break;
                case "SOUTH":
                    if (yCoordinate > 0)
                        yCoordinate -= 1;
                    break;
                case "EAST":
                    xCoordinate += 1;
                    break;
                case "WEST":
                    if (xCoordinate > 0)
                        xCoordinate -= 1;
                    break;
                default:
                    console.log("No matched direction " + currentDirection);
            }
        },
        right : function() {
            changeDirection(possibleRightDirections);
        },
        left : function() {
            changeDirection(possibleLeftDirections);
        },
        report : function() {
            console.log(xCoordinate + " " + yCoordinate + " " + currentDirection);
        }
    }
})();

(function () {
    Robot.move();
    Robot.move();
    Robot.move();
    Robot.right();
    Robot.move();
    Robot.move();
    Robot.report();
})();
