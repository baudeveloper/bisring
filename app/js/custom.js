//========================
// Strict Syntax Rendering
//========================
"use strict";

//==================
// Application Logic
//==================
$(document).ready(function () {

	var siteCallout = $("[data-js=\"site-callout\"]");
	var imgSrc = siteCallout.find(".site-callout--img").attr("src");
	siteCallout.css("backgroundImage", "url(" + imgSrc + ")");

	// Source: https://bootstrapious.com/tutorial/sidebar/index3.html
	$("#sidebar").mCustomScrollbar({
		theme: "minimal"
	});
	$("#sidebarCollapse").on("click", function () {
		$("#sidebar").addClass("active");
		$(".overlay").fadeIn();
		$(".collapse.in").toggleClass("in");
		$("a[aria-expanded=true]").attr("aria-expanded", "false");
	});
	$("#dismiss, .overlay").on("click", function () {
		$("#sidebar").removeClass("active");
		$(".overlay").fadeOut();
	});
});
