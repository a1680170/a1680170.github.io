$('.ui.checkbox')
    .checkbox()
;

$(document).ready(function () {

    $(".generate").click(function (e) {
        e.preventDefault();
        renderOutput();
    });
});

function renderOutput() {
    $('.output.mac').slideUp();
    $('.output.windows').slideUp();
    $('.output > div').slideUp();
    var url = $('input[name="url"]').val(),
        name = '"' + $('input[name="name"]').val() + '"',
        iconOfficial = "",
        iconYdl = "",
        iconWdl = "",
        context = "",
        dev = "",
        external = "",
        internalUrls = "",
        windows = " -p windows ",
        mac = "",
        finalMac = "",
        finalWindows = "";

    if ($('input[name="contextMenu"]').is(':checked')) {
        context = '--disable-context-menu';
    }

    if ($('input[name="devtools"]').is(':checked')) {
        dev = '--disable-dev-tools';
    }

    if ($('input[name="inject"]').is(':checked')) {
        external = '--inject ' + $('input[name="inject-text"]').val();
    }

    if($('input[name="internalUrl"]').is(':checked')){
        internalUrls = '--internal-urls "' + $('input[name="internalUrl-text"]').val() + '" ';
    }

    if ($('input[name="official"]').is(':checked')) {
        iconOfficial = $('input[name="official-text"]').val();

        finalMac =
            'nativefier --name ' +
            name + " " +
            iconOfficial + " " +
            context + " " +
            dev + " " +
            external + " " +
            internalUrls +
            url + "/?type=official";

        finalWindows =
            'nativefier --name ' +
            name + " " +
            iconYdl + " " +
            context + " " +
            dev + " " +
            external + " " +
            internalUrls +
            windows +
            url + "/?type=official";


        if ($('input[name="mac"]').is(':checked')) {
            $('.mac .output-official p').text(finalMac).parents('.output-official').slideDown();
        }

        if ($('input[name="windows"]').is(':checked')) {
            $('.windows .output-official p').text(finalWindows).parents('.output-official').slideDown();
        }


    }

    if ($('input[name="ydl"]').is(':checked')) {
        iconYdl = $('input[name="ydl-text"]').val();

        finalMac =
            'nativefier --name ' +
            name + " " +
            iconYdl + " " +
            context + " " +
            dev + " " +
            external + " " +
            internalUrls +
            url + "/?type=ydl";

        finalWindows =
            'nativefier --name ' +
            name + " " +
            iconYdl + " " +
            context + " " +
            dev + " " +
            external + " " +
            internalUrls +
            windows +
            url + "/?type=ydl";

        if ($('input[name="mac"]').is(':checked')) {
            $('.mac .output-ydl p').text(finalMac).parents('.output-ydl').slideDown();
        }

        if ($('input[name="windows"]').is(':checked')) {
            $('.windows .output-ydl p').text(finalWindows).parents('.output-ydl').slideDown();
        }
    }

    if ($('input[name="wdl"]').is(':checked')) {
        iconWdl = $('input[name="wdl-text"]').val();

        finalMac =
            'nativefier --name ' +
            name + " " +
            iconWdl + " " +
            context + " " +
            dev + " " +
            external + " " +
            internalUrls +
            url + "/?type=wdl";

        finalWindows =
            'nativefier --name ' +
            name + " " +
            iconYdl + " " +
            context + " " +
            dev + " " +
            external + " " +
            internalUrls +
            windows +
            url + "/?type=wdl";

        if ($('input[name="mac"]').is(':checked')) {
            $('.mac .output-wdl p').text(finalMac).parents('.output-wdl').slideDown();
        }

        if ($('input[name="windows"]').is(':checked')) {
            $('.windows .output-wdl p').text(finalWindows).parents('.output-wdl').slideDown();
        }
    }

    if ($('input[name="mac"]').is(':checked')) {
        $('.output.mac').slideDown();
    }

    if ($('input[name="windows"]').is(':checked')) {
        $('.output.windows').slideDown();
    }

}