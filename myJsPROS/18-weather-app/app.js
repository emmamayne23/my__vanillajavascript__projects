
function searchWeather() {
    const API_KEY = '925850b51e7a939fd2fe01810ccbb631';
    const cityInput = document.querySelector('.search-input').value;

    if(cityInput === '') {
        const errorInput = document.querySelector('.input-error');
        errorInput.classList.add('show-error');
        return; // Stop further execution if no city is entered
    } else {
        const errorInput = document.querySelector('.input-error');
        errorInput.classList.remove('show-error');
    }

    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${API_KEY}`;

    fetch(weatherURL)
    .then(response => response.json())
    .then(data =>  {
            // Handle the case where the city is not found
            displayWeather(data);

            localStorage.setItem('city', cityInput);
            localStorage.setItem('weatherData', JSON.stringify(data));
        })
    .catch(error => {
        console.log('Error Fetching the Weather', error);
    });
}

function displayWeather(data) {
    const weatherTemp = document.querySelector('.weather-temp');
    const city = document.querySelector('.city');
    const description = document.querySelector('.description');
    const weatherImage = document.querySelector('.image');

    // Clearing the previous contents
    weatherImage.innerHTML = '';
    city.innerHTML = '';
    description.innerHTML = '';
    weatherTemp.innerHTML = '';

    if (data.cod === '404') {
        city.innerHTML = `<div>${data.message}</div>`;
    } else {
        const cityName = data.name;
        const cityTemp = Math.round(data.main.temp - 273.15);
        const weatherIcon = data.weather[0].icon;
        const weatherDescription = data.weather[0].description;

        const iconURL = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

        const newTemperature = `<div>${cityTemp}°C</div>`;
        const newCityName = `${cityName}`;
        const newDescription = `${weatherDescription}`;

        city.innerHTML = newCityName;
        weatherTemp.innerHTML = newTemperature;
        description.innerHTML = newDescription;
        weatherImage.src = iconURL;

        showImage();
    }
}

function showImage() {
    const weatherImage = document.querySelector('.image');
    const iconContainer = document.querySelector('.weather-icon');

    weatherImage.style.display = 'block';
    iconContainer.style.display = 'block';
}

// Function to load weather from localStorage on page load
function loadWeatherFromLocalStorage() {
    const savedCity = localStorage.getItem('city');
    const savedWeatherData = localStorage.getItem('weatherData');

    if (savedCity && savedWeatherData) {
        // Parse the weather data back to an object
        const weatherData = JSON.parse(savedWeatherData);

        // Display the saved weather data
        displayWeather(weatherData);
    }
}

// Load the saved weather data when the page loads
window.onload = loadWeatherFromLocalStorage;
