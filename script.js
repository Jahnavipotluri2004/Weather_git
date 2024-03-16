const inputBox = document.querySelector('.input-box');
const searchbtn = document.getElementById('searchbtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description= document.querySelector('.description');
const humidity = document.querySelector('humidity');
const wind_speed = document.querySelector('wind-speed');


async function checkWeather(city){
    const api_key = "1234def9c95d1bd7f31809e208f62558";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json() );
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}km/H`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
               weather_img.src = "/images/cloud.png";
            case 'Clear':
                weather_img.src = "/images/clear.png";
            case 'Moderate Rain':
                weather_img.src = "/images/rain.png";
            case 'Mist':
                weather_img.src = "/images/mist.png";
            case 'Snow':
                weather_img.src = "/images/snow.png";
    
    
        }
    
    console.log(weather_data);

}
searchBtn.addEventListener('click',()=>{
     checkWeather(inputBox.value);


})