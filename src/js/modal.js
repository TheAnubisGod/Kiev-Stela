function show_modal(type) {
    types = ["обычный", "тканевый", "Apply", "парящий", "фотопечать", "световые линии", "уровневый", "звездное небо"]

    if (type > 0 && type <= 8) {
        document.getElementById("ceiling-type-name").innerText = types[type - 1]
        document.querySelector(".modal-window-bg").classList.remove("hidden")
        document.querySelector("body").style.overflow = "hidden"
    }
}

function hide_modal() {
    document.getElementById("ceiling-type-name").innerText = ""
    document.querySelector(".modal-window-bg").classList.add("hidden")
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
