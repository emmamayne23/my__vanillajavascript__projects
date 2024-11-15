
const btns = document.querySelectorAll('.btn');
const contents = document.querySelectorAll('.content');
const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
    // console.log(e.target.dataset.id)
    const id = e.target.dataset.id
    if(id) {
        //remove active from the other buttons
        btns.forEach(function(btn) {
            btn.classList.remove('active');
            e.target.classList.add('active');
        })

        contents.forEach(function(content) {
            content.classList.remove('active');
            
        })

        const item = document.getElementById(id)
        item.classList.add('active');
    }
})

