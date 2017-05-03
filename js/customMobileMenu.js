// Written by Nicholas Neville
function disable_swipe() {
	$('html').off('swiperight swipeleft');
}
function enable_swipe() {
	$('html').on('swiperight', close_menu);
	$("html").on("swipeleft",function(e){
		if (!$('body').hasClass("m-zooming")) {
			(e.swipestart.coords[0] > $(window).width()*0.9) && open_menu();
		}
	});
}
function close_menu() {
	if ($('body').hasClass("push_left") && $(window).width() < 1001) {
		$('body').toggleClass('push_left');
		$('.header_buttons ul').css('width', '0');
		$("#menu_icon div").toggleClass("change");
		setTimeout(function() {$('.header_buttons ul').css('transition', 'none');}, 400);
	}
}
function open_menu() {
	if (!$('body').hasClass("push_left") && $(window).width() < 1001) {
		($(window).height() < 450) && $('.header_buttons ul').scrollTop(0); 
		$('.header_buttons ul').css('transition', 'all 0.3s ease-in-out');
		$('body').toggleClass('push_left');
		$('.header_buttons ul').css('width', '40%');
		$("#menu_icon div").toggleClass("change");
	}
}
$(document).click(close_menu);
$('body').on('mousedown', disable_swipe);
$('body').on('touchstart', enable_swipe);
$("#menu_icon").click(function(e) {
	($('body').hasClass("push_left") ? close_menu() : open_menu());
	e.stopPropagation();
});