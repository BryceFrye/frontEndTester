$(document).ready(function(){	
	$(".editor_container textarea").focus();
	
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