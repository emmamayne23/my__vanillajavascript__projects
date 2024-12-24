// local reviews

const reviews = [
    {
        id : '1',
        name : 'Josephine June',
        job : 'Web Designer',
        img : 'https://www.mockofun.com/wp-content/uploads/2019/12/circle-profile-pic.jpg',
        text : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa'
    },

    {
        id : '2',
        name : 'Amanda May',
        job : 'Web Developer',
        img : 'https://www.mockofun.com/wp-content/uploads/2019/12/circle-photo.jpg',
        text : 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores'
    },

    {
        id : '3',
        name : 'Miranda April',
        job : 'Data Analyst',
        img : 'https://www.pngitem.com/pimgs/m/128-1284293_marina-circle-girl-picture-in-circle-png-transparent.png',
        text : 'laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi'
    },
    {
        id : '4',
        name : 'Serena Sky',
        job : 'Intern',
        img : 'https://www.adobe.com/express/create/media_1ead9ff65c5551a5e6669cb8daa7479fa65097f38.png?width=750&format=png&optimize=medium',
        text : 'aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam'
    },
    
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-button');
const nextBtn = document.querySelector('.next-button');
const randomBtn = document.querySelector('.random-btn');

// Set starting item
let currentItem = 0;

// load initial item
// window.addEventListener("DOMContentLoaded", function() {

//     showPerson()
// })

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// Show nextPerson

nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
})

// Show prevPerson

prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0 ) {
        currentItem = reviews.length - 1;
    }
    showPerson();
})

// Show Random Person

randomBtn.addEventListener("click", function(){

    currentItem = Math.floor(Math.random() * reviews.length)

    showPerson();
})


