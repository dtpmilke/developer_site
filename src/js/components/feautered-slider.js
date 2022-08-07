import Swiper, {Navigation, Pagination} from "swiper";

export function initFeaturedSlider() {
    $.each($('.featured-swiper'), function (key, slider) {
        const $slider = $(slider)
        return new Swiper($slider[0], {
            // Disable preloading of all images
            // preloadImages: false,
            // Enable lazy loading
            // lazy: true,
            speed: 300,
            watchSlidesProgress: true,
            watchOverflow: true,
            spaceBetween: 30,
            modules: [Navigation, Pagination],
            slidesPerView: 3,
            slidesPerGroup: 3,
            observer: true,
            breakpoints: {
                560: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    pagination: {
                        el: $slider.parents('.featured-slider').find('.swiper-pagination')[0],
                        type: 'bullets',
                    }
                },
                1181: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                }
            },
            navigation: {
                nextEl: $slider.parents('.featured-slider').find('.swiper-button-next')[0],
                prevEl: $slider.parents('.featured-slider').find('.swiper-button-prev')[0],
            },
        });
    })
}
