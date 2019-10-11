

$(document).ready(function(){
    $("#search-label").click(function(){
        $("#mob-search-bar").slideToggle("slow");
    });
    $("#closeNav").click(function(){
        $("#mySidenav").animate({left: '-100%'});
        $("body").removeClass('fixed-scroll')
    });
    $("#openNav").click(function(){
        $("#mySidenav").animate({left: '0'});
        $("body").addClass('fixed-scroll');
    });
});
