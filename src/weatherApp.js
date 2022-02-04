
const currentCountryWeatherObj = new Object();


(function weatherApp(){
    
    const buttonSearch = document.querySelector('.searchButton'); 
    const APIKey = "d907fb01c4eb75b5f79e3814084f4a71";



    const getCity = function(){
        const textboxCity = document.querySelector('#searchCity');
        
        return textboxCity.value;        
    }

    const getGeocodingAPI = async function(city){
        try{
            const geocodingAPI = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIKey}`, {mode:'cors'})
            const response = await geocodingAPI.json();
            
           return response;

        }catch(err){
            console.log(err)
        }
    }
    

    const processGeocodingJson = function(json){
        currentCountryWeatherObj.name = json[0].local_names.en;
        currentCountryWeatherObj.country = json[0].country;
        currentCountryWeatherObj.lat = json[0].lat;
        currentCountryWeatherObj.lon = json[0].lon;
    }
    
    buttonSearch.addEventListener('click', function(){
        const city = getCity(); 
        
        getGeocodingAPI(city);
    })
    
})();