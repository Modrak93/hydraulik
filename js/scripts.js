(function ($) {
    "use strict"; // Start of use strict   
    
  //  Slick Slider 
        
    $(".main-slider").slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToScroll: 1,
        fade: false,
        cssEase: 'ease-in-out'
    });
    
    $(".rec-slider").slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToScroll: 1
    });
    
    $("#offerSlider").slick({
        infinite: true,
        dots: true,
        slidesToShow: 4,
        arrows: true,
        autoplay: false,
        slidesToScroll: 1,
        responsive : [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            },
        ]
    });
    
    $("#teamSlider").slick({
        infinite: true,
        dots: true,
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        responsive : [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    
$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

    

  // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });
    
    // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

})(jQuery); // End of use strict


