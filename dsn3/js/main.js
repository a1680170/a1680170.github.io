$(document).ready(()=>{
	var timeInterval = setInterval(()=>{
		var date = moment().format('DD / MM / YYYY HH:mm:ss');
		$(".date").text(date);
	}, 1000);

	$('.js-tilt').tilt({
	    scale: 1.2
	});

	randomizeGlare();
	getCurrentGame();

	var scene = document.getElementById('scene');
	if(scene){
		var parallaxInstance = new Parallax(scene, {
		  relativeInput: true
		});
	}
	
	var mySwiper = new Swiper ('.swiper-container', {
	    // Optional parameters
	    direction: 'horizontal',
	    loop: true,
	    autoplay: {
		    delay: 5000,
	  	},

	    // If we need pagination
	    pagination: {
	      el: '.swiper-pagination',
	    },

	    // Navigation arrows
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },

	    // And if we need scrollbar
	    scrollbar: {
	      el: '.swiper-scrollbar',
	    },
	  });

	var phoneSwiper = new Swiper ('.swiper-container-phone', {
	    // Optional parameters
	    direction: 'horizontal',
	    loop: true,
	    flipEffect: {
		    rotate: 30,
		    slideShadows: false,
		  }
	  });
	// Scroll reveal
	window.sr = ScrollReveal();


	//Index 
	// selector, duration, delay, distance, origin
	scrollReveal('.line.left', 1000, 0, 100, 'right');
	scrollReveal('.line.right', 1000, 0, 100, 'left');
	scrollReveal('.service-footer', 600, 0, 345, 'bottom');
	scrollReveal('.game-title .game-start', 600, 300, 345, 'right');
	scrollReveal('.game-title .game-end', 600, 600, 345, 'right');
	scrollReveal('.game-bg', 600, 800, 345, 'right');
	scrollReveal('.current-game', 600, 900, 345, 'right');
	scrollReveal('.games-container .button.go', 600, 1000, 345, 'bottom');

	//Mobile
	scrollReveal('.phone-wrapper .mobile1', 600, 0, 345, 'bottom');
	scrollReveal('.phone-wrapper .mobile2', 600, 400, 100, 'right');
	scrollReveal('.phone-wrapper .mobile3', 600, 400, 100, 'left');
	scrollReveal('.phone-wrapper .mobile4', 600, 800, 200, 'right');
	scrollReveal('.phone-wrapper .mobile5', 600, 800, 200, 'left');
	scrollReveal('.phone-wrapper .mickey', 600, 800, 200, 'left');

	stragerScrollReveal('.service-wrapper > div', 600, 200, 300, 'bottom');
	stragerScrollReveal('.service .service-item', 600, 100, 300, 'bottom');
	stragerScrollReveal('.service.mobile .service-item', 600, 100, 300, 'right');
	stragerScrollReveal('.game-list .game-item', 600, 50, 300, 'bottom');
	stragerScrollReveal('.partner li', 600, 100, 200, 'bottom');	

	// Detect visible
	var increaseServiceAmountExecuted = false;
	$(window).scroll(function(){
	    if($('.service-item').visible() && !increaseServiceAmountExecuted){
	    	increaseServiceAmountExecuted = true;
			increaseServiceAmount('span.deposit-value', 25, 100, '');
			increaseServiceAmount('span.withdraw-value', 120, 30, 'time');
			increaseServiceAmount('span.bank-value', 34, 100, '');
		}
		// if(increaseServiceAmountExecuted){
			// $(window).unbind('scroll');
		// }
		if($(window).scrollTop() > 100){
			$('.sticky-nav-list .back-to-top').css('opacity', '1');
		} else{
			$('.sticky-nav-list .back-to-top').css('opacity', '0');
		}
	});

	$('.sticky-nav-list .back-to-top a').click(function(e){
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 });
	})

	tabContentItemToggle('.sub-content-item-header', '.sub-content-item-content');
	tabSwitchContentToggle('.tab-container.left-panel .tab-switch ul li a', '.tab-container.left-panel .tab-content .sub-content');
})


function randomizeGlare(){
	$(".game-list .game-item").each(function(k, i){
		var random = Math.floor(Math.random() * 10) + 1;
		var randomTime = Math.floor(Math.random() * 5) + 1;
		var count = k + 1;
		$(".game-item:nth-child(" + count + ") .glare").css('top', random + 'px');
		$(".game-item:nth-child(" + count + ") .glare").css('left', random + 'px');
		$(".game-item:nth-child(" + count + ") .glare").css('animation-duration', random + 's');
	});
}

function getCurrentGame(){
	$(".game-item a").click(function(e){
		e.preventDefault();
		var currentGame = $(this).attr("class");
		$(".current-game div").attr("class", "");
		$(".current-game div").addClass(currentGame);
		$(".current-game div").addClass("blur");
		setTimeout(function(){
			$(".current-game div").removeClass("blur");
		},600);
	})
}

function scrollReveal(selector, duration, delay, distance, origin){
	sr.reveal(selector, { 
		duration: duration, 
		delay: delay,
		distance: distance + 'px', 
		origin: origin
	});
}

function stragerScrollReveal(selector, duration, delay, distance, origin){
	for(var i=1; i <= $(selector).length; i++){
		sr.reveal( selector + ':nth-child('+ i +')', { 
			duration: duration, 
			delay: delay * i,
			distance: distance + 'px', 
			origin: origin
		});
	}
}

function increaseServiceAmount(selector, max, speed, type){
	var count = 0;
	var increaseServiceAmountInterval = setInterval(function(){
		count += 1;
		if(type === 'time'){
			var formatted = moment.utc(count * 1000).format('mm:ss');
			$(selector).text(formatted);
		} else{
			$(selector).text(count);
		}
		if(count === max){
			clearInterval(increaseServiceAmountInterval);
		}
	}, speed);
}

function tabContentItemToggle(selector, siblings){
	$(selector).click(function(e){
		e.preventDefault();
		$(this).siblings(siblings).slideToggle();
	})
}

function tabSwitchContentToggle(selector, target){
	$(selector).click(function(e){
		e.preventDefault();
		$(this).parent("li").addClass("active");
		$(selector).not($(this)).parent("li").removeClass("active");
		var index = $(this).parent("li").index() + 1;

		$(target + ':nth-child(' + index + ')').addClass("active");
		$(target + ':not(:nth-child(' + index + '))').removeClass("active");
	})
}