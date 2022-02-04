
const currentCountryWeatherObj = new Object();


(function weatherApp(){
    
    const buttonSearch = document.querySelector('.searchButton'); 
    const weatherAPIKey = "d907fb01c4eb75b5f79e3814084f4a71";
    const giphyAPIKey = "kTlXTNCHBfb26zecP7NMFvsbB8WpavkP";


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
            const JSONGeocoding = await getGeocodingAPI(getCity())
            processGeocodingJson(JSONGeocoding);
            
            
            const getWeatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${currentCountryWeatherObj.lat}&lon=${currentCountryWeatherObj.lon}&appid=${weatherAPIKey}`, {mode:'cors'})
            const response = await getWeatherData.json();

            return response;
           
        }catch(err){
            console.log(err);
        }
     
    }

    const  getGiphyWeather = async function(){
        try{
            const getWeatherData = await getWeatherAPI();
            processWeatherJson(getWeatherData); 
            console.log(currentCountryWeatherObj.weatherDescription)
            const getGiphyURL = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${giphyAPIKey}&s=cats`, {mode: 'cors'})
            const giphyData = getGiphyURL.json();
            
            showGiphy(giphyData.data.images.original.url)
        }catch(err){
            console.log(err);
        }
    }

    const processGeocodingJson = function(json){
        currentCountryWeatherObj.name = json[0].local_names.en;
        currentCountryWeatherObj.country = json[0].country;
        currentCountryWeatherObj.lat = json[0].lat;
        currentCountryWeatherObj.lon = json[0].lon;
    }

    const processWeatherJson = function(json){
        currentCountryWeatherObj.main = json.main;
        currentCountryWeatherObj.weatherDescription = json.weather[0].description;
        // Object.entries(currentCountryWeatherObj.main).map(item =>{
        //     console.log(item);
        // })
    }

    const showGiphy = function(url){
        const img = document.querySelector('img');

        img.src = url;
    }
    
    buttonSearch.addEventListener('click', function(){

         getGiphyWeather();
         
    })
    
})();