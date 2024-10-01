
const modalBtn = document.querySelector('.modal-btn')
const closeBtn = document.querySelector('.close-btn');
const modalContainer = document.querySelector('.modal-container');

modalBtn.addEventListener('click', function() {

     modalContainer.style.display = 'block';
})

closeBtn.addEventListener('click', function() {

    modalContainer.style.display = 'none';
});

window.addEventListener('click', function(e) {

    if(e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
})