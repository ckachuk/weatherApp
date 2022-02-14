const dom = (function(){
    const panelWeatherData = document.querySelector(".panel")
    const imgWeather = document.querySelector("img")

    const loadDataWeather = function(nameCity, country, temperature, description, humidity){
        const divPanel = document.querySelector(".panel");
        divPanel.style.display = 'block'
        const hName = document.querySelector('#hCity');
        const hCountry = document.querySelector('#hCountry');
        const hTemperature = document.querySelector('#hTemperature');
        const hDescription = document.querySelector('#hDescription');
        const hHumidity = document.querySelector('#hHumidity')

        hName.textContent = `City: ${nameCity}`;
        hCountry.textContent = `Country: ${country}`;
        hTemperature.textContent = `Temperature in °F: ${temperature}`;
        hDescription.textContent = `Description: ${description}`;
        hHumidity.textContent = `Humidity: ${humidity}`;
    }
    
    const createPanel = function(){
        const divPanel = document.querySelector(".panel");
        
        const hName = domH2("hCity", "");
        const hCountry = domH2("hCountry", "");
        const hTemperature = domH2("hTemperature", "");
        const hDescription = domH2("hDescription", "");
        const hHumidity = domH2("hHumidity", "")

    
        divPanel.appendChild(hName);
        divPanel.appendChild(hCountry);
        divPanel.appendChild(hTemperature);
        divPanel.appendChild(hDescription);
        divPanel.appendChild(hHumidity);
    }

    const errorHandling = function(err){
        panelWeatherData.style.display = "none";
        imgWeather.style.display = "none";

        const divError = document.querySelector('.divError');
        divError.style.display = 'flex'
        const pError = document.querySelector('.pError');

        pError.textContent = "Something is wrong... could you try something else?";
    }

    const showImage = function(url){
        
        const img = document.querySelector('img');
        img.style.display = "block"
        img.src = url;
    }
    
    return {createPanel, loadDataWeather, showImage, errorHandling}    
})();

const domH2 = function(nameID, content){
    const heading2 = document.createElement('h2');
    heading2.id = nameID;
    heading2.innerHTML = content;

    return heading2;
}

export default dom;