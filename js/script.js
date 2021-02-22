const $menu = document.querySelector('.list-mobile-menu');
const $btnMenu = document.querySelector('.menu-button');
const $closeMenu = document.querySelector('.close-mobile-menu');

$btnMenu.addEventListener('click', function(){
    $menu.classList.add('open-mobile-menu')
})

$closeMenu.addEventListener('click', function(){
    $menu.classList.remove('open-mobile-menu')
})
