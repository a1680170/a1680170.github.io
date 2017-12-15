var myVar;
var currentindex;
$(document).ready(function() {


function clearrollover () {
	$(".navi1roll1").css ("display" , "none");
	$(".navi1roll2").css ("display" , "none");
	$(".navi1roll3").css ("display" , "none");
	$(".navi1roll4").css ("display" , "none");
	$(".navi1roll5").css ("display" , "none");
	$(".navi1roll6").css ("display" , "none");
	$(".navi1roll7").css ("display" , "none");
}

	    	$('#pagepiling').pagepiling({
	    		menu: '#menu',
	    		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
			    onLeave: function(index, nextIndex, direction){

			    		$(".page4ani1").fadeOut(300);
						$(".page4ani2").fadeOut(300);
						$(".page5ani1").fadeOut(300);
						$(".page5ani2").fadeOut(300);

						
			    },
			    afterRender: function( ){
			    },
			    afterLoad: function(anchorLink, index){
					
					if(index == 1){
						currentindex = index;
						closecontactus();
						$(".navi1roll1").fadeIn (300);
					} else if (index == 2){
						currentindex = index;
						runpage2 ();
						closecontactus();
						$(".navi1roll2").fadeIn (300);
					} else if (index == 3){
						currentindex = index;
						runpage3 ();
						closecontactus();
						$(".navi1roll3").fadeIn (300);
					} else if (index == 4){
						currentindex = index;
						runpage4 ();
						closecontactus();
						$(".navi1roll4").fadeIn (300);
					} else if (index == 5){
						currentindex = index;
						runpage5 ();
						closecontactus();
						$(".navi1roll5").fadeIn (300);
					} else if (index == 6){
						currentindex = index;
						runpage6 ();
						closecontactus();
						$(".navi1roll6").fadeIn (300);
					} 
			    }
			});
			$("#pp-nav").append("<div class='mouse'><img src='img/rightscroll.png' /></div>");
			
			TweenLite.to("#pp-nav", 0, {opacity:0, delay: 0});
			
$.fn.pagepiling.setAllowScrolling(false);
$.fn.pagepiling.setKeyboardScrolling(false);
			
			TweenLite.to([".star1" , ".star2", ".star3", ".star4", ".star5", ".star6", ".star7", ".star8", ".star9" ,".star10", ".star11"], 0, {opacity:0});
			
			TweenLite.to([".ball1" , ".ball2", ".ball3", ".ball4", ".ball5"], 0,{css:{scale:.05, opacity:0}});

			function page1ani() {
				TweenLite.to(".star1", 2, {opacity:2, rotation:360, delay: 2.8});
				TweenLite.to(".star1", 1, {opacity:0, delay: 3.8});
				TweenLite.to(".star1", 0, {rotation:0, delay: 4.8});
				
				TweenLite.to(".star2", 2, {opacity:2, rotation:360, delay: 2});
				TweenLite.to(".star2", 1, {opacity:0, delay: 2});
				TweenLite.to(".star2", 0, {rotation:0, delay: 3});
				
				TweenLite.to(".star3", 2, {opacity:2, rotation:360, delay: 3});
				TweenLite.to(".star3", 1, {opacity:0, delay: 3});
				TweenLite.to(".star3", 0, {rotation:0, delay: 4});
				
				TweenLite.to(".star4", 2, {opacity:2, rotation:360, delay: 1.7});
				TweenLite.to(".star4", 1, {opacity:0, delay: 2.7});
				TweenLite.to(".star4", 0, {rotation:0, delay: 3.7});
				
				TweenLite.to(".star5", 2, {opacity:2, rotation:360, delay: 2.5});
				TweenLite.to(".star5", 1, {opacity:0, delay: 3.5});
				TweenLite.to(".star5", 0, {rotation:0, delay: 4.5});
				
				TweenLite.to(".star6", 2, {opacity:2, rotation:360, delay: 1});
				TweenLite.to(".star6", 1, {opacity:0, delay: 1.5});
				TweenLite.to(".star6", 0, {rotation:0, delay: 2.5});
				
				TweenLite.to(".star7", 2, {opacity:2, rotation:360, delay: 1});
				TweenLite.to(".star7", 1, {opacity:0, delay: 2});
				TweenLite.to(".star7", 0, {rotation:0, delay: 3});
				
				TweenLite.to(".star8", 2, {opacity:2, rotation:360, delay: 1.3});
				TweenLite.to(".star8", 1, {opacity:0, delay: 2.3});
				TweenLite.to(".star8", 0, {rotation:0, delay: 3.3});
				
				TweenLite.to(".star9", 2, {opacity:2, rotation:360, delay: 2});
				TweenLite.to(".star9", 1, {opacity:0, delay: 2});
				TweenLite.to(".star9", 0, {rotation:0, delay: 3});
				
				TweenLite.to(".star10", 2, {opacity:2, rotation:360, delay: 2});
				TweenLite.to(".star10", 1, {opacity:0, delay: 3});
				TweenLite.to(".star10", 0, {rotation:0, delay: 4});
				
				TweenLite.to(".star11", 2, {opacity:2, rotation:360, delay: 2.1});
				TweenLite.to(".star11", 1, {opacity:0, rotation:360, delay: 3.1});
				TweenLite.to(".star11", 0, {rotation:0, delay: 5.1});
				
				//2nd ani
				
				TweenLite.to(".star1", 2, {opacity:2, rotation:360, delay: 6.8});
				TweenLite.to(".star1", 1, {opacity:0, delay: 7.8});
				TweenLite.to(".star1", 0, {rotation:0, delay: 8.8});
				
				TweenLite.to(".star2", 2, {opacity:2, rotation:360, delay: 5});
				TweenLite.to(".star2", 1, {opacity:0, delay: 6});
				TweenLite.to(".star2", 0, {rotation:0, delay: 7});
				
				TweenLite.to(".star3", 2, {opacity:2, rotation:360, delay: 6});
				TweenLite.to(".star3", 1, {opacity:0, delay: 7});
				TweenLite.to(".star3", 0, {rotation:0, delay: 8});
				
				TweenLite.to(".star4", 2, {opacity:2, rotation:360, delay: 5.7});
				TweenLite.to(".star4", 1, {opacity:0, delay: 6.7});
				TweenLite.to(".star4", 0, {rotation:0, delay: 7.7});
				
				TweenLite.to(".star5", 2, {opacity:2, rotation:360, delay: 6.5});
				TweenLite.to(".star5", 1, {opacity:0, delay: 7.5});
				TweenLite.to(".star5", 0, {rotation:0, delay: 8.5});
				
				TweenLite.to(".star6", 2, {opacity:2, rotation:360, delay: 4.5});
				TweenLite.to(".star6", 1, {opacity:0, delay: 5.5});
				TweenLite.to(".star6", 0, {rotation:0, delay: 6.5});
				
				TweenLite.to(".star7", 2, {opacity:2, rotation:360, delay: 5});
				TweenLite.to(".star7", 1, {opacity:0, delay: 6});
				TweenLite.to(".star7", 0, {rotation:0, delay: 7});
				
				TweenLite.to(".star8", 2, {opacity:2, rotation:360, delay: 5.3});
				TweenLite.to(".star8", 1, {opacity:0, delay: 6.3});
				TweenLite.to(".star8", 0, {rotation:0, delay: 7.3});
				
				TweenLite.to(".star9", 2, {opacity:2, rotation:360, delay: 5});
				TweenLite.to(".star9", 1, {opacity:0, delay: 6});
				TweenLite.to(".star9", 0, {rotation:0, delay: 7});
				
				TweenLite.to(".star10", 2, {opacity:2, rotation:360, delay: 6});
				TweenLite.to(".star10", 1, {opacity:0, delay: 7});
				TweenLite.to(".star10", 0, {rotation:0, delay: 8});
				
				TweenLite.to(".star11", 2, {opacity:2, rotation:360, delay: 6.1});
				TweenLite.to(".star11", 1, {opacity:0, rotation:360, delay: 7.1});
				TweenLite.to(".star11", 0, {rotation:0, delay: 8.1});
				
				// ani 3
				
				TweenLite.to(".star1", 2, {opacity:2, rotation:360, delay: 10.8});

				
				TweenLite.to(".star2", 2, {opacity:2, rotation:360, delay: 9});
				
				TweenLite.to(".star3", 2, {opacity:2, rotation:360, delay: 10});

				
				TweenLite.to(".star4", 2, {opacity:2, rotation:360, delay: 9.7});

				
				TweenLite.to(".star5", 2, {opacity:2, rotation:360, delay: 10.5});

				
				TweenLite.to(".star6", 2, {opacity:2, rotation:360, delay: 8.5});

				
				TweenLite.to(".star7", 2, {opacity:2, rotation:360, delay: 9});

				
				TweenLite.to(".star8", 2, {opacity:2, rotation:360, delay: 9.3});
	
				
				TweenLite.to(".star9", 2, {opacity:2, rotation:360, delay: 9});
				
				TweenLite.to(".star10", 2, {opacity:2, rotation:360, delay: 10});
				
				TweenLite.to(".star11", 2, {opacity:2, rotation:360, delay: 10.1});

				
			}

			function runpage1 () {
				TweenLite.to(".page1title", 0.5, {opacity:1, delay: 0});
				page1ani ();
				TweenLite.to(".ball1", 0.7,{css:{top:352, left:214,scale:1, opacity:1}, ease:Quad.easeOut, delay: .3 });
				TweenLite.to(".ball2", 0.7,{css:{top:189, left:299,scale:1, opacity:1}, ease:Quad.easeOut, delay: .2 });
				TweenLite.to(".ball3", 0.7,{css:{top:84, left:844,scale:1, opacity:1}, ease:Quad.easeOut, delay: .4 });
				TweenLite.to(".ball4", 0.7,{css:{top:271, left:998,scale:1, opacity:1}, ease:Quad.easeOut, delay: .3 });
				TweenLite.to(".ball5", 0.7,{css:{top:397, left:759,scale:1, opacity:1}, ease:Quad.easeOut, delay: .5 });
				
				
			}
			
			//runpage1();
			
			
			function runpage2 () {
				TweenLite.to("#sec2container", 1, {opacity:1, delay: 0});
				TweenLite.to(".groupm", 1, {opacity:1, delay: 0});
				
				TweenLite.to(".page2txt2", 1, {opacity:1, left: "462px" , delay: 0.25, ease:Strong.easeOut});
				TweenLite.to(".page2txt3", 1, {opacity:1, left: "428px" , delay: 0.5, ease:Strong.easeOut});
				TweenLite.to(".page2txt4", 1, {opacity:1, left: "394px" , delay: 0.75, ease:Strong.easeOut});
			}
			
			function runpage3 () {
				clearInterval(interval3);
				runani3();
			}
			
			function runpage4 () {
				clearInterval(interval4);
				runani4();
			}
			
			function runpage5 () {
				clearInterval(interval5);
				runani5();
				
			}
			
			function runpage6 () {
				TweenLite.to(".page6txt1", 1, {opacity:1, delay: 0});
				TweenLite.to(".page6img1", 1, {opacity:1, left: "267px" , delay: 0.25, ease:Strong.easeOut});
				TweenLite.to(".page6img2", 1, {opacity:1, left: "565px" , delay: 0.5, ease:Strong.easeOut});
				
				TweenLite.to(".page6img3", 1, {opacity:1, left: "596px" , delay: 1, ease:Strong.easeOut});
				TweenLite.to(".page6img4", 1, {opacity:1, left: "832px" , delay: 1.25, ease:Strong.easeOut});
				
				TweenLite.to(".page6img5", 1, {opacity:1, left: "211px" , delay: 1.75, ease:Strong.easeOut});
				
				TweenLite.to(".page6img6", 1, {opacity:1, left: "537px" , delay: 2.25, ease:Strong.easeOut});	
			}
				
			//runpage1 ();
			var contactus = true;
			
			
			function closecontactus () {
					TweenLite.to(".footer1", 0.5, {opacity:0, delay: 0});	
					TweenLite.to(".footer2", 0.5, {opacity:0, delay: 0});	
					TweenLite.to(".footer", 0.5, {bottom:"-305px", delay: 0, ease:Strong.easeOut});
					$(".contacttxt").css ("color" , "#ffffff");
					$(".contactimg").html ("<img src='img/contactarrowup.png' />");
					clearrollover ();
					contactus = true;	

			}
			
			function closecontactus2 () {
					TweenLite.to(".footer1", 0.5, {opacity:0, delay: 0});	
					TweenLite.to(".footer2", 0.5, {opacity:0, delay: 0});	
					TweenLite.to(".footer", 0.5, {bottom:"-305px", delay: 0, ease:Strong.easeOut});
					$(".contacttxt").css ("color" , "#ffffff");
					$(".contactimg").html ("<img src='img/contactarrowup.png' />");
					contactus = true;	

			}
			
			function opencontactus () {
					TweenLite.to(".footer1", 0.5, {opacity:1, delay: 0});	
					TweenLite.to(".footer2", 0.5, {opacity:1, delay: 0});	
					TweenLite.to(".footer", 0.5, {bottom:0, delay: 0, ease:Strong.easeOut});
					$(".contacttxt").css ("color" , "#3c3c3c");
					$(".contactimg").html ("<img src='img/contactarrowdown.png' />");
					contactus = false;	

			}
			
			function contactusclick () {
				if (contactus == true) {
					TweenLite.to(".footer1", 0.5, {opacity:1, delay: 0});	
					TweenLite.to(".footer2", 0.5, {opacity:1, delay: 0});	
					TweenLite.to(".footer", 0.5, {bottom:0, delay: 0, ease:Strong.easeOut});
					$(".contacttxt").css ("color" , "#3c3c3c");
					$(".contactimg").html ("<img src='img/contactarrowdown.png' />");
					contactus = false;	
				} else {
					TweenLite.to(".footer1", 0.5, {opacity:0, delay: 0});	
					TweenLite.to(".footer2", 0.5, {opacity:0, delay: 0});	
					TweenLite.to(".footer", 0.5, {bottom:"-305px", delay: 0, ease:Strong.easeOut});
					$(".contacttxt").css ("color" , "#ffffff");
					$(".contactimg").html ("<img src='img/contactarrowup.png' />");
					contactus = true;		
				}	
			}
			
			$(".contactbtn").click (function () {
				contactusclick();
			});
			
			$(".contacttopnavi").click (function () {
				contactusclick();
			});
			
			
			var image = new Image();
			var preloader;
			
			image.onload = function () {
			   preloader = setInterval(function(){ myTimer() }, 50);
			}
			image.src = "img/logoload.png";
			
			var preloadercount = 0;
			
			function runanimation () {
				$.fn.pagepiling.setAllowScrolling(true);
				$.fn.pagepiling.setKeyboardScrolling(true);
				$(".bullets").css ("display", "block");
				runpage1();
			}
			function myTimer() {
				if (preloadercount == 50) {
						clearInterval(preloader);
	
						$(".navi1roll1").fadeIn (300);
						TweenLite.to(".headernavi", 0.5, {opacity:1, delay: 0});
						TweenLite.to("#pp-nav", 0.5, {opacity:1, delay: 0});
					 	TweenLite.to(".footer", 0.5, {opacity:1, delay: 0 , onComplete:runanimation});
						
						
					
				} else {
					var logoshow = preloadercount/50;
					$(".preloaderlogo").css ("opacity" , logoshow);
				}
				preloadercount += 1;
			}
			
			var hash = window.location.hash.substring(1);
			if (hash == "page2" || hash == "page3" || hash == "page4" || hash == "page5" || hash == "page6" ) {
				window.location = "index.html#page1"
			}
			
			
			$(window).bind('mousewheel', function(event) {
				if (event.originalEvent.wheelDelta >= 0) {
				   	if (currentindex == 6) {
						closecontactus2 ();
					}
				}
				else {
					if (currentindex == 6) {
						opencontactus();
					}
				}
			});
			
			$(".txt1").click (function () {
				var url = "http://www.sg-win.com/y/#page6";
				var win = window.open(url, '_blank');
 				win.focus();
			});
			
			$(".txt2").click (function () {
				var url = "http://www.sg-win.com/y/#page1";
				var win = window.open(url, '_blank');
 				win.focus();
			});
			
			$(".txt3").click (function () {
				var url = "http://www.sg-win.com/y/#page2";
				var win = window.open(url, '_blank');
 				win.focus();
			});
			
			$(".txt4").click (function () {
				var url = "http://www.sg-win.com/y/#page3";
				var win = window.open(url, '_blank');
 				win.focus();
			});
			
			$(".txt5").click (function () {
				var url = "http://www.sg-win.com/y/#page4";
				var win = window.open(url, '_blank');
 				win.focus();
			});
			
			
			$(".txt6").click (function () {
				var url = "http://www.sg-win.com/y/#page5";
				var win = window.open(url, '_blank');
 				win.focus();
			});
			
			$( ".txt1" ).hover(
				  function() {
					$(".text1click").fadeIn (200);
				  }, function() {
					$(".text1click").fadeOut (100);
				  }
			);
			
			$( ".txt2" ).hover(
				  function() {
					$(".text2click").fadeIn (200);
				  }, function() {
					$(".text2click").fadeOut (100);
				  }
			);
			
			$( ".txt3" ).hover(
				  function() {
					$(".text3click").fadeIn (200);
				  }, function() {
					$(".text3click").fadeOut (100);
				  }
			);
			
			$( ".txt4" ).hover(
				  function() {
					$(".text4click").fadeIn (200);
				  }, function() {
					$(".text4click").fadeOut (100);
				  }
			);
			
			$( ".txt5" ).hover(
				  function() {
					$(".text5click").fadeIn (200);
				  }, function() {
					$(".text5click").fadeOut (100);
				  }
			);
			
			$( ".txt6" ).hover(
				  function() {
					$(".text6click").fadeIn (200);
				  }, function() {
					$(".text6click").fadeOut (100);
				  }
			);

			var mobileOS = getMobileOperatingSystem();
			var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
			if(isMac){
				$(".skype-download-link").attr("href", "download/mac/skype.dmg");
			} else{
				if(mobileOS === 'iOS'){
					$(".skype-download-link").attr("href", "download/ios/skype.dmg");
				} else if(mobileOS === 'Android'){
					$(".skype-download-link").attr("href", "download/android/skype.apk");
				} else{
					$(".skype-download-link").attr("href", "download/windows/skype.exe");
				}
			}

			new QRCode(document.getElementById("mobile-qr"), location.href + "/mobiledownload");

			/**
			 * Determine the mobile operating system.
			 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
			 *
			 * @returns {String}
			 */
			function getMobileOperatingSystem() {
			  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

			      // Windows Phone must come first because its UA also contains "Android"
			    if (/windows phone/i.test(userAgent)) {
			        return "Windows Phone";
			    }

			    if (/android/i.test(userAgent)) {
			        return "Android";
			    }

			    // iOS detection from: http://stackoverflow.com/a/9039885/177710
			    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
			        return "iOS";
			    }

			    return "unknown";
			}
			
});

var interval3;
var interval4;
var interval5;

var page3active;
var page4active;
var page5active;

function runani3 (){
	interval3 = setInterval (function () {
					var page3_1 = $(".page3ani1").css ("display");
					var page3_2 = $(".page3ani2").css ("display");

					if (page3_1 == "none") {
						$(".page3ani1").fadeIn();
						$(".page3ani2").fadeOut();
						$("#page3_1").addClass ("active");
						$("#page3_2").removeClass ("active");
						page3active = 1;
					} else {
						$(".page3ani2").fadeIn();
						$(".page3ani1").fadeOut();
						$("#page3_2").addClass ("active");
						$("#page3_1").removeClass ("active");
						page3active = 2;
					}
				}, 8000
				);
}


$("#page3_1").mouseover(function() {
	if (page3active != 1) {
		$(".page3ani1").fadeIn();
		$(".page3ani2").fadeOut();
		$("#page3_1").addClass ("active");
		$("#page3_2").removeClass ("active");
		clearInterval(interval3);
		runani3();
	}
});

$("#page3_2").mouseover(function() {
	if (page3active != 2) {
		$(".page3ani2").fadeIn();
		$(".page3ani1").fadeOut();
		$("#page3_2").addClass ("active");
		$("#page3_1").removeClass ("active");
		clearInterval(interval3);
		runani3();
	}
});

$(".page3click1").mouseover(function() {
	$(".page3ani2").fadeIn();
		$(".page3ani1").fadeOut();
		$("#page3_2").addClass ("active");
		$("#page3_1").removeClass ("active");
	clearInterval(interval3);
	runani3();
});

$(".page3click2").mouseover(function() {
	$(".page3ani1").fadeIn();
		$(".page3ani2").fadeOut();
		$("#page3_1").addClass ("active");
		$("#page3_2").removeClass ("active");
	clearInterval(interval3);
	runani3();
});

function runani4 () {
	var page4_1 = $(".page4ani1").css ("display");
	var page4_2 = $(".page4ani2").css ("display");

	if (page4_1 == "none") {
		$(".page4ani1").css ("display", "block");
		$(".page4ani2").css ("display", "none");

		$(".page4_1ani1").css ("display" , "none");
		$(".page4_1ani2").css ("display" , "none");
		$(".page4_1ani3").css ("display" , "none");

		$(".page4ani1").css ("display" , "block");

		$(".page4_1ani1").fadeIn (1000);
		$(".page4_1ani2").delay(1000).fadeIn ();
		$(".page4_1ani3").delay(1500).fadeIn ();

		$("#page4_1").addClass ("active");
		$("#page4_2").removeClass ("active");
		page4active = 1;
	} else {
		$(".page4ani2").css ("display", "block");
		$(".page4ani1").css ("display", "none");

		$(".page4_2ani1").css ("display" , "none");
		$(".page4_2ani2").css ("display" , "none");
		$(".page4_2ani3").css ("display" , "none");

		$(".page4ani2").css ("display" , "block");

		$(".page4_2ani1").fadeIn (1000);
		$(".page4_2ani2").delay(1000).fadeIn ();
		$(".page4_2ani3").delay(1500).fadeIn ();

		$("#page4_2").addClass ("active");
		$("#page4_1").removeClass ("active");
		page4active = 2;
	}

	interval4 = setInterval (function () {
		var page4_1 = $(".page4ani1").css ("display");
		var page4_2 = $(".page4ani2").css ("display");

		if (page4_1 == "none") {

			$(".page4ani1").css ("display", "block");
			$(".page4ani2").css ("display", "none");

			$(".page4_1ani1").css ("display" , "none");
			$(".page4_1ani2").css ("display" , "none");
			$(".page4_1ani3").css ("display" , "none");

			$(".page4ani1").css ("display" , "block");

			$(".page4_1ani1").fadeIn (1000);
			$(".page4_1ani2").delay(1000).fadeIn ();
			$(".page4_1ani3").delay(1500).fadeIn ();

			$("#page4_1").addClass ("active");
			$("#page4_2").removeClass ("active");
			page4active = 1;
		} else {


			$(".page4ani2").css ("display", "block");
			$(".page4ani1").css ("display", "none");

			$(".page4_2ani1").css ("display" , "none");
			$(".page4_2ani2").css ("display" , "none");
			$(".page4_2ani3").css ("display" , "none");

			$(".page4ani2").css ("display" , "block");

			$(".page4_2ani1").fadeIn (1000);
			$(".page4_2ani2").delay(1000).fadeIn ();
			$(".page4_2ani3").delay(1500).fadeIn ();

			$("#page4_2").addClass ("active");
			$("#page4_1").removeClass ("active");
			page4active = 2;
		}
	}, 8000
	);

}

$("#page4_1").mouseover(function() {
	if (page4active != 1) {
		clearInterval(interval4);
		runani4();
	}
});

$("#page4_2").mouseover(function() {
	if (page4active != 2) {
		clearInterval(interval4);
		runani4();
	}
});

$(".page4click1").mouseover(function() {
	clearInterval(interval4);
	runani4();
});

$(".page4click2").mouseover(function() {
	clearInterval(interval4);
	runani4();
});


function runani5 () {

	var page5_1 = $(".page5ani1").css ("display");
	var page5_2 = $(".page5ani2").css ("display");

	$(".handphone1").css ("opacity", "0");
	$(".page5_1txt1").css ("left", "913px");
	$(".page5_1txt1").css ("opacity", "0");
	$(".page5_1txt2").css ("left", "913px");
	$(".page5_1txt2").css ("opacity", "0");
	$(".handphone2").css ("opacity", "0");
	$(".page5_2txt1").css ("left", "913px");
	$(".page5_2txt1").css ("opacity", "0");
	$(".page5_2txt2").css ("left", "913px");
	$(".page5_2txt2").css ("opacity", "0");

	if (page5_1 == "none") {
		$(".page5ani1").css ("display" , "block");
		$(".page5ani2").css ("display" , "none");
		TweenLite.to(".handphone1", 1, {opacity:1, delay: 0});
		TweenLite.to(".page5_1txt1", 1, {opacity:1, left: "543px" , delay: 0.25, ease:Strong.easeOut});
		TweenLite.to(".page5_1txt2", 1, {opacity:1, left: "623px" , delay: 0.5, ease:Strong.easeOut});

		$("#page5_1").addClass ("active");
		$("#page5_2").removeClass ("active");

		page5active = 1;
	} else {
		$(".page5ani2").css ("display" , "block");
		$(".page5ani1").css ("display" , "none");
		TweenLite.to(".handphone2", 1, {opacity:1, delay: 0});
		TweenLite.to(".page5_2txt1", 1, {opacity:1, left: "543px" , delay: 0.25, ease:Strong.easeOut});
		TweenLite.to(".page5_2txt2", 1, {opacity:1, left: "623px" , delay: 0.5, ease:Strong.easeOut});

		$("#page5_2").addClass ("active");
		$("#page5_1").removeClass ("active");

		page5active = 2;
	}

	interval5 = setInterval (function () {
		var page5_1 = $(".page5ani1").css ("display");
		var page5_2 = $(".page5ani2").css ("display");

		$(".handphone1").css ("opacity", "0");
		$(".page5_1txt1").css ("left", "913px");
		$(".page5_1txt1").css ("opacity", "0");
		$(".page5_1txt2").css ("left", "913px");
		$(".page5_1txt2").css ("opacity", "0");
		$(".handphone2").css ("opacity", "0");
		$(".page5_2txt1").css ("left", "913px");
		$(".page5_2txt1").css ("opacity", "0");
		$(".page5_2txt2").css ("left", "913px");
		$(".page5_2txt2").css ("opacity", "0");

		if (page5_1 == "none") {
			$(".page5ani1").css ("display" , "block");
			$(".page5ani2").css ("display" , "none");
			TweenLite.to(".handphone1", 1, {opacity:1, delay: 0});
			TweenLite.to(".page5_1txt1", 1, {opacity:1, left: "543px" , delay: 0.25, ease:Strong.easeOut});
			TweenLite.to(".page5_1txt2", 1, {opacity:1, left: "623px" , delay: 0.5, ease:Strong.easeOut});

			$("#page5_1").addClass ("active");
			$("#page5_2").removeClass ("active");

			page5active = 1;
		} else {
			$(".page5ani2").css ("display" , "block");
			$(".page5ani1").css ("display" , "none");
			TweenLite.to(".handphone2", 1, {opacity:1, delay: 0});
			TweenLite.to(".page5_2txt1", 1, {opacity:1, left: "543px" , delay: 0.25, ease:Strong.easeOut});
			TweenLite.to(".page5_2txt2", 1, {opacity:1, left: "623px" , delay: 0.5, ease:Strong.easeOut});

			$("#page5_2").addClass ("active");
			$("#page5_1").removeClass ("active");

			page5active = 2;

		}

	}, 8000);

	
}

$("#page5_1").mouseover(function() {
	if (page5active != 1) {
		clearInterval(interval5);
		runani5();
	}
});

$("#page5_2").mouseover(function() {
	if (page5active != 2) {
	clearInterval(interval5);
	runani5();
}
});

$(".page5click1").mouseover(function() {
	clearInterval(interval5);
	runani5();
});

$(".page5click2").mouseover(function() {
	clearInterval(interval5);
	runani5();
});

$(".skype").hover(function(){
	$(this).find(".skype-qr").fadeIn();
}, function(){
	$(this).find(".skype-qr").fadeOut();
});



