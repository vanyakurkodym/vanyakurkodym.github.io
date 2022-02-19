window.addEventListener('DOMContentLoaded', () => {
    let hamburger = document.querySelector('.hamburger');
    let menu = document.querySelector('.menu');
    let menuLinks = document.querySelectorAll('.menu .menu-item')

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    })

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })

    document.addEventListener('scroll', () => {
        if (menu.classList.contains('menu_active')){
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        }
    })
})