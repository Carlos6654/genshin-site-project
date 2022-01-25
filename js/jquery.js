$(document).ready(function(){
    $("#navbar").load("navbar.html");
    $("#footer").load("footer.html");
});

/*#####   Vision Buttons Fade Animation   #####*/
$(document).ready(function(){
    $(".vision").fadeTo("fast", 0.5);
});

$(document).ready(function(){
    $(".vision").on({
        mouseenter: function(){
            $(this).fadeTo("fast", 1);
        },
        mouseleave: function(){
            $(this).fadeTo("fast", 0.5);
        },
    });
});
