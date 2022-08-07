import Swiper, {Navigation, Pagination, Thumbs} from "swiper";

export function initProjectSlider() {
    const $thumbProjectSwiper = new Swiper('.thumbs-for-project-slider', {
        speed: 300,
        watchSlidesProgress: true,
        modules: [Navigation, Thumbs],
        slidesPerView: 6,
        breakpoints: {
            320: {
                spaceBetween: 5,
            },
            1300: {
                spaceBetween: 30,
            },
            1900: {
                spaceBetween: 30,
            }
        },
        navigation: {
            nextEl: '.thumbs-for-project-slider .swiper-button-next',
            prevEl: '.thumbs-for-project-slider .swiper-button-prev'
        },
    })

    const $projectSwiper = new Swiper('.project-slider', {
        speed: 300,
        modules: [Navigation, Pagination, Thumbs],
        slideToClickedSlide: true,
        pagination: {
            el: '.project-slider .swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        thumbs: {
            swiper: $thumbProjectSwiper
        },
        breakpoints: {
            320: {
                spaceBetween: 10,
            },
            1300: {
                spaceBetween: 30,
            },
            1900: {
                spaceBetween: 30,
            }
        },
        navigation: {
            nextEl: '.project-slider .swiper-button-next',
            prevEl: '.project-slider .swiper-button-prev'
        },
    });
}
