// Check if the user's system or browser is in light mode
const lightModeQuery = window.matchMedia('(prefers-color-scheme: light)');

// Function to run when light mode is detected
function runScriptInLightMode() {
    $(document).ready(function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll > 1600) {
                $("#home-page-news").css("color", "black");
                $("#home-page-news").css("background-color", "rgba(231, 231, 231, 0.698)");
                $("#app-element-1").css("background-image", "url(./static/img/home-button-light.webp)");
                $("#app-element-2").css("color", "black");
                $(".app-element-label").css("color", "black");
            }

            else {
                $("#home-page-news").css("color", "white");
                $("#home-page-news").css("background-color", "#ffffff1a");
                $("#app-element-1").css("background-image", "url(./static/img/home-button-dark.webp)");
                $("#app-element-2").css("color", "white");
                $(".app-element-label").css("color", "white");
            }
        })
    })
}

// Check if light mode is enabled
if (lightModeQuery.matches) {
    // Light mode is enabled
    runScriptInLightMode();
} else {
    // Light mode is not enabled
    console.log('Light mode is not enabled');
}