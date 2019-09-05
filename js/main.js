"use strict"; // Start of use strict

function backToTop() {

// back2top button will take to top by clicking on by this function
if($('.back2Top').length) {
    $('.back2Top').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500)
    });
};

}

function WavesActivation() {
    // Waves.js
    if (jQuery('.wave, .wave-round').length) {
        new Waves.init();
        Waves.attach('.wave', ['waves-float', 'waves-light']);
        Waves.attach('.wave-round', ['waves-float', 'waves-circle', 'waves-light']);
    };
}


function bootstrapCarousel() {
    // bootstrap carousel as a main-Slider
    if($('#carouselFade').length) {
        $('#carouselFade').carousel({
            interval: 5000,
            pause: null
        });
    };
}


function backToTopVisible() {

// back to top button will be visible
     if ($('.back2Top').length) {
        if ($(window).scrollTop() > 150) {
            $(".back2Top").addClass("totop");
        } else {
            $(".back2Top").removeClass("totop");
        }
    };
}

function stickyHeader () {

// header will be sticky    
    if ($('.sticky').length) {
        var stickyScrollPos = 350;
        if($(window).scrollTop() > stickyScrollPos) {
            $('.sticky').removeClass('slideIn animated');
            $('.sticky').addClass('sticky-fixed slideInDown animated');
        }
        else if($(this).scrollTop() <= stickyScrollPos) {
            $('.sticky').removeClass('sticky-fixed slideInDown animated');
            $('.sticky').addClass('slideIn animated');
        }
    };
}

// instance of fuction while Document ready event   
jQuery(document).on('ready', function() {
    (function($) {
        backToTop();
        bootstrapCarousel();
        WavesActivation();
    })(jQuery);
});


// instance of fuction while Window Scroll event
jQuery(window).on('scroll', function () {   
    (function ($) {
        backToTopVisible();
        stickyHeader();
    })(jQuery);
});

$('.pdf-box').media({
    height: 1000
});
/*========================================================================== 
======================== Custom script for BlackPort end ===================
============================================================================*/