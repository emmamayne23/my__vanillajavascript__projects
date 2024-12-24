
const btns = document.querySelectorAll('.tab-btn')
const contents = document.querySelectorAll('.content')
const container = document.querySelector('.about')

container.addEventListener('click', function(e) {
    const id = e.target.dataset.id

    if(id) {

        btns.forEach(function(btn) {
            btn.classList.remove('active')
            e.target.classList.add('active')
        })

        contents.forEach(function(content) {
            content.classList.remove('active')

            document.getElementById(id).classList.add('active')
        })
    }
})
