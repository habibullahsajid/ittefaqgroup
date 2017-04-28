jQuery(function ($) {

    'use strict';

    // -------------------------------------------------------------
    // Preloader
    // -------------------------------------------------------------
    (function () {
        $('#status').fadeOut();
        $('#preloader').delay(200).fadeOut('slow');
    }());


    // ------------------------------------------------------------------
    // sticky menu
    // ------------------------------------------------------------------
    $(window).scroll(function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("sticky-nav");
        } else {
            $(".navbar-fixed-top").removeClass("sticky-nav");
        }
    });


    // -------------------------------------------------------------
    // mobile menu
    // -------------------------------------------------------------
    (function () {
        $('button.navbar-toggle').ucOffCanvasMenu({
            documentWrapper: '#main-wrapper',
            contentWrapper: '.content-wrapper',
            position: 'uc-offcanvas-left',    // class name
            // opener         : 'st-menu-open',            // class name
            effect: 'slide-along',             // class name
            closeButton: '#uc-mobile-menu-close-btn',
            menuWrapper: '.uc-mobile-menu',                 // class name below-pusher
            documentPusher: '.uc-mobile-menu-pusher'
        });
    }());


    // -------------------------------------------------------------
    // tooltip
    // -------------------------------------------------------------

    (function () {

        $('[data-toggle="tooltip"]').tooltip()

    }());


    // ------------------------------------------------------------------
    // jQuery for back to Top
    // ------------------------------------------------------------------
    (function () {



        $('body').append('<div id="toTop"><i class="fa fa-angle-up"></i></div>');
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });

        $('#toTop').on('click', function () {
            $("html, body").animate({scrollTop: 0}, 600);
            return false;
        });

    }());


    // -------------------------------------------------------------
    // testimonialSlider
    // -------------------------------------------------------------
    (function () {

        $('.testimonialSlider').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            directionNav: false
        })

        // Navigation
        $('.prev').on('click', function () {
            $('.testimonialSlider').flexslider('prev')
            return false;
        })

        $('.next').on('click', function () {
            $('.testimonialSlider').flexslider('next')
            return false;
        })
    }());

    // Instantiate the Bootstrap carousel
    $('.multi-item-carousel').carousel({
        interval: false
    });

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
    $('.multi-item-carousel .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
    //----------------------------------
    //---- Slick Slider-----------------
    //----------------------------------

    $('.client-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '',
        nextArrow: '',
        pauseOnHover: true,

    });
    $('.history-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '',
        nextArrow: '',
        pauseOnHover: true
    });
    //----------------------------------
    //---- social feed-----------------
    //----------------------------------
    $('.social-feed-slider').socialfeed({
        // Facebook
        facebook: {
            accounts: ['@smashmag', '!smashmag'],  //Array: Specify a list of accounts from which to pull wall posts
            limit: 3,                                   //Integer: max number of posts to load
            access_token: '191042970944652|NGJyz1d0Kclt2XO3AyrjHmrKOHo'  //String: "APP_ID|APP_SECRET"
        },
        //General Settings
        length: 400,                                     //Integer: For posts with text longer than this length, show an ellipsis.
        show_media: true,                                //Boolean: if false, doesn't display any post images
        media_min_width: 300,                           //Integer: Only get posts with images larger than this value
        template_html:                                  //String: HTML used for each post. This overrides the 'template' filename option
            '<article class="col-md-12 facebook-post"> \
                <a class="pull-left" href="{{=it.author_link}}" target="_blank"> \
                        <img class="media-object" src="{{=it.author_picture}}">\
                </a>\
            <i class="fa fa-facebook pull-right" aria-hidden="true"></i>\
            <div class="fb-content pull-left">\
                <h3>{{=it.author_name}}</h3>\
                <p>{{=it.text}}</p><br><a href="{{=it.link}}" class="btn btn-primary" target="_blank">read more</a>\
             </div>\
            </article>',
        date_format: "ll",                              //String: Display format of the date attribute (see http://momentjs.com/docs/#/displaying/format/)
        date_locale: "en",                              //String: The locale of the date (see: http://momentjs.com/docs/#/i18n/changing-locale/)
        moderation: function (content) {                 //Function: if returns false, template will have class hidden
            return (content.text) ? content.text.indexOf('fuck') == -1 : true;
        },
        callback: function () {                          //Function: This is a callback function which is evoked when all the posts are collected and displayed

            $('.social-feed-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000,
                prevArrow: '',
                nextArrow: '',
                pauseOnHover: true,
            });
        }
    });
}); // JQuery end


$(document).on('click', '.m-menu .dropdown-menu', function (e) {
    e.stopPropagation()
});