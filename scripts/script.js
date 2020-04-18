$(document).ready( () => {

    listenDesktop();
    toggleMobileMenu();
    scrollThenFixed();

    AOS.init({
        duration: 1500,
        once: true,
        disable: disableAOS()
    });

    $('nav a').smoothScroll({
        easing: 'swing',
        speed: 1000,
        speedAsDuration: true
    });

});

const disableAOS = () => 'mobile' || 'phone' || 'tablet'

const toggleMobileMenu = () => {

    $('.hamburger').on('click', () => {      
        // variable declaration  
        const isHamburgerActive = $(".hamburger").hasClass("is_active");
        const isMobileNav = $(".nav_list").hasClass("nav_mobile");
        const closeMobileNav = (callback) => (
            $(".nav_mobile").transition(
            { x: "190%", opacity: 0 },
            500,
            () => {
                $(".nav_list").removeClass("nav_mobile")
                typeof callback === 'function' && callback()
            })
        )
        const toggleHamburger = () => $(".hamburger").toggleClass("is_active");

        if (!isMobileNav && !isHamburgerActive) {
            $('.nav_list').addClass('nav_mobile');
            $('.nav_mobile').transition({ x: '92.5%', opacity: 1 }, 500);
            toggleHamburger();

        } else if (isMobileNav && isHamburgerActive) {
            closeMobileNav();
            toggleHamburger();
        }   

        //switch to hamburger after clicking a link in the menu
        $('.nav_list a').on('click', () => {
            closeMobileNav(() => $(".hamburger").removeClass("is_active"));
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


