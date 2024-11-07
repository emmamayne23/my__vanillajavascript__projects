
const openBtn = document.querySelectorAll('.btn')
const answerSection = document.querySelector('.answer')


// // openBtn.forEach(function(btn) {
// //     btn.addEventListener('click', function(e) {
// //         const answerText = e.currentTarget.parentElement
// //         answerText.classList.toggle('answer-text')
// //     })
    
// // })

// openBtn.addEventListener('click', function() {

//     answerSection.classList.toggle('answer-text')
// })

openBtn.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const item = e.currentTarget.parentElement.parentElement
        item.classList.toggle('answer-text')

    })
})