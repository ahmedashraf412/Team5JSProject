var sliderImgs = ["./assets/slide-01.jpg", "./assets/slide-02.jpg", "./assets/slide-03.jpg"]
var sliderRight = document.getElementById("slider-right-btn");
var sliderLeft = document.getElementById("slider-left-btn");
i = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar')

    if (window.scrollY >= 40) {
        navbar.classList.add('scrolled');
    }
    else {
        navbar.classList.remove('scrolled');
    }
})

sliderRight.addEventListener('click', () => {
    next();
})
sliderLeft.addEventListener('click', () => {
    prev();
})
function next() {
    i++
    if (i >= sliderImgs.length) { i = 0 }
    document.querySelector('.hero-section').style.backgroundImage = `url("${sliderImgs[i]}")`;
}


function prev() {
    i--
    if (i < 0) {
        i = sliderImgs.length - 1
    }
    document.querySelector('.hero-section').style.backgroundImage = `url("${sliderImgs[i]}")`;

}

