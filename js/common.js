/*--------------- Wow js--------------*/
new WOW().init();

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items : 1,
        nav : true,
        navText : "",
        loop : true,
        autoplay : true,
        autoplayHoverPause : true,
        fluidSpeed : 500,
        autoplaySpeed : 500,
        navSpeed : 500,
        dotsSpeed : 500,
        dragEndSpeed : 500,
        nav: true,
        navText : ["",""],
        rewindNav : true,
        dotClass: '',
        autoplayTimeout : 4000,
        lazyFollow:true,
        fadeIn: false,
        navigation : true,
        slideSpeed : 1000,
        singleItem : true,
        animateIn:  'fadeInRight',
        smartSpeed: 450,
});





});
