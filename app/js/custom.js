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
		"<div class=\"popover-body\">",
		"</div>",
		"</div>"
	].join("");
	var popoverContent = [
		"<div class=\"popover-wrap\">",
		"<div class=\"form-group\">",
		"<label class=\"sr-only\" for=\"popoverEmail\">Enter email address</label>",
		"<input id=\"popoverEmail\" class=\"form-control popover-email\" placeholder=\"Email\">",
		"</div><div class=\"form-group\">",
		"<label class=\"sr-only\" for=\"popoverPassword\">Enter password</label>",
		"<input id=\"popoverPassword\" class=\"form-control popover-password\" placeholder=\"Password\">",
		"</div><div class=\"form-group popover-resets\">",
		"<a href=\"#\" class=\"popover-reset-password\">Forgot Password?</a>",
		"<a href=\"#\" class=\"popover-login\">Login</a>",
		"</div><p class=\"popover-linebreak\"><span>or login via:</span></p>",
		"<div class=\"form-group\">",
		"<a href=\"http://facebook.com\" target=\"_blank\" class=\"btn btn-block popover-social popover-facebook\"><span class=\"popover-icon fab fa-facebook-square\"></span>Facebook</a>",
		"<a href=\"http://plus.google.com\" target=\"_blank\" class=\"btn btn-block popover-social popover-google\"><span class=\"popover-icon fab fa-google-plus-square\"></span>Google</a>",
		"<a href=\"http://linkedin.com\" target=\"_blank\" class=\"btn btn-block popover-social popover-linkedin\"><span class=\"popover-icon fab fa-linkedin\"></span>Linkedin</a>",
		"</div>"
	].join("");
	var popoverTitle = "Login";
	$("body").popover({
		selector: "[data-js=\"popover-login\"]",
		trigger: "click",
		content: popoverContent,
		template: popoverTemplate,
		placement: "bottom",
		html: true
	});

	$(".selectpicker").selectpicker();

});
