$(document).ready(function(){
	if ($("#show_test_page").length === 1){
		var text = $("body").context.body.innerHTML;
		text = text.replace(/\\"/g, '"');
		text = text.replace(/\\'/g, "'");
		$("body").context.body.innerHTML = text;
	} else if ($(".editor_container textarea").length === 1){
		var text = $(".editor_container textarea").val();
		text = text.replace(/\$NEWLINE\$/g, "\n");
		text = text.replace(/\$DQUOTE\$/g, '"');
		text = text.replace(/\$SQUOTE\$/g, "'");
		text = text.replace(/\$HASH\$/g, "#");
		text = text.replace(/\$PERCENT\$/g, "%");
		text = text.replace(/\$FSLASH\$/g, "/");
		$(".editor_container textarea").val(text);
	}
	
	$(".editor_container textarea").attr("tabindex", "-1");
	$('.editor_container textarea[notab=notab]').on('keydown', function(e){ if (e.keyCode === 9)  e.preventDefault() });
	
	$(".editor_container textarea").focus();
	
	$("#html_editor_container #save").click(function(){
		var html = $("#html_editor_container textarea").val();
		sanitizedText = replaceChars(html);
		var uid = $("#uid").data("uid");
		$.ajax({
		  url: "/"+ uid +"/html/update/"+ sanitizedText
		});
	});
	
	$("#css_editor_container #save").click(function(){
		var css = $("#css_editor_container textarea").val();
		sanitizedText = replaceChars(css);
		var uid = $("#uid").data("uid");
		$.ajax({
		  url: "/"+ uid +"/css/update/"+ sanitizedText
		});
	});
	
	$("#js_editor_container #save").click(function(){
		var js = $("#js_editor_container textarea").val();
		sanitizedText = replaceChars(js);
		var uid = $("#uid").data("uid");
		$.ajax({
		  url: "/"+ uid +"/js/update/"+ sanitizedText
		});
	});
	
	$(".editor_container textarea").keydown(function(e){
		if (e.keyCode === 9){
			e.preventDefault();
			var cursorPosition = $(".editor_container textarea").prop("selectionStart");
			var text = $(".editor_container textarea").val();
			var beginning = text.slice(0, cursorPosition);
			var end = text.slice(cursorPosition, text.length);
			var newText = beginning + "  " + end;
			$(".editor_container textarea").val(newText);
			$(".editor_container textarea").prop("selectionStart", cursorPosition+2).prop("selectionEnd", cursorPosition+2);
		}
	});
	
	$("#show_test_page_hide_controls").click(function(){
		$("#show_test_page_footer").hide();
		$("#show_test_page_footer_toggle").show();
	});
	
	$("#show_test_page_show_controls").click(function(){
		$("#show_test_page_footer").show();
		$("#show_test_page_footer_toggle").hide();
	});
	
	$("#show_test_page_open_html").click(function(e){
		var uid = $("#uid").data("uid");
		e.preventDefault();
		window.open("http://localhost:3000/"+ uid + "/html", "_blank");
	});
	
	$("#show_test_page_open_css").click(function(e){
		var uid = $("#uid").data("uid");
		e.preventDefault();
		window.open("http://localhost:3000/"+ uid + "/css", "_blank");
	});
	
	$("#show_test_page_open_js").click(function(e){
		var uid = $("#uid").data("uid");
		e.preventDefault();
		window.open("http://localhost:3000/"+ uid + "/js", "_blank");
	});
});

function replaceChars(text){
	text = text.replace(/\//g, "$FSLASH$");
	text = text.replace(/\./g, "$PERIOD$");
	text = text.replace(/\n/g, "$NEWLINE$");
	text = text.replace(/"/g, "$DQUOTE$");
	text = text.replace(/'/g, "$SQUOTE$");
	text = text.replace(/#/g, "$HASH$");
	text = text.replace(/%/g, "$PERCENT$");
	return text;
}