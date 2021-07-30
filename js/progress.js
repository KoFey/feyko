var line = document.getElementsByClassName("lineProg");
let slides = document.getElementsByClassName("slide");
let ii = 0;
let time = setInterval(slider,5000);

function slider() {
    slides[ii].className = "slide";
    if (ii == slides.length-1) {
        ii = 0;
    } else {
        ii++;
    }
    slides[ii].className = "slide active";
}