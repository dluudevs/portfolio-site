$(document).ready(function () {

    //fixed header after scrolling past the header
    $(window).on('scroll', () => {
        if($(this).scrollTop() >= $(window).height() - $('nav').height() ){
            $('nav').removeClass('nav_absolute').addClass('nav_fixed');
        } else { 
            $('nav').removeClass('nav_fixed').addClass('nav_absolute');
        }
    })

    $(window).on('scroll', () => {
        if($(this).scrollTop() > 0){
            // $('nav').css({
            //     'box-shadow': '0 5px 5px 0.6'
            // });
            $('nav').addClass('nav_scrolled');
        } else {
            $('nav').removeClass('nav_scrolled');
        }
    })

    AOS.init({
        duration: 1500,
        once: true,
    });

    $('.hamburger').on('click', function () {
        $(this).toggleClass('is_active');
        toggleMobileMenu();
    })

    $('a').smoothScroll({
        easing: 'swing',
        speed: 1250
    })

    $('.nav_list a').on('click', () => {
        $('.hamburger').removeClass('is_active');
        $('.nav_mobile').transition({ x: '190%', opacity: 0 }, 500, () => {
            $('.nav_list').removeClass('nav_mobile');
        });
    })
})

const toggleMobileMenu = () => {
    if (!$('.nav_list').hasClass('nav_mobile')) {
        $('.nav_list').addClass('nav_mobile');
        $('.nav_mobile').transition({ x: '92.5%', opacity: 1 }, 500);
    } else if ($('.nav_list').hasClass('nav_mobile')) {
        $('.nav_mobile').transition({ x: '190%', opacity: 0 }, 500, () => {
            $('.nav_list').removeClass('nav_mobile');
        });
    }
}