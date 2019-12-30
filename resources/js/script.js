/* ------- STICKY NAV ---------*/

$(document).ready(function(){

	$(".js--section-introduction").waypoint(function(direction) {
		if (direction == "down") {
			$("nav").addClass("sticky");
		}
		else {
			$("nav").removeClass("sticky");
		}

	}, {
  	offset: "-30px;"
	});

	/* ------- Scroll on buttons ---------*/

	$(".js--scroll-to-intro").click(function () {
		$("html, body").animate({scrollTop: $(".js--section-introduction").offset().top}, 1000);
	});
	/* ------- Smooth scrolling ---------*/

	$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 250);
        return false;
      }
    }
  });
 });
	/* ------- Animation scroll---------*/

	$(".js--wp-1").waypoint(function(direction){
		$(".js--wp-1").addClass("animated bounceInLeft");
	}, {
		offset: "50%"
	})

	$(".js--wp-2").waypoint(function(direction){
		$(".js--wp-2").addClass("animated bounceInLeft");
	}, {
		offset: "50%"
	})


	// $(".js--wp-3").waypoint(function(direction){
	// 	$(".js--wp-3").addClass("animated pulse");
	// }, {
	// 	offset: "50%"
	// });

	$(".js--wp-4").waypoint(function(direction){
		$(".js--wp-4").addClass("animated bounceInLeft");
	}, {
		offset: "50%"
	})

	$(".js--wp-5").waypoint(function(direction){
		$(".js--wp-5").addClass("animated bounceInLeft");
	}, {
		offset: "50%"
	})

	$(".js--wp-6").waypoint(function(direction){
		$(".js--wp-6").addClass("animated bounceInRight");
	}, {
		offset: "50%"
	})

	$(".js--wp-7").waypoint(function(direction){
		$(".js--wp-7").addClass("animated bounceInLeft");
	}, {
		offset: "50%"
	})

	$(".js--wp-8").waypoint(function(direction){
		$(".js--wp-8").addClass("animated bounceInRight");
	}, {
		offset: "50%"
	})


	$(".js--wp-9").waypoint(function(direction){
		$(".js--wp-9").addClass("animated bounceInUp");
	}, {
		offset: "50%"
	})

	$(".js--wp-10").waypoint(function(direction){
		$(".js--wp-10").addClass("animated bounceInLeft");
	}, {
		offset: "50%"
	})

	$(".js--wp-11").waypoint(function(direction){
		$(".js--wp-11").addClass("animated zoomIn");
	}, {
		offset: "50%"
	})

	/* ------- Mobile Nav ---------*/

	$(".js--nav-icon").click(function() {
		var nav = $(".js--main-nav");
		var icon = $(".js--nav-icon i");
		nav.slideToggle(200);

		if (icon.hasClass("icon ion-md-menu")) {
			icon.addClass("icon ion-md-close");
			icon.removeClass("icon ion-md-menu");
		} else {
			icon.removeClass("icon ion-md-close");
			icon.addClass("icon ion-md-menu");
		}

	});

});





    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
 