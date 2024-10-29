$(document).ready(function () {
    var vh = $(window).height(); // Get 1vh in pixels

    $(window).on("scroll", function () {
        if ($(this).scrollTop() >= vh) {
            $("#basic").removeClass("new-style");
        } else {
            $("#basic").addClass("new-style");
        }
    });
});