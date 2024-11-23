// fetch('https://reqres.in/api/users')
//     .then(res => {
//         if (res.ok) {
//             console.log('Request Successful')
//         } else {
//             console.log('Error in fetching')
//         }
//     })
//     .then(data => console.log(data))



// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//     .then(res => {
//         if(res.ok === true) {
//             return res.json()
//         } else {
//             console.log('could not fetch data')
//         }
//     })
//     .then(data => console.log(data.id))
//     .catch(error => console.log(error))
fetchData()

async function fetchData() {
    try {

        const pokemonName = document.getElementById('pokemon-name').value.toLowerCase()
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(response.ok) {
            const data = await response.json()
            const pokemonSprite = data.sprites.front_default
            const imgElement = document.getElementById('pokemon-sprite')

            imgElement.src = pokemonSprite
            imgElement.style.display = 'block'
            
        } else {
            console.log('Could not fetch data');
        }
    }

    catch(error) {
        console.log(error)
    }
}

// //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
const API_KEY = 'YOUR_PIXABAY_API_KEY';
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const imageResults = document.getElementById('image-results');

// Function to fetch images from Pixabay API
function fetchImages(query) {
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}`;

    fetch(URL)
        .then(response => response.json())
        .then(data => {
            if (data && data.hits.length > 0) {
                displayImages(data.hits); // Call function to display images
            } else {
                imageResults.innerHTML = '<p>No images found</p>';
            }
        })
        .catch(error => {
            console.log('Error fetching images', error)

            alert('Error Fetching weather data, please try again later')
        });
}

// Function to display images in the DOM
function displayImages(images) {
    imageResults.innerHTML = ''; // Clear previous images
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.webformatURL; // URL of the image
        imgElement.alt = image.tags;
        imgElement.style.width = '200px'; // Set image size

        // Append the image to the results section
        imageResults.appendChild(imgElement);
    });
}

// Event listener for the search button
searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        fetchImages(query); // Fetch images for the search query
    } else {
        alert('Please enter a search term!');
    }
});





////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/////////////////the weather app
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
function searchWeather() {
    const API_KEY = '925850b51e7a939fd2fe01810ccbb631'
    const cityInput = document.querySelector('.search-input').value

    if(cityInput === '') {
        // alert('Please Enter a City !!!')
        const errorInput = document.querySelector('.input-error')
        errorInput.classList.add('show-error')
        return // stop further execution if no city is entered
    }

    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${API_KEY}`

    fetch(weatherURL)
    .then(response => response.json())
    .then(data => {
        displayWeather(data)
    })
    .catch(error => {
        console.log('Error Fetching the Weather', error)
    })

}

function displayWeather(data) {
    const weatherTemp = document.querySelector('.weather-temp')
    const city = document.querySelector('.city')
    const description = document.querySelector('.description')
    const weatherImage = document.querySelector('.image')

    // clearing the previous contents
    weatherImage.innerHTML = ''
    city.innerHTML = ''
    description.innerHTML = ''
    weatherTemp.innerHTML = ''

    if(data.cod === '404') {
        city.innerHTML = `<div>${data.message}</div>`
    } else {
        const cityName = data.name
        const cityTemp = Math.round(data.main.temp - 273.15)
        const weatherIcon = data.weather[0].icon
        const weatherDescription = data.weather[0].description

        const iconURL = `https://openweathermap.org/img/wn/${weatherIcon}@4x.png`

        const newTemperature = `<div>${cityTemp}°C</div>`
        const newCityName = `${cityName}`
        const newDescription = `${weatherDescription}`

        city.innerHTML = newCityName
        weatherTemp.innerHTML = newTemperature
        description.innerHTML = newDescription
        weatherImage.src = iconURL

        showImage()
    }
    
}


function showImage() {
    const weatherImage = document.querySelector('.image')
    const iconContainer = document.querySelector('.weather-icon')

    weatherImage.style.display = 'block'
    iconContainer.style.display = 'block'


}
