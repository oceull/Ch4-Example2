var main = function(){
	"use strict";

	$(".comment-input button").on("click", function (event) {
		//console.log("Hello World!");
		$(".comments").append("<p>this is a new comment</p>");
	});
};

$(document).ready(main);