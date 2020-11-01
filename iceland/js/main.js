$(function(){
	$('.fairy-tail_slider, .our-trip_slider').slick({
		prevArrow: '<button type="button" class="slick-btn slick-prev"><img class="arrow-left" src="images/back.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"><img class="arrow-right" src="images/next.svg" alt=""></button>',
		autoplay: true,
		fade: true,
		responsive: [ { breakpoint: 601, settings: { arrows: false } }, ]
	});
	$(".menu, .our-trip_body").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});