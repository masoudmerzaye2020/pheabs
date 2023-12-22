// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
       
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
       
    }
    if ($(".navbar").offset().top > 50) {
        $(".log").addClass("larg-logo");
       
    } else {
        $(".log").removeClass("larg-logo");
       
    }


});
