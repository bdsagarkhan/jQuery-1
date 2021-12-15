$(document).ready( function() {
	// alert message
	$("#alert").click( function() {
		alert("Hello Friends! How are you?");
	});
	// hide
	$("#hide").click( function() {
		$("img").hide(1000);
	});
	// show
	$("#show").click( function() {
		$("img").show("fast");
	});
	// toggle
	$("#toggle").click( function() {
		$("img").toggle("slow");
	});
})