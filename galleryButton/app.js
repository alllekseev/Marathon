function changeMainSlide(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide');
    const slidesCount = slides.length;

    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');

    slides[activeSlide].classList.add('active');

    let activeSlideIndex = activeSlide;

    leftBtn.addEventListener('click', () => {
        clearActiveClass()
        changeSlide('left')
    })
    rightBtn.addEventListener('click', () => {
        clearActiveClass()
        changeSlide('right')
    })

    function changeSlide(direction) {
        if (direction === 'left') {
            activeSlideIndex--
            if (activeSlideIndex < 0)
            {
                activeSlideIndex = slidesCount - 1;
                slides[activeSlideIndex].classList.add('active')
            }
            slides[activeSlideIndex].classList.add('active')
        }
        else if (direction === 'right') {
            activeSlideIndex++
            if (activeSlideIndex === slidesCount) {
                activeSlideIndex = 0;
                slides[activeSlideIndex].classList.add('active')
            }
            slides[activeSlideIndex].classList.add('active')
        }
    }

    function clearActiveClass() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

changeMainSlide();
