//========================
// Strict Syntax Rendering
//========================
"use strict";

//==================
// Application Logic
//==================
$(document).ready(function () {

	// Banner backgrounds
	var siteCallout = $("[data-js=\"site-callout\"]");
	var imgSrc = siteCallout.find(".site-callout--img").attr("src");
	siteCallout.css("backgroundImage", "url(" + imgSrc + ")");
	var siteHeader = $("[data-js=\"site-header\"]");
	// var imgHeaderSrc = siteHeader.find(".site-header--img").attr("src");
	// siteHeader.css("backgroundImage", "url(" + imgHeaderSrc + ")");

	// Sidebar
	// Source: https://bootstrapious.com/tutorial/sidebar/index3.html
	var sidenavMenu = $("[data-js=\"sidenav\"]");
	var sidenavCollapse = $("[data-js=\"sidenav-collapse\"]");
	var sidenavDismiss = $("[data-js=\"sidenav-dismiss\"]");
	var sidenavOverlay = $("[data-js=\"sidenav-overlay\"]");
	sidenavMenu.mCustomScrollbar({
		theme: "minimal"
	});
	sidenavCollapse.on("click", function () {
		sidenavMenu.addClass("active");
		sidenavOverlay.fadeIn();
		$(".collapse.in").toggleClass("in");
		$("a[aria-expanded=true]").attr("aria-expanded", "false");
	});
	sidenavDismiss.on("click", function () {
		sidenavMenu.removeClass("active");
		sidenavOverlay.fadeOut();
	});
	sidenavOverlay.on("click", function () {
		sidenavMenu.removeClass("active");
		sidenavOverlay.fadeOut();
	});

	// Popovers
	// Source: https://stackoverflow.com/questions/24580262/make-bootstrap-popover-work-with-custom-html-template
	var popoverLoginTemplate = [
		"<div class=\"popover\" role=\"tooltip\">",
		"<div class=\"arrow\"></div>",
		"<div class=\"popover-body\">",
		"</div>",
		"</div>"
	].join("");
	$("[data-toggle=popover]").each(function(i, obj) {
		$(this).popover({
			html: true,
			placement: "bottom",
			template: popoverLoginTemplate,
			content: function() {
				var id = $(this).attr("id");
				return $("body #popover-content-" + id).html();
			}
		});
	});

	// Selectpickers
	$(".selectpicker").selectpicker();
	$(".page-front [data-js=\"selectService\"]").change(function(){
		console.log($(this).find("option:selected").val().toLowerCase());
		siteHeader.removeClass("services for-rents for-sales").addClass(
			$(this).find("option:selected").val().toLowerCase()
		);
	})
	.change();

	// UL to select
	$("[data-js=\"site-sidebar--nav\"] > ul").navToSelect();
	$(".navToSelect").addClass("selectpicker").selectpicker("refresh");

	// Reviews
	var starsList = $("[data-js=\"search--tab-list-item-stars\"]");
	starsList.barrating({
		theme: "css-stars"
	});

	// Map switch
	var mapToggle = $("[data-js=\"site-header--maps-toggle\"]");
	mapToggle.on("click", function() {
		$(this).parents(".page").find("#map").toggleClass("hidden");
		$(this).text(function(i, text) {
			return text === "Show Map" ? "Hide Map" : "Show Map";
		});
	});

	// On Nav Scroll
	// $(window).scroll(function() {
	// 	var scroll = $(window).scrollTop();
	// 	var siteHeaders = $(".page-standard [data-js=\"site-header\"]");
	// 	if (scroll >= 30) {
	// 		siteHeaders.addClass("scrolled");
	// 	} else {
	// 		siteHeaders.removeClass("scrolled");
	// 	}
	// });

});
