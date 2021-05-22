$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 68){
            $('header .header_2').addClass('header-active');
        }else{
            $('header .header_2').removeClass('header-active')
        }
    });
    $('.home_slider').owlCarousel({
        items:1,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:8000,
        loop:true
});
        $('.small-image img').click(function(){

            $(this).addClass('image-active').siblings().removeClass('image-active');
            let image = $(this).attr('src');
            $('.big-image img').attr('src', image);

            });
            $('.prod .btn').click(function(){

                let filter = $(this).attr('data-filter');
                if(filter == 'all'){
                    $('.prod .box').show(400);
                }else{
                    $('.prod .box').not('.'+filter).hide(200);
                    $('.prod .box').filter('.'+filter).show(400);
                }
        
                $(this).addClass('button-active').siblings().removeClass('button-active');
        
            });

});