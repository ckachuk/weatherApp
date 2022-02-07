import dom from "./dom";
import './style.css';

const currentCountryWeather = new Object();


(function weatherApp(){
    
    const buttonSearch = document.querySelector('.searchButton'); 
    const weatherAPIKey = "d907fb01c4eb75b5f79e3814084f4a71";
    const giphyAPIKey = "9nKZqJYnvDui5Vyrrth50XnAQTkL9O0S";


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
            console.log(err)
        }
    }

    const getWeatherAPI = async function(){
        try{  
            const getWeatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${currentCountryWeather.lat}&lon=${currentCountryWeather.lon}&appid=${weatherAPIKey}`, {mode:'cors'})
            const response = await getWeatherData.json();

            return response;
           
        }catch(err){
            console.log(err);
        }
     
    }

    const  getGiphyWeather = async function(){
        try{
            const getGiphyURL = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${giphyAPIKey}&s=sunny`, {mode: 'cors'})
            const giphyData = await getGiphyURL.json();
            
            return giphyData;
        
        }catch(err){
            console.log(err);
        }
    }

    const weatherRequest = async function(){
        const geocodingData = await getGeocodingAPI(getCity());
        processGeocodingJson(geocodingData);

        const weatherData = await getWeatherAPI();
        processWeatherJson(weatherData);
        dom.loadDataWeather(currentCountryWeather.name, currentCountryWeather.country, currentCountryWeather.main.temp, currentCountryWeather.weatherDescription);

        const giphyData = await getGiphyWeather();
        showGiphy(giphyData.data.images.original.url);
    }

    const processGeocodingJson = function(json){
        currentCountryWeather.country = json[0].country;
        currentCountryWeather.lat = json[0].lat;
        currentCountryWeather.lon = json[0].lon;
        currentCountryWeather.name = json[0].name;
    }

    const processWeatherJson = function(json){
        currentCountryWeather.main = json.main;
        currentCountryWeather.weatherDescription = json.weather[0].description;
    }

    const showGiphy = function(url){
        const img = document.querySelector('img');

        img.src = url;
    }
    
    buttonSearch.addEventListener('click', function(){
        dom.createPanel();
        weatherRequest();
         
    })
    
})();