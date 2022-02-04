

(function weatherApp(){
    
    const buttonSearch = document.querySelector('.searchButton'); 
    const APIKey = "d907fb01c4eb75b5f79e3814084f4a71";



    const getCity = function(){
        const textboxCity = document.querySelector('#searchCity');
        
        return textboxCity.value;        
    }

    const weatherAPI = async function(city){
        try{
            const weatherRightNow = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIKey}`, {mode:'cors'})
            const response = await weatherRightNow.json();
           
            console.log(processDataJson(response));
        }catch(err){
            console.log(err)
        }
        
    }

    const processDataJson = function(json){
        const data = json[0].country
        return data;
    }
    
    buttonSearch.addEventListener('click', function(){
        const city = getCity(); 
        
        weatherAPI(city);
    })
    
})();