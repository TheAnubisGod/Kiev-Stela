let is_modal_active = false
let current_type = ""

function show_modal(type) {
    types = ["Обычный", "Тканевый", "Apply", "Парящий", "Фотопечать", "Световые линии", "Уровневый", "Звездное небо"]

    if (type > 0 && type <= 8 && !is_modal_active) {
        document.getElementById("ceiling-type-name").innerText = types[type - 1]
        $(".modal-window-bg").fadeIn()
        document.querySelector("body").style.overflow = "hidden"
        is_modal_active = true
        current_type = types[type - 1]
    }
}

function hide_modal() {
    if (is_modal_active) {
        document.getElementById("ceiling-type-name").innerText = ""
        $(".modal-window-bg").fadeOut()
        document.querySelector("body").style.overflow = "visible"
        is_modal_active = false
        current_type = ""
    }
}

for (let i = 0; i < 8; i++) {
    document.querySelectorAll(".order-btn")[i].addEventListener("click", function (e) {
        show_modal(i + 1)
    })
}

document.getElementById("send-modal").addEventListener("click", function (e) {
    e.preventDefault()
    let name = document.getElementById("name-modal").value
    let phone = document.getElementById("phone-modal").value.replace(/[^+\d]/g, '')
    if (name !== "" && phone.length === 13 && current_type !== "") {
        $.ajax({
            type: "POST",
            url: "telegram.php",
            data: {
                type: "modal",
                name: name,
                phone: phone,
                ceiling_type: current_type,
            },
            success: function (result) {
                if (result !== "success") {
                    alert("Ошибка отправки формы!")
                }
                document.getElementById("name-modal").value = ""
                document.getElementById("phone-modal").value = ""
                hide_modal()
            }
        });
    }
})

document.querySelector(".close-btn").addEventListener("click", function (e) {
    hide_modal()
})

$("#phone-modal").inputmask({"mask": "+38 (999) 999-9999"});

$(document).mouseup(function (e) {
    let modal = $(".modal-window");
    if (!modal.is(e.target)
        && modal.has(e.target).length === 0) {
        hide_modal()
    }
});
