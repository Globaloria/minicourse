$(document).ready(function() {
    var startLevel = 0;
    var debugLevel = window.location.search.match(/debugLevel=(\d+)/);

    if (debugLevel) {
        startLevel = parseInt(debugLevel[1]);
    }


    //Reset sessionStorage to keep editor and iframe in sync
    window.sessionStorage['currentLevel'] = startLevel;

    currentLevel = startLevel;
    maxLevel = 20;

    $instructions = $("#instructions");

    $(document).on('click', '#loginButton', function(e) {
        e.preventDefault();
        console.log("login");
        console.log(this);

        var email = document.getElementById('sign_in_email').value;
        var password = document.getElementById('sign_in_password').value;
        authWithPassword({
            email: email,
            password: password
        }, authHandler);



        $('#signupModal').foundation('reveal', 'close');
    });

    $(document).on('click', '#signupButton', function(e) {
        e.preventDefault();
        console.log("signup");
        console.log(this);
        
        var email = document.getElementById('sign_up_email').value;
        var password = document.getElementById('sign_up_password').value;

        createUserAndLogin({
            email: email,
            password: password
        });
        

        $('#signupModal').foundation('reveal', 'close');
    });

    $(document).on('click', '#logout', function(e) {
        e.preventDefault();
        console.log("logout");
        console.log(this);

        logout();
    });

    //Verify if user is currently logged in
    var currentUser = myFirebaseRef.getAuth();
    if( currentUser ){
        var userRef = new Firebase('https://mini-course.firebaseio.com/users/'+currentUser.uid);
        
        userRef.once('value', function(snapshot) {
            var user = snapshot.val();
            console.log(user.name);
            $('nav .account-action').html('<li>Hi, ' + user.name + '</li><li><a href="#" id="logout">Logout</a></li>');
        });        
    }

    loadCurrentUserProject();
    //Set iframe to right level
    $('iframe#preview').attr('src', 'mini/index.html').focus();
});

function revertMiniCourse() {
    loadMiniCourse(refreshPreview);
}

function loadMiniCourse(cb){
    cb = cb || function() {}
    console.log("Loading mini course template");
    var zeroPaddedLevel = (currentLevel < 10) ? '0' + currentLevel : currentLevel;
    $.get('mini/levels/' + zeroPaddedLevel + '.js?cacheBust=' + Date.now(), function(data) {
        var editorCommands = [];

        console.log("Course retrieved: ");
        console.log(data);

        // Normalize whitespace if we're on windows.
        data = data.replace(/\r\n/g, '\n');

        data = data.split('\n').filter(function(line) {
            var match = line.match(/\s*\/\/\s*EDITOR:(.*)/);
            if (!match) return true;

            editorCommands.push(match[1]);

            return false;
        }).join('\n');

        // We want to make it less likely that the user accidentally
        // deletes the closing brace of a function definition or adds
        // code after it, so we'll move it way down to the bottom of
        // the file with plenty of white-space in between.
        data = data.replace(/}\n*$/, '\n\n\n\n\n\n\n\n\n\n}\n');

        originalEditorContent = data;
        editor_js.setValue(data);

        // Make the first line read-only.
        editor_js.markText({line: 0, ch: 0}, {line: 1, ch: 0}, {
          readOnly: true
        });

        // By default, make the last two lines read-only; however, if
        // there's a comment to 'leave this code alone', then start the
        // read-only section there.
        var numLines = editor_js.lineCount();
        var startReadOnly = {line: numLines - 2, ch: 0};
        var leaveAloneIndex = data.indexOf('// Leave this code alone');

        if (leaveAloneIndex != -1) {
          startReadOnly = editor_js.posFromIndex(leaveAloneIndex);
        }

        editor_js.markText(startReadOnly, {
          line: numLines,
          ch: 0
        }, {
          readOnly: true
        });

        editorCommands.forEach(function(command) {
            console.log("Executing editor command: " + command);
            eval(command);
        });

        cb();
    });
}

function loadCurrentUserProject(){
    
    currentUser = myFirebaseRef.getAuth();
    console.log("Load current project for ");
    console.log(currentUser);

    if(currentUser && currentUser.uid){
        var projectRef = new Firebase('https://mini-course.firebaseio.com/projects/'+currentUser.uid+'/level'+currentLevel);

        projectRef.once('value', function(snapshot) {
            project = snapshot.val();
            console.log("Users project");
            console.log(project);

            //Set html
            if(project){
                // if( project.hasOwnProperty("html") ){
                //     console.log("Setting html to");
                //     console.log(project.html);
                //     editor_html.setValue(project.html);        
                // }
                // if( project.hasOwnProperty("css") ){
                //     console.log("Setting css to");
                //     console.log(project.css);
                //     editor_css.setValue(project.css);        
                // }
                if( project.hasOwnProperty("js") ){
                    console.log("Setting js to");
                    console.log(project.js);
                    editor_js.setValue(project.js);        
                }
            }else{
                loadMiniCourse();
            }
        });
    }else{
        loadMiniCourse();
        console.log("No user signed in");
    }
}

function authHandler(error, authData) {
    if (error) {
        console.log("Login Failed!", error);
    } else {
        console.log("Authenticated successfully with payload:", authData);
        currentUser = authData;
        
    }
}

function saveProject(){
    var currentUser = myFirebaseRef.getAuth();
    if (currentUser) {
        var currentLevelStr = "level"+currentLevel;

        var payload = {
                "html": editor_html.getValue(),
                "css": editor_css.getValue(),
                "js": editor_js.getValue()
            }; 
        myFirebaseRef.child("projects").child(currentUser.uid).child(currentLevelStr).set(payload, function(){alert("Save successful")});
    } else {
        alert("Please sign in to save your work");
    }
}

function nextLevel(){
    currentLevel == maxLevel ? maxLevel : currentLevel++;
    //Update iframe source
    // $('iframe#preview').attr('src', 'project_template/index'+currentLevel+'.html');
    // $instructions.find("h3").text(instructions["level"+currentLevel].title);
    // $instructions.find("p").text(instructions["level"+currentLevel].content);
    loadCurrentUserProject();
}

function prevLevel(){
    currentLevel == 1 ? 1 : currentLevel--;
    
    //Update iframe source
    // $('iframe#preview').attr('src', 'project_template/index'+currentLevel+'.html');
    // $instructions.find("h3").text(instructions["level"+currentLevel].title);
    // $instructions.find("p").text(instructions["level"+currentLevel].content);
    loadCurrentUserProject();
}
