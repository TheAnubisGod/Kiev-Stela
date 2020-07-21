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
            document.querySelector(".main-header-mobile-content").style.height = "100vh"
            $(".main-header-mobile-content").slideDown(300, "linear")
            document.querySelector(".main-header-mobile-content").style.height = "auto"
            document.querySelector("body").style.overflow = "hidden"
            document.querySelector(".top-horizon").style.display = "block"
            console.log('lol')
            document.querySelector(".main-arrows").style.top = ((1 - 50 / document.documentElement.clientHeight)*100).toString()+"%"
        } else {
            document.querySelector(".main-header-mobile-content").style.height = "100vh"
            $(".main-header-mobile-content").slideUp(300, "linear")
            document.querySelector(".main-header-mobile-content").style.height = "auto"
            document.querySelector("body").style.overflow = "auto"
            document.querySelector(".top-horizon").style.display = "none"
            document.querySelector(".main-arrows").style.top = "0"
        }
        $(".main-arrow-left").toggleClass("rotate180")
        $(".main-arrow-right").toggleClass("rotate-180")
    })
});



