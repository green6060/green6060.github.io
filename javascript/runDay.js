var day = new Date().getDay();
if (day == 1 || day == 3 || day == 5){
    turnRight();
    moveForward();
    moveForward();
    moveForward();
    moveForward();
}
else{
    turnLeft();
    turnLeft();
    moveForward();
    moveForward();
    moveForward();
    moveForward();
}
/*
switch (new Date().getDay()) {
    case 1:
    case 3:
    case 5:
        turnRight();
        moveForward();
        moveForward();
        moveForward();
        moveForward();
        break;
    case 2:
    case 4:
        moveForward();
        moveForward();
        moveForward();
        moveForward();
        moveForward();
        moveForward();
        break;
    case 0:
    case 6:
        moveForward();
        moveForward();
        moveForward();
        moveForward();
        moveForward();
        moveForward();
        turnRight();
        moveForward();
        moveForward();
        moveForward();
        moveForward();
        break;
}
*/
