//========================
// Strict Syntax Rendering
//========================
"use strict";

//==================
// Application Logic
//==================
var myApp = {};
myApp.init = () => {
	// const SLANG = "Eh! ";
	// const SPEAK = "Today, The weather is: ";
	// let weather = 100;
	// document.querySelector(".msg").textContent = SLANG + SPEAK + weather;
	$("a[data-js=\"signup\"]").on("click", function() {
		alert("You clicked me.");
	});
};

//===============
// Initialization
//===============
$(function() {
	myApp.init();
});
