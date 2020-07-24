$(document).ready(function () {
    // Menu
    $('.block-wrap').on('click', function () {
        $(this).toggleClass('block-inactive');
    });

    let menu_active = false

    $(document).mouseup(function (e) {
        if (!$(".block-wrap").is(e.target)
            && $(".block-wrap").has(e.target).length === 0) {
            $(".block-wrap").addClass("block-inactive")
        }
    });

    $(".main-header-mobile-content").slideUp("fast")

    function activateMenu() {
        document.querySelector(".main-header-mobile-content").classList.add("h100vh")
        $(".main-header-mobile-content").slideDown(300, "linear")
        document.querySelector(".main-header-mobile-content").classList.remove("h100vh")
        document.querySelector("body").style.overflow = "hidden"
        document.querySelector(".top-horizon").style.display = "block"
        document.querySelector(".main-arrows").style.top = ((1 - 40 / document.documentElement.clientHeight) * 100).toString() + "%"
        menu_active = true
        $(".main-arrow-left").toggleClass("rotate180")
        $(".main-arrow-right").toggleClass("rotate-180")
    }

    function disableMenu() {
        document.querySelector(".main-header-mobile-content").classList.add("h100vh")
        $(".main-header-mobile-content").slideUp(300, "linear")
        document.querySelector(".main-header-mobile-content").classList.remove("h100vh")
        document.querySelector("body").style.overflow = "auto"
        document.querySelector(".top-horizon").style.display = "none"
        document.querySelector(".main-arrows").style.top = "0"
        menu_active = false
        $(".main-arrow-left").toggleClass("rotate180")
        $(".main-arrow-right").toggleClass("rotate-180")
    }

    $(".main-arrows").on("click", function () {
        if (document.querySelector(".main-header-mobile-content").style.display === "none") {
            activateMenu()
        } else {
            disableMenu()
        }
    })

    let // header_desktop = $('.main-header-desktop'),
        header_mobile = $('.main-arrows'),
        logo = $(".logo-mobile"),
        scrollPrev = 0;

    $(window).scroll(function () {
        let scrolled = $(window).scrollTop();

        if (scrolled > 100 && scrolled > scrollPrev && !menu_active) {
            // header_desktop.addClass('out');
            header_mobile.addClass('out');
            logo.addClass('out');
        } else {
            // header_desktop.removeClass('out');
            header_mobile.removeClass('out');
            logo.removeClass('out');
        }
        scrollPrev = scrolled;
    });

    $(".native-link").on("click", function () {
        disableMenu()
    })

    // Pretty Links
    $('a[href^="#"]').bind('click.smoothscroll', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });
});



