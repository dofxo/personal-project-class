// hides/unhide the header depens on the scroll.

const headerEl = document.getElementById('header')

let latestScroll = 0
let currentScroll

window.addEventListener('scroll', () => {

    currentScroll = window.scrollY

    if (currentScroll <= 0) {
        headerEl.classList.remove('scroll-down')
    }

    else if (currentScroll > latestScroll) {
        headerEl.classList.add('scroll-down')

    }



    latestScroll = currentScroll
})