//========================
// Strict Syntax Rendering
//========================
"use strict";

//==================
// Application Logic
//==================
$(document).ready(function () {
  // Tooltip
	$("[data-toggle='tooltip']").tooltip();

  //Virtual Team Sortable Order
	$( ".tablesort" ).sortable();
	$( ".tablesort" ).disableSelection();

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
			header: "<a href='#' class=\"tt-title\">Services</a>"
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

	//Dashboard Become a Business User Buy More than 21 Categories Click Event
	$(".edit-info .btn-group-toggle label.email").click(function () {
		window.location.href = "mailto:sales@bisring.com?subject=Request%20to%20Buy%20More%20Categories&body=I%20would%20like%20to%20purchase%20more%20categories%20that%20are%20not%20currently%20available%20through%20the%20site.%0A%0ANo.%20of%20Categories%20needed%3A%20%3Center%20number%20here%3E%0A%0APlease%20contact%20me%20back.%20Thanks.";
	});

	// Dashboard My Businesses .edit-business buttons toggle:
	var myBusinessToggleActiveState = $(".list-group-item .toggle-activation");
	// Onload check inactive status and disable links
	$(".list-group-item.inactive").find("a").addClass("btn-is-disabled");
	$(".list-group-item.inactive").find(".delete").toggleClass("btn-is-disabled");
	// Onload toggle check status and if inactive, disable links
	myBusinessToggleActiveState.click(function () {
		$(this).closest(".list-group-item").toggleClass("inactive");
		$(this).closest(".list-group-item").find("a").toggleClass("btn-is-disabled");
		$(this).closest(".list-group-item").find(".delete").toggleClass("btn-is-disabled");
	});

	//Toggle Premim Feature
	var premiumButton = $(".premium-upgrade");
	premiumButton.click(function () {
		$(this).toggleClass("active");
		var activeState = $(this).hasClass("active");
		if (activeState) {
			$(this).closest("#selectMarket").removeClass("disabled");
			$(this).closest("#selectMarket").find(".business-market-select").prop("disabled", false);
			$(this).closest("#selectMarket").find(".business-market-select").selectpicker("refresh");
			$(this).closest("#selectMarket").find("#businessMarketAdd").removeClass("disabled");

		} else {
			$(this).closest("#selectMarket").addClass("disabled");
			$(this).closest("#selectMarket").find(".business-market-select").prop("disabled", true);
			$(this).closest("#selectMarket").find(".business-market-select").selectpicker("refresh");
			$(this).closest("#selectMarket").find("#businessMarketAdd").addClass("disabled");

		}
	});

	//Location Selector
	var countrySelected = $("#countrySelector option:selected").text();
	$("#locationSelector").find(".dropdown-toggle").html(countrySelected);

	$("#locationSelector select").change(function () {
	  var countrySelected = $("#countrySelector option:selected").text();
	  var provinceStateSelected = ", " + $("#provinceStateSelector option:selected").text();
	  var citySelected = ", " + $("#citySelector option:selected").text();
	  var townSelected = ", " + $("#townSelector option:selected").text();
	  // $('#locationSelector').find('.dropdown-toggle').html( countrySelected + provinceStateSelected + citySelected + townSelected + ' <span class="caret"></span>');
	  if ($("#countrySelector").val()) {
	    $("#locationSelector").find(".dropdown-toggle").html(countrySelected);
	  } else {
	    $("#locationSelector").find(".dropdown-toggle").html(" Select Location");
	  }
	  if ($("#provinceStateSelector").val()) {
	    $("#locationSelector").find(".dropdown-toggle").html(countrySelected + provinceStateSelected);
	  }
	  if ($("#citySelector").val()) {
	    $("#locationSelector").find(".dropdown-toggle").html(countrySelected + provinceStateSelected +
	      citySelected);
	  }
	  if ($("#townSelector").val()) {
	    $("#locationSelector").find(".dropdown-toggle").html(countrySelected + provinceStateSelected +
	      citySelected + townSelected);
	  }
	});



});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
	"use strict";
	window.addEventListener("load", function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.getElementsByClassName("needs-validation");
    // Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, function(form) {
			form.addEventListener("submit", function(event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add("was-validated");
			}, false);
		});
	}, false);
})();
