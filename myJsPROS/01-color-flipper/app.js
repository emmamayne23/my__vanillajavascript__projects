
const colors = ['red','green', 'rgba(133, 122, 200)', '#f15025', '#008b8b'];
const color = document.querySelector('.color')

const button = document.querySelector('.btn');

button.addEventListener('click', function(){
    
    let random = randomColor();
    document.body.style.backgroundColor = colors[random];
    color.innerText = colors[random];
})

function randomColor() {
    return Math.floor(Math.random() * colors.length);
}





 