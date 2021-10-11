const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const startAgainBtn = document.querySelector('#startAgainBtn')
const colors = ['#FFFF33', '#FF6633', '#FF00FF', '#CCFF33', '#9933FF', '#CC99FF', '#00FF99', '#CCFF66', '#33FFFF', '#6666FF']

let time = 0
let score = 0
let startTimer

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

startAgainBtn.addEventListener('click', () => {
    screens[2].classList.add('down')
    screens[1].classList.remove('up')
    screens[2].classList.remove('down')
    toStart()
})

function toStart() {

}

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame() {
    startTimer = setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    // setTimeout(startTimer)
    
    timeEl.parentNode.classList.add('hide')
    let test = board.innerHTML = `<h1>Score: <span class="primary">${score}</span></h1>`
    startAgainBtn.classList.remove('hide');
    console.log(test)
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    const color = getRandomColor()

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.background = `${color}`
    circle.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}, 0 0 20px ${color}`

    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

function winTheGame() {
    function kill() {
        const circle = document.querySelector('.circle')

        if (circle) {
            circle.click()
        }
    }
    setInterval(kill, 0.1)
}

document.addEventListener('keydown', event => {
    if (event.key === 's') {
        winTheGame()
    }
})