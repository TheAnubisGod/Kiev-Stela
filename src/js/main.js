$(document).ready(function () {
    $('.block-wrap').on('click', function () {
        $(this).toggleClass('block-inactive');
    });
    $("#square").on("change", function () {
        document.getElementById("square-val").innerText = this.value
    })
});



