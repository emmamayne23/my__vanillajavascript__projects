
const toggleButton = document.querySelector('.toggle-btn')
const links = document.querySelector('.links')

toggleButton.addEventListener('click', function() {

    links.classList.toggle('show-links')
})
