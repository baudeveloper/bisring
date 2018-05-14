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

	var siteHeader = $("[data-js=\"site-header\"]");
	// var imgHeaderSrc = siteHeader.find(".site-header--img").attr("src");
	// siteHeader.css("backgroundImage", "url(" + imgHeaderSrc + ")");
	$(".page-front [data-js=\"selectService\"]").change(function() {
		var selectedItem = $(this).find("option:selected").val().toLowerCase();
		var selectedImg = $("[data-js=\"banner-"+selectedItem+"\"]").attr("src");
		// console.log(selectedItem);
		// console.log(selectedImg);
		siteHeader.removeClass("services for-rents for-sales").addClass(
			$(this).find("option:selected").val().toLowerCase()
		).css("backgroundImage", "url(" + selectedImg + ")");
	})
	.change();

	// UL to select
	$(".admin-nav > ul").navToSelect();
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
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		var siteHeaders = $(".page-front [data-js=\"site-header\"]");
		if (scroll >= 30) {
			siteHeaders.addClass("scrolled");
		} else {
			siteHeaders.removeClass("scrolled");
		}
	});

	// Typeahead
	var findServiceTypeahead = $("[data-js=\"findServiceTypeahead\"]");
	var nbaTeams = new Bloodhound({
		datumTokenizer: Bloodhound.tokenizers.obj.whitespace("team"),
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		prefetch: "http://twitter.github.io/typeahead.js/data/nba.json"
	});
	findServiceTypeahead.typeahead({
		highlight: true
	}, {
		name: "nba-teams",
		display: "team",
		source: nbaTeams,
		templates: {
			header: "<h3 class=\"tt-title\">Services</h3>"
		}
	});

	// Dashboard GENERAL INFORMATION buttons toggle: http://jsfiddle.net/j08691/JbZnf/2/
	var adminBlocksEditButton = $(".admin-blocks .edit");
	var adminBlocksUpdateButton = $(".admin-blocks .update");
	var adminBlocksCancelButton = $(".admin-blocks .cancel");

	adminBlocksEditButton.click(function(){
		$(this).closest(".admin-blocks").find(".edit, .change-password").addClass("hidden");
		$(this).closest(".admin-blocks").addClass("edit-mode");
		$(this).closest(".admin-blocks").find(".display-info").addClass("hidden");
		$(this).closest(".admin-blocks").find(".edit-info").removeClass("hidden");
	});
	adminBlocksUpdateButton.click(function(){
		$(this).closest(".admin-blocks").find(".edit, .change-password").removeClass("hidden");
		$(this).closest(".admin-blocks").removeClass("edit-mode");
		$(this).closest(".admin-blocks").find(".edit-info").addClass("hidden");
		$(this).closest(".admin-blocks").find(".display-info").removeClass("hidden");
	});
	adminBlocksCancelButton.click(function(){
		$(this).closest(".admin-blocks").find(".edit, .change-password").removeClass("hidden");
		$(this).closest(".admin-blocks").removeClass("edit-mode");
		$(this).closest(".admin-blocks").find(".edit-info").addClass("hidden");
		$(this).closest(".admin-blocks").find(".display-info").removeClass("hidden");
	});

	// adminBlocksEditButton.click(function(){
	// 	$(this).closest(".admin-blocks").find(".edit, .change-password").addClass("hidden");
	// 	$(this).closest(".admin-blocks").find(".update, .cancel").removeClass("hidden");
	// 	$(this).closest(".admin-blocks").addClass("edit-mode");
	// });
	// adminBlocksUpdateButton.click(function(){
	// 	$(this).siblings(adminBlocksCancelButton).addClass("hidden");
	// 	$(this).addClass("hidden");
	// 	$(this).closest(".admin-blocks").removeClass("edit-mode");
	// 	$(this).siblings(adminBlocksEditButton, adminBlocksChangePasswordButton).removeClass("hidden");
	// });
	// adminBlocksCancelButton.click(function(){
	// 	$(this).siblings(adminBlocksUpdateButton).addClass("hidden");
	// 	$(this).addClass("hidden");
	// 	$(this).closest(".admin-blocks").removeClass("edit-mode");
	// 	$(this).siblings(adminBlocksEditButton, adminBlocksChangePasswordButton).removeClass("hidden");
	// });
	// var editGIButton = $("[data-js=\"edit-general-information\"]");
	// var updateGIButton = $("[data-js=\"update-general-information\"]");
	// var cancelGIButton = $("[data-js=\"cancel-general-information\"]");
	// editGIButton.click(function() {
	// 	$(this).addClass("hidden");
	// 	$(this).siblings(".btn-update-general-information, .btn-cancel-general-information").removeClass("hidden");
	// 	$(this).parents(".site-content--cards-editable").find(".site-content--editable-wrap").removeClass("hidden");
	// 	$(this).parents(".site-content--cards-editable").find(".site-content--uneditable-wrap").addClass("hidden");
	// });
	// cancelGIButton.click(function() {
	// 	$(this).siblings(".btn-edit-general-information").removeClass("hidden");
	// 	$(this).siblings(".btn-update-general-information").addClass("hidden");
	// 	$(this).parents(".site-content--cards-editable").find(".site-content--editable-wrap").addClass("hidden");
	// 	$(this).parents(".site-content--cards-editable").find(".site-content--uneditable-wrap").removeClass("hidden");
	// 	$(this).addClass("hidden");
	// });
	// updateGIButton.click(function() {
	// 	$(this).siblings(".btn-edit-general-information").removeClass("hidden");
	// 	$(this).siblings(".btn-cancel-general-information").addClass("hidden");
	// 	$(this).parents(".site-content--cards-editable").find(".site-content--editable-wrap").addClass("hidden");
	// 	$(this).parents(".site-content--cards-editable").find(".site-content--uneditable-wrap").removeClass("hidden");
	// 	$(this).addClass("hidden");
	// });

	// // Dashboard BILLING ADDRESS buttons toggle: http://jsfiddle.net/j08691/JbZnf/2/
	// var editBIButton = $("[data-js=\"edit-billing-address\"]");
	// var updateBIButton = $("[data-js=\"update-billing-address\"]");
	// var cancelBIButton = $("[data-js=\"cancel-billing-address\"]");
	// editBIButton.click(function() {
	// 	$(this).addClass("hidden");
	// 	$(this).siblings(".btn-update-billing-address, .btn-cancel-billing-address").removeClass("hidden");
	// 	$(this).parents(".site-content--cards-editable").find(".site-content--editable-wrap").removeClass("hidden");
	// 	$(this).parents(".site-content--cards-editable").find(".site-content--uneditable-wrap").addClass("hidden");
	// });
	// cancelBIButton.click(function() {
	// 	$(this).siblings(".btn-edit-billing-address").removeClass("hidden");
	// 	$(this).siblings(".btn-update-billing-address").addClass("hidden");
	// 	$(this).parents(".site-content--cards-editable").find(".site-content--editable-wrap").addClass("hidden");
	// 	$(this).parents(".site-content--cards-editable").find(".site-content--uneditable-wrap").removeClass("hidden");
	// 	$(this).addClass("hidden");
	// });
	// updateBIButton.click(function() {
	// 	$(this).siblings(".btn-edit-billing-address").removeClass("hidden");
	// 	$(this).siblings(".btn-cancel-billing-address").addClass("hidden");
	// 	$(this).parents(".site-content--cards-editable").find(".site-content--editable-wrap").addClass("hidden");
	// 	$(this).parents(".site-content--cards-editable").find(".site-content--uneditable-wrap").removeClass("hidden");
	// 	$(this).addClass("hidden");
	// });


});
