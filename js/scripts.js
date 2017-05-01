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

    // ------------------------------------------------------------------
    // jQuery for scroll down
    // ------------------------------------------------------------------
    (function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() == 0 || $(this).scrollTop() >= 100) {
                $('#toDown').fadeIn();
            } else {
                $('#toDown').fadeOut();
            }
        });

        $('#toDown').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: 800}, 600);
            ;
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

    var slick_slider, settings;


    slick_slider = $('.client-logos');
    settings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '',
        nextArrow: '',
        pauseOnHover: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    };
    slick_slider.slick(settings);
    resetSlick(slick_slider, settings);

    slick_slider = $('.history-slider');
    settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '',
        nextArrow: '',
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    };
    slick_slider.slick(settings);
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
        /*twitter:{
         accounts: ['@spacex'],                      //Array: Specify a list of accounts from which to pull tweets
         limit: 2,                                   //Integer: max number of tweets to load
         consumer_key: 'YOUR_CONSUMER_KEY',          //String: consumer key. make sure to have your app read-only
         consumer_secret: 'YOUR_CONSUMER_SECRET_KEY' //String: consumer secret key. make sure to have your app read-only
         },
         google:{
         accounts: ['#teslamotors'],                //Array: Specify a list of accounts from which to pull posts
         limit: 2,                                  //Integer: max number of posts to load
         access_token: 'YOUR_GOOGLE_PLUS_ACCESS_TOKEN'//String: G+ access token
         },*/
        //General Settings
        length: 400,                                     //Integer: For posts with text longer than this length, show an ellipsis.
        show_media: true,                                //Boolean: if false, doesn't display any post images
        media_min_width: 300,                           //Integer: Only get posts with images larger than this value
        template_html:                                  //String: HTML used for each post. This overrides the 'template' filename option
            '<article class=" facebook-post col-md-4"> \
                <a class="pull-left" href="{{=it.author_link}}" target="_blank"> \
                        <img class="media-object" src="{{=it.author_picture}}">\
                </a>\
            <i class="fa fa-facebook" aria-hidden="true"></i>\
            <div class="fb-content">\
                <h3>{{=it.author_name}}</h3>\
                <p>{{=it.text}}</p><br><a href="{{=it.link}}" class="btn btn-primary" target="_blank">read more</a>\
             </div>\
            </article>',
        date_format: "ll",                              //String: Display format of the date attribute (see http://momentjs.com/docs/#/displaying/format/)
        date_locale: "en",                              //String: The locale of the date (see: http://momentjs.com/docs/#/i18n/changing-locale/)
        callback: function () {                          //Function: This is a callback function which is evoked when all the posts are collected and displayed
            var container = $('.social-feed-slider');
            var settings = {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000,
                prevArrow: '',
                nextArrow: '',
                pauseOnHover: true,
                adaptiveHeight: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 840,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,

                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 320,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]

            };
            container.slick(settings);
            resetSlick(container, settings)
        }
    });


    // ----------------------------------------------------------------
    // Slick Responsive reset
    // ----------------------------------------------------------------
    function resetSlick(slick_slider, settings) {
        $(window).on('resize', function () {
            if ($(window).width() < 320) {
                if (slick_slider.hasClass('slick-initialized')) {
                    slick_slider.slick('unslick');
                }
                return
            }

            if (!slick_slider.hasClass('slick-initialized')) {
                return slick_slider.slick(settings);
            }
        });
    }

    // -------------------------------------------------------------
    // Google Map
    // -------------------------------------------------------------

    (function () {

        if ($('#googleMap').length > 0) {

            //set your google maps parameters
            var $latitude = 24.8162854,
                $longitude = 67.0063777,
                $map_zoom = 12; /* ZOOM SETTING */

            //google map custom marker icon
            var $marker_url = 'img/google-map-marker.png';

            //we define here the style of the map
            var style = [{
                "stylers": [{
                    "hue": "#000"
                }, {
                    "saturation": -100
                }, {
                    "gamma": 2.15
                }, {
                    "lightness": 12
                }]
            }];

            //set google map options
            var map_options = {
                center: new google.maps.LatLng($latitude, $longitude),
                zoom: $map_zoom,
                panControl: false,
                zoomControl: false,
                mapTypeControl: false,
                streetViewControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                styles: style,
            }
            //initialize the map
            var map = new google.maps.Map(document.getElementById('googleMap'), map_options);
            //add a custom marker to the map
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng($latitude, $longitude),
                map: map,
                visible: true,
                icon: $marker_url
            });
        }
    }());

}); // JQuery end


$(document).on('click', '.m-menu .dropdown-menu', function (e) {
    e.stopPropagation()
});