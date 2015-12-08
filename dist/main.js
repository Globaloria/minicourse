function revertMiniCourse(){loadMiniCourse(refreshPreview)}function publishPrompt(){$("#publishModal").foundation("reveal","open")}function publish(){console.log("PARENT PUBLISH"),generatedHTML=null,MinicoursePublisher.generateHTML({baseURL:"./mini/",baseLevel:maxLevel,js:editor_js.getValue(),formInfo:'<span id="first_name">'+$("#first_name").val().charAt(0).toUpperCase()+$("#first_name").val().slice(1)+'</span> from <span id="city">'+$("#city").val()+'</span><span id="grade" style="display: none;">'+$("#grade").val()+'</span><span id="school" style="display: none;">'+$("#00NU0000005PN7e").val()+'</span><span id="state" style="display: none;">'+$("#state").val()+'</span><span id="country" style="display: none;">'+$("#country").val()+"</span>"},function(e,n){if(e)return void alert("Error generating published HTML: "+e.message);if(generatedHTML=n,console.log("GENERATED HTML"),console.log(generatedHTML),!generatedHTML)return void alert("There was an error publishing your game. Please try again later!");$("#published").hide(),$("#publishing").fadeIn();var o=window.location.hostname.indexOf("code.globaloria.com")>-1?"http://globaloria.com:8000/":"https://hackpub.herokuapp.com/buckets/globaloria/";$.ajax({type:"POST",url:o+"publish",data:{html:generatedHTML},crossDomain:!0,dataType:"json",error:function(){alert("Error publishing HTML!"),console.log(arguments)},success:function(e){$("#published").fadeIn().find("a").attr("href",e["published-url"]).text(e["published-url"]),$("#publish-form input#retUrl").val(e["published-url"]),$("#00NU0000005PN7t").val(e["published-url"]);var n=[];$("#isStudent").prop("checked")&&n.push($("#isStudent").val()),$("#isTeacher").prop("checked")&&n.push($("#isTeacher").val()),$("#isParent").prop("checked")&&n.push($("#isParent").val()),$("#isAdministrator").prop("checked")&&n.push($("#isAdministrator").val()),$("#00NU0000005Ph2K").val(n.join(",")),$("#publish-form").unbind().submit()},complete:function(){$("#publishing").hide()}})})}function loadMiniCourse(cb){cb=cb||function(){},console.log("Loading mini course template");var zeroPaddedLevel=currentLevel<10?"0"+currentLevel:currentLevel;"true"==window.sessionStorage.skipToSandbox&&(zeroPaddedLevel=maxLevel),$.get("mini/levels/"+zeroPaddedLevel+".js",function(data){var markHints=[],readOnlyTokens=[],readOnlyRanges=[],foldedRanges=[],currLineNumber=0,currIndentation=0,editorTooltips=[],editorCommands={markHint:function(){markHints.push(arguments)},readOnlyToken:function(){readOnlyTokens.push(arguments)},beginReadOnly:function(){readOnlyRanges.push([currLineNumber])},endReadOnly:function(){var e=readOnlyRanges[readOnlyRanges.length-1];e.push(currLineNumber)},beginCodeFold:function(e){foldedRanges.push({begin:currLineNumber,indentation:currIndentation,linkText:e||"More…"})},endCodeFold:function(){var e=foldedRanges[foldedRanges.length-1];e.end=currLineNumber},insertTooltip:function(){editorTooltips.push(arguments)}};console.log("Course retrieved: "),console.log(data),data=data.replace(/\r\n/g,"\n"),data=data.replace(/}\n*$/,"\n\n\n\n\n\n\n\n\n\n}\n"),data=data.split("\n").filter(function(line){var match=line.match(/(\s*)\/\/\s*EDITOR:(.*)/);if(!match)return currLineNumber++,!0;with(currIndentation=match[1],editorCommands)console.log("Executing editor command: "+match[2]),eval(match[2]);return!1}).join("\n"),originalEditorContent=data,editor_js.setValue(data),readOnlyRanges.push([0,1]),readOnlyRanges.push([editor_js.lineCount()-2,editor_js.lineCount()]),readOnlyRanges.forEach(function(e){editor_js.markText({line:e[0],ch:0},{line:e[1],ch:0},{className:"js-read-only",readOnly:!0})}),readOnlyTokens.forEach(function(e){readOnlyToken.apply(this,e)}),markHints.forEach(function(e){markHint.apply(this,e)}),$("#js_editor").removeClass("show-js-hints"),markHints.length?$("#showHints").show():$("#showHints").hide(),foldedRanges.forEach(function(e){var n={line:e.begin,ch:0},o=$('<span class="cm-comment">'+e.indentation+"// </span>");$('<span class="js-code-fold-link"></span>').text(e.linkText).appendTo(o),editor_js.foldCode(n,{widget:o[0],rangeFinder:function(o,t){return{from:n,to:{line:e.end-1,ch:editor_js.getLine(e.end-1).length}}}})}),editorTooltips.forEach(function(e){insertEditoTooltip.apply(this,e)}),cb()})}function showHints(){$("#js_editor").addClass("show-js-hints"),$("#showHints").fadeOut()}function nextLevel(){currentLevel==maxLevel?maxLevel:currentLevel++,loadMiniCourse()}function prevLevel(){1==currentLevel?1:currentLevel--,loadMiniCourse()}var maxLevel=gameConstants.MAX_LEVEL;$(document).ready(function(){storage.set("skipToSandbox",!1),$("main").css("height",window.innerHeight-36),$("#welcomeModal").foundation("reveal","open"),$(document).on("close.fndtn.reveal","#welcomeModal",function(){$(document).foundation("joyride","start",{pre_ride_callback:function(){$("#revert").css("display","block"),$("#showHints").css("display","block"),$("#previous").css("display","block"),$("#next").css("display","block")},pre_step_callback:function(){console.log(this.$target.first().attr("id")),"preview"==this.$target.first().attr("id")?$("iframe").contents().find("canvas").addClass("joyride-highlight"):this.$target.first().addClass("joyride-highlight")},post_step_callback:function(){"preview"==this.$target.first().attr("id")?$("iframe").contents().find("canvas").removeClass("joyride-highlight"):this.$target.first().removeClass("joyride-highlight")},post_ride_callback:function(){$("#revert").css("display","none"),$("#showHints").css("display","none"),$("#previous").css("display","none"),$("#next").css("display","none")},abort_on_close:!1})});var e=0,n=window.location.search.match(/debugLevel=(\d+)/);n&&(e=parseInt(n[1])),window.sessionStorage.currentLevel=e,currentLevel=e,$instructions=$("#instructions"),$(document).on("click","#loginButton",function(e){e.preventDefault(),console.log("login"),console.log(this);var n=document.getElementById("sign_in_email").value,o=document.getElementById("sign_in_password").value;authWithPassword({email:n,password:o},authHandler),$("#signupModal").foundation("reveal","close")}),$(document).on("click","span.tooltip",function(){Foundation.libs.tooltip.hide($("#editor-tooltip")),$(this).remove(),$("#editor-tooltip").remove()}),$(document).on("click","#signupButton",function(e){e.preventDefault(),console.log("signup"),console.log(this);var n=document.getElementById("sign_up_email").value,o=document.getElementById("sign_up_password").value;createUserAndLogin({email:n,password:o}),$("#signupModal").foundation("reveal","close")}),$(document).on("click","#logout",function(e){e.preventDefault(),console.log("logout"),console.log(this),logout()}),loadMiniCourse(),$("iframe#preview").attr("src","mini/index.html").focus(),$("form #00NU0000005PN7j").on("change",function(){console.log($(this).prop("checked")),$(this).prop("checked")?($("#first_name").prop("disabled",!1),$("#email").prop("disabled",!1),$("#phone").prop("disabled",!1)):($("#first_name").val(""),$("#email").val(""),$("#phone").val(""),$("#first_name").prop("disabled",!0),$("#email").prop("disabled",!0),$("#phone").prop("disabled",!0))}),$("#publish-form").submit(function(e){return console.log("VALIDATING"),""==$("#00NU0000005PN7e").val()||""==$("#city").val()||""==$("#country").val()||""==$("#state").val()?(console.log("VALIDATION FAILED"),!1):(console.log("PUBLISHING"),publish(),e.preventDefault(),!1)})});