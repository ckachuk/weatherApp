import dom from "./dom";
import './style.css';

const currentCountryWeather = new Object();


(function weatherApp(){
    const divError = document.querySelector('.divError');
    const buttonSearch = document.querySelector('.searchButton'); 
    const buttonToggle = document.getElementById('toggleCheck');
    const weatherAPIKey = "d907fb01c4eb75b5f79e3814084f4a71";
    const giphyAPIKey = "9nKZqJYnvDui5Vyrrth50XnAQTkL9O0S";
    const imageAPIKey = "YUdBPELcJG_ImYoWbSg2l53hIkwjhyt3BU6lTLOMui0"

    dom.createPanel();

    const getCity = function(){
        const textboxCity = document.querySelector('#searchCity');
        
        return textboxCity.value;        
    }

    const getGeocodingAPI = async function(city){
        try{
            const geocodingAPI = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${weatherAPIKey}`, {mode:'cors'})
            const response = await geocodingAPI.json();
           return response;

        }catch(err){
           dom.errorHandling();

        }
    }

    const getWeatherAPI = async function(){
        try{  
            const getWeatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${currentCountryWeather.lat}&lon=${currentCountryWeather.lon}&appid=${weatherAPIKey}`, {mode:'cors'})
            const response = await getWeatherData.json();

            return response;
           
        }catch(err){
            dom.errorHandling();
        }
     
    }

    const getImageWeather = async function(){
        try{
            const getImageData = await fetch(`https://api.unsplash.com/search/photos/?client_id=${imageAPIKey}&per_page=1&query=${currentCountryWeather.weatherDescription}`, {mode: 'cors'});
            const response = await getImageData.json();
            console.log(response)
            return response;

        }catch(err){
            dom.errorHandling();
        }

        
    }
    
    const  getGiphyWeather = async function(){
        try{
            const getGiphyURL = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${giphyAPIKey}&q=${currentCountryWeather.weatherDescription}`, {mode: 'cors'})
            const giphyData = await getGiphyURL.json();
            
            return giphyData;
        
        }catch(err){
            dom.errorHandling();
        }
    }

    const weatherRequest = async function(){
        try{
            divError.style.display = 'none';
            const geocodingData = await getGeocodingAPI(getCity());
            processGeocodingJson(geocodingData);
    
            const weatherData = await getWeatherAPI();
            processWeatherJson(weatherData);
            console.log(weatherData);
            dom.loadDataWeather(currentCountryWeather.name, currentCountryWeather.country, currentCountryWeather.main.temp, currentCountryWeather.weatherDescription, currentCountryWeather.main.humidity);
            buttonToggle.onclick = changeFtoCelcius
    
            const imageData = await getImageWeather();
            dom.showImage(imageData.results[0].urls.regular);
        }catch(err){
            dom.errorHandling(err);
        }
        
    }

    const processGeocodingJson = function(json){
        currentCountryWeather.country = json[0].country;
        currentCountryWeather.lat = json[0].lat;
        currentCountryWeather.lon = json[0].lon;
        currentCountryWeather.name = json[0].name;
        
    }

    const processWeatherJson = function(json){
        currentCountryWeather.main = json.main;
        currentCountryWeather.main.temp = Math.round((currentCountryWeather.main.temp - 273.15) * 9/5 + 32);
        currentCountryWeather.weatherDescription = json.weather[0].main + " weather";
    }

    const changeFtoCelcius = function(){
        const temp = document.querySelector('#hTemperature');
        if(buttonToggle.checked == true){
            temp.textContent = "Temperature in °C: "+ (Math.round((currentCountryWeather.main.temp - 32) * 5/9)).toString();
        }
        else{
           temp.textContent = "Temperature in °F: " + Math.round(currentCountryWeather.main.temp);
        }
    }
  
    
    
    buttonSearch.addEventListener('click', function(){
        
        weatherRequest()
         
    })

    
})();

