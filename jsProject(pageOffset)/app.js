
////// toggling between the navbar links
const toggleButton = document.querySelector('.toggle-btn')
const links = document.querySelector('.links')
const linksContainer = document.querySelector('.navbar')

toggleButton.addEventListener('click', function() {
    links.classList.toggle('show-links')

    // const containerHeight = linksContainer.getBoundingClientRect().height
    // const linksHeight = links.getBoundingClientRect().height

    // if(containerHeight === 0) {
    //     linksContainer.style.height = `${linksHeight}px`
    // } else {
    //     linksContainer.style.height = 0
    // }
})


/////// the top button and the fixed navbar
const navbar = document.querySelector('.main-nav')
const topButton = document.querySelector('.top-button')

window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset
    const navbarHeight = navbar.getBoundingClientRect().height

    if(scrollHeight > navbarHeight + 100) {
        navbar.classList.add('show-main-header')
    } else {
        navbar.classList.remove('show-main-header')
    }

    if(scrollHeight > 500) {
        topButton.classList.add('show-top-button')
    } else {
        topButton.classList.remove('show-top-button')
    }
})

