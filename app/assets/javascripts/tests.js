$(document).ready(function(){	
	$(".editor_container textarea").focus();
	var pressingShift = false;
	
	if ($("#uid").data("controls-state") === 'show'){
		$("#show_test_page_footer").show();
		$("#show_test_page_footer_toggle").hide();
	} else if ($("#uid").data("controls-state") === 'hide'){
		$("#show_test_page_footer").hide();
		$("#show_test_page_footer_toggle").show();
	};
	
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
		} else if (e.keyCode === 16){
			pressingShift = true;
		} else {
			console.log(e.keyCode);
		}
	});
	
	$(".editor_container textarea").keyup(function(e){
		if (e.keyCode === 16){
			pressingShift = false;
		} else if (pressingShift && e.keyCode === 188){
			autoType(">");
		} else if (pressingShift && e.keyCode === 222){
			autoType('"');
		} else if (e.keyCode === 222){
			autoType("'");
		} else if (pressingShift && e.keyCode === 219){
			autoType("}");
		} else if (e.keyCode === 219){
			autoType("]");
		}	else if (pressingShift && e.keyCode === 57){
			autoType(")");
		}
	});
	
	$("#css_editor_container textarea").keyup(function(e){
		if (e.keyCode === 16){
			pressingShift = false;
		} else if (pressingShift && e.keyCode === 186){
			autoType(";");
		}
	});
	
	$("#show_test_page_hide_controls").click(function(){
		$("#show_test_page_footer").hide();
		$("#show_test_page_footer_toggle").show();
		$.ajax({
			url: "/tests/toggle_controls/hide"
		});
	});
	
	$("#show_test_page_show_controls").click(function(){
		$("#show_test_page_footer").show();
		$("#show_test_page_footer_toggle").hide();
		$.ajax({
			url: "/tests/toggle_controls/show"
		});
	});
	
	$("#show_test_page_open_html").click(function(e){
		var uid = $("#uid").data("uid");
		e.preventDefault();
		window.open("/"+ uid + "/html", "_blank");
	});
	
	$("#show_test_page_open_css").click(function(e){
		var uid = $("#uid").data("uid");
		e.preventDefault();
		window.open("/"+ uid + "/css", "_blank");
	});
	
	$("#show_test_page_open_js").click(function(e){
		var uid = $("#uid").data("uid");
		e.preventDefault();
		window.open("/"+ uid + "/js", "_blank");
	});
});

function autoType(character){
	var cursorPosition = $(".editor_container textarea").prop("selectionStart");
	var text = $(".editor_container textarea").val();
	var beginning = text.slice(0, cursorPosition);
	var end = text.slice(cursorPosition, text.length);
	var newText = beginning + character + end;
	$(".editor_container textarea").val(newText);
	$(".editor_container textarea").prop("selectionStart", cursorPosition).prop("selectionEnd", cursorPosition);
}