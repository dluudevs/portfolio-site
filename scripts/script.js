$(document).ready(function () {
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