const dom = (function(){
    const displayDataWeather = function(){

    }
    
    const loadDataWeather = function(nameCity, country, temperature, description, humidity){
        const hName = document.querySelector('#hCity');
        const hCountry = document.querySelector('#hCountry');
        const hTemperature = document.querySelector('#hTemperature');
        const hDescription = document.querySelector('#hDescription');

        hName.textContent = `City: ${nameCity}`;
        hCountry.textContent = `Country: ${country}`;
        hTemperature.textContent = `Temperature: ${temperature}`;
        hDescription.textContent = `Description: ${description}`;
        hHumidity.textContent = `Humidity: ${humidity}`;
    }
    
    const createPanel = function(){
        const main = document.querySelector(".main");
        const divPanel = document.createElement("div");
        divPanel.className = 'divPanel'
        const hName = domH2("hCity", "");
        const hCountry = domH2("hCountry", "");
        const hTemperature = domH2("hTemperature", "");
        const hDescription = domH2("hDescription", "");
        const hHumidity = domH2("hHumidity", "")

    
        main.appendChild(divPanel);
        divPanel.appendChild(hName);
        divPanel.appendChild(hCountry);
        divPanel.appendChild(hTemperature);
        divPanel.appendChild(hDescription);
        divPanel.appendChild(hHumidity);
    }

    const showGiphy = function(url){
        
        const img = document.querySelector('img');
        img.style.display = "block"
        img.src = url;
    }
    
    return {createPanel, loadDataWeather, showGiphy}    
})();

const domH2 = function(nameID, content){
    const heading2 = document.createElement('h2');
    heading2.id = nameID;
    heading2.innerHTML = content;

    return heading2;
}

export default dom;