
const userChoice = document.querySelector('#user-choice');
const computerChoice = document.querySelector('#computer-choice');
const result = document.querySelector('#result');
const possibleChoices = document.querySelectorAll('button')
let choice
let pcChoice
let results

possibleChoices.forEach(function (possibleChoice) {

    possibleChoice.addEventListener('click', function(e) {
        choice = e.currentTarget.id;
        
        userChoice.textContent = choice;
        userChoice.style.color = 'blue';
        generateComputerChoice();
        generateResult();
        
    })
})

function generateComputerChoice() {
    let random = Math.floor(Math.random() * possibleChoices.length)
    // console.log(random)

    if (random === 0) {
        pcChoice = 'rock'
    } else if (random === 1) {
        pcChoice = 'paper'
    }  else {
        pcChoice = 'scissors'
    }

    computerChoice.textContent = pcChoice;
}

function generateResult() {
    if (pcChoice === choice) {
        results = "It's a draw, another go?"
    } else if (pcChoice === 'rock' && choice === 'paper') {
        results = "Great, you win!!"
    } else if (pcChoice === 'rock' && choice === 'scissors') {
        results = "Ouch, you lose!!"
    } else if (pcChoice === 'paper' && choice === 'scissors') {
        results = "Great, you win!!"
    } else if (pcChoice === 'scissors' && choice === 'rock') {
        results = "Great, you win!!"
    } else if (pcChoice === 'scissors' && choice === 'paper') {
        results = "Ouch, you lose!!"
    } else if (pcChoice === 'paper' && choice === 'rock') {
        results = "Ouchie, you lose!!"
    }

    result.textContent = results
}