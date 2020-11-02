$(function(){
	var header = $("#header"),
		introH = $("#intro").innerHeight(),
		scrollOffset = $(window).scrollTop();
		
		/* FIXED HEADER */
		checkScroll(scrollOffset);
	$(window).on("scroll", function() {
		checkScroll(scrollOffset);
	});
	function checkScroll(scrollOffset) {
		scrollOffset = $(this).scrollTop();
		if( scrollOffset >= introH ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

		/* SMOOTH SCROLL */
		$("[data-scroll]").on("click", function(event) {
			event.preventDefault();
			var $this = $(this),
				blockId = $this.data('scroll'),
				blockOffset = $(blockId).offset().top;
				$this.addClass("active");
			$("#nav a").removeClass("active");
			$this.addClass("active");
			$("html, body").animate({
				scrollTop: blockOffset
			}, 500);
		});
		
		/* NAV */
		$("#nav_toggle").on("click", function(event) {
				event.preventDefault();
				$(this).toggleClass("active");
				$("#nav").toggleClass("active");
		});

		/* Collapse */
		$("[data-collapse]").on("click", function(event) {
			event.preventDefault();
			var $this = $(this),
				blockId = $this.data('collapse');
				$this.toggleClass("active");
		});
		/* Slider */
		$("[data-slider]").slick({
			 infinite: true,
			 slidesToShow: 1,
			 slidesToScroll: 1
		});


});