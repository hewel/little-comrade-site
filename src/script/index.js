import throttle from 'lodash-es/throttle'
// import uniq from 'lodash-es/uniq'

import 'bulma'
import '../less/index.less'

const navbar = document.getElementsByClassName('navbar')[0]
const banner = document.getElementsByClassName('banner')[0]
// const navbarClassList = Array.from(navbar.classList)

function handleScroll() {
    const [docEl, bodyEl] = [document.documentElement, document.body]
    const [scrollTop, , , bannerClientHeight, navbarClientHeight] = [
        docEl.scrollTop || bodyEl.scrollTop,
        docEl.scrollHeight || bodyEl.scrollHeight,
        docEl.clientHeight || bodyEl.clientHeight,
        banner.clientHeight,
        navbar.clientHeight,
    ]

    const isScrollPassBanner =
        scrollTop >= bannerClientHeight - navbarClientHeight - 600

    if (isScrollPassBanner) {
        navbar.classList.remove('transparent')
    } else {
        navbar.classList.add('transparent')
    }
}

if (banner) {
    window.addEventListener('scroll', throttle(handleScroll, 200))
}
