//==============================
//    Owl Carosal
//===============================

$('.owl-slider').owlCarousel({
    loop: true,
    dots: false,
    nav:true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 2500,
    center: true,
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1 
        },
        1000: {
            items: 1
        }
    }
})

//==============================
//    Owl projects
//===============================

$('.owl-projects').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 2500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
})

//==============================
//    Owl News
//===============================

$('.owl-news').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 2500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
})

//==============================
//    Owl Clients
//===============================

$('.owl-client').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 200,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})


//==============================
//    Owl Clients Logo
//===============================

$('.owl-client-logo').owlCarousel({
    loop:true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 2000,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

//==============================
//    Owl Team
//===============================

$('.owl-team').owlCarousel({
    loop:true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})



//============Fixed Menu====================== 

$(document).ready(function () {
    $(window).scroll(function () {
        var menuFixed = $(this).scrollTop();
        if (menuFixed > 200) {
            $('body').addClass('fixed');
        } else {
            $('body').removeClass('fixed');
        }
    })
})


//============Accordion====================== 
$(document).ready(function () {
 
    $("#accordion .card .btn-link").click(function(){
        if($(this).find("i.fa").hasClass("fa-minus")){
            
            $(this).find("i.fa").removeClass("fa-minus");
            $(this).find("i.fa").addClass("fa-plus");
        }
        
         else if($(this).find("i.fa").hasClass("fa-plus")){
            
            $(this).find("i.fa").removeClass("fa-plus");
            $(this).find("i.fa").addClass("fa-minus");
        }
        
        
        $(this).parents(".card").siblings().find(".card-header .btn-link i.fa").removeClass("fa-minus");
        $(this).parents(".card").siblings().find(".card-header .btn-link i.fa").addClass("fa-plus");
        
    })
})

//============Accordion====================== 
$(document).ready(function () {
 
    $("#accordion1 .card .btn-link").click(function(){
        if($(this).find("i.fa").hasClass("fa-minus")){
            
            $(this).find("i.fa").removeClass("fa-minus");
            $(this).find("i.fa").addClass("fa-plus");
        }
        
         else if($(this).find("i.fa").hasClass("fa-plus")){
            
            $(this).find("i.fa").removeClass("fa-plus");
            $(this).find("i.fa").addClass("fa-minus");
        }
        
        
        $(this).parents(".card").siblings().find(".card-header .btn-link i.fa").removeClass("fa-minus");
        $(this).parents(".card").siblings().find(".card-header .btn-link i.fa").addClass("fa-plus");
        
    })
})


