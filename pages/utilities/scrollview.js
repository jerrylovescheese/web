// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("whatsapp-1").style.height = "fit-content";
        document.getElementById("header").style.fontSize = "20px";
        document.getElementById("inner").style.padding = "20px";
        document.getElementById("whatsapp-1").style.boxShadow = "0px 5px 10px darkblue";
        document.getElementById("whatsapp-1").style.backgroundImage = "linear-gradient(9deg, rgba(255, 255, 255), rgb(255, 255, 255))";
        document.getElementById("header").style.color = "black";
        document.getElementById("remainTime").style.color = "black";
        document.getElementById("remainTime").style.fontSize = "20px";
        document.getElementById("whatsapp-1").style.aspectRatio = "unset";
    } else {
        document.getElementById("whatsapp-1").style.height = "auto";
        document.getElementById("header").style.fontSize = "30px";
        document.getElementById("inner").style.padding = "20px";
        document.getElementById("whatsapp-1").style.boxShadow = "none";
        document.getElementById("whatsapp-1").style.backgroundImage = "url(./static/img/td-po.webp)";
        document.getElementById("header").style.color = "white";
        document.getElementById("remainTime").style.color = "white";
        document.getElementById("remainTime").style.fontSize = "25px";
        document.getElementById("whatsapp-1").style.aspectRatio = "16/9";
    }
}