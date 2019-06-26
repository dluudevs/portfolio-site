$(document).ready( () => {

    listenDesktop();
    toggleMobileMenu();
    scrollThenFixed();

    AOS.init({
        duration: 1500,
        once: true,
        disable: disableAOS()
    });

    $('a').smoothScroll({
        easing: 'swing',
        speed: 1250
    });

});

const disableAOS = () => 'mobile' || 'phone' || 'tablet'

const toggleMobileMenu = () => {

    $('.hamburger').on('click', () => {

        //animate transition to X on click
        $('.hamburger').toggleClass('is_active');
        
        //animation for hamburger menu
        if (!$('.nav_list').hasClass('nav_mobile')) {
            $('.nav_list').addClass('nav_mobile');
            $('.nav_mobile').transition({ x: '92.5%', opacity: 1 }, 500);
        } else if ($('.nav_list').hasClass('nav_mobile')) {
            $('.nav_mobile').transition({ x: '190%', opacity: 0 }, 500, () => {
                $('.nav_list').removeClass('nav_mobile');
            });
        }

        //switch to hamburger after clicking a link in the menu
        $('.nav_list a').on('click', () => {
            $('.hamburger').removeClass('is_active');
            $('.nav_mobile').transition({ x: '190%', opacity: 0 }, 500, () => {
                $('.nav_list').removeClass('nav_mobile');
            });
        })
    })
}

const scrollThenFixed = () => {

    //fixed scrollbar
    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= $(window).height() - $('nav').height()) {
            $('nav').removeClass('nav_absolute').addClass('nav_fixed');
        } else {
            $('nav').removeClass('nav_fixed').addClass('nav_absolute');
        }
    })

    //box shadow
    $(window).on('scroll', () => {
        if ($(this).scrollTop() > 0) {
            $('nav').addClass('nav_scrolled');
        } else {
            $('nav').removeClass('nav_scrolled');
        }
    })
}

const removeHamburger = () => {
    const desktop = window.matchMedia('(min-width: 1023px');
    if(desktop.matches){
        //remove the styling from closing nav bar - otherwise after clicking the hamburger and moving to desktop, the nav is placed off screen
        $('.nav_list').removeAttr('style');
    }
}

const listenDesktop = () => {
    window.addEventListener('resize', removeHamburger, false);
}


