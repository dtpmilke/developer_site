export function initToggleMenu() {
    const $html = $('html');
    const openMenuClass = 'menu-block-open';
    const openMenuLevel2Class = 'menu-block-level-2-open'

    let isOpen = false;
    let scrollTop = window.scrollY;

    $('body').on('click', '.menu-toggle-button', function () {
        toggleMenu();

        return false;
    });

    $('[data-menu-block]').on('click', '.menu-block-level-2-open', function () {
        const level2Menu = $(this).attr('data-submenu');
        toggleMenuLevel2(level2Menu);

        return false
    }).on('click', '.close-button', function () {
        if (window.innerWidth >= 999 || $(this).hasClass('menu-toggle-button')) {
            openCloseMenu();

            return false
        }

        $html.removeClass(openMenuLevel2Class);

        return false;
    });


    function toggleMenu() {
        openCloseMenu();

        if (isOpen) {
            scrollTop = window.scrollY
        } else {
            window.scrollTo(0, scrollTop)
        }
    }

    function toggleMenuLevel2(submenu) {
        if (window.innerWidth >= 999) {
            openCloseMenu()
        }
        $('#menu_block .level-2 [data-submenu]').addClass('hide');
        $('#menu_block .level-2 [data-submenu="' + submenu + '"]').removeClass('hide');

        $html.addClass(openMenuLevel2Class);

        return false;
    }

    function openCloseMenu() {
        $html.toggleClass(openMenuClass);
        $html.removeClass(openMenuLevel2Class);
        isOpen = !isOpen;
    }
}
