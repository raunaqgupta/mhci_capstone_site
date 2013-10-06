var APP = {}

APP.scrollListener = function(){
	console.log($(document).scrollTop());
	var scroll_position = $(document).scrollTop();

	if (scroll_position > 100) {
		// show a goto top element
		//create a div element and attach it to the body
		
	}
}

$(window).scroll(APP.scrollListener)