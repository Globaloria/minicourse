function base_setupLevel() {
  // Remove platforms in case students remove platform creation but forget to remove later calls
  // e.g. remove platform3 but try to set speed
  platform1 = undefined;
  platform2 = undefined;
  platform3 = undefined;
  platform4 = undefined;
  platform5 = undefined;
  platform6 = undefined;
  platform7 = undefined;
  platform8 = undefined;

  // Same for images
  playerImage = undefined; 
  goalImage = undefined;
  backgroundImage = undefined;

  // Text vars
  GOAL_REACHED_TEXT = undefined;
  CURRENT_LEVEL_TEXT = undefined;
  STORY_TEXT = undefined;

  FACE_RIGHT = undefined;
  FACE_LEFT = undefined;
  FACE_DOWN = undefined;
  FACE_UP = undefined;

  PLAYER_START_X = undefined;
  PLAYER_START_Y = undefined;
}

function base_drawLevel() {
	
}

// Sandbox needs to introduce dialogue text in a simpler format.
// Using a simple array of strings to simplify things for students.
// Transform that string array to an object array to keep current dialogue implementation intact
function getLevelDialogue() {
  var dialogue = [];

  for (var i = 0; i < STORY_TEXT.length; i++) {
    dialogue[i] = {
        textColor: "white",
        text: STORY_TEXT[i]
      };
  };

  return dialogue;

}