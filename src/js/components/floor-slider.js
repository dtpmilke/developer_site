import Swiper, {Navigation, Pagination} from "swiper";

export function initFloorSlider() {
    if ($('.floor-plan-slider').length) {
        $.each($('.floor-plan-slider'), function (key, slider) {
            const $slider = $(slider)

            return new Swiper($slider[0], {
                speed: 300,
                modules: [Navigation, Pagination],
                slideToClickedSlide: true,
                watchOverflow: true,
                watchSlidesProgress: true,
                spaceBetween: 10,
                pagination: {
                    el: $slider.find('.swiper-pagination')[0],
                    type: 'bullets',
                    clickable: true
                },
                navigation: {
                    nextEl: $slider.parents('.slider-block').find('.swiper-button-next')[0],
                    prevEl: $slider.parents('.slider-block').find('.swiper-button-prev')[0],
                },
            });
        })
    }
}
