(function($) {
    "use strict";
	
	
		/*
			Author       	: Aminul
			Template Name	: Jalil - Personal Portfolio Html Template
			Version      	: 1.0
		*/
		
		// Navbar menu-top
		var nav = $('nav');
		var navHeight = nav.outerHeight();

		$('.navbar-toggler').on('click', function () {
			if (!$('#menu-top').hasClass('navbar-collaps')) {
				$('#menu-top').addClass('navbar-collaps');
			}
		});		


      

		  //**================= Sticky =====================**//
  
			  $(window).on('scroll', function() {
				if ($(window).scrollTop() > 50) {
					$('.navbar-expand-md').addClass('navbar-collaps');
					$('.abh-back-to-top').addClass('open');
				} else {
					$('.abh-header-area').removeClass('navbar-collaps');
					$('.abh-back-to-top').removeClass('open');
				}
			  });
		  
			//**===================Scroll UP ===================**//

			if ($('.abh-back-to-top').length) {
			  $(".abh-back-to-top").on('click', function () {
				var target = $(this).attr('data-targets');
				// animate
				$('html, body').animate({
				  scrollTop: $(target).offset().top
				}, 1000);

			  });
			}
			// typed-word
			var typed = new Typed('.typed-word', {
				strings: ["",""," "],
				typeSpeed: 40,
				backSpeed: 40,
				backDelay: 2000,
				startDelay: 1500,
				loop: false,
				showCursor: false
			});
			
			
			/*Animation js*/
			AOS.init({

			  offset:     120,

			  delay:      0,

			  easing:     'ease',

			  duration:   5000,

			  disable:    false, // Condition when AOS should be disabled. e.g. 'mobile'

			  once:       false,

			  mirror:     false, // whether elements should animate out while scrolling past them

			  startEvent: 'DOMContentLoaded'

			});


			//mouse hover tile effect js//

			$(".card-s").tilt({
			  maxTilt: 0,
			  perspective: 0,
			  speed: 0,
			  easing: "",
			  scale: 1,
			  
			  });
			
		//**===================Scroll UP ===================**//
		
		// Odometer JS
        $('.odometer').appear(function() {
			var odo = $(".odometer");
			odo.each(function() {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
        });
	
		

		// -----------------------------------------------------
		// ------------------ Magnific Popup -------------------
		// -----------------------------------------------------

		var magnifPopup = function() {
			$('.abh-popup-img').magnificPopup({
				type: 'image',
				removalDelay: 300,
				mainClass: 'mfp-with-zoom',
				gallery: {
					enabled: true
				},
				zoom: {
					enabled: true, // By default it's false, so don't forget to enable it

					duration: 300, // duration of the effect, in milliseconds
					easing: 'ease-in-out', // CSS transition easing function

					// The "opener" function should return the element from which popup will be zoomed in
					// and to which popup will be scaled down
					// By defailt it looks for an image tag:
					opener: function(openerElement) {
						// openerElement is the element on which popup was initialized, in this case its <a> tag
						// you don't need to add "opener" option if this code matches your needs, it's defailt one.
						return openerElement.is('img') ? openerElement : openerElement.find('img');
					}
				}
			});
		};

		// Call the functions
		magnifPopup();
		
		
		$("#testimonial-slider").owlCarousel({
			margin:3,
			nav:false,
			loop:true,
			dots:true,
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2
				},
				1000:{
					items:2
				}
			}
		});
	

		
		// mailchamp
		$('#mc-form').ajaxChimp({
			url: 'https://gmail.us10.list-manage.com/subscribe/post?u=c9af266402a277062d0d7cee0&amp;id=1211fda42f'
			/* Replace Your AjaxChimp Subscription Link */
		}); 
		

        
})(jQuery);
$(window).load( function() {

	/*PRELOADER JS*/
		$('.abh-status').fadeOut();
		$('.abh-preloader').delay(350).fadeOut('slow'); 
	
	/*END PRELOADER JS*/
		
	// -----------------------------------------------------
	// ---------------- Porfolio isotope -------------------
	// -----------------------------------------------------  
	
    var portfolioIsotope = $('.abh-main-portfolio').isotope({
        itemSelector: '.abh-grid-portfolio'
    });

    $('#abh-portfolio-flters li').on('click', function() {
        $("#abh-portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({
            filter: $(this).data('filter')
        });
    });
	
}); // window load end 
