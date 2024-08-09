$(document).ready(function () {
    let lastScrollTop = 0;

    $(window).on('scroll', function () {
        const header = $('#door-2');
        const currentScrollTop = $(this).scrollTop();

        if (currentScrollTop > lastScrollTop) {
            // Scrolling down
            header.addClass('scrolled');
        } else {
            // Scrolling up
            header.removeClass('scrolled');
        }

        lastScrollTop = currentScrollTop;
    });
});