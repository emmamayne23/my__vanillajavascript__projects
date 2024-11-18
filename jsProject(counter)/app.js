// the initial value
let value = 0;

const btn = document.querySelectorAll('.btn')
const number = document.querySelector('.num')

btn.forEach((btn) => { 

    btn.addEventListener('click', function (e) {

        const butt = e.currentTarget.classList;

        if(butt.contains('decrease')){
            value --;
        } else if(butt.contains('increase')){
            value ++;
        } else {
            value = 0;
        }

        if(value > 0){
            number.style.color = 'green'
        }

        else if(value < 0){
            number.style.color = 'red'
        } else {
            number.style.color = 'black'
        }

        number.textContent = value;

    });
})
