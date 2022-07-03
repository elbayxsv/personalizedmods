$(document).ready(function() {
    $(".header-button-faq").click(function() {
        $("html, body").animate({
            scrollTop: $(".header-faq").offset().top
        }, $(".header-faq").offset().top/2);
    })

    $(".header-button-showcase").click(function() {
        $("html, body").animate({
            scrollTop: $(".header-videos").offset().top-100
        }, $(".header-videos").offset().top/2);
    })
    
    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
})