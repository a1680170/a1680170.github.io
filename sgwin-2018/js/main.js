$(document).ready(function () {
    var section1Timeout;
    var video = document.getElementById("section-7");

    $.getJSON("json/skypeId.json", function (result) {
        $.each(result, function (i, field) {
            $(".skype-button.bubble").attr("data-contact-id", field);
        });
    });

    $('.header .nav-header li a.dropdown-anchor').hover(function(e){
        e.preventDefault();
       $('.dropdown').slideToggle(200);
        // $('.dropdown').focus();
    });


    var section1Laptop = $('.section-1 .laptop');
    // TweenMax.from($('.section-1 .text-wrapper'), 0.4, {ease: Power4.easeOut, x: -200, alpha: 0});
    // TweenMax.from(section1Laptop, 0.4, {ease: Power4.easeOut, x: 200, alpha: 0});

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'json/particlesjs-config.json', function() {
        // console.log('callback - particles.js config loaded');
    });

    var section1Animated = true;
    var section2Animated = true;
    var section5Animated = true;
    var section6Animated = true;

    $('#section-container').fullpage({
        scrollBar: true,
        anchors: ['home', 'method', 'game', 'special', 'mobile', 'charity', 'contact', 'trial'],
        menu: '#navlink',
        afterLoad: function (anchorLink, index) {
            var loadedSection = $(this);

            //using index
            if (index == 1) {
                section1Timeout = setTimeout(function () {
                    $('.section-1 .image-container').addClass('animate');
                }, 400);
                animateSection1(section1Animated);
                if (section1Animated) {
                    section1Animated = false;
                }
            }

            if (index == 2) {
                animateSection2(section2Animated);
                if (section2Animated) {
                    section2Animated = false;
                }
            }

            if (index == 4){
                animateSection5(section5Animated);
                if (section5Animated) {
                    section5Animated = false;
                }
            }

            if (index == 5) {

                TweenMax.fromTo($('.section-6 .image .image-1'), 2, {x: 0, alpha: 1}, {x: -100, alpha: 0});
                TweenMax.fromTo($('.section-6 .image .image-2'), 2, {y: 0, alpha: 1}, {y: -100, alpha: 0});
                TweenMax.fromTo($('.section-6 .image .image-3'), 2, {y: 0, alpha: 1}, {y: -200, alpha: 0});
                TweenMax.fromTo($('.section-6 .image .image-4'), 2, {x: 0, alpha: 1}, {x: 100, alpha: 0});
                TweenMax.fromTo($('.section-6 .image .image-6'), 2, {x: 0, alpha: 1}, {x: -200, alpha: 0});
                TweenMax.fromTo($('.section-6 .image .image-7'), 2, {x: 0, alpha: 1}, {x: -100, alpha: 0});

            }

            if (index == 6) {
                animateSection6(section6Animated);
                if (section6Animated) {
                    section6Animated = false;
                }
            }

            if (index == 7) {
                video.play();
                $(".skype-wrapper").show();
            }
        },
        onLeave: function (index, nextIndex, direction) {
            var leavingSection = $(this);

            //after leaving section 2
            if (index == 1 && direction == 'down') {
                clearInterval(section1Timeout);
                $('.section-1 .image-container').removeClass('animate');
            }

            else if (index == 2 && direction == 'up') {
                $('.section-2 .flex-wrapper .flex-col').removeClass('show');
            }

            else if (index == 2 && direction == 'down') {
                $('.section-2 .flex-wrapper .flex-col').removeClass('show');
            }

            else if (index == 6 && direction == 'up') {
                // $('.section-6 .image').removeClass('animate');
                // animateSection6(false);
                TweenMax.fromTo($('.section-6 .image .image-1'), 2, {x: 0, alpha: 1}, {x: -100, alpha: 0});
                TweenMax.fromTo($('.section-6 .image .image-2'), 2, {y: 0, alpha: 1}, {y: -100, alpha: 0});
                TweenMax.fromTo($('.section-6 .image .image-3'), 2, {y: 0, alpha: 1}, {y: -200, alpha: 0});
                TweenMax.fromTo($('.section-6 .image .image-4'), 2, {x: 0, alpha: 1}, {x: 100, alpha: 0});
                TweenMax.fromTo($('.section-6 .image .image-6'), 2, {x: 0, alpha: 1}, {x: -200, alpha: 0});
                TweenMax.fromTo($('.section-6 .image .image-7'), 2, {x: 0, alpha: 1}, {x: -100, alpha: 0});

            }

            else if (index == 6 && direction == 'down') {
                // $('.section-6 .image').removeClass('animate');
                // animateSection6(false);
                TweenMax.fromTo($('.section-6 .image .image-1'), 2, {x: 0, alpha: 1}, {x: -100, alpha: 0});
                TweenMax.fromTo($('.section-6 .image .image-2'), 2, {y: 0, alpha: 1}, {y: -100, alpha: 0});
                TweenMax.fromTo($('.section-6 .image .image-3'), 2, {y: 0, alpha: 1}, {y: -200, alpha: 0});
                TweenMax.fromTo($('.section-6 .image .image-4'), 2, {x: 0, alpha: 1}, {x: 100, alpha: 0});
                TweenMax.fromTo($('.section-6 .image .image-6'), 2, {x: 0, alpha: 1}, {x: -200, alpha: 0});
                TweenMax.fromTo($('.section-6 .image .image-7'), 2, {x: 0, alpha: 1}, {x: -100, alpha: 0});

            }

            else if (index == 7 && direction == 'up') {
                $(".skype-wrapper").hide();
            }

        }
    });

    // Section 3 Tab Nav
    $('.section-3 .tab-nav a').click(function (e) {
        e.preventDefault();
        var currIndex = $(this).index();
        $(this).addClass("active");

        $('.section-3 .tab-nav a').not($(this)).removeClass('active');

        $('.section-3 .tab-content .tab-item:nth-child(' + (currIndex + 1) + ')').fadeIn();
        $('.section-3 .tab-content .tab-item:not(:nth-child(' + (currIndex + 1) + '))').fadeOut();
    })

    // Section 4 Tab Nav
    $('.section-4 .tab-nav a').click(function (e) {
        e.preventDefault();
        var currIndex = $(this).index();
        $(this).addClass("active");

        $('.section-4 .tab-nav a').not($(this)).removeClass('active');

        $('.section-4 .tab-content .tab-item:nth-child(' + (currIndex + 1) + ')').fadeIn();
        $('.section-4 .tab-content .tab-item:not(:nth-child(' + (currIndex + 1) + '))').fadeOut();
    })


    // Section 5 Tab Nav
    $('.section-5 .tab-nav a').click(function (e) {
        e.preventDefault();
        var currIndex = $(this).index();
        $(this).addClass("active");

        $('.section-5 .tab-nav a').not($(this)).removeClass('active');

        $('.section-5 .tab-content .tab-item:nth-child(' + (currIndex + 1) + ')').fadeIn();
        // $('.section-5 .tab-content .tab-item:nth-child('+  (currIndex + 1) + ')').find(".feature").addClass('active');
        // $('.section-5 .tab-content .tab-item:nth-child('+  (currIndex + 1) + ')').find(".image2").addClass('animate');

        var section5Image1Timeline = new TimelineLite({paused: true});
        var section5Image2Timeline = new TimelineLite({paused: true});

        for (var j = 1; j <= $('.section-5 .feature1 li').length; j++) {
            section5Image1Timeline.fromTo($('.section-5 .feature1 > li:nth-child(' + j + ')'), 0.01 * j, {
                y: -100,
                alpha: 0
            }, {y: 0, alpha: 1});
        }

        for (var m = 1; m <= $('.section-5 .feature2 li').length; m++) {
            section5Image2Timeline.fromTo($('.section-5 .feature2 > li:nth-child(' + m + ')'), 0.01 * m, {
                y: -100,
                alpha: 0
            }, {y: 0, alpha: 1});
        }

        for (var i = 1; i <= $('.section-5 .image2 > .img').length; i++) {
            // TweenMax.to($('.section-5 .image2 > .img:nth-child(' + i + ')'), 0.2 * i, {x: 0, y: 0, alpha: 1});
            // TweenMax.to($('.section-5 .image2 > .img:nth-child(' + i + ') .screen'), 0.2 * i, {scale: 1});
            section5Image2Timeline.fromTo($('.section-5 .image2 > .img:nth-child(' + i + ')'), 0.4, {
                x: -200,
                y: -100,
                alpha: 0,
                delay: 0.05 * (i - 1)
            }, {x: 0, y: 0, alpha: 1});
            section5Image2Timeline.fromTo($('.section-5 .image2 > .img:nth-child(' + i + ') .screen'), 0.05 * i, {scale: 0}, {scale: 1});
        }

        if (currIndex === 0) {
            // animateSection5("image1", "play");
            // animateSection5("image2", "reverse");
            section5Image1Timeline.play();

        } else {
            // animateSection5("image2", "play");
            // animateSection5("image1", "reverse");
            section5Image2Timeline.play();
        }


        $('.section-5 .tab-content .tab-item:not(:nth-child(' + (currIndex + 1) + '))').fadeOut();
        // $('.section-5 .tab-content .tab-item:not(:nth-child('+  (currIndex + 1) + '))').find(".feature").removeClass('active');
        // $('.section-5 .tab-content .tab-item:not(:nth-child('+  (currIndex + 1) + '))').find(".image2").removeClass('animate');
    })
});
//
// $(window).scroll(function () {
//     var scrollTop = $(this).scrollTop();
//     // TweenMax.to($('.parallax-bg'), 0.1, { backgroundPosition: '0 -' + scrollTop + 'px'})
//     // TweenMax.to($('.parallax-bg'), 0.1, {transform: 'translateY(-' + scrollTop + 'px)'})
// });

function animateSection1(play) {
    if (play) {
        TweenMax.fromTo($('.section-1 .image-container .laptop .cover'), 4, {
            scale: 0,
            alpha: 0,
            repeat: -1,
            yoyo: true
        }, {
            scale: 1,
            alpha: 1,
            repeat: -1,
            x: -20,
            yoyo: true
        });

        TweenMax.fromTo($('.section-1 .image-container .laptop .popup'), 3, {
            scale: 0,
            alpha: 0,
            repeat: -1,
            yoyo: true
        }, {
            scale: 1,
            alpha: 1,
            repeat: -1,
            x: -30,
            yoyo: true
        });

        TweenMax.fromTo($('.section-1 .image-container .laptop .screen-2'), 5, {
            scale: 0,
            alpha: 0,
            repeat: -1,
            yoyo: true
        }, {
            scale: 1,
            alpha: 1,
            y: -10,
            repeat: -1,
            yoyo: true
        });
    }
}

function animateSection2(play) {
    $('.section-2 .flex-wrapper .flex-col').addClass('show');

    if (play) {

        var light = new TimelineLite({
            onComplete: function () {
                this.restart()
            }
        });

        var lightSource1 = $('.section-2 .flex-wrapper .flex-col .image-1 img.light');
        light.from(lightSource1, 0.5, {alpha: 0}).to(lightSource1, 1, {alpha: 0.5}).to(lightSource1, 0.5, {alpha: 0});


        TweenMax.to($('.section-2 .flex-wrapper .flex-col .image-1 img.circle'), 3, {
            y: 19,
            repeat: -1,
            yoyo: true
        });

        TweenMax.to($('.section-2 .flex-wrapper .flex-col .image-1 img.shield'), 3, {
            y: -30,
            repeat: -1,
            yoyo: true
        });


        TweenMax.to($('.section-2 .flex-wrapper .flex-col .image-2 img.top'), 5, {
            y: -5, repeat: -1,
            yoyo: true
        });


        TweenMax.to($('.section-2 .flex-wrapper .flex-col .image-2 img.label2'), 2, {
            y: -46, alpha: 0, repeat: -1,
            yoyo: true
        });

        TweenMax.to($('.section-2 .flex-wrapper .flex-col .image-2 img.label3'), 2, {
            y: -87, alpha: 0, repeat: -1,
            yoyo: true
        });

        TweenMax.to($('.section-2 .flex-wrapper .flex-col .image-2 img.card2'), 3, {
            y: -46, alpha: 0, repeat: -1,
            yoyo: true
        });

        TweenMax.to($('.section-2 .flex-wrapper .flex-col .image-2 img.card3'), 3, {
            y: -87, alpha: 0, repeat: -1,
            yoyo: true
        });


        var lightSource2 = $('.section-2 .flex-wrapper .flex-col .image-3 img.light');
        var lightSource3 = $('.section-2 .flex-wrapper .flex-col .image-3 img.side');
        light.from(lightSource2, 0.1, {alpha: 0}).to(lightSource2, 0.5, {alpha: 0.2}).to(lightSource2, 0.3, {alpha: 1}).to(lightSource1, 0.5, {alpha: 0.4}).to(lightSource1, 0.4, {alpha: 0.1});
        light.from(lightSource3, 0.5, {alpha: 0}).to(lightSource3, 1, {alpha: 0.5}).to(lightSource3, 0.5, {alpha: 0});


        TweenMax.to($('.section-2 .flex-wrapper .flex-col .image-3 img.base2'), 3, {
            y: 19,
            repeat: -1,
            yoyo: true
        });

        TweenMax.to($('.section-2 .flex-wrapper .flex-col .image-3 img.base3'), 3, {
            y: 40,
            repeat: -1,
            yoyo: true
        });

        TweenMax.to($('.section-2 .flex-wrapper .flex-col .image-3 img.base4'), 3, {
            y: 60,
            repeat: -1,
            yoyo: true
        });

        TweenMax.to($('.section-2 .flex-wrapper .flex-col .image-3 img.base5'), 3, {
            y: 60,
            repeat: -1,
            yoyo: true
        });


        light.play();
    }
}

function animateSection5(play) {
    if(play){
        // Static animation
        TweenMax.fromTo($('.section-5 .image1 .img1'), 5, {scale: 0, alpha: 0}, {
            scale: 1,
            alpha: 1,
            repeat: -1,
            yoyo: true
        });
        TweenMax.fromTo($('.section-5 .image1 .img4'), 2, {scale: 0, alpha: 0}, {
            scale: 1,
            alpha: 1,
            repeat: -1,
            yoyo: true
        });
        TweenMax.fromTo($('.section-5 .image1 .img5'), 4, {scale: 0, alpha: 0}, {
            scale: 1,
            alpha: 1,
            repeat: -1,
            yoyo: true
        });
        TweenMax.fromTo($('.section-5 .image1 .img6'), 3, {scale: 0, alpha: 0}, {
            scale: 1,
            alpha: 1,
            repeat: -1,
            yoyo: true
        });
        TweenMax.fromTo($('.section-5 .image1 .img7'), 1, {scale: 0, alpha: 0}, {
            scale: 1,
            alpha: 1,
            repeat: -1,
            yoyo: true
        });
        TweenMax.fromTo($('.section-5 .image1 .img8'), 7, {scale: 0, alpha: 0}, {
            scale: 1,
            alpha: 1,
            repeat: -1,
            yoyo: true
        });
        TweenMax.fromTo($('.section-5 .image1 .img9'), 9, {scale: 0, alpha: 0}, {
            scale: 1,
            alpha: 1,
            repeat: -1,
            yoyo: true
        });
    }

    for (var j = 1; j <= $('.section-5 .feature1 li').length; j++) {
        TweenMax.fromTo($('.section-5 .feature1 > li:nth-child(' + j + ')'), 0.2 * j, {y: -100, alpha: 0}, {
            y: 0,
            alpha: 1
        });
    }

}

function animateSection6(play) {
    // var imageSize = $('.section-6 .image > div');
    // for (var i = 1; i <= imageSize.length; i++) {
    // TweenMax.fromTo($('.section-6 .image > div:nth-child(' + i + ')'), 0.4 * i ,{ delay: 0.2 * i, alpha: 1});
    // TweenMax.to($('.section-2 .flex-wrapper .flex-col:nth-child(' + i + ')'), i * 0.2 , {class:'+=show'});
    // }

    // $('.section-6 .image').addClass('animate');

    // var damping = $('.section-6 .ripple .damping');
    // ripple.from(damping, 2, {scale: 0.5, alpha: 0})
    // .to(damping, 0, {scale: 1, alpha: 1})
    // .to(damping, 1, {scale: 1.5, alpha: 0});
    // ripple.play();


    if (play) {
        var ripple = new TimelineLite({
            onComplete: function () {
                this.restart()
            }
        });

        var damping = $('.section-6 .ripple .damping');
        ripple.from(damping, 2, {scale: 0.5, alpha: 0})
            .to(damping, 0, {scale: 1, alpha: 1})
            .to(damping, 1, {scale: 1.5, alpha: 0});
        ripple.play();

    }

    TweenMax.fromTo($('.section-6 .image .image-1'), 2, {x: -100, alpha: 0}, {x: 0, alpha: 1});
    TweenMax.fromTo($('.section-6 .image .image-2'), 2, {delay: 0.2, y: -100, alpha: 0}, {y: 0, alpha: 1});
    TweenMax.fromTo($('.section-6 .image .image-3'), 2, {delay: 0.2 * 2, y: -200, alpha: 0}, {y: 0, alpha: 1});
    TweenMax.fromTo($('.section-6 .image .image-4'), 2, {delay: 0.2 * 3, x: 100, alpha: 0}, {x: 0, alpha: 1});
    TweenMax.fromTo($('.section-6 .image .image-6'), 2, {delay: 0.2 * 4, x: -200, alpha: 0}, {x: 0, alpha: 1});
    TweenMax.fromTo($('.section-6 .image .image-7'), 2, {delay: 0.2 * 5, x: -100, alpha: 0}, {x: 0, alpha: 1});


}