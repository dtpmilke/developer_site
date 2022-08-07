import {deviceType} from "./helpers";

let currentScroll = $(window).scrollTop();

export function initHeaderAnimate() {
    if (deviceType === 'desktop') return;

    const wHeight = $(window).height();
    const newScroll = $(window).scrollTop();

    if (newScroll > wHeight && newScroll > currentScroll) {
        $('body').addClass('hide-header');
    } else {
        $('body').removeClass('hide-header');
    }

    currentScroll = newScroll;
}
