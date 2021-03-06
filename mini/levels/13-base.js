PLAYER_START_X = 20;
PLAYER_START_Y = 280;

GOAL_REACHED_TEXT = "Congratulations, Codo Stick Acquired!";
CURRENT_LEVEL_TEXT = "14. Falling Blocks";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nOh Boy, this thing has advanced settings?!?  You are going to enjoy reaching this next one.  It looks like The 404 set a trap for you!",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nUse the remote control to make the blocks fall slower...or maybe there is another way?"
    }
  ];
}

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 420;

  goalImage = loadImage("images/MakeQuestAssets/Portal_60.png");
  goal.addImage(goalImage);
  
  levelCompleteImage = loadImage("images/MakeQuestAssets/Items60PX/CodoStick_Lvl1_60.png");
}

function base_drawLevel() {
  isPlayerOnPlatform();
  keepPlatformsInScene();
}