let steps = document.querySelectorAll(".step")
let current_step = 1;
for (let i = 0; i < steps.length; i++) {
    let step = steps[i]
    step.style.left = (100).toString() + "%"
    if (i === 0){
        step.style.left = (0).toString() + "%"
    }
}

let next_buttons = document.querySelectorAll(".btn-next")
let prev_buttons = document.querySelectorAll(".btn-prev")

for (let i = 0; i < next_buttons.length; i++) {
    next_buttons[i].onclick = function (event) {
        steps[next_buttons[i].dataset.num].style.left = "0%"
        steps[next_buttons[i].dataset.num - 1].style.left = "-100%"
    }
}

for (let i = 0; i < prev_buttons.length; i++) {
    prev_buttons[i].onclick = function (event) {
        steps[prev_buttons[i].dataset.num - 2].style.left = "0%"
        steps[prev_buttons[i].dataset.num - 1].style.left = "+100%"
    }
}