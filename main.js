function onScroll() {
    if (scrollY > 0) {
        document.querySelector('#navigation').classList.add('scroll')
    } else {
        document.querySelector('#navigation').classList.remove('scroll')
    }
}
