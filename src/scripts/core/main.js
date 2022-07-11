
$timeOut = false;
$slideMenu1 = false;
$slideMenu2 = false;

$(document).ready(function() {
    $('.menu-button').click(function() {
        $('body').toggleClass('no-scroll');
        $('.menu-button').toggleClass('open');
        $('.mobile-menu').toggleClass('opened');
        $('.navbar-brand').toggleClass('hidden');

        if ($slideMenu1) {
        setTimeout(function() {
            $('.mobile-product-menu').toggleClass('slide-open');
        }, 300);

        $('.submenu-label').toggleClass('hidden');
        $slideMenu1 = false;
        }
        else {
        $('.menu-label').toggleClass('hidden');
        }

        if ($slideMenu2) {
        setTimeout(function() {
            $('.mobile-product-submenu').toggleClass('slide-open');
        }, 300);

        $('.submenu-label-2').toggleClass('hidden');
        $('.submenu-label').toggleClass('hidden');
        $slideMenu2 = false;
        $slideMenu1 = false;
        }
        
    });

    $('.razer-toggle').click(function() {
        $('.razer-drop-menu').toggleClass('open-dropdown');
        $('.razer-drop-submenu').removeClass('open-dropdown');
    });

    $('.razer-subtoggle').click(function() {
        $('.razer-drop-submenu').toggleClass('open-dropdown');
    });

    $('.slide-menu').click(function() {
        $('.mobile-product-menu').toggleClass('slide-open');
        $('.menu-label').toggleClass('hidden');
        $('.submenu-label').toggleClass('hidden');
        
        if ($slideMenu1) {
        $slideMenu1 = false;
        }
        else {
        $slideMenu1 = true;
        }
    });

    $('.slide-submenu').click(function() {
        $('.mobile-product-submenu').toggleClass('slide-open');
        $('.submenu-label-2').toggleClass('hidden');
        $('.submenu-label').toggleClass('hidden');

        if ($slideMenu2) {
        $slideMenu2 = false;
        }
        else {
        $slideMenu2 = true;
        }
    })

    $('.product-btn').click(function() {
        $('.product.product-xs').toggleClass('product-hide-xs');
        $('.product-btn').toggleClass('only-mobile');
    });
});
