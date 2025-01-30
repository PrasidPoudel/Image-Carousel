const previous = document.querySelector('.previous-button')
const next = document.querySelector('.next-button')

const imgs = document.querySelectorAll('.img-item')

let currentIndex = 0;
next.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex === imgs.length) currentIndex = 0
    ShowSlide(currentIndex)

})
previous.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex === -1) currentIndex = imgs.length - 1;
    ShowSlide(currentIndex)
})
function ShowSlide(n) {
    NoDisplay()
    RemoveActive()
    const img = document.querySelector(`.img-item[data='${n}']`)
    img.style.display = 'block'
    const dot = document.querySelector(`.dots[data='${n}']`)
    dot.classList.add('active')
    if (n === imgs.length) n = 0
}
function NoDisplay() {
    imgs.forEach((img) => {
        img.style.display = 'none'
    })
}
const jumpindex = document.querySelectorAll('.dots')
jumpindex.forEach((dots) => {
    dots.addEventListener('click', () => {
        RemoveActive()
        dots.classList.add('active')
        currentIndex = Number(dots.getAttribute('data'))
        ShowSlide(currentIndex)
    })
})
function RemoveActive() {
    jumpindex.forEach((dot) => {
        dot.classList.remove('active')
    })
}
function Changein5() {
    ShowSlide(currentIndex)
    currentIndex++;
    if(currentIndex===imgs.length) currentIndex=0
}
window.onload=function(){
    setInterval(Changein5,5000)
}