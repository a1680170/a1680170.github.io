$(document).ready(function(){
	// Scroll reveal
	window.sr = ScrollReveal();

	sr.reveal('.section-1 .bg', { duration: 600, distance: '200px', scale: 1.3, delay: 1000 });
	sr.reveal('.section-2 .imac', { duration: 1000, delay: 300 });
	sr.reveal('.section-2 .player', { duration: 1000, origin: 'right', distance: '200px', delay: 900 });
	sr.reveal('.section-2 .football', { duration: 1000, origin: 'right', distance: '300px',scale: 0.5, delay: 600 });

	sr.reveal('.section-3 .captain', { duration: 1000, distance: '200px', delay: 200});
	sr.reveal('.section-3 .ironman', { duration: 1000, scale: 0.5, delay: 1200 });
	sr.reveal('.section-3 .thor', { duration: 1000, scale: 0.5, delay: 1800 });

	sr.reveal('.football .text', { duration: 1000, distance: '200px', scale: 0.5, delay: 400 });

	sr.reveal('.client-wrapper .phone1', { duration: 1000, origin: 'left', distance: '200px', delay: 400 });
	sr.reveal('.client-wrapper .phone1alt', { duration: 1000, origin: 'left', distance: '200px' });

	sr.reveal('.client-wrapper .phone2', { duration: 1000, origin: 'right', distance: '200px', delay: 800 });
	sr.reveal('.client-wrapper .phone2alt', { duration: 1000, origin: 'right', distance: '200px', delay: 400 });

	sr.reveal('.client-wrapper .phone3', { duration: 1000, origin: 'bottom', distance: '200px'});
	sr.reveal('.client-wrapper .phone3alt', { duration: 1000, origin: 'left',scale: 0.5, distance: '200px', delay: 400  });

	sr.reveal('.client-wrapper .phone4', { duration: 1000, origin: 'bottom', distance: '200px'});
	sr.reveal('.client-wrapper .phone4alt', { duration: 1000, origin: 'right',scale: 0.5, distance: '200px', delay: 400  });

	sr.reveal('.client-wrapper .phone5', { duration: 1000, origin: 'bottom', distance: '200px', delay: 800 });
	sr.reveal('.client-wrapper .phone5alt', { duration: 1000, origin: 'bottom', distance: '200px', delay: 400 });

	for(var i = 1; i <= 4; i++ ){
		sr.reveal('.timing li:nth-child('+ i +')', { duration: 400, distance: '200px', delay: (i * 200) });
	}

	for(var i = 1; i <= 2; i++ ){
		sr.reveal('.products .box-col:nth-child('+ i +')', { duration: 400, distance: '200px', delay: (i * 200) });
	}

	for(var i = 1; i <= 4; i++ ){
		sr.reveal('.special ul li:nth-child('+ i +')', { duration: 400, distance: '200px', delay: (i * 200) });
	}

	for(var i = 1; i <= 5; i++ ){
		sr.reveal('.flex-wrapper > div:nth-child('+ i +')', { duration: 600, distance: '200px', delay: (i * 300) });
	}

	initiateDisplayTime();

	$(".second-header a").hover(function(){
		var currentClass = $(this)[0].className;
		// toggleDropdownMenu(currentClass);
		displayPercentageValue(currentClass);
	});

	$('.game-switch a').click(function(e){
		e.preventDefault();
		var gameIndex = $(this).parent('li').index() + 1;

		$(this).parent('li').addClass('active');
		$('.game-switch li a').not($(this)).parent('li').removeClass('active');

		$('.game-content:nth-child(' + gameIndex  + ')').addClass('active');
		$('.game-content:not(:nth-child(' + gameIndex  + '))').removeClass('active');
	});

	$('.tab-switch a').click(function(e){
		e.preventDefault();
		var gameIndex = $(this).parent('li').index() + 1;

		$(this).parent('li').addClass('active');
		$('.tab-switch li a').not($(this)).parent('li').removeClass('active');

		$('.tab-content:nth-child(' + gameIndex  + ')').addClass('active');
		$('.tab-content:not(:nth-child(' + gameIndex  + '))').removeClass('active');
	});

	$('.left-panel .game-type-list li a').click(function(e){
		e.preventDefault();
		$(this).parent("li").addClass('active');
		$('.left-panel .game-type-list li').not($(this).parent("li")).removeClass('active');

		var leftIndex = $(this).parent('li').index() + 1;
		$('.right-panel .game-type-content-list:nth-child(' + leftIndex  + ')').addClass('active');
		$('.right-panel .game-type-content-list:not(:nth-child(' + leftIndex  + '))').removeClass('active');
	});

	if($('.faq-wrapper').hasClass('guide')){
        $('.faq-wrapper.guide ul li a').click(function(e){
            e.preventDefault();

            var currentId = $(this).attr("href");

            var marginTop = 145;
            $("html, body").animate({ scrollTop: $(currentId).offset().top  - marginTop});
        });
		$(window).scroll(function (event) {
		    var scroll = $(window).scrollTop();
		    var first = $('#first').offset().top - 155;
		    var second = $('#second').offset().top - 155;
		    var third = $('#third').offset().top - 155;
		    var forth = $('#forth').offset().top - 155;
		    var fifth = $('#fifth').offset().top - 155;
		    var sixth = $('#sixth').offset().top - 155;
		    // Do something
		    if(scroll >= sixth && fifth <= scroll){
		    	$('.faq-switch li:nth-child(6)').addClass("active");
		    	$('.faq-switch li:not(:nth-child(6))').removeClass("active");
		    } else if(scroll >= fifth && forth <= scroll){
		    	$('.faq-switch li:nth-child(5)').addClass("active");
		    	$('.faq-switch li:not(:nth-child(5))').removeClass("active");
		    } else if(scroll >= forth && third <= scroll){
		    	$('.faq-switch li:nth-child(4)').addClass("active");
		    	$('.faq-switch li:not(:nth-child(4))').removeClass("active");
		    } else if(scroll >= third && second <= scroll){
		    	$('.faq-switch li:nth-child(3)').addClass("active");
		    	$('.faq-switch li:not(:nth-child(3))').removeClass("active");
		    } else if(scroll >= second && first <= scroll){
		    	$('.faq-switch li:nth-child(2)').addClass("active");
		    	$('.faq-switch li:not(:nth-child(2))').removeClass("active");
		    } else if(scroll >= first){
		    	$('.faq-switch li:nth-child(1)').addClass("active");
		    	$('.faq-switch li:not(:nth-child(1))').removeClass("active");
		    }
		});

	} else{
        $('.faq-switch a').click(function(e){
            e.preventDefault();
            var gameIndex = $(this).parent('li').index() + 1;

            $(this).parent('li').addClass('active');
            $('.faq-switch li a').not($(this)).parent('li').removeClass('active');

            $('.faq-content:nth-child(' + gameIndex  + ')').addClass('active');
            $('.faq-content:not(:nth-child(' + gameIndex  + '))').removeClass('active');
        });
	}

	if($('.client-wrapper').length !== 0 ){
		detectScrollDirection();
	}

	if($('#jssor_1').length !== 0){
		initJssorSlider();
	}
	
	$('.promo-list a').click(function(e){
		e.preventDefault();
		$(this).siblings('.promo-content').slideToggle();
	})

	// Sticky kit
	$(".tab-switch").stick_in_parent({
		offset_top : 95
	});

	$(".game-switch").stick_in_parent({
		offset_top : 95
	});

	$(".faq-switch").stick_in_parent({
		offset_top : 95
	});
})

function displayPercentageValue(currentClass){
	var value = "";
	if(currentClass === 'sports'){
		value = "0.8";
	} else{
		value = "1.2";
	}

	$('.percentage .value').text(value);
}

function toggleDropdownMenu(currentClass){
	$('.dropdown-menu.' + currentClass).fadeIn();
	$('.dropdown-menu:not(.' + currentClass + ')').fadeOut();

	$(".dropdown-menu").on("mouseleave", function(){
		$(this).fadeOut();
	})
}

function initiateDisplayTime(){
	displayTotalTime(".topup-time", 19);
	displayTotalTime(".transaction-time", 47);
	displayTotalTime(".withdrawal-time", 209);
	displayTotalTime(".promo-time", 168);
}

function displayTotalTime(selector, time){
	var elem = $(selector);
	var count = 0;

	var interval = setInterval(function(){
		count += 1;
		elem.text(count + "");
		if(count === time){
			clearInterval(interval);
		}
	}, 30);
}

function detectScrollDirection(){
	var lastScrollTop = 0;
	$(window).scroll(function(event){
	   var st = $(this).scrollTop();
	   if (st > lastScrollTop){
	       // downscroll code
	       $('.phone-wrapper').addClass("down");
	       $('.phone-wrapper').removeClass("up");
	   } else {
	      // upscroll code
	      $('.phone-wrapper').addClass("up");
	       $('.phone-wrapper').removeClass("down");
	   }
	   lastScrollTop = st;
	});
}

function initJssorSlider(){
	jQuery(document).ready(function($) {

        var jssor_1_SlideoTransitions = [
            [{
                b: -1,
                d: 1,
                o: -0.7
            }],
            [{
                b: 900,
                d: 2000,
                x: -379,
                e: {
                    x: 7
                }
            }],
            [{
                b: 900,
                d: 2000,
                x: -379,
                e: {
                    x: 7
                }
            }],
            [{
                b: -1,
                d: 1,
                o: -1,
                sX: 2,
                sY: 2
            }, {
                b: 0,
                d: 900,
                x: -171,
                y: -341,
                o: 1,
                sX: -2,
                sY: -2,
                e: {
                    x: 3,
                    y: 3,
                    sX: 3,
                    sY: 3
                }
            }, {
                b: 900,
                d: 1600,
                x: -283,
                o: -1,
                e: {
                    x: 16
                }
            }]
        ];

        var jssor_1_options = {
            $AutoPlay: 1,
            $SlideDuration: 800,
            $SlideEasing: $Jease$.$OutQuint,
            $CaptionSliderOptions: {
                $Class: $JssorCaptionSlideo$,
                $Transitions: jssor_1_SlideoTransitions
            },
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
            },
            $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
            }
        };

        var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

        /*#region responsive code begin*/

        var MAX_WIDTH = 3000;

        function ScaleSlider() {
            var containerElement = jssor_1_slider.$Elmt.parentNode;
            var containerWidth = containerElement.clientWidth;

            if (containerWidth) {

                var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                jssor_1_slider.$ScaleWidth(expectedWidth);
            } else {
                window.setTimeout(ScaleSlider, 30);
            }
        }

        ScaleSlider();

        $(window).bind("load", ScaleSlider);
        $(window).bind("resize", ScaleSlider);
        $(window).bind("orientationchange", ScaleSlider);
        /*#endregion responsive code end*/
    });
}