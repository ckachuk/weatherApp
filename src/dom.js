const dom = (function(){
    const displayDataWeather = function(){

    }
    
    const loadDataWeather = function(nameCity, country, temperature, description){
        const hName = document.querySelector('#hCity');
        const hCountry = document.querySelector('#hCountry');
        const hTemperature = document.querySelector('#hTemperature');
        const hDescription = document.querySelector('#hDescription');

        hName.textContent = `City: ${nameCity}`;
        hCountry.textContent = `Country: ${country}`;
        hTemperature.textContent = `Temperature: ${temperature}`;
        hDescription.textContent = `Description: ${description}`;
    }
    
    const createPanel = function(){
        const main = document.querySelector(".main");
        const divPanel = document.createElement("div");
        const hName = domH2("hCity", "");
        const hCountry = domH2("hCountry", "");
        const hTemperature = domH2("hTemperature", "");
        const hDescription = domH2("hDescription", "")

    
        main.appendChild(divPanel);
        divPanel.appendChild(hName);
        divPanel.appendChild(hCountry);
        divPanel.appendChild(hTemperature);
        divPanel.appendChild(hDescription);
    }
    
    return {createPanel, loadDataWeather}    
})();

const domH2 = function(nameID, content){
    const heading2 = document.createElement('h2');
    heading2.id = nameID;
    heading2.innerHTML = content;

    return heading2;
}

export default dom;