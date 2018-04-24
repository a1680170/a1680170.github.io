$(document).ready(function () {
    var video = document.getElementById("section-7");

    var section1Laptop = $('.section-1 .laptop');
    TweenMax.from($('.section-1 .text-wrapper'), 0.4, {ease: Power4.easeOut, x: -200, alpha: 0});
    TweenMax.from(section1Laptop, 0.4, {ease: Power4.easeOut, x: 200, alpha: 0});

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'json/particlesjs-config.json', function() {
        // console.log('callback - particles.js config loaded');
    });

    setTimeout(function () {
        $('.section-1 .image-container').addClass('animate');
    }, 400);

    $('#section-container').fullpage({
        scrollBar: true,
        anchors:['home', 'method', 'game', 'special', 'mobile', 'charity', 'contact', 'trial'],
        menu: '#navlink',
        afterLoad: function (anchorLink, index) {
            var loadedSection = $(this);

            //using index
            if (index == 2) {
                var section2 = $('.section-2 .flex-wrapper .flex-col');
                for (var i = 1; i <= section2.length; i++) {
                    TweenMax.set($('.section-2 .flex-wrapper .flex-col:nth-child(' + i + ')'),{delay:0.2 * (i - 1), className:'+=show'});
                    // TweenMax.to($('.section-2 .flex-wrapper .flex-col:nth-child(' + i + ')'), i * 0.2 , {class:'+=show'});
                }

            }

            if(index == 5){
                animateSection5();
            }

            if(index == 6){
                animateSection6();
            }

            if(index == 7){
                video.play();
            }
        },
        onLeave: function (index, nextIndex, direction) {
            var leavingSection = $(this);

            //after leaving section 2
            if (index == 1 && direction == 'down') {
                $('.section-1 .image-container').removeClass('animate');
            }

            else if (index == 2 && direction == 'up') {
                $('.section-1 .image-container').addClass('animate');
                $('.section-2 .flex-wrapper .flex-col').removeClass('show');
            }

            else if (index == 2 && direction == 'down') {
                $('.section-2 .flex-wrapper .flex-col').removeClass('show');
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
        $('.section-5 .tab-content .tab-item:not(:nth-child('+  (currIndex + 1) + '))').fadeOut();
    })
});

$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    // TweenMax.to($('.parallax-bg'), 0.1, { backgroundPosition: '0 -' + scrollTop + 'px'})
    // TweenMax.to($('.parallax-bg'), 0.1, {transform: 'translateY(-' + scrollTop + 'px)'})
});

function flexColAnimation(){

}

function animateSection5(){
    $('.section-5 .feature1').addClass('active');
}

function animateSection6(){
    var imageSize = $('.section-6 .image > div');
    for (var i = 1; i <= imageSize.length; i++) {
        TweenMax.to($('.section-6 .image > div:nth-child(' + i + ')'), 0.4 * i ,{ delay: 0.2 * i, alpha: 1});
        // TweenMax.to($('.section-2 .flex-wrapper .flex-col:nth-child(' + i + ')'), i * 0.2 , {class:'+=show'});
    }
}