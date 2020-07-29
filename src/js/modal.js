function show_modal(type) {
    types = ["Обычный", "Тканевый", "Apply", "Парящий", "Фотопечать", "Световые линии", "Уровневый", "Звездное небо"]

    if (type > 0 && type <= 8) {
        document.getElementById("ceiling-type-name").innerText = types[type - 1]
        $(".modal-window-bg").fadeIn()
        document.querySelector("body").style.overflow = "hidden"
    }
}

function hide_modal() {
    document.getElementById("ceiling-type-name").innerText = ""
    $(".modal-window-bg").fadeOut()
    document.querySelector("body").style.overflow = "visible"
}

for (let i = 0; i < 8; i++) {
    document.querySelectorAll(".order-btn")[i].addEventListener("click", function (e) {
        show_modal(i + 1)
    })
}

document.querySelector(".close-btn").addEventListener("click", function (e) {
    hide_modal()
})

$(document).mouseup(function (e) {
    let modal = $(".modal-window");
    if (!modal.is(e.target)
        && modal.has(e.target).length === 0) {
        hide_modal()
    }
});
