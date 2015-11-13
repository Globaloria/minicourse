PLAYER_START_X = 20;
PLAYER_START_Y = 80;

GOAL_REACHED_TEXT = "Congratulations, Remote Control Advanced Settings Unlocked!";
CURRENT_LEVEL_TEXT = "Slow the Platforms";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Wow, the instruction manual helps a lot! You can use it to change the speed of the platforms. \nMake the numbers smaller and use the platforms to reach the goal before it’s too late.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nYou’ve come so far, and restored so much of the damage caused by the 404... victory will soon be yours!"
    }
  ];
}

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;

  platformWidth = 120;
  platformHeight = 20;
}

function base_drawLevel() {

  isPlayerOnPlatform();
  keepPlatformsInScene();
}