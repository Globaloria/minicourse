!function(n){"object"==typeof exports&&"object"==typeof module?n(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],n):n(CodeMirror)}(function(n){"use strict";function o(o,i,t,f){function l(n){var e=d(o,i);if(!e||e.to.line-e.from.line<u)return null;for(var r=o.findMarksAt(e.from),t=0;t<r.length;++t)if(r[t].__isFold&&"fold"!==f){if(!n)return null;e.cleared=!0,r[t].clear()}return e}if(t&&t.call){var d=t;t=null}else var d=r(o,t,"rangeFinder");"number"==typeof i&&(i=n.Pos(i,0));var u=r(o,t,"minFoldSize"),a=l(!0);if(r(o,t,"scanUp"))for(;!a&&i.line>o.firstLine();)i=n.Pos(i.line-1,0),a=l(!1);if(a&&!a.cleared&&"unfold"!==f){var c=e(o,t);n.on(c,"mousedown",function(o){s.clear(),n.e_preventDefault(o)});var s=o.markText(a.from,a.to,{replacedWith:c,clearOnEnter:!0,__isFold:!0});s.on("clear",function(e,r){n.signal(o,"unfold",o,e,r)}),n.signal(o,"fold",o,a.from,a.to)}}function e(n,o){var e=r(n,o,"widget");if("string"==typeof e){var i=document.createTextNode(e);e=document.createElement("span"),e.appendChild(i),e.className="CodeMirror-foldmarker"}return e}function r(n,o,e){if(o&&void 0!==o[e])return o[e];var r=n.options.foldOptions;return r&&void 0!==r[e]?r[e]:i[e]}n.newFoldFunction=function(n,e){return function(r,i){o(r,i,{rangeFinder:n,widget:e})}},n.defineExtension("foldCode",function(n,e,r){o(this,n,e,r)}),n.defineExtension("isFolded",function(n){for(var o=this.findMarksAt(n),e=0;e<o.length;++e)if(o[e].__isFold)return!0}),n.commands.toggleFold=function(n){n.foldCode(n.getCursor())},n.commands.fold=function(n){n.foldCode(n.getCursor(),null,"fold")},n.commands.unfold=function(n){n.foldCode(n.getCursor(),null,"unfold")},n.commands.foldAll=function(o){o.operation(function(){for(var e=o.firstLine(),r=o.lastLine();e<=r;e++)o.foldCode(n.Pos(e,0),null,"fold")})},n.commands.unfoldAll=function(o){o.operation(function(){for(var e=o.firstLine(),r=o.lastLine();e<=r;e++)o.foldCode(n.Pos(e,0),null,"unfold")})},n.registerHelper("fold","combine",function(){var n=Array.prototype.slice.call(arguments,0);return function(o,e){for(var r=0;r<n.length;++r){var i=n[r](o,e);if(i)return i}}}),n.registerHelper("fold","auto",function(n,o){for(var e=n.getHelpers(o,"fold"),r=0;r<e.length;r++){var i=e[r](n,o);if(i)return i}});var i={rangeFinder:n.fold.auto,widget:"↔",minFoldSize:0,scanUp:!1};n.defineOption("foldOptions",null),n.defineExtension("foldOption",function(n,o){return r(this,n,o)})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbmRvci9jb2RlbWlycm9yL2ZvbGRjb2RlLmpzIl0sIm5hbWVzIjpbIm1vZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJyZXF1aXJlIiwiZGVmaW5lIiwiYW1kIiwiQ29kZU1pcnJvciIsImRvRm9sZCIsImNtIiwicG9zIiwib3B0aW9ucyIsImZvcmNlIiwiZ2V0UmFuZ2UiLCJhbGxvd0ZvbGRlZCIsInJhbmdlIiwiZmluZGVyIiwidG8iLCJsaW5lIiwiZnJvbSIsIm1pblNpemUiLCJtYXJrcyIsImZpbmRNYXJrc0F0IiwiaSIsImxlbmd0aCIsIl9faXNGb2xkIiwiY2xlYXJlZCIsImNsZWFyIiwiY2FsbCIsImdldE9wdGlvbiIsIlBvcyIsImZpcnN0TGluZSIsIm15V2lkZ2V0IiwibWFrZVdpZGdldCIsIm9uIiwiZSIsIm15UmFuZ2UiLCJlX3ByZXZlbnREZWZhdWx0IiwibWFya1RleHQiLCJyZXBsYWNlZFdpdGgiLCJjbGVhck9uRW50ZXIiLCJzaWduYWwiLCJ3aWRnZXQiLCJ0ZXh0IiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImNsYXNzTmFtZSIsIm5hbWUiLCJ1bmRlZmluZWQiLCJlZGl0b3JPcHRpb25zIiwiZm9sZE9wdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsIm5ld0ZvbGRGdW5jdGlvbiIsInJhbmdlRmluZGVyIiwiZGVmaW5lRXh0ZW5zaW9uIiwidGhpcyIsImNvbW1hbmRzIiwidG9nZ2xlRm9sZCIsImZvbGRDb2RlIiwiZ2V0Q3Vyc29yIiwiZm9sZCIsInVuZm9sZCIsImZvbGRBbGwiLCJvcGVyYXRpb24iLCJsYXN0TGluZSIsInVuZm9sZEFsbCIsInJlZ2lzdGVySGVscGVyIiwiZnVuY3MiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiYXJndW1lbnRzIiwic3RhcnQiLCJmb3VuZCIsImhlbHBlcnMiLCJnZXRIZWxwZXJzIiwiY3VyIiwiYXV0byIsIm1pbkZvbGRTaXplIiwi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R0FEREUsR0FBVW5FLEVBQUdvRSxXQUFXSCxFQUFPLFFBQzFCbkQsRUFBSSxFQUFHQSxFQUFJcUQsRUFBUXBELE9BQVFELElBQUssQ0FDdkMsR0FBSXVELEdBQU1GLEVBQVFyRCxHQUFHZCxFQUFJaUUsRUFDekIsSUFBSUksRUFBSyxNQUFPQSxLQUlwQixJQUFJekIsSUFDRkUsWUFBYWhELEVBQVd1RCxLQUFLaUIsS0FDN0JyQyxPQUFRLElBQ1JzQyxZQUFhLEVBQ2JDLFFBQVEsRUFHVjFFLEdBQVcyRSxhQUFhLGNBQWUsTUFXdkMzRSxFQUFXaUQsZ0JBQWdCLGFBQWMsU0FBUzdDLEVBQVNzQyxHQUN6RCxNQUFPcEIsR0FBVTRCLEtBQU05QyxFQUFTc0MiLCJmaWxlIjoidmVuZG9yL2NvZGVtaXJyb3IvZm9sZGNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb2RlTWlycm9yLCBjb3B5cmlnaHQgKGMpIGJ5IE1hcmlqbiBIYXZlcmJla2UgYW5kIG90aGVyc1xuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgYW4gTUlUIGxpY2Vuc2U6IGh0dHA6Ly9jb2RlbWlycm9yLm5ldC9MSUNFTlNFXG5cbihmdW5jdGlvbihtb2QpIHtcbiAgaWYgKHR5cGVvZiBleHBvcnRzID09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZSA9PSBcIm9iamVjdFwiKSAvLyBDb21tb25KU1xuICAgIG1vZChyZXF1aXJlKFwiLi4vLi4vbGliL2NvZGVtaXJyb3JcIikpO1xuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSAvLyBBTURcbiAgICBkZWZpbmUoW1wiLi4vLi4vbGliL2NvZGVtaXJyb3JcIl0sIG1vZCk7XG4gIGVsc2UgLy8gUGxhaW4gYnJvd3NlciBlbnZcbiAgICBtb2QoQ29kZU1pcnJvcik7XG59KShmdW5jdGlvbihDb2RlTWlycm9yKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGZ1bmN0aW9uIGRvRm9sZChjbSwgcG9zLCBvcHRpb25zLCBmb3JjZSkge1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuY2FsbCkge1xuICAgICAgdmFyIGZpbmRlciA9IG9wdGlvbnM7XG4gICAgICBvcHRpb25zID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGZpbmRlciA9IGdldE9wdGlvbihjbSwgb3B0aW9ucywgXCJyYW5nZUZpbmRlclwiKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBwb3MgPT0gXCJudW1iZXJcIikgcG9zID0gQ29kZU1pcnJvci5Qb3MocG9zLCAwKTtcbiAgICB2YXIgbWluU2l6ZSA9IGdldE9wdGlvbihjbSwgb3B0aW9ucywgXCJtaW5Gb2xkU2l6ZVwiKTtcblxuICAgIGZ1bmN0aW9uIGdldFJhbmdlKGFsbG93Rm9sZGVkKSB7XG4gICAgICB2YXIgcmFuZ2UgPSBmaW5kZXIoY20sIHBvcyk7XG4gICAgICBpZiAoIXJhbmdlIHx8IHJhbmdlLnRvLmxpbmUgLSByYW5nZS5mcm9tLmxpbmUgPCBtaW5TaXplKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciBtYXJrcyA9IGNtLmZpbmRNYXJrc0F0KHJhbmdlLmZyb20pO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXJrcy5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAobWFya3NbaV0uX19pc0ZvbGQgJiYgZm9yY2UgIT09IFwiZm9sZFwiKSB7XG4gICAgICAgICAgaWYgKCFhbGxvd0ZvbGRlZCkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgcmFuZ2UuY2xlYXJlZCA9IHRydWU7XG4gICAgICAgICAgbWFya3NbaV0uY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJhbmdlO1xuICAgIH1cblxuICAgIHZhciByYW5nZSA9IGdldFJhbmdlKHRydWUpO1xuICAgIGlmIChnZXRPcHRpb24oY20sIG9wdGlvbnMsIFwic2NhblVwXCIpKSB3aGlsZSAoIXJhbmdlICYmIHBvcy5saW5lID4gY20uZmlyc3RMaW5lKCkpIHtcbiAgICAgIHBvcyA9IENvZGVNaXJyb3IuUG9zKHBvcy5saW5lIC0gMSwgMCk7XG4gICAgICByYW5nZSA9IGdldFJhbmdlKGZhbHNlKTtcbiAgICB9XG4gICAgaWYgKCFyYW5nZSB8fCByYW5nZS5jbGVhcmVkIHx8IGZvcmNlID09PSBcInVuZm9sZFwiKSByZXR1cm47XG5cbiAgICB2YXIgbXlXaWRnZXQgPSBtYWtlV2lkZ2V0KGNtLCBvcHRpb25zKTtcbiAgICBDb2RlTWlycm9yLm9uKG15V2lkZ2V0LCBcIm1vdXNlZG93blwiLCBmdW5jdGlvbihlKSB7XG4gICAgICBteVJhbmdlLmNsZWFyKCk7XG4gICAgICBDb2RlTWlycm9yLmVfcHJldmVudERlZmF1bHQoZSk7XG4gICAgfSk7XG4gICAgdmFyIG15UmFuZ2UgPSBjbS5tYXJrVGV4dChyYW5nZS5mcm9tLCByYW5nZS50bywge1xuICAgICAgcmVwbGFjZWRXaXRoOiBteVdpZGdldCxcbiAgICAgIGNsZWFyT25FbnRlcjogdHJ1ZSxcbiAgICAgIF9faXNGb2xkOiB0cnVlXG4gICAgfSk7XG4gICAgbXlSYW5nZS5vbihcImNsZWFyXCIsIGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gICAgICBDb2RlTWlycm9yLnNpZ25hbChjbSwgXCJ1bmZvbGRcIiwgY20sIGZyb20sIHRvKTtcbiAgICB9KTtcbiAgICBDb2RlTWlycm9yLnNpZ25hbChjbSwgXCJmb2xkXCIsIGNtLCByYW5nZS5mcm9tLCByYW5nZS50byk7XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlV2lkZ2V0KGNtLCBvcHRpb25zKSB7XG4gICAgdmFyIHdpZGdldCA9IGdldE9wdGlvbihjbSwgb3B0aW9ucywgXCJ3aWRnZXRcIik7XG4gICAgaWYgKHR5cGVvZiB3aWRnZXQgPT0gXCJzdHJpbmdcIikge1xuICAgICAgdmFyIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh3aWRnZXQpO1xuICAgICAgd2lkZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICB3aWRnZXQuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICB3aWRnZXQuY2xhc3NOYW1lID0gXCJDb2RlTWlycm9yLWZvbGRtYXJrZXJcIjtcbiAgICB9XG4gICAgcmV0dXJuIHdpZGdldDtcbiAgfVxuXG4gIC8vIENsdW1zeSBiYWNrd2FyZHMtY29tcGF0aWJsZSBpbnRlcmZhY2VcbiAgQ29kZU1pcnJvci5uZXdGb2xkRnVuY3Rpb24gPSBmdW5jdGlvbihyYW5nZUZpbmRlciwgd2lkZ2V0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGNtLCBwb3MpIHsgZG9Gb2xkKGNtLCBwb3MsIHtyYW5nZUZpbmRlcjogcmFuZ2VGaW5kZXIsIHdpZGdldDogd2lkZ2V0fSk7IH07XG4gIH07XG5cbiAgLy8gTmV3LXN0eWxlIGludGVyZmFjZVxuICBDb2RlTWlycm9yLmRlZmluZUV4dGVuc2lvbihcImZvbGRDb2RlXCIsIGZ1bmN0aW9uKHBvcywgb3B0aW9ucywgZm9yY2UpIHtcbiAgICBkb0ZvbGQodGhpcywgcG9zLCBvcHRpb25zLCBmb3JjZSk7XG4gIH0pO1xuXG4gIENvZGVNaXJyb3IuZGVmaW5lRXh0ZW5zaW9uKFwiaXNGb2xkZWRcIiwgZnVuY3Rpb24ocG9zKSB7XG4gICAgdmFyIG1hcmtzID0gdGhpcy5maW5kTWFya3NBdChwb3MpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWFya3MubGVuZ3RoOyArK2kpXG4gICAgICBpZiAobWFya3NbaV0uX19pc0ZvbGQpIHJldHVybiB0cnVlO1xuICB9KTtcblxuICBDb2RlTWlycm9yLmNvbW1hbmRzLnRvZ2dsZUZvbGQgPSBmdW5jdGlvbihjbSkge1xuICAgIGNtLmZvbGRDb2RlKGNtLmdldEN1cnNvcigpKTtcbiAgfTtcbiAgQ29kZU1pcnJvci5jb21tYW5kcy5mb2xkID0gZnVuY3Rpb24oY20pIHtcbiAgICBjbS5mb2xkQ29kZShjbS5nZXRDdXJzb3IoKSwgbnVsbCwgXCJmb2xkXCIpO1xuICB9O1xuICBDb2RlTWlycm9yLmNvbW1hbmRzLnVuZm9sZCA9IGZ1bmN0aW9uKGNtKSB7XG4gICAgY20uZm9sZENvZGUoY20uZ2V0Q3Vyc29yKCksIG51bGwsIFwidW5mb2xkXCIpO1xuICB9O1xuICBDb2RlTWlycm9yLmNvbW1hbmRzLmZvbGRBbGwgPSBmdW5jdGlvbihjbSkge1xuICAgIGNtLm9wZXJhdGlvbihmdW5jdGlvbigpIHtcbiAgICAgIGZvciAodmFyIGkgPSBjbS5maXJzdExpbmUoKSwgZSA9IGNtLmxhc3RMaW5lKCk7IGkgPD0gZTsgaSsrKVxuICAgICAgICBjbS5mb2xkQ29kZShDb2RlTWlycm9yLlBvcyhpLCAwKSwgbnVsbCwgXCJmb2xkXCIpO1xuICAgIH0pO1xuICB9O1xuICBDb2RlTWlycm9yLmNvbW1hbmRzLnVuZm9sZEFsbCA9IGZ1bmN0aW9uKGNtKSB7XG4gICAgY20ub3BlcmF0aW9uKGZ1bmN0aW9uKCkge1xuICAgICAgZm9yICh2YXIgaSA9IGNtLmZpcnN0TGluZSgpLCBlID0gY20ubGFzdExpbmUoKTsgaSA8PSBlOyBpKyspXG4gICAgICAgIGNtLmZvbGRDb2RlKENvZGVNaXJyb3IuUG9zKGksIDApLCBudWxsLCBcInVuZm9sZFwiKTtcbiAgICB9KTtcbiAgfTtcblxuICBDb2RlTWlycm9yLnJlZ2lzdGVySGVscGVyKFwiZm9sZFwiLCBcImNvbWJpbmVcIiwgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZ1bmNzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oY20sIHN0YXJ0KSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZ1bmNzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBmb3VuZCA9IGZ1bmNzW2ldKGNtLCBzdGFydCk7XG4gICAgICAgIGlmIChmb3VuZCkgcmV0dXJuIGZvdW5kO1xuICAgICAgfVxuICAgIH07XG4gIH0pO1xuXG4gIENvZGVNaXJyb3IucmVnaXN0ZXJIZWxwZXIoXCJmb2xkXCIsIFwiYXV0b1wiLCBmdW5jdGlvbihjbSwgc3RhcnQpIHtcbiAgICB2YXIgaGVscGVycyA9IGNtLmdldEhlbHBlcnMoc3RhcnQsIFwiZm9sZFwiKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhlbHBlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjdXIgPSBoZWxwZXJzW2ldKGNtLCBzdGFydCk7XG4gICAgICBpZiAoY3VyKSByZXR1cm4gY3VyO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIHJhbmdlRmluZGVyOiBDb2RlTWlycm9yLmZvbGQuYXV0byxcbiAgICB3aWRnZXQ6IFwiXFx1MjE5NFwiLFxuICAgIG1pbkZvbGRTaXplOiAwLFxuICAgIHNjYW5VcDogZmFsc2VcbiAgfTtcblxuICBDb2RlTWlycm9yLmRlZmluZU9wdGlvbihcImZvbGRPcHRpb25zXCIsIG51bGwpO1xuXG4gIGZ1bmN0aW9uIGdldE9wdGlvbihjbSwgb3B0aW9ucywgbmFtZSkge1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnNbbmFtZV0gIT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybiBvcHRpb25zW25hbWVdO1xuICAgIHZhciBlZGl0b3JPcHRpb25zID0gY20ub3B0aW9ucy5mb2xkT3B0aW9ucztcbiAgICBpZiAoZWRpdG9yT3B0aW9ucyAmJiBlZGl0b3JPcHRpb25zW25hbWVdICE9PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gZWRpdG9yT3B0aW9uc1tuYW1lXTtcbiAgICByZXR1cm4gZGVmYXVsdE9wdGlvbnNbbmFtZV07XG4gIH1cblxuICBDb2RlTWlycm9yLmRlZmluZUV4dGVuc2lvbihcImZvbGRPcHRpb25cIiwgZnVuY3Rpb24ob3B0aW9ucywgbmFtZSkge1xuICAgIHJldHVybiBnZXRPcHRpb24odGhpcywgb3B0aW9ucywgbmFtZSk7XG4gIH0pO1xufSk7XG4iXX0=
