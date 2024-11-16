
const video = document.querySelector('.video-container');
const btns = document.querySelector('.buttons')

btns.addEventListener('click', function() {

    if(!btns.classList.contains('slide')){
        btns.classList.add('slide')
        video.pause();
    } else {
        btns.classList.remove('slide')
        video.play();
    }
})

