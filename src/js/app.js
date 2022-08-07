import '../scss/app.scss';
import {initToggleMenu} from "./components/menu";
import {initMainSlider} from "./components/main-slider";
import {initFeaturedSlider} from "./components/feautered-slider";
import lozad from "lozad";
import {initProjectSlider} from "./components/project-slider";
import {initFloorSlider} from "./components/floor-slider";
import {initDiscountForm} from "./components/discount-form";
import {initContactsMap} from "./components/map";
import {initHeaderAnimate} from "./components/header";


/* Your JS Code goes here */
$(document).ready(function () {
    setTimeout(() => {
        $('html').removeClass('closed-menu')
    }, 500)
    initToggleMenu()

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari) $('html').addClass('safari')

    const observer = lozad('.lozad', {
        load: function (el) {
            if (el.dataset.background) {
                $(el).css('background-image', 'url(' + el.dataset.background + ')');
                $(el).find('.swiper-lazy-preloader').remove()
                $(el).parents().find('.swiper-lazy-preloader').remove()
            }

            if (el.dataset.src) {
                el.src = el.dataset.src
                $(el).parents().find('.swiper-lazy-preloader').remove()
            }

            el.classList.add('fade')
        }
    });

    observer.observe();

    initHeaderAnimate();

    $(window).on('scroll', function () {
        initHeaderAnimate();
    });

    $('.footer-toggle-column').on('click', '.footer-column-toggler, .heading', function () {
        if (window.innerWidth <= 999) {
            $(this).parents('.footer-toggle-column').toggleClass('opened')
        }
        return false;
    })

    $('.showmore-button').on('click', function () {
        const $this = $(this);
        const $parentBlock = $this.parents('.showmore-block');
        $parentBlock.toggleClass('showed')

        return false;
    })

    $('.hash-nav').on('click', '.h-nav', function () {
        $(this).parents('.hash-nav').toggleClass('opened')
        return false;
    })

    $('.floor-plan-card').on('click', '.f-heading', function () {
        $(this).parents('.floor-plan-card').toggleClass('opened');

        return false;
    })

    $('.faq-item').on('click', '.f-heading', function () {
        $(this).parents().parents().parents().find('.faq-item.opened').removeClass('opened')
        $(this).parents('.faq-item').toggleClass('opened');

        return false;
    })

    $('.content-list').on('click', '.c-heading', function () {
        $(this).parents('.content-list').toggleClass('opened');

        return false;
    })

    if ($('.main-swiper').length) {
        initMainSlider();
    }

    if ($('.featured-slider').length) {
        initFeaturedSlider()
    }


    if ($('.project-slider').length) {
        initProjectSlider()
    }

    initFloorSlider()

    initDiscountForm();

    initContactsMap();

})
