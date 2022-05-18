function onScroll() {
    if (scrollY > 0) {
        document.querySelector('#navigation').classList.add('scroll')
    } else {
        document.querySelector('#navigation').classList.remove('scroll')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

const customization = {
    origin: 'bottom',
    distance: '30px',
    duration: 700
}

ScrollReveal(customization).reveal(`
    #home,
    #home
    img,
    .stats,
    #services,
    #services header,
    #services .card`)
