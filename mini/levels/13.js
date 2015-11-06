function setupLevel (){
  // EDITOR: beginReadOnly();
  MOVE_RIGHT = 0;
  MOVE_LEFT = 180;
  MOVE_DOWN = 90;
  MOVE_UP = 270;

  platformHeight = 60;

  platform1 = createPlatform(320, 460, 640, 20, 'orange');
  platform2 = createPlatform(180, 100, 100, platformHeight, 'blue');
  platform3 = createPlatform(320, 100, 100, platformHeight, 'red');
  platform4 = createPlatform(500, 100, 100, platformHeight, 'green');
  // EDITOR: endReadOnly();
  
  // ***** LEVEL SEVEN (SILVER) INSTRUCTIONS *****
  //
  // Update the platforms to move slower so you can reach the goal. 
  //
  // ***** ENTER YOUR CODE BELOW *****
  
  platform2.setSpeed( 2, MOVE_DOWN );
  platform3.setSpeed( 3, MOVE_DOWN );
  platform4.setSpeed( 4, MOVE_DOWN );

  // EDITOR: beginCodeFold('Click here for an example.');
  // Example:
  //   platform1.setSpeed(0.5, MOVE_DOWN);
  //                      ^        ^   
  //                      |        |   
  //                      |        |   
  //                      |        direction
  //                      speed
  // EDITOR: endCodeFold();
}