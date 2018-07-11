function markHint(){var e=[],o=0,n=0,r=editor_js.getValue(),t=esprima.tokenize(r,{range:!0}),i=[].slice.call(arguments).map(function(e){return null===e?{canBeAnything:!0}:("string"==typeof e&&(e={value:e}),e)}),l=function(e,o){return!!e.canBeAnything||("value"in e?o.value===e.value:"type"in e?o.type==e.type:void 0)};t.forEach(function(r,t){var a=i[o];l(a,r)?(o++,a.highlight&&e.push(r),i.length==o&&(e.forEach(function(e){var o=editor_js.posFromIndex(e.range[0]),r=editor_js.posFromIndex(e.range[1]);0==n++&&editor_js.scrollIntoView(o),editor_js.markText(o,r,{className:"js-hint"})}),o=0)):(o=0,e=[])})}function readOnlyToken(){var e=[],o=0,n=0,r=editor_js.getValue(),t=esprima.tokenize(r,{range:!0}),i=[].slice.call(arguments).map(function(e){return null===e?{canBeAnything:!0}:("string"==typeof e&&(e={value:e}),e)}),l=function(e,o){return!!e.canBeAnything||("value"in e?o.value===e.value:"type"in e?o.type==e.type:void 0)};t.forEach(function(r,t){var a=i[o];l(a,r)?(o++,a.highlight&&e.push(r),i.length==o&&(e.forEach(function(e){var o=editor_js.posFromIndex(e.range[0]),r=editor_js.posFromIndex(e.range[1]);0==n++&&editor_js.scrollIntoView(o),editor_js.markText(o,r,{className:"js-read-only",readOnly:!0})}),o=0)):(o=0,e=[])})}function markJsErrorAtLine(e){console.log("Marking error at: "+e);var o={line:e-1,ch:0};editor_js.markText(o,{line:e,ch:0},{className:"js-error",clearOnEnter:!0}),editor_js.scrollIntoView(o)}function refreshPreview(){console.log("Refreshing view");var e=editor_js.getValue();if(CustomErrors.test(e))return!1;if("undefined"!=typeof esprima)try{esprima.parse(e)}catch(o){if(o.lineNumber)return markJsErrorAtLine(o.lineNumber),$("#errorModal p.error-text").text(o.description+" at line "+o.lineNumber),void $("#errorModal").foundation("reveal","open")}try{console.log("Eval js"),console.log(document.getElementById("preview").contentWindow.remove),console.log(e),document.getElementById("preview").contentWindow.remove&&(document.getElementById("preview").contentWindow.eval(e+"//# sourceURL=user-level.js"),document.getElementById("preview").contentWindow.remove(),document.getElementById("preview").contentWindow.p5PlayRebind(),document.getElementById("preview").contentWindow.eval("new p5();"))}catch(n){StackTrace.fromError(n,{offline:!0,filter:function(e){return/user-level\.js/.test(e.fileName)}}).then(function(e){e.length&&markJsErrorAtLine(e[0].lineNumber)}),console.log("ERROR"),console.log(n),$("#errorModal p.error-text").text(n),$("#errorModal").foundation("reveal","open")}$("#preview").focus(),$("#preview").contents().find("canvas").focus()}function insertEditoTooltip(e,o,n){$("body").prepend('<span id="editor-tooltip" data-tooltip class="has-tip" title="'+e+'"></span>'),editor_js.addWidget({ch:n,line:o-1},$("#editor-tooltip")[0],!0),$(document).foundation("tooltip","reflow"),Foundation.libs.tooltip.showTip($("#editor-tooltip"))}var originalEditorContent="",editor_js=CodeMirror($("#js_editor")[0],{lineNumbers:!0,lineWrapping:!0,foldGutter:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],mode:"javascript"});editor_js.on("changes",function(){editor_js.isClean()?$("#undo").prop("disabled",!0):$("#undo").prop("disabled",!1)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2NvZGVtaXJyb3ItZWRpdG9ycy5qcyJdLCJuYW1lcyI6WyJtYXJrSGludCIsImNhbmRpZGF0ZU1hcmtzIiwiY2FuZGlkYXRlSW5kZXgiLCJudW1IaWdobGlnaHRzIiwiY29kZSIsImVkaXRvcl9qcyIsImdldFZhbHVlIiwidG9rZW5zIiwiZXNwcmltYSIsInRva2VuaXplIiwicmFuZ2UiLCJwYXR0ZXJuIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwibWFwIiwiYXJnIiwiY2FuQmVBbnl0aGluZyIsInZhbHVlIiwicGF0dGVyblBhcnRNYXRjaGVzIiwicGF0dGVyblBhcnQiLCJ0b2tlbiIsInR5cGUiLCJmb3JFYWNoIiwiaSIsImhpZ2hsaWdodCIsInB1c2giLCJsZW5ndGgiLCJzdGFydCIsInBvc0Zyb21JbmRleCIsImVuZCIsInNjcm9sbEludG9WaWV3IiwibWFya1RleHQiLCJjbGFzc05hbWUiLCJyZWFkT25seVRva2VuIiwicmVhZE9ubHkiLCJtYXJrSnNFcnJvckF0TGluZSIsImxpbmUiLCJjb25zb2xlIiwibG9nIiwiY2giLCJjbGVhck9uRW50ZXIiLCJyZWZyZXNoUHJldmlldyIsImpzX2NvbnRlbnQiLCJDdXN0b21FcnJvcnMiLCJ0ZXN0IiwicGFyc2UiLCJlIiwibGluZU51bWJlciIsIiQiLCJ0ZXh0IiwiZGVzY3JpcHRpb24iLCJmb3VuZGF0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRlbnRXaW5kb3ciLCJyZW1vdmUiLCJldmFsIiwicDVQbGF5UmViaW5kIiwiZXJyIiwiU3RhY2tUcmFjZSIsImZyb21FcnJvciIsIm9mZmxpbmUiLCJmaWx0ZXIiLCJzdGFja0ZyYW1lIiwiZmlsZU5hbWUiLCJ0aGVuIiwiZnJhbWVzIiwiZm9jdXMiLCJjb250ZW50cyIsImZpbmQiLCJpbnNlcnRFZGl0b1Rvb2x0aXAiLCJwcmVwZW5kIiwiYWRkV2lkZ2V0IiwiRm91bmRhdGlvbiIsImxpYnMiLCJ0b29sdGlwIiwic2hvd1RpcCIsIm9yaWdpbmFsRWRpdG9yQ29udGVudCIsIkNvZGVNaXJyb3IiLCJsaW5lTnVtYmVycyIsImxpbmVXcmFwcGluZyIsImZvbGRHdXR0ZXIiLCJndXR0ZXJzIiwibW9kZSIsIm9uIiwiaXNDbGVhbiIsInByb3AiXSwibWFwcGluZ3MiOiJBQW1CQSxRQUFTQSxZQUNQLEdBQUlDLE1BQ0FDLEVBQWlCLEVBQ2pCQyxFQUFnQixFQUNoQkMsRUFBT0MsVUFBVUMsV0FJakJDLEVBQVNDLFFBQVFDLFNBQVNMLEdBQU9NLE9BQU8sSUFFeENDLEtBQWFDLE1BQU1DLEtBQUtDLFdBQVdDLElBQUksU0FBU0MsR0FDbEQsTUFBWSxRQUFSQSxHQUFzQkMsZUFBZSxJQUN0QixnQkFBVCxLQUNSRCxHQUFPRSxNQUFPRixJQUVUQSxLQUVMRyxFQUFxQixTQUFTQyxFQUFhQyxHQUM3QyxRQUFJRCxFQUFZSCxnQkFDWixTQUFXRyxHQUNOQyxFQUFNSCxRQUFVRSxFQUFZRixNQUVqQyxRQUFVRSxHQUNMQyxFQUFNQyxNQUFRRixFQUFZRSxLQURuQyxRQUtGZixHQUFPZ0IsUUFBUSxTQUFTRixFQUFPRyxHQUM3QixHQUFJSixHQUFjVCxFQUFRVCxFQUV0QmlCLEdBQW1CQyxFQUFhQyxJQUNsQ25CLElBQ0lrQixFQUFZSyxXQUNkeEIsRUFBZXlCLEtBQUtMLEdBRWxCVixFQUFRZ0IsUUFBVXpCLElBQ3BCRCxFQUFlc0IsUUFBUSxTQUFTRixHQUM5QixHQUFJTyxHQUFRdkIsVUFBVXdCLGFBQWFSLEVBQU1YLE1BQU0sSUFDM0NvQixFQUFNekIsVUFBVXdCLGFBQWFSLEVBQU1YLE1BQU0sR0FFdEIsSUFBbkJQLEtBQ0ZFLFVBQVUwQixlQUFlSCxHQUUzQnZCLFVBQVUyQixTQUFTSixFQUFPRSxHQUN4QkcsVUFBVyxjQUdmL0IsRUFBaUIsS0FHbkJBLEVBQWlCLEVBQ2pCRCxRQU9OLFFBQVNpQyxpQkFDUCxHQUFJakMsTUFDQUMsRUFBaUIsRUFDakJDLEVBQWdCLEVBQ2hCQyxFQUFPQyxVQUFVQyxXQU1qQkMsRUFBU0MsUUFBUUMs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QUFJNkIsdUJBQXdCLEdBRXhCekUsVUFBWTBFLFdBQVc5QixFQUFFLGNBQWMsSUFDekMrQixhQUFhLEVBQ2JDLGNBQWMsRUFDZEMsWUFBWSxFQUNaQyxTQUFVLHlCQUEwQix5QkFDcENDLEtBQU0sY0FJUi9FLFdBQVVnRixHQUFHLFVBQVcsV0FDakJoRixVQUFVaUYsVUFDYnJDLEVBQUUsU0FBU3NDLEtBQUssWUFBVyxHQUUzQnRDLEVBQUUsU0FBU3NDLEtBQUssWUFBVyIsImZpbGUiOiJqcy9jb2RlbWlycm9yLWVkaXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgb3JpZ2luYWxFZGl0b3JDb250ZW50ID0gJyc7XG5cbnZhciBlZGl0b3JfanMgPSBDb2RlTWlycm9yKCQoJyNqc19lZGl0b3InKVswXSwge1xuICBsaW5lTnVtYmVyczogdHJ1ZSxcbiAgbGluZVdyYXBwaW5nOiB0cnVlLFxuICBmb2xkR3V0dGVyOiB0cnVlLFxuICBndXR0ZXJzOiBbXCJDb2RlTWlycm9yLWxpbmVudW1iZXJzXCIsIFwiQ29kZU1pcnJvci1mb2xkZ3V0dGVyXCJdLFxuICBtb2RlOiAnamF2YXNjcmlwdCcsXG4gIC8vIHRoZW1lIDogJ21vbm9rYWknXG59KTtcblxuZWRpdG9yX2pzLm9uKCdjaGFuZ2VzJywgZnVuY3Rpb24oKSB7XG4gIGlmICggZWRpdG9yX2pzLmlzQ2xlYW4oKSApIHtcbiAgICAkKFwiI3VuZG9cIikucHJvcChcImRpc2FibGVkXCIsdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgJChcIiN1bmRvXCIpLnByb3AoXCJkaXNhYmxlZFwiLGZhbHNlKTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG1hcmtIaW50KC8qIGVzcHJpbWEgdG9rZW4gbWF0Y2ggcGF0dGVybiAuLi4gKi8pIHtcbiAgdmFyIGNhbmRpZGF0ZU1hcmtzID0gW107XG4gIHZhciBjYW5kaWRhdGVJbmRleCA9IDA7XG4gIHZhciBudW1IaWdobGlnaHRzID0gMDtcbiAgdmFyIGNvZGUgPSBlZGl0b3JfanMuZ2V0VmFsdWUoKTtcblxuICAvLyBGb3IgZ3VpZGFuY2Ugb24gd2hhdCB0aGlzIG1pZ2h0IGxvb2sgbGlrZSBpbiBwcmFjdGljZSwgcGxheSBhcm91bmRcbiAgLy8gd2l0aCBodHRwOi8vZXNwcmltYS5vcmcvZGVtby9wYXJzZS5odG1sIGFuZCBzZWxlY3QgdGhlIFwiVG9rZW5zXCIgdGFiLlxuICB2YXIgdG9rZW5zID0gZXNwcmltYS50b2tlbml6ZShjb2RlLCB7cmFuZ2U6IHRydWV9KTtcblxuICB2YXIgcGF0dGVybiA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5tYXAoZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKGFyZyA9PT0gbnVsbCkgcmV0dXJuIHtjYW5CZUFueXRoaW5nOiB0cnVlfTtcbiAgICBpZiAodHlwZW9mKGFyZykgPT0gJ3N0cmluZycpIHtcbiAgICAgIGFyZyA9IHt2YWx1ZTogYXJnfTtcbiAgICB9XG4gICAgcmV0dXJuIGFyZztcbiAgfSk7XG4gIHZhciBwYXR0ZXJuUGFydE1hdGNoZXMgPSBmdW5jdGlvbihwYXR0ZXJuUGFydCwgdG9rZW4pIHtcbiAgICBpZiAocGF0dGVyblBhcnQuY2FuQmVBbnl0aGluZykgcmV0dXJuIHRydWU7XG4gICAgaWYgKCd2YWx1ZScgaW4gcGF0dGVyblBhcnQpIHtcbiAgICAgIHJldHVybiB0b2tlbi52YWx1ZSA9PT0gcGF0dGVyblBhcnQudmFsdWU7XG4gICAgfVxuICAgIGlmICgndHlwZScgaW4gcGF0dGVyblBhcnQpIHtcbiAgICAgIHJldHVybiB0b2tlbi50eXBlID09IHBhdHRlcm5QYXJ0LnR5cGU7XG4gICAgfVxuICB9O1xuXG4gIHRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uKHRva2VuLCBpKSB7XG4gICAgdmFyIHBhdHRlcm5QYXJ0ID0gcGF0dGVybltjYW5kaWRhdGVJbmRleF07XG5cbiAgICBpZiAocGF0dGVyblBhcnRNYXRjaGVzKHBhdHRlcm5QYXJ0LCB0b2tlbikpIHtcbiAgICAgIGNhbmRpZGF0ZUluZGV4Kys7XG4gICAgICBpZiAocGF0dGVyblBhcnQuaGlnaGxpZ2h0KSB7XG4gICAgICAgIGNhbmRpZGF0ZU1hcmtzLnB1c2godG9rZW4pO1xuICAgICAgfVxuICAgICAgaWYgKHBhdHRlcm4ubGVuZ3RoID09IGNhbmRpZGF0ZUluZGV4KSB7XG4gICAgICAgIGNhbmRpZGF0ZU1hcmtzLmZvckVhY2goZnVuY3Rpb24odG9rZW4pIHtcbiAgICAgICAgICB2YXIgc3RhcnQgPSBlZGl0b3JfanMucG9zRnJvbUluZGV4KHRva2VuLnJhbmdlWzBdKTtcbiAgICAgICAgICB2YXIgZW5kID0gZWRpdG9yX2pzLnBvc0Zyb21JbmRleCh0b2tlbi5yYW5nZVsxXSk7XG5cbiAgICAgICAgICBpZiAobnVtSGlnaGxpZ2h0cysrID09IDApIHtcbiAgICAgICAgICAgIGVkaXRvcl9qcy5zY3JvbGxJbnRvVmlldyhzdGFydCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVkaXRvcl9qcy5tYXJrVGV4dChzdGFydCwgZW5kLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdqcy1oaW50J1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgY2FuZGlkYXRlSW5kZXggPSAwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjYW5kaWRhdGVJbmRleCA9IDA7XG4gICAgICBjYW5kaWRhdGVNYXJrcyA9IFtdO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIE1ha2UgaW5saW5lIGNoYXJzIHJlYWRvbmx5XG4vLyBSZXVzaW5nIG1hcmtIaW50XG5mdW5jdGlvbiByZWFkT25seVRva2VuKC8qIGVzcHJpbWEgdG9rZW4gbWF0Y2ggcGF0dGVybiAuLi4gKi8pIHtcbiAgdmFyIGNhbmRpZGF0ZU1hcmtzID0gW107XG4gIHZhciBjYW5kaWRhdGVJbmRleCA9IDA7XG4gIHZhciBudW1IaWdobGlnaHRzID0gMDtcbiAgdmFyIGNvZGUgPSBlZGl0b3JfanMuZ2V0VmFsdWUoKTtcblxuXG5cbiAgLy8gRm9yIGd1aWRhbmNlIG9uIHdoYXQgdGhpcyBtaWdodCBsb29rIGxpa2UgaW4gcHJhY3RpY2UsIHBsYXkgYXJvdW5kXG4gIC8vIHdpdGggaHR0cDovL2VzcHJpbWEub3JnL2RlbW8vcGFyc2UuaHRtbCBhbmQgc2VsZWN0IHRoZSBcIlRva2Vuc1wiIHRhYi5cbiAgdmFyIHRva2VucyA9IGVzcHJpbWEudG9rZW5pemUoY29kZSwge3JhbmdlOiB0cnVlfSk7XG5cbiAgdmFyIHBhdHRlcm4gPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykubWFwKGZ1bmN0aW9uKGFyZykge1xuICAgIGlmIChhcmcgPT09IG51bGwpIHJldHVybiB7Y2FuQmVBbnl0aGluZzogdHJ1ZX07XG4gICAgaWYgKHR5cGVvZihhcmcpID09ICdzdHJpbmcnKSB7XG4gICAgICBhcmcgPSB7dmFsdWU6IGFyZ307XG4gICAgfVxuICAgIHJldHVybiBhcmc7XG4gIH0pO1xuICB2YXIgcGF0dGVyblBhcnRNYXRjaGVzID0gZnVuY3Rpb24ocGF0dGVyblBhcnQsIHRva2VuKSB7XG4gICAgaWYgKHBhdHRlcm5QYXJ0LmNhbkJlQW55dGhpbmcpIHJldHVybiB0cnVlO1xuICAgIGlmICgndmFsdWUnIGluIHBhdHRlcm5QYXJ0KSB7XG4gICAgICByZXR1cm4gdG9rZW4udmFsdWUgPT09IHBhdHRlcm5QYXJ0LnZhbHVlO1xuICAgIH1cbiAgICBpZiAoJ3R5cGUnIGluIHBhdHRlcm5QYXJ0KSB7XG4gICAgICByZXR1cm4gdG9rZW4udHlwZSA9PSBwYXR0ZXJuUGFydC50eXBlO1xuICAgIH1cbiAgfTtcblxuICB0b2tlbnMuZm9yRWFjaChmdW5jdGlvbih0b2tlbiwgaSkge1xuICAgIHZhciBwYXR0ZXJuUGFydCA9IHBhdHRlcm5bY2FuZGlkYXRlSW5kZXhdO1xuXG4gICAgaWYgKHBhdHRlcm5QYXJ0TWF0Y2hlcyhwYXR0ZXJuUGFydCwgdG9rZW4pKSB7XG4gICAgICBjYW5kaWRhdGVJbmRleCsrO1xuICAgICAgaWYgKHBhdHRlcm5QYXJ0LmhpZ2hsaWdodCkge1xuICAgICAgICBjYW5kaWRhdGVNYXJrcy5wdXNoKHRva2VuKTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXR0ZXJuLmxlbmd0aCA9PSBjYW5kaWRhdGVJbmRleCkge1xuICAgICAgICBjYW5kaWRhdGVNYXJrcy5mb3JFYWNoKGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgICAgICAgdmFyIHN0YXJ0ID0gZWRpdG9yX2pzLnBvc0Zyb21JbmRleCh0b2tlbi5yYW5nZVswXSk7XG4gICAgICAgICAgdmFyIGVuZCA9IGVkaXRvcl9qcy5wb3NGcm9tSW5kZXgodG9rZW4ucmFuZ2VbMV0pO1xuXG4gICAgICAgICAgaWYgKG51bUhpZ2hsaWdodHMrKyA9PSAwKSB7XG4gICAgICAgICAgICBlZGl0b3JfanMuc2Nyb2xsSW50b1ZpZXcoc3RhcnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlZGl0b3JfanMubWFya1RleHQoc3RhcnQsIGVuZCwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnanMtcmVhZC1vbmx5JyxcbiAgICAgICAgICAgIHJlYWRPbmx5OiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjYW5kaWRhdGVJbmRleCA9IDA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbmRpZGF0ZUluZGV4ID0gMDtcbiAgICAgIGNhbmRpZGF0ZU1hcmtzID0gW107XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gbWFya0pzRXJyb3JBdExpbmUobGluZSkge1xuICBjb25zb2xlLmxvZyhcIk1hcmtpbmcgZXJyb3IgYXQ6IFwiICsgbGluZSk7XG4gIHZhciBzdGFydCA9IHtsaW5lOiBsaW5lIC0gMSwgY2g6IDB9O1xuICBlZGl0b3JfanMubWFya1RleHQoc3RhcnQsIHtsaW5lOiBsaW5lLCBjaDogMH0sIHtcbiAgICBjbGFzc05hbWU6ICdqcy1lcnJvcicsXG4gICAgY2xlYXJPbkVudGVyOiB0cnVlXG4gIH0pO1xuICBlZGl0b3JfanMuc2Nyb2xsSW50b1ZpZXcoc3RhcnQpO1xufVxuXG5mdW5jdGlvbiByZWZyZXNoUHJldmlldygpIHtcbiAgY29uc29sZS5sb2coXCJSZWZyZXNoaW5nIHZpZXdcIik7XG5cbiAgLy8gRXJyb3IgZmVlZGJhY2sgZmFsbGJhY2tcbiAgLy8gVE9ETzogQ3VycmVudGx5IGNhdGNoaW5nIGVycm9ycyB3aXRoIGVzcHJpbWEgYW5kIGV2YWwuXG4gIHZhciBqc19jb250ZW50ID0gZWRpdG9yX2pzLmdldFZhbHVlKCk7XG5cbiAgLy8gVGVzdCBmb3IgY3VzdG9tIGZlZWRiYWNrIGZpcnN0IGFuZCBleGl0IGlmIGZvdW5kLiBcbiAgLy8gRXJyb3JzIHdpbGwgYmUgZGlzcGxheWVkIHRvIHRoZSB1c2VyLlxuICBpZiggQ3VzdG9tRXJyb3JzLnRlc3QoIGpzX2NvbnRlbnQgKSApe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBcbiAgLy8gdmFyIGVyciA9IEN1c3RvbUVycm9ycy50ZXN0KCBqc19jb250ZW50ICk7XG4gIC8vIGlmKCBlcnIgKXtcbiAgLy8gICAvLyBDdXN0b21FcnJvcnMuZGlzcGxheUVycm9yKGVycik7XG4gIC8vICAgcmV0dXJuO1xuICAvLyB9XG5cbiAgaWYgKHR5cGVvZihlc3ByaW1hKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0cnkge1xuICAgICAgZXNwcmltYS5wYXJzZShqc19jb250ZW50KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoZS5saW5lTnVtYmVyKSB7XG4gICAgICAgIG1hcmtKc0Vycm9yQXRMaW5lKGUubGluZU51bWJlcik7XG5cbiAgICAgICAgLy8gYWxlcnQoZS5kZXNjcmlwdGlvbiArIFwiIGF0IGxpbmUgXCIgKyBlLmxpbmVOdW1iZXIpO1xuICAgICAgICAkKCcjZXJyb3JNb2RhbCBwLmVycm9yLXRleHQnKS50ZXh0KCBlLmRlc2NyaXB0aW9uICsgXCIgYXQgbGluZSBcIiArIGUubGluZU51bWJlciApO1xuICAgICAgICAkKCcjZXJyb3JNb2RhbCcpLmZvdW5kYXRpb24oJ3JldmVhbCcsICdvcGVuJyk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vRXJyb3IgY2hlY2tpbmcgKHByb3ZpZGUgdXNlciBmZWVkYmFjaylcbiAgdHJ5IHtcbiAgICAgY29uc29sZS5sb2coXCJFdmFsIGpzXCIpO1xuICAgICBjb25zb2xlLmxvZyggZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXcnKS5jb250ZW50V2luZG93LnJlbW92ZSApO1xuICAgICBjb25zb2xlLmxvZyhqc19jb250ZW50KTtcblxuICAgIGlmKCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlldycpLmNvbnRlbnRXaW5kb3cucmVtb3ZlICl7XG4gICAgICAvL0V2YWwgdGhlIGNvZGUgdG8gb3ZlcndyaXRlIGV4aXN0aW5nIGZ1bmN0aW9uLiBBY2Nlc3MgdGhlIGlmcmFtZSBieSBuYW1lXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlldycpLmNvbnRlbnRXaW5kb3cuZXZhbChqc19jb250ZW50ICsgJy8vIyBzb3VyY2VVUkw9dXNlci1sZXZlbC5qcycpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXcnKS5jb250ZW50V2luZG93LnJlbW92ZSgpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXcnKS5jb250ZW50V2luZG93LnA1UGxheVJlYmluZCgpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXcnKS5jb250ZW50V2luZG93LmV2YWwoXCJuZXcgcDUoKTtcIik7XG4gICAgfVxuICAgIFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBTdGFja1RyYWNlLmZyb21FcnJvcihlcnIsIHtcbiAgICAgIG9mZmxpbmU6IHRydWUsXG4gICAgICBmaWx0ZXI6IGZ1bmN0aW9uKHN0YWNrRnJhbWUpIHtcbiAgICAgICAgcmV0dXJuIC91c2VyLWxldmVsXFwuanMvLnRlc3Qoc3RhY2tGcmFtZS5maWxlTmFtZSk7XG4gICAgICB9XG4gICAgfSkudGhlbihmdW5jdGlvbihmcmFtZXMpIHtcbiAgICAgIGlmIChmcmFtZXMubGVuZ3RoKSB7XG4gICAgICAgIG1hcmtKc0Vycm9yQXRMaW5lKGZyYW1lc1swXS5saW5lTnVtYmVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAgIC8vIFJlZmVyZW5jZUVycm9yOiBhbHBoIGlzIG5vdCBkZWZpbmVkXG4gICAgICBjb25zb2xlLmxvZyhcIkVSUk9SXCIpO1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIFxuICAgICAgJCgnI2Vycm9yTW9kYWwgcC5lcnJvci10ZXh0JykudGV4dCggZXJyICk7XG4gICAgICAkKCcjZXJyb3JNb2RhbCcpLmZvdW5kYXRpb24oJ3JldmVhbCcsICdvcGVuJyk7XG4gICAgICAvLyBhbGVydChcIk1ha2Ugc3VyZSB5b3UndmUgZGVmaW5lZCB5b3VyIHZhcmlhYmxlIGJlZm9yZSB0cnlpbmcgdG8gdXNlIGl0XCIpO1xuICB9XG5cbiAgLy8gR2l2ZSBmb2N1cyB0byBnYW1lXG4gICQoJyNwcmV2aWV3JykuZm9jdXMoKTtcbiAgJCgnI3ByZXZpZXcnKS5jb250ZW50cygpLmZpbmQoJ2NhbnZhcycpLmZvY3VzKCk7XG59XG5cbmZ1bmN0aW9uIGluc2VydEVkaXRvVG9vbHRpcCh0ZXh0LCBsaW5lLCBjaCl7XG4gIC8vICoqKiogRVhBTVBMRSBVU0UgKioqKio6XG4gIC8vIEVESVRPUjogaW5zZXJ0VG9vbHRpcChcIkxpbmVzIHRoYXQgYmVnaW4gd2l0aCAnLy8nIGFyZSBjb21tZW50cyBhbmQgY2FuJ3QgYmUgcmVhZCBieSB0aGUgY29tcHV0ZXIuXCIsIDQsIDApO1xuICBcbiAgLy8gQ3JlYXRlIGEgbmV3IHRvb2x0aXBcbiAgLy8gVXBkYXRpbmcgdGhlIHRpdGxlIHByb3BlcnR5IG9mIHRoZSB0b29sdGlwIGlzIHByb2JsZW1hdGljIGFmdGVyIGZvdW5kYXRpb24sXG4gIC8vIHNvIHdlIGNyZWF0ZSBhIG5ldyBvbmUgZXZlcnkgdGltZS4gV2UgYWxzbyBkZWxldGUgdGhlIHRvb2x0aXAgd2hlbiBpdHMgY2xpY2tlZCB0byBjbG9zZS5cbiAgLy8gVE9PRDogSW1wcm92ZSB0byBoYXZlIGEgc2luZ2xlIHRvb2x0aXA/XG4gICQoJ2JvZHknKS5wcmVwZW5kKCc8c3BhbiBpZD1cImVkaXRvci10b29sdGlwXCIgZGF0YS10b29sdGlwIGNsYXNzPVwiaGFzLXRpcFwiIHRpdGxlPVwiJyt0ZXh0KydcIj48L3NwYW4+Jyk7XG4gIFxuICAvLyBXaWRnZXQgZ2V0cyBpbnNlcnRlZCBvbmUgbGluZSBiZWxvdy4gVXNlIGxpbmUgLSAxIHRvIGFjY291bnQgZm9yIHRoaXNcbiAgZWRpdG9yX2pzLmFkZFdpZGdldCh7Y2g6IGNoICwgbGluZTogbGluZS0xfSwgJCgnI2VkaXRvci10b29sdGlwJylbMF0sIHRydWUpO1xuXG4gICQoZG9jdW1lbnQpLmZvdW5kYXRpb24oJ3Rvb2x0aXAnLCAncmVmbG93Jyk7XG4gIEZvdW5kYXRpb24ubGlicy50b29sdGlwLnNob3dUaXAoICQoJyNlZGl0b3ItdG9vbHRpcCcpICk7XG5cbn1cbiJdfQ==
