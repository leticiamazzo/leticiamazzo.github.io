// menu responsible
let show = true;

const body = document.querySelector("body")
const menuSection = document.querySelector(".menu-section")
const menuToggle = document.querySelector(".menu-toggle")
const menuList = document.querySelector("nav")
const menuIcon = document.querySelector(".menu-icon")

menuToggle.addEventListener("click", () => {
    // não entra no else
    // document.body.style.overflow = show ? "hidden" : "inicial"

    body.classList.toggle("blocks-scroll-bar", show)
    menuSection.classList.toggle("on", show)
    menuList.classList.toggle("show-nav", show)
    menuIcon.classList.toggle("close-icon", show)
    
    show = !show
})


// main-carousel
const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let pixels = 100;

btnRight.addEventListener('click', function() {
    pixels = pixels + 100
    elements.style = `transform: translateX(${pixels}px)`
})

btnLeft.addEventListener('click', function() {
    pixels = pixels - 100
    elements.style = `transform: translateX(${pixels}px)`
})
