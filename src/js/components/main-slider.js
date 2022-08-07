import Swiper, {Lazy, Navigation} from "swiper";

export function initMainSlider() {
    return new Swiper('.main-swiper', {
        speed: 300,
        watchSlidesProgress: true,
        watchOverflow: true,
        spaceBetween: 30,
        modules: [Navigation, Lazy],
        breakpoints: {
            320: {
                spaceBetween: 10,
            },
            1300: {
                spaceBetween: 28,
            },
            1900: {
                spaceBetween: 30,
            }
        },
        navigation: {
            nextEl: '.main-swiper-next',
            prevEl: '.main-swiper-prev'
        },
    });
}
