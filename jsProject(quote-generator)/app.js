// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"You must be the change you wish to see in the world."`,
    person: `Mahatma Gandhi`},
     {
        quote: `"Spread love everywhere you go. Let no one ever come to you without leaving happier."`,
        person: ` Mother Teresa`
     },
     {
        quote: `"The only thing we have to fear is fear itself."`,
        person: `  Franklin D. Roosevelt`
     },
     {
        quote: `"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."`,
        person: `   Martin Luther King Jr.`
     },
     {
        quote: `"Do one thing every day that scares you. "`,
        person: `   -Eleanor Roosevelt`
     },
     {
        quote: `" Well done is better than well said. "`,
        person: `   -Benjamin Franklin`
     },
     {
        quote: `"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. "`,
        person: `   -Helen Keller`
     },
     {
        quote: `"It is during our darkest moments that we must focus to see the light. "`,
        person: `  -Aristotle`
     },
     {
        quote: `" Do not go where the path may lead, go instead where there is no path and leave a trail. "`,
        person: `   -Ralph Waldo Emerson.`
     },
     {
        quote: `"Be yourself; everyone else is already taken."`,
        person: `    -Oscar Wilde`
     },
];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})


