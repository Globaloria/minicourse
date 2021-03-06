var maxLevel = gameConstants.MAX_LEVEL;
// Check if we're accessing a remix url, if so, store the url for later use
var remixUrl = window.location.href.match(/remix=(.+)/);

// Set language
var queryParams = window.location.search.substring(1).split('&');
// Default to english => ''
var language = '';
var languagePath = '';
for (var i = 0; i < queryParams.length; i++) {
    if(queryParams[i].indexOf('lang')>-1){
      language = queryParams[i].split('=')[1];
      languagePath = language+'/';
    }
}

$(document).ready(function() {
    // Set language in storage
    storage.set('languagePath', languagePath);
    
    // Don't start in sandbox if the page is refreshed and we're not in remix mode
    storage.set('skipToSandbox', false);
    if(remixUrl){
        storage.set('skipToSandbox', true);
    }

    //Resize to viewport
    $("main").css("height", window.innerHeight-36);

    

    //Open welcome modal on first load
    // code.globaloria.com only
    // $('#welcomeModal').foundation('reveal', 'open');
    
    //Open walkthrough on first load
    // makequest.globaloria.com only
    if( !remixUrl ){
        startWalkthrough();
    }




    // Init joyride after Welcome Modal
    $(document).on('close.fndtn.reveal', '#welcomeModal', function () {
      
        startWalkthrough();
      
    });
    $(document).on('click', '.joyride-close-tip', function(){
      console.log(this);
    });


    var startLevel = 0;
    var debugLevel = window.location.search.match(/debugLevel=(\d+)/);

    if (debugLevel) {
        startLevel = parseInt(debugLevel[1]);
    }


    //Reset sessionStorage to keep editor and iframe in sync
    window.sessionStorage['currentLevel'] = startLevel;

    currentLevel = startLevel;

    $instructions = $("#instructions");

    //Remove tooltips from code editor
    $(document).on('click', 'span.tooltip', function(){
        Foundation.libs.tooltip.hide( $('#editor-tooltip') );
        $(this).remove();
        $('#editor-tooltip').remove();
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

    loadMiniCourse(refreshPreview);

    // Fix this ugly hack so that the game is displayed correctly when remixing.
    // Currently have to hit Run when opening for Remix or use this timeout call: 
    setTimeout(function(){
        console.log("REFRESH 2000");
        refreshPreview();
    }, 2000);

    //Set iframe to right level
    $('iframe#preview').attr('src', 'mini/index.html').focus();

    // Publishing form submission
    //is-adult
    $('form #00NU0000005PN7j').on('change', function(){
        console.log( $(this).prop('checked') );
        if( $(this).prop('checked') ){
            $('#first_name').prop('disabled', false);
            // $('#last_name').prop('disabled', false);
            $('#email').prop('disabled', false);
            $('#phone').prop('disabled', false);
        }else{
            $('#first_name').val('');
            // $('#last_name').val('');
            $('#email').val('');
            $('#phone').val('');

            $('#first_name').prop('disabled', true);
            // $('#last_name').prop('disabled', true);
            $('#email').prop('disabled', true);
            $('#phone').prop('disabled', true);
        }
    });
    
    $('#publish-form').submit(function(event) {
        console.log("VALIDATING");
        // Form validation
        if( $('#00NU0000005PN7e').val() == ""
            || $('#city').val() == ""
            || $('#country').val() == ""
            || $('#state').val() == ""
            ){
            console.log("VALIDATION FAILED");
            return false;
        }

        // Prevent form submission
        // Publish game and set url as the return parameter for the form.
        // Submit the form from publish
        console.log("PUBLISHING");
        publish();
        event.preventDefault();
        return false;
    });
});

function startWalkthrough(){
    $(document).foundation('joyride', 'start', {
        
        pre_ride_callback      : function (){
                                  //Display all buttons for joyride
                                  $("#showHints").css('display', 'block');
                                  $("#previous").css('display', 'block');
                                  $("#next").css('display', 'block');
                                },
        pre_step_callback      : function (){
                                  console.log(this.$target.first().attr('id'));
                                  if(this.$target.first().attr('id') == "preview"){
                                    $("iframe").contents().find("canvas").addClass("joyride-highlight");
                                  }else{
                                    this.$target.first().addClass('joyride-highlight');
                                  }
                                },
        post_step_callback     : function (){
                                  if(this.$target.first().attr('id') == "preview"){
                                    $("iframe").contents().find("canvas").removeClass("joyride-highlight");
                                  }else{
                                    this.$target.first().removeClass('joyride-highlight');            
                                  }
                                },
        post_ride_callback     : function (){
                                console.log("JOYRIDE CLOSED");
                                    //Display all buttons for joyride
                                  $("#showHints").css('display', 'none');
                                  $("#previous").css('display', 'none');
                                  $("#next").css('display', 'none');
                                },
        abort_on_close           : false
      });
}

function levelSelectMenu(){
  $('#levelSelectMenuModal').foundation('reveal', 'open');  
}

function skipToLevel(level){
    $('#levelSelectMenuModal').foundation('reveal', 'close');

    if(level == 'sandbox'){
        storage.set('skipToSandbox', true);
        loadMiniCourse();
        return;
    }

    currentLevel = level;
    loadMiniCourse();
}

function revertMiniCourse() {
    loadMiniCourse(refreshPreview);
}

function publishPrompt(){
  $('#publishModal').foundation('reveal', 'open');
}

function undo(){
    editor_js.undo();
}

function publish(){
  console.log("PARENT PUBLISH");
  
  generatedHTML = null;
  MinicoursePublisher.generateHTML({
    baseURL: './mini/',
    baseLevel: maxLevel,
    js: editor_js.getValue(),
    formInfo: '<span id="first_name">'+ $('#first_name').val().charAt(0).toUpperCase() + $('#first_name').val().slice(1) +'</span> from <span id="school">'+$('#00NU0000005PN7e').val()+'</span>'
              +'<span id="grade" style="display: none;">'+$('#grade').val()+'</span>'
              +'<span id="city" style="display: none;">'+$('#city').val()+'</span>'
              +'<span id="state" style="display: none;">'+$('#state').val()+'</span>'
              +'<span id="country" style="display: none;">'+$('#country').val()+'</span>'
  }, function(err, html) {
    if (err) {
      alert("Error generating published HTML: " + err.message);
      return;
    }
    
    generatedHTML = html;

    if (!generatedHTML) {
      alert("There was an error publishing your game. Please try again later!");
      return;
    }
    
    // Begin publishing
    $("#published").hide();
    $("#publishing").fadeIn();
    
    $.ajax({
      type: 'POST',
      url: 'https://publish.emcl.com/publish',
      data: {
        'html': generatedHTML
      },
      crossDomain: true,
      dataType: 'json',
      error: function(xhr, status, error) {
        alert("It looks like something went wrong. Please verify your internet connection and click Publish again.");
        console.log(arguments);

        // Log error to ga
        ga('send', 'event', 'Ajax Error', status, 'publisher', { 'nonInteraction': 1 });
      },
      success: function(data) {
        var url = data['published-url'];
        if(language && language == 'es'){
            url += '?lang=es';
        }
        url = url.replace('globaloria.com', 'carnegielearning.com');
        url = url.replace('myglife.org', 'carnegielearning.com');

        $("#published").fadeIn()
          .find('a')
          .attr('href', url)
          .text(url);
      },
      complete: function() {
        $("#publishing").hide();
      }
    });
  });
}

function loadMiniCourse(cb){
    cb = cb || function() {}
    var zeroPaddedLevel = (currentLevel < 10) ? '0' + currentLevel : currentLevel;

    // Skip to sandbox
    if( storage.get('skipToSandbox') == 'true' ){
        zeroPaddedLevel = maxLevel;
        $("#levelMenu").css('display', 'none');
    }else{
        $("#levelMenu").css('display', 'block');
    }

    var codeUrl = 'mini/'+languagePath+'levels/' + zeroPaddedLevel + '.js';

    // Load remix code for sandbox when available
    if( remixUrl && storage.get('skipToSandbox') == 'true' ){
        // Pull game from dev or live (CORS is currently breaking pulls from globaloria-dev.s3)
        if(window.location.href.match(/makequest.carnegielearning.com/)){
            // Need to use full bucket name. Using mymakequest will throw an error
            // codeUrl = 'http://mymakequest.globaloria.s3-website-us-east-1.amazonaws.com/'+remixUrl[1];
            // codeUrl = 'http://mymakequest.globaloria.com.s3-website-us-east-1.amazonaws.com/'+remixUrl[1];
            codeUrl = 'https://mymakequest.carnegielearning.com/'+remixUrl[1];
        }else{
            // codeUrl = 'https://globaloria-dev.s3.amazonaws.com/'+remixUrl[1];
            codeUrl = 'https://hackpub-publisher-dev.s3.amazonaws.com/'+remixUrl[1];
        }
    }

    $.get(codeUrl, function(data) {
        // Extract editor code from the published HTML document
        if(remixUrl){
            debug2 = data;
            var remixCode = data.match(/<script id="published-level-code">([\s\S])+?<\/script>/g);
            if(remixCode){
                // Data should only be the editor specific code (i.e. the captured group)
                data = remixCode[0].replace('<script id="published-level-code">', '').replace('</script>', '');
            }
        }

        var markHints = [];
        var readOnlyTokens = [];
        var readOnlyRanges = [];
        var foldedRanges = [];
        var currLineNumber = 0;
        var currIndentation = 0;
        var editorTooltips = [];
        var editorCommands = {
            markHint: function() {
                markHints.push(arguments);
            },
            readOnlyToken: function(){
                readOnlyTokens.push(arguments);
            },
            beginReadOnly: function() {
                readOnlyRanges.push([currLineNumber]);
            },
            endReadOnly: function() {
                var currRange = readOnlyRanges[readOnlyRanges.length - 1];
                currRange.push(currLineNumber);
            },
            beginCodeFold: function(linkText) {
                foldedRanges.push({
                    begin: currLineNumber,
                    indentation: currIndentation,
                    linkText: linkText || 'More\u2026'
                });
            },
            endCodeFold: function() {
                var currRange = foldedRanges[foldedRanges.length - 1];
                currRange.end = currLineNumber;
            },

            insertTooltip: function(){
                editorTooltips.push(arguments);
            }
        };

        // Normalize whitespace if we're on windows.
        data = data.replace(/\r\n/g, '\n');

        // We want to make it less likely that the user accidentally
        // deletes the closing brace of a function definition or adds
        // code after it, so we'll move it way down to the bottom of
        // the file with plenty of white-space in between.
        data = data.replace(/}\n*$/, '\n\n\n\n\n\n\n\n\n\n}\n');

        data = data.split('\n').filter(function(line) {
            var match = line.match(/(\s*)\/\/\s*EDITOR:(.*)/);
            if (!match) {
                currLineNumber++;
                return true;
            }

            currIndentation = match[1];
            with (editorCommands) {
                console.log("Executing editor command: " + match[2]);
                eval(match[2]);
            }

            return false;
        }).join('\n');

        originalEditorContent = data;
        editor_js.setValue(data);
        // Mark editor as clean after inserting the base template to handle Undo display
        editor_js.markClean();
        // Since the editor will be clean to start with, disable Undo
        $("#undo").prop("disabled",true);

        // Make the first line read-only.
        readOnlyRanges.push([0, 1]);

        // Make the last two lines read-only.
        readOnlyRanges.push([editor_js.lineCount() - 2, 
                             editor_js.lineCount()]);

        readOnlyRanges.forEach(function(range) {
            editor_js.markText({line: range[0], ch: 0}, {
              line: range[1],
              ch: 0
            }, {
              className: 'js-read-only',
              readOnly: true
          });
        });

        readOnlyTokens.forEach(function(arguments) {
            readOnlyToken.apply(this, arguments);
        });

        markHints.forEach(function(arguments) {
            markHint.apply(this, arguments);
        });

        $("#js_editor").removeClass('show-js-hints');

        if (markHints.length) {
            $("#showHints").show();
        } else {
            $("#showHints").hide();
        }

        foldedRanges.forEach(function(range) {
            var start = {line: range.begin, ch: 0};
            var span = $('<span class="cm-comment">' + range.indentation +
                         '// </span>');
            $('<span class="js-code-fold-link"></span>')
              .text(range.linkText)
              .appendTo(span);
            editor_js.foldCode(start, {
                widget: span[0],
                rangeFinder: function(cm, pos) {
                    return {
                        from: start,
                        to: {
                            line: range.end - 1,
                            ch: editor_js.getLine(range.end - 1).length
                        }
                    };
                }
            });
        });

        editorTooltips.forEach(function(arguments){
            insertEditoTooltip.apply(this, arguments);
        });

        cb();
    });
    
    // Set session storage and reload the iframe to be synched
    storage.set('currentLevel', currentLevel);
    document.getElementById('preview').contentWindow.location.reload();
}

function showHints() {
    $("#js_editor").addClass('show-js-hints');
    $("#showHints").fadeOut();
}

function nextLevel(){
    currentLevel == maxLevel ? maxLevel : currentLevel++;
    
    //Update iframe source
    // $('iframe#preview').attr('src', 'project_template/index'+currentLevel+'.html');
    // $instructions.find("h3").text(instructions["level"+currentLevel].title);
    // $instructions.find("p").text(instructions["level"+currentLevel].content);
    loadMiniCourse();
}

function prevLevel(){
    currentLevel == 1 ? 1 : currentLevel--;
    
    //Update iframe source
    // $('iframe#preview').attr('src', 'project_template/index'+currentLevel+'.html');
    // $instructions.find("h3").text(instructions["level"+currentLevel].title);
    // $instructions.find("p").text(instructions["level"+currentLevel].content);
    loadMiniCourse();
}
