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
