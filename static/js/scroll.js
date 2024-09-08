$(document).ready(function () {
    var vh = $(window).height(); // Get 1vh in pixels

    $(window).on("scroll", function () {
        if ($(this).scrollTop() >= vh) {
            $(".btc").removeClass("new-style");
        } else {
            $(".btc").addClass("new-style");
        }
    });

    $(window).on("scroll", function () {
        if ($(this).scrollTop() >= vh) {
            $("#btc-1").removeClass("new-style");
        } else {
            $("#btc-1").addClass("new-style");
        }
    });
});