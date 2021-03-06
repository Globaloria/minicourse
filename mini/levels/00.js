// ***** 1. The world of code *****

// ***** INSTRUCTIONS *****
// Click on the game scene to the right to start playing
// and unlock the power to edit this code
// 
// Below is the code for the game scene on the right.  
// Writing code (a.k.a, programming) is how you tell a 
// computer to do something.
// Lines of code that start with two slashes (like this one) 
// are called “comments”
// Only humans can read comments - computers can’t see them.
// EDITOR: beginReadOnly();

function setupLevel() {
  platformHeight = 10;

  createPlatform(180, 240, 80, platformHeight, 'blue');
  createPlatform(150, 380, 130, platformHeight, 'magenta');
  createPlatform(350, 460, 20, platformHeight, 'magenta');
  createPlatform(450, 460, 20, platformHeight, 'magenta');
  createPlatform(500, 390, 40, platformHeight, 'pink');
  createPlatform(600, 320, 40, platformHeight, 'pink');
  createPlatform(350, 260, 80, platformHeight, 'orange');
  createPlatform(15, 320, 80, platformHeight, 'yellow');
  
  goal.position.x = 500;
  goal.position.y = 150;
  goalImage = loadImage("images/star.png");
  goal.addImage(goalImage);
}

function drawLevel() {
  if (isPlayerOnPlatform()) {
    makePlayerJump(8);
  }
// EDITOR: endReadOnly();
}
