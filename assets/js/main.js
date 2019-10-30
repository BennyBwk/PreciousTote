$(document).ready(function() {
    $("#hamburgerMenu").click(function() {
        $("#navbar-div").css("background-color", "rgba(0,0,0,0.9)");
        $("#hamburgerMenu").toggleClass("is-active");
        $("#navbar-div").toggleClass("has-active");
        $("#navLogo").toggleClass("display-active");
    });
    
    if (($("#bodyContent").height() + 100) < $(window).height()) {
        $("#footer").css("top", $(window).height());
    } else {
        $("#footer").css("top", $("#bodyContent").height() + 100);
    }
    
    $(window).resize(function() {
        if (($("#bodyContent").height() + 100) < $(window).height()) {
            $("#footer").css("top", $(window).height());
        } else {
            $("#footer").css("top", $("#bodyContent").height() + 100);
        }
        
        if ($(window).width() > 1200) {
            $("#navbar-div").css("background-color", "rgba(255,255,255,1)");
        } else {
            $("#navbar-div").css("background-color", "rgba(0,0,0,0.9)"); 
        }
    });
    
    $(window).scroll(function() {
        if ($(window).width() > 1200) {
            var x = $(window).scrollTop()/200;
            $("#navbar-div").css("background-color", "rgba(255,255,255," + x + ")");
        }
    });
});