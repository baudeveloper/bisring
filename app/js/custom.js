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

	// Source: https://stackoverflow.com/questions/24580262/make-bootstrap-popover-work-with-custom-html-template
	var popoverTemplate = [
		"<div class=\"popover\" role=\"tooltip\">",
		"<div class=\"arrow\"></div>",
		"<h3 class=\"popover-header\">",
		"</h3>",
		"<div class=\"popover-body\">",
		"</div>",
		"</div>"
	].join("");
	var popoverContent = [
		"Hello World...",
		"Hello World 2..."
	].join("");
	var popoverTitle = "Login";
	$("body").popover({
		selector: "[data-js=\"popover-login\"]",
		trigger: "click",
		content: popoverContent,
		title: popoverTitle,
		template: popoverTemplate,
		placement: "bottom",
		html: true
	});

});
