$(function () {
    $(document).ready(function(){
        var currentLocation = location.search;
        var curr = currentLocation.substring(1, currentLocation.length);
        $("#" + curr + "-panel").show();
        $(".panel-priv:not(#" + curr + "-panel)").hide();
    });

    $(window).on("resize", function () {
        pheigt();
    });
    pheigt();

    function pheigt() {
        var windowheight = $(window).height();
        // $(".helpmain").add("#helpmain-main").css("min-height", windowheight - 104 + "px");
        $(".helpmain").add("#helpmain-main").css("min-height", windowheight + "px");
    }

    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        var pNav = ".helpmain .nav dl";
        var nheight = $(pNav).height();
        var pheight = $(".helpmain").height();
        if (scrollTop >= 104) {
            if (pheight + 154 - scrollTop <= nheight) {
                $(pNav).removeClass("fixed");
                $(pNav).addClass("bottom");
                return false;
            } else {
                $(pNav).removeClass("bottom");
                $(pNav).addClass("fixed");
            }
        } else {
            $(pNav).removeClass("fixed");
        }
    });


    var nav = "#helpmain-nav dd";
    $(nav).click(function () {
        var obj = $(this).attr("data");
        $(nav).removeClass("on");
        $(this).addClass("on");
        $(".panel-priv").hide();
        $("#" + obj + "-panel").show();
        window.location.href = window.location.pathname + "?" + obj;
    });


    /**Beg-Submain**/
    var subnav = "#submain-nav dd";

    $(subnav).click(function () {
        var subobj = $(this).attr("data");
        $(subnav).removeClass("on");
        $(this).addClass("on");
        $(".panel-sub").hide();
        $("#" + subobj + "-panel").show();

    });

    /**End-Submain**/


    var objurl = window.location.search.substr(1);
    if (objurl == "") {
        $("#deposit-panel").show();
    } else {
        $("#" + objurl + "-panel").show();
        $(nav).removeClass("on").each(function (index, element) {
            var obj = $(this).attr("data");
            if (obj == objurl) {
                $(this).addClass("on");
            }

        });


    }

    /**Submain**/
    var subobjurl = window.location.search.substr(1);
    if (subobjurl == "deposit") {
        $(".panel-sub").hide();
        //$("#subsport-panel").show();
        //
    } else {
        $("#" + subobjurl + "-panel").show();
        $(subnav).removeClass("on").each(function (index, element) {
            var subobj = $(this).attr("data");
            if (subobj == subobjurl) {
                $(this).addClass("on");
            }

        });
        if (subobjurl == "games") {
            $("#subsport").addClass("on");
            /** 默认显示 体育问题**/
            $("#subsport-panel").show();
            /** 默认显示 体育问题**/

        }
    }
    /**Submain**/



    var tutorial = new Swiper('.tutorial ', {
        pagination: '.tutorial .swiper-pagination',
        paginationClickable: true,
        centeredSlides: true,
        nextButton: '.tutorial .swiper-button-next',
        prevButton: '.tutorial .swiper-button-prev',
    });


});