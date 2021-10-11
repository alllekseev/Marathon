const slides = document.querySelectorAll('.slide')
const slidesCount = slides.length;
const slideLink = document.querySelectorAll('.slide-link')
// let selectedSlide;

for (const slide of slides) {
    slide.addEventListener('click', () => {
        removeClassActive()
        slide.classList.add('active');
    })
}

function autoMainSlide(activeSlide = 0) {
    let currentIndexSlide = activeSlide;

    slides[activeSlide].classList.add('active');

    setInterval(changeSlide, 5000)

    function changeSlide() {
        removeClassActive()
        currentIndexSlide++
        if (currentIndexSlide === slidesCount) {
            currentIndexSlide = 0;
        }
        slides[currentIndexSlide].classList.add('active')
        console.log(currentIndexSlide)
    }
}

function removeClassActive() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
}



autoMainSlide(0)