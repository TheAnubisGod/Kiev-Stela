$(document).ready(function () {
    // Menu
    $('.block-wrap').on('click', function () {
        $(this).toggleClass('block-inactive');
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        if (!$(".block-wrap").is(e.target) // если клик был не по нашему блоку
            && $(".block-wrap").has(e.target).length === 0) { // и не по его дочерним элементам
            $(".block-wrap").addClass("block-inactive")
        }
    });

    $(".main-header-mobile-content").slideUp("fast")

    $(".main-arrows").on("click", function () {
        if (document.querySelector(".main-header-mobile-content").style.display === "none") {
            document.querySelector(".main-header-mobile-content").classList.add("h100vh")
            $(".main-header-mobile-content").slideDown(300, "linear")
            document.querySelector(".main-header-mobile-content").classList.remove("h100vh")
            document.querySelector("body").style.overflow = "hidden"
            document.querySelector(".top-horizon").style.display = "block"
            document.querySelector(".main-arrows").style.top = ((1 - 40 / document.documentElement.clientHeight) * 100).toString() + "%"
        } else {
            document.querySelector(".main-header-mobile-content").classList.add("h100vh")
            $(".main-header-mobile-content").slideUp(300, "linear")
            document.querySelector(".main-header-mobile-content").classList.remove("h100vh")
            document.querySelector("body").style.overflow = "auto"
            document.querySelector(".top-horizon").style.display = "none"
            document.querySelector(".main-arrows").style.top = "0"
        }
        $(".main-arrow-left").toggleClass("rotate180")
        $(".main-arrow-right").toggleClass("rotate-180")
    })

    var // header_desktop = $('.main-header-desktop'),
        header_mobile = $('.main-arrows'),
        logo = $(".logo-mobile"),
        scrollPrev = 0;

    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();

        if (scrolled > 100 && scrolled > scrollPrev) {
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
});



