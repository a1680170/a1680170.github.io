$(document).ready(function() {
  var scroll = true;
  var isMobile = false; //initiate as false
  // device detection
  if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
      navigator.userAgent
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      navigator.userAgent.substr(0, 4)
    )
  ) {
    isMobile = true;
  }

  var section1Timeout;
  var video = document.getElementById("section-7");

  $.getJSON("json/skypeId.json", function(result) {
    $.each(result, function(i, field) {
      $(".skype-button.bubble").attr("data-contact-id", field);
    });
  });

  $(".header .nav-header li a.dropdown-anchor").hover(function(e) {
    e.preventDefault();
    $(".dropdown").slideToggle(200);
    // $('.dropdown').focus();
  });

  // TweenMax.from($('.section-1 .text-wrapper'), 0.4, {ease: Power4.easeOut, x: -200, alpha: 0});
  // TweenMax.from(section1Laptop, 0.4, {ease: Power4.easeOut, x: 200, alpha: 0});

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  // particlesJS.load("particles-js", "json/particlesjs-config.json", function() {
  //   // console.log('callback - particles.js config loaded');
  // });

  var section1Animated = true;
  var section2Animated = true;
  var section5Animated = true;
  var section6Animated = true;

  if (!isMobile) {
    $("#section-container").fullpage({
      scrollBar: true,
      anchors: [
        "home",
        "method",
        "game",
        "special",
        "mobile",
        "charity",
        "contact",
        "trial"
      ],
      menu: "#navlink",
      afterLoad: function(anchorLink, index) {
        var loadedSection = $(this);

        //using index
        if (index === 1) {
          section1Timeout = setTimeout(function() {
            $(".section-1 .image-container").addClass("animate");
          }, 400);
          animateSection1(true);
        }

        if (index === 2) {
          animateSection2(true);
          // particlesJS.load("particles-js", "json/particlesjs-config.json", function() {
          //   // console.log('callback - particles.js config loaded');
          // });
        }

        if (index === 3) {
          $(".section-3 .game-list").fadeIn();
          section3GameList1Timeline.restart();
        }
        if (index === 4) {
          animateSection4(true);
        }

        if (index === 5) {
          animateSection5(true);
          section6Timeline.play();
        }

        if (index === 6) {
          $(".section-6 .ripple").removeClass("paused");
          // animateSection6(true);
        }

        if (index === 7) {
          video.play();
        }
      },
      onLeave: function(index, nextIndex, direction) {
        var leavingSection = $(this);

        //after leaving section 2
        if (index === 1 && direction === "down") {
          clearInterval(section1Timeout);
          $(".section-1 .image-container").removeClass("animate");
          animateSection1(false);
        } else if (index === 2 && direction === "up") {
          animateSection2(false);
          $(".section-2 .flex-wrapper .flex-col").removeClass("show");
        } else if (index === 2 && direction === "down") {
          animateSection2(false);
          $(".section-2 .flex-wrapper .flex-col").removeClass("show");
        } else if (index === 4 && direction === "up") {
          animateSection4(false);
        } else if (index === 4 && direction === "down") {
          animateSection4(false);
        } else if (index === 5 && direction === "up") {
          animateSection5(false);
        } else if (index === 5 && direction === "down") {
          animateSection5(false);
        } else if (index === 6 && direction === "up") {
          // $('.section-6 .image').removeClass('animate');
          // animateSection6(false);
          // TweenMax.fromTo($('.section-6 .image .image-1'), 2, {x: 0, alpha: 1}, {x: -100, alpha: 0});
          // TweenMax.fromTo($('.section-6 .image .image-2'), 2, {y: 0, alpha: 1}, {y: -100, alpha: 0});
          // TweenMax.fromTo($('.section-6 .image .image-3'), 2, {y: 0, alpha: 1}, {y: -200, alpha: 0});
          // TweenMax.fromTo($('.section-6 .image .image-4'), 2, {x: 0, alpha: 1}, {x: 100, alpha: 0});
          // TweenMax.fromTo($('.section-6 .image .image-6'), 2, {x: 0, alpha: 1}, {x: -200, alpha: 0});
          // TweenMax.fromTo($('.section-6 .image .image-7'), 2, {x: 0, alpha: 1}, {x: -100, alpha: 0});
          // animateSection6(false);
          $(".section-6 .ripple").addClass("paused");
        } else if (index === 6 && direction === "down") {
          // $('.section-6 .image').removeClass('animate');
          // animateSection6(false);
          // TweenMax.fromTo($('.section-6 .image .image-1'), 2, {x: 0, alpha: 1}, {x: -100, alpha: 0});
          // TweenMax.fromTo($('.section-6 .image .image-2'), 2, {y: 0, alpha: 1}, {y: -100, alpha: 0});
          // TweenMax.fromTo($('.section-6 .image .image-3'), 2, {y: 0, alpha: 1}, {y: -200, alpha: 0});
          // TweenMax.fromTo($('.section-6 .image .image-4'), 2, {x: 0, alpha: 1}, {x: 100, alpha: 0});
          // TweenMax.fromTo($('.section-6 .image .image-6'), 2, {x: 0, alpha: 1}, {x: -200, alpha: 0});
          // TweenMax.fromTo($('.section-6 .image .image-7'), 2, {x: 0, alpha: 1}, {x: -100, alpha: 0});
          // animateSection6(false);
          $(".section-6 .ripple").addClass("paused");
        } else if (index === 7 && direction === "up") {
          video.pause();
        }
      }
    });
  } else {
    $(".header .nav-header").click(function(e) {
      e.preventDefault();
      $(this).toggleClass("active");
      $(".mobile-navlink")
        .slideToggle(200)
        .toggleClass("active");
      $("body").toggleClass("fixed");
      toggleScroll();
      if (scroll) {
        document.ontouchmove = function(e) {
          return true;
        };
      } else {
        document.ontouchmove = function(e) {
          e.preventDefault();
        };
      }
    });

    $(".mobile-navlink ul li a").click(function() {
      // $('.header .nav-header').removeClass('active');
      // $('.mobile-navlink').slideUp(200).removeClass('active');
      // $('body').removeClass('fixed');
      // toggleScroll();
      // scroll = true;
      $(".header .nav-header").click();
    });

    function toggleScroll() {
      scroll = !scroll;
    }

    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $("header").outerHeight();

    $(window).scroll(function(event) {
      didScroll = true;
    });

    setInterval(function() {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 250);

    function hasScrolled() {
      var st = $(this).scrollTop();

      // Make sure they scroll more than delta
      if (Math.abs(lastScrollTop - st) <= delta) return;

      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $("header")
          .removeClass("nav-down")
          .addClass("nav-up");
        // $('.skype-wrapper').removeClass('nav-down').addClass('nav-up');
        // $('.skype-wrapper').show();
      } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
          $("header")
            .removeClass("nav-up")
            .addClass("nav-down");
          // $('.skype-wrapper').removeClass('nav-up').addClass('nav-down');
          // $('.skype-wrapper').hide();
        }
      }

      lastScrollTop = st;
    }

    $(".section-4 .paragraph.float-left").click(function() {
      $(this)
        .removeClass("active")
        .hide();
      $(".section-4 .paragraph.float-right")
        .addClass("active")
        .show();
    });

    $(".section-4 .paragraph.float-right").click(function() {
      $(this)
        .removeClass("active")
        .hide();
      $(".section-4 .paragraph.float-left")
        .addClass("active")
        .show();
    });

    //using index
    section1Timeout = setTimeout(function() {
      $(".section-1 .image-container").addClass("animate");
    }, 400);

    animateSection1(true);

    animateSection2(true);

    $(".section-3 .game-list").fadeIn();
    $(".section-3 .game-list li").each(function(k, i) {
      var that = $(i);
      TweenMax.fromTo(
        that,
        0.01 * (k + 1),
        {
          y: 100,
          alpha: 0
        },
        { y: 0, alpha: 1 },
        "-=0.1"
      );
    });

    $(".section-3 .game-list-2 li").each(function(k, i) {
      var that = $(i);
      TweenMax.fromTo(
        that,
        0.01 * (k + 1),
        {
          y: 100,
          alpha: 0
        },
        { y: 0, alpha: 1 },
        "-=0.1"
      );
    });

    animateSection4(true);

    animateSection5(true);
    section6Timeline.play();

    $(".section-6 .ripple").removeClass("paused");
  }

  //  _____      _                      _   _
  // |_   _|    | |                    | | (_)
  //   | | _ __ | |_ ___ _ __ __ _  ___| |_ _  ___  _ __
  //   | || '_ \| __/ _ \ '__/ _` |/ __| __| |/ _ \| '_ \
  //   | || | | | ||  __/ | | (_| | (__| |_| | (_) | | | |
  //  \___/_| |_|\__\___|_|  \__,_|\___|\__|_|\___/|_| |_|

  // Section 3 Tab Nav
  var section3GameList1Timeline = new TimelineLite({ paused: true });
  var section3GameList2Timeline = new TimelineLite({ paused: true });

  $(".section-3 .game-list li").each(function(k, i) {
    var that = $(i);
    section3GameList1Timeline.fromTo(
      that,
      0.01 * (k + 1),
      {
        y: 100,
        alpha: 0
      },
      { y: 0, alpha: 1 },
      "-=0.1"
    );
  });
  // for (var a = 1; a <= $(".section-3 .game-list li").length; a++) {
  //   section3GameList1Timeline.fromTo(
  //     $(".section-3 .game-list li:nth-child(" + a + ")"),
  //     0.01 * a,
  //     {
  //       y: 100,
  //       alpha: 0
  //     },
  //     { y: 0, alpha: 1 },
  //     "-=0.05"
  //   );
  // }

  $(".section-3 .game-list-2 li").each(function(k, i) {
    var that = $(i);
    section3GameList1Timeline.fromTo(
      that,
      0.01 * (k + 1),
      {
        y: 100,
        alpha: 0
      },
      { y: 0, alpha: 1 },
      "-=0.2"
    );
  });

  // for (var b = 1; b <= $(".section-3 .game-list-2 li").length; b++) {
  //   section3GameList2Timeline.fromTo(
  //     $(".section-3 .game-list-2 li:nth-child(" + b + ")"),
  //     0.01 * b,
  //     {
  //       y: 100,
  //       alpha: 0
  //     },
  //     { y: 0, alpha: 1 },
  //     "-=0.2"
  //   );
  // }

  $(".section-3 .tab-nav a").click(function(e) {
    e.preventDefault();
    var currIndex = $(this).index();
    $(this).addClass("active");

    $(".section-3 .tab-nav a")
      .not($(this))
      .removeClass("active");

    $(
      ".section-3 .tab-content .tab-item:nth-child(" + (currIndex + 1) + ")"
    ).fadeIn();

    if (currIndex === 0) {
      // animateSection5("image1", "play");
      // animateSection5("image2", "reverse");
      section3GameList1Timeline.restart();
    } else {
      // animateSection5("image2", "play");
      // animateSection5("image1", "reverse");
      section3GameList2Timeline.restart();
    }

    $(
      ".section-3 .tab-content .tab-item:not(:nth-child(" +
        (currIndex + 1) +
        "))"
    ).fadeOut();
  });

  // Section 4 Tab Nav
  $(".section-4 .tab-nav a").click(function(e) {
    e.preventDefault();
    var currIndex = $(this).index();
    $(this).addClass("active");

    $(".section-4 .tab-nav a")
      .not($(this))
      .removeClass("active");

    $(
      ".section-4 .tab-content .tab-item:nth-child(" + (currIndex + 1) + ")"
    ).fadeIn();
    $(
      ".section-4 .tab-content .tab-item:not(:nth-child(" +
        (currIndex + 1) +
        "))"
    ).fadeOut();
  });

  // Section 5 Tab Nav
  var section5Image1Timeline = new TimelineLite({ paused: true });
  var section5Image2Timeline = new TimelineLite({ paused: true });

  for (var j = 1; j <= $(".section-5 .feature1 li").length; j++) {
    section5Image1Timeline.fromTo(
      $(".section-5 .feature1 > li:nth-child(" + j + ")"),
      0.01 * j,
      {
        y: -100,
        alpha: 0
      },
      { y: 0, alpha: 1 }
    );
  }

  for (var m = 1; m <= $(".section-5 .feature2 li").length; m++) {
    section5Image2Timeline.fromTo(
      $(".section-5 .feature2 > li:nth-child(" + m + ")"),
      0.01 * m,
      {
        y: -100,
        alpha: 0
      },
      { y: 0, alpha: 1 }
    );
  }

  for (var i = 1; i <= $(".section-5 .image2 > .img").length; i++) {
    // TweenMax.to($('.section-5 .image2 > .img:nth-child(' + i + ')'), 0.2 * i, {x: 0, y: 0, alpha: 1});
    // TweenMax.to($('.section-5 .image2 > .img:nth-child(' + i + ') .screen'), 0.2 * i, {scale: 1});
    section5Image2Timeline.fromTo(
      $(".section-5 .image2 > .img:nth-child(" + i + ")"),
      0.4,
      {
        x: -200,
        y: -100,
        alpha: 0,
        delay: 0.05 * (i - 1)
      },
      { x: 0, y: 0, alpha: 1 },
      "-=0.5"
    );
    section5Image2Timeline.fromTo(
      $(".section-5 .image2 > .img:nth-child(" + i + ") .screen"),
      0.1 * i,
      {
        scale: 0.5,
        alpha: 0
      },
      {
        scale: 1,
        alpha: 1
      },
      "-=0.1"
    );
  }

  $(".section-5 .tab-nav a").click(function(e) {
    e.preventDefault();
    var currIndex = $(this).index();
    $(this).addClass("active");

    $(".section-5 .tab-nav a")
      .not($(this))
      .removeClass("active");

    $(
      ".section-5 .tab-content .tab-item:nth-child(" + (currIndex + 1) + ")"
    ).fadeIn();
    // $('.section-5 .tab-content .tab-item:nth-child('+  (currIndex + 1) + ')').find(".feature").addClass('active');
    // $('.section-5 .tab-content .tab-item:nth-child('+  (currIndex + 1) + ')').find(".image2").addClass('animate');

    if (currIndex === 0) {
      // animateSection5("image1", "play");
      // animateSection5("image2", "reverse");
      section5Timeline.play();
      section5Image1Timeline.restart();
    } else {
      // animateSection5("image2", "play");
      // animateSection5("image1", "reverse");
      section5Timeline.stop();
      section5Image2Timeline.restart();
    }

    $(
      ".section-5 .tab-content .tab-item:not(:nth-child(" +
        (currIndex + 1) +
        "))"
    ).fadeOut();
    // $('.section-5 .tab-content .tab-item:not(:nth-child('+  (currIndex + 1) + '))').find(".feature").removeClass('active');
    // $('.section-5 .tab-content .tab-item:not(:nth-child('+  (currIndex + 1) + '))').find(".image2").removeClass('animate');
  });
});

//   ___        _                 _   _
//  / _ \      (_)               | | (_)
// / /_\ \_ __  _ _ __ ___   __ _| |_ _  ___  _ __
// |  _  | '_ \| | '_ ` _ \ / _` | __| |/ _ \| '_ \
// | | | | | | | | | | | | | (_| | |_| | (_) | | | |
// \_| |_/_| |_|_|_| |_| |_|\__,_|\__|_|\___/|_| |_|
//
var section1Timeline = new TimelineLite({ paused: true });
section1Timeline.fromTo(
  $(".section-1 .image-container .laptop .side"),
  2,
  {
    scale: 0.9,
    x: 4,
    repeat: -1,
    yoyo: true
  },
  {
    scale: 0.9,
    x: 0,
    repeat: -1,
    yoyo: true
  },
  "-=0.1"
);

section1Timeline.fromTo(
  $(".section-1 .image-container .laptop .side .back-1"),
  2,
  {
    scale: 0.9,
    x: -63,
    repeat: -1,
    yoyo: true
  },
  {
    scale: 0.9,
    x: -63,
    y: -8,
    repeat: -1,
    yoyo: true
  },
  "-=0.1"
);

section1Timeline.fromTo(
  $(".section-1 .image-container .laptop .side .back-2"),
  1,
  {
    scale: 0.9,
    x: 20,
    y: -79,
    repeat: -1,
    yoyo: true
  },
  {
    scale: 0.9,
    x: 20,
    y: -88,
    repeat: -1,
    yoyo: true
  },
  "-=0.1"
);

section1Timeline.fromTo(
  $(".section-1 .image-container .laptop .cover"),
  2,
  {
    scale: 0,
    alpha: 0,
    repeat: -1,
    yoyo: true
  },
  {
    scale: 1,
    alpha: 1,
    repeat: -1,
    x: -20,
    yoyo: true
  },
  "-=1"
);

section1Timeline.fromTo(
  $(".section-1 .image-container .laptop .popup"),
  3,
  {
    scale: 0,
    alpha: 0,
    repeat: -1,
    yoyo: true
  },
  {
    scale: 1,
    alpha: 1,
    repeat: -1,
    x: -30,
    yoyo: true
  },
  "-=2"
);

section1Timeline.fromTo(
  $(".section-1 .image-container .laptop .screen-2"),
  5,
  {
    scale: 0,
    alpha: 0,
    repeat: -1,
    yoyo: true
  },
  {
    scale: 1,
    alpha: 1,
    y: -10,
    repeat: -1,
    yoyo: true
  },
  "-=3"
);
//
// section1Timeline.fromTo(
//   $(".section-1 .image-container .laptop .stats"),
//   5,
//   {
//     x: "-100%",
//     y: -10,
//     repeat: -1,
//     yoyo: true
//   },
//   {
//     x: "-100%",
//     y: 10,
//     repeat: -1,
//     yoyo: true
//   },
//   "-=3"
// );

var light = new TimelineLite({
  onComplete: function() {
    this.restart();
  },
  paused: true
});

var section2Timeline = new TimelineLite({ paused: true });
var section2Timegap = "-=5";

var lightSource1 = $(".section-2 .flex-wrapper .flex-col .image-1 img.light");
light
  .from(lightSource1, 0.5, { alpha: 0 })
  .to(lightSource1, 1, { alpha: 0.5 })
  .to(lightSource1, 0.5, { alpha: 0 });

section2Timeline.to(
  $(".section-2 .flex-wrapper .flex-col .image-1 img.circle"),
  3,
  {
    y: 19,
    repeat: -1,
    yoyo: true
  },
  section2Timegap
);

section2Timeline.to(
  $(".section-2 .flex-wrapper .flex-col .image-1 img.shield"),
  3,
  {
    y: -30,
    repeat: -1,
    yoyo: true
  },
  section2Timegap
);

section2Timeline.to(
  $(".section-2 .flex-wrapper .flex-col .image-2 img.top"),
  5,
  {
    y: -5,
    repeat: -1,
    yoyo: true
  },
  section2Timegap
);

section2Timeline.to(
  $(".section-2 .flex-wrapper .flex-col .image-2 img.label2"),
  2,
  {
    y: -46,
    alpha: 0,
    repeat: -1,
    yoyo: true
  },
  section2Timegap
);

section2Timeline.to(
  $(".section-2 .flex-wrapper .flex-col .image-2 img.label3"),
  2,
  {
    y: -87,
    alpha: 0,
    repeat: -1,
    yoyo: true
  },
  section2Timegap
);

section2Timeline.to(
  $(".section-2 .flex-wrapper .flex-col .image-2 img.card2"),
  3,
  {
    y: -46,
    alpha: 0,
    repeat: -1,
    yoyo: true
  },
  section2Timegap
);

section2Timeline.to(
  $(".section-2 .flex-wrapper .flex-col .image-2 img.card3"),
  3,
  {
    y: -87,
    alpha: 0,
    repeat: -1,
    yoyo: true
  },
  section2Timegap
);

var lightSource2 = $(".section-2 .flex-wrapper .flex-col .image-3 img.light");
var lightSource3 = $(".section-2 .flex-wrapper .flex-col .image-3 img.side");
light
  .from(lightSource2, 0.1, { alpha: 0 })
  .to(lightSource2, 0.5, { alpha: 0.2 })
  .to(lightSource2, 0.3, { alpha: 1 })
  .to(lightSource1, 0.5, { alpha: 0.4 })
  .to(lightSource1, 0.4, { alpha: 0.1 });
light
  .from(lightSource3, 0.5, { alpha: 0 })
  .to(lightSource3, 1, { alpha: 0.5 })
  .to(lightSource3, 0.5, { alpha: 0 });

section2Timeline.to(
  $(".section-2 .flex-wrapper .flex-col .image-3 img.base2"),
  3,
  {
    y: 19,
    repeat: -1,
    yoyo: true
  },
  section2Timegap
);

section2Timeline.to(
  $(".section-2 .flex-wrapper .flex-col .image-3 img.base3"),
  3,
  {
    y: 40,
    repeat: -1,
    yoyo: true
  },
  "-=3"
);

section2Timeline.to(
  $(".section-2 .flex-wrapper .flex-col .image-3 img.base4"),
  3,
  {
    y: 60,
    repeat: -1,
    yoyo: true
  },
  "-=3"
);

section2Timeline.to(
  $(".section-2 .flex-wrapper .flex-col .image-3 img.base5"),
  3,
  {
    y: 60,
    repeat: -1,
    yoyo: true
  },
  "-=3"
);

function animateSection1(play) {
  if (play === true) {
    section1Timeline.play();
  } else {
    section1Timeline.stop();
  }
}

function animateSection2(play) {
  $(".section-2 .flex-wrapper .flex-col").addClass("show");

  if (play === true) {
    section2Timeline.play();
    light.play();
  } else {
    section2Timeline.stop();
    light.stop();
  }
}

var section4Timeline = new TimelineLite({ paused: true });
var section4Timegap = "-=5";
section4Timeline.fromTo(
  $(".section-4 .paragraph .image.image1 img.img2"),
  2,
  { scale: 0, alpha: 0, yoyo: true, repeat: -1 },
  {
    scale: 1,
    alpha: 1,
    yoyo: true,
    repeat: -1
  }
);

section4Timeline.fromTo(
  $(".section-4 .paragraph .image.image1 img.img6"),
  2,
  { y: -10, yoyo: true, repeat: -1 },
  {
    y: 10,
    yoyo: true,
    repeat: -1
  },
  section4Timegap
);

section4Timeline.fromTo(
  $(".section-4 .paragraph .image.image2 img.img1"),
  2,
  { y: -10, yoyo: true, repeat: -1 },
  {
    y: 10,
    yoyo: true,
    repeat: -1
  },
  "-=2"
);

section4Timeline.fromTo(
  $(".section-4 .paragraph .image.image2 img.img2"),
  2,
  { y: -10, yoyo: true, repeat: -1 },
  {
    y: 10,
    yoyo: true,
    repeat: -1
  },
  "-=3"
);

section4Timeline.fromTo(
  $(".section-4 .paragraph .image.image3 img.img2"),
  2,
  { scale: 0, alpha: 0, yoyo: true, repeat: -1 },
  {
    scale: 1,
    alpha: 1,
    yoyo: true,
    repeat: -1
  }
);

section4Timeline.fromTo(
  $(".section-4 .paragraph .image.image3 img.img6"),
  2,
  { y: -10, yoyo: true, repeat: -1 },
  {
    y: 10,
    yoyo: true,
    repeat: -1
  },
  section4Timegap
);

section4Timeline.fromTo(
  $(".section-4 .paragraph .image.image4 img.img1"),
  2,
  { y: -10, yoyo: true, repeat: -1 },
  {
    y: 10,
    yoyo: true,
    repeat: -1
  },
  "-=2"
);

section4Timeline.fromTo(
  $(".section-4 .paragraph .image.image4 img.img2"),
  2,
  { y: -10, yoyo: true, repeat: -1 },
  {
    y: 10,
    yoyo: true,
    repeat: -1
  },
  "-=3"
);

function animateSection4(play) {
  if (play) {
    section4Timeline.play();
  } else {
    section4Timeline.stop();
  }
}

var section5Timeline = new TimelineLite({ paused: true });
var section5Timegap = "-=5";
// Static animation
section5Timeline.fromTo(
  $(".section-5 .image1"),
  0.5,
  { scale: 0, alpha: 0 },
  {
    scale: 1,
    alpha: 1
  }
);
section5Timeline.fromTo(
  $(".section-5 .image1 .img1"),
  5,
  { scale: 0, alpha: 0 },
  {
    scale: 1,
    alpha: 1,
    repeat: -1,
    yoyo: true
  },
  section5Timegap
);
section5Timeline.fromTo(
  $(".section-5 .image1 .img4"),
  2,
  { scale: 0, alpha: 0 },
  {
    scale: 1,
    alpha: 1,
    repeat: -1,
    yoyo: true
  },
  section5Timegap
);
section5Timeline.fromTo(
  $(".section-5 .image1 .img5"),
  4,
  { scale: 0, alpha: 0 },
  {
    scale: 1,
    alpha: 1,
    repeat: -1,
    yoyo: true
  },
  section5Timegap
);
section5Timeline.fromTo(
  $(".section-5 .image1 .img6"),
  3,
  { scale: 0, alpha: 0 },
  {
    scale: 1,
    alpha: 1,
    repeat: -1,
    yoyo: true
  },
  section5Timegap
);
section5Timeline.fromTo(
  $(".section-5 .image1 .img7"),
  1,
  { scale: 0, alpha: 0 },
  {
    scale: 1,
    alpha: 1,
    repeat: -1,
    yoyo: true
  },
  section5Timegap
);
section5Timeline.fromTo(
  $(".section-5 .image1 .img8"),
  7,
  { scale: 0, alpha: 0 },
  {
    scale: 1,
    alpha: 1,
    repeat: -1,
    yoyo: true
  },
  section5Timegap
);
section5Timeline.fromTo(
  $(".section-5 .image1 .img9"),
  9,
  { scale: 0, alpha: 0 },
  {
    scale: 1,
    alpha: 1,
    repeat: -1,
    yoyo: true
  }
);

function animateSection5(play) {
  if (play) {
    section5Timeline.play();
  } else {
    section5Timeline.stop();
  }

  for (var j = 1; j <= $(".section-5 .feature1 li").length; j++) {
    TweenMax.fromTo(
      $(".section-5 .feature1 > li:nth-child(" + j + ")"),
      0.2 * j,
      { y: -100, alpha: 0 },
      {
        y: 0,
        alpha: 1
      }
    );
  }
}

var section6Timeline = new TimelineLite({ paused: true });
var section6Timegap = "-=2";
var ripple = new TimelineLite({
  onComplete: function() {
    this.restart();
  },
  paused: true
});

var damping = $(".section-6 .ripple .damping");
// ripple
//   .from(damping, 1, { scale: 0.5, alpha: 0 })
//   .to(damping, 0.2, { scale: 1, alpha: 1 })
//   .to(damping, 1, { scale: 1.5, alpha: 0 });
// section6Timeline.fromTo(
//   $(".section-6 .image .image-1"),
//   2,
//   { x: -100, alpha: 0 },
//   { x: 0, alpha: 1 },
//   section6Timegap
// );
// section6Timeline.fromTo(
//   $(".section-6 .image .image-2"),
//   2,
//   { delay: 0.2, y: -100, alpha: 0.7 },
//   {
//     y: 0,
//     alpha: 1
//   },
//   section6Timegap
// );
// section6Timeline.fromTo(
//   $(".section-6 .image .image-3"),
//   2,
//   { delay: 0.2 * 2, y: -200, alpha: 0.7 },
//   {
//     y: 0,
//     alpha: 1
//   },
//   section6Timegap
// );
// section6Timeline.fromTo(
//   $(".section-6 .image .image-4"),
//   2,
//   { delay: 0.2 * 3, x: 100, alpha: 0.7 },
//   {
//     x: 0,
//     alpha: 1
//   },
//   section6Timegap
// );
// section6Timeline.fromTo(
//   $(".section-6 .image .image-6"),
//   2,
//   { delay: 0.2 * 4, x: -200, alpha: 0.7 },
//   {
//     x: 0,
//     alpha: 1
//   },
//   section6Timegap
// );
// section6Timeline.fromTo(
//   $(".section-6 .image .image-7"),
//   2,
//   { delay: 0.2 * 5, x: -100, alpha: 0.7 },
//   {
//     x: 0,
//     alpha: 1
//   },
//   section6Timegap
// );

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
    // ripple.play();
    // section6Timeline.play();
  } else {
    // ripple.stop();
  }
}
