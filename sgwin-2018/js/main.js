$(document).ready(function () {
    var section1Timeout;
    var video = document.getElementById("section-7");

    $.getJSON("json/skypeId.json", function(result){
        $.each(result, function(i, field){
            $(".skype-button.bubble").attr("data-contact-id", field);
        });
    });

    var section1Laptop = $('.section-1 .laptop');
    TweenMax.from($('.section-1 .text-wrapper'), 0.4, {ease: Power4.easeOut, x: -200, alpha: 0});
    TweenMax.from(section1Laptop, 0.4, {ease: Power4.easeOut, x: 200, alpha: 0});

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'json/particlesjs-config.json', function() {
        // console.log('callback - particles.js config loaded');
    });

    $('#section-container').fullpage({
        scrollBar: true,
        anchors:['home', 'method', 'game', 'special', 'mobile', 'charity', 'contact', 'trial'],
        menu: '#navlink',
        afterLoad: function (anchorLink, index) {
            var loadedSection = $(this);

            //using index
            if(index == 1){
                section1Timeout = setTimeout(function(){
                    $('.section-1 .image-container').addClass('animate');
                }, 200);
            }

            if (index == 2) {
                animateSection2();
            }

            if(index == 5){
                animateSection5();
            }

            if(index == 6){
                animateSection6();
            }

            if(index == 7){
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
                $('.section-6 .image').removeClass('animate');
            }

            else if (index == 6 && direction == 'down') {
                $('.section-6 .image').removeClass('animate');
            }

            else if (index == 7 && direction == 'up') {
                $(".skype-wrapper").hide();
            }

        }
    });

    // Section 3 Tab Nav
    $('.section-3 .tab-nav a').click(function(e){
        e.preventDefault();
        var currIndex = $(this).index();
        $(this).addClass("active");

        $('.section-3 .tab-nav a').not($(this)).removeClass('active');

        $('.section-3 .tab-content .tab-item:nth-child('+  (currIndex + 1) + ')').fadeIn();
        $('.section-3 .tab-content .tab-item:not(:nth-child('+  (currIndex + 1) + '))').fadeOut();
    })

    // Section 4 Tab Nav
    $('.section-4 .tab-nav a').click(function(e){
        e.preventDefault();
        var currIndex = $(this).index();
        $(this).addClass("active");

        $('.section-4 .tab-nav a').not($(this)).removeClass('active');

        $('.section-4 .tab-content .tab-item:nth-child('+  (currIndex + 1) + ')').fadeIn();
        $('.section-4 .tab-content .tab-item:not(:nth-child('+  (currIndex + 1) + '))').fadeOut();
    })


    // Section 5 Tab Nav
    $('.section-5 .tab-nav a').click(function(e){
        e.preventDefault();
        var currIndex = $(this).index();
        $(this).addClass("active");

        $('.section-5 .tab-nav a').not($(this)).removeClass('active');

        $('.section-5 .tab-content .tab-item:nth-child('+  (currIndex + 1) + ')').fadeIn();
        $('.section-5 .tab-content .tab-item:nth-child('+  (currIndex + 1) + ')').find(".feature").addClass('active');
        $('.section-5 .tab-content .tab-item:nth-child('+  (currIndex + 1) + ')').find(".image2").addClass('animate');

        $('.section-5 .tab-content .tab-item:not(:nth-child('+  (currIndex + 1) + '))').fadeOut();
        $('.section-5 .tab-content .tab-item:not(:nth-child('+  (currIndex + 1) + '))').find(".feature").removeClass('active');
        $('.section-5 .tab-content .tab-item:not(:nth-child('+  (currIndex + 1) + '))').find(".image2").removeClass('animate');
    })
});

$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    // TweenMax.to($('.parallax-bg'), 0.1, { backgroundPosition: '0 -' + scrollTop + 'px'})
    // TweenMax.to($('.parallax-bg'), 0.1, {transform: 'translateY(-' + scrollTop + 'px)'})
});

function animateSection2(){
    $('.section-2 .flex-wrapper .flex-col').addClass('show')
}

function animateSection5(){
    $('.section-5 .feature1').addClass('active');
    // $('.section-5 .image2').addClass('animate');
}

function animateSection6(){
    // var imageSize = $('.section-6 .image > div');
    // for (var i = 1; i <= imageSize.length; i++) {
        // TweenMax.fromTo($('.section-6 .image > div:nth-child(' + i + ')'), 0.4 * i ,{ delay: 0.2 * i, alpha: 1});
        // TweenMax.to($('.section-2 .flex-wrapper .flex-col:nth-child(' + i + ')'), i * 0.2 , {class:'+=show'});
    // }

    $('.section-6 .image').addClass('animate');
}