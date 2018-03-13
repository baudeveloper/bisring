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
	var siteHeader = $("[data-js=\"site-header\"]");
	var imgHeaderSrc = siteHeader.find(".site-header--img").attr("src");
	siteHeader.css("backgroundImage", "url(" + imgHeaderSrc + ")");

	// Source: https://bootstrapious.com/tutorial/sidebar/index3.html
	var offCanvasMenu = $("[data-js=\"offcanvas\"]");
	var offCanvasCollapse = $("[data-js=\"offcanvas-collapse\"]");
	var offCanvasDismiss = $("[data-js=\"offcanvas-dismiss\"]");
	var offCanvasOverlay = $("[data-js=\"offcanvas-overlay\"]");
	offCanvasMenu.mCustomScrollbar({
		theme: "minimal"
	});
	offCanvasCollapse.on("click", function () {
		offCanvasMenu.addClass("active");
		offCanvasOverlay.fadeIn();
		$(".collapse.in").toggleClass("in");
		$("a[aria-expanded=true]").attr("aria-expanded", "false");
	});
	offCanvasDismiss.on("click", function () {
		offCanvasMenu.removeClass("active");
		offCanvasOverlay.fadeOut();
	});
	offCanvasOverlay.on("click", function () {
		offCanvasMenu.removeClass("active");
		offCanvasOverlay.fadeOut();
	});
});
