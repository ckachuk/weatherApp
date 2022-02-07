const dom = (function(){
    const displayDataWeather = function(){

    }
    
    const loadDataWeather = function(nameCity, country, temperature, description){
        
    }
    
    const createPanel = function(){
        const main = document.querySelector(".main");
        const divPanel = document.createElement("div");
        const hName = domH2("hCity", "City: ");
        const hCountry = domH2("hCountry", "Country: ");
        const hTemperature = domH2("hTemperature", "Temperature: ")
        const hDescription = domH2("hDescription", "Description: ")

    
        main.appendChild(divPanel);
        divPanel.appendChild(hCountry);
        divPanel.appendChild(hTemperature);
        divPanel.appendChild(hDescription);
    }
    
    return {createPanel}    
})();

const domH2 = function(nameID, content){
    const heading2 = document.createElement('h2');
    heading2.id = nameID;
    heading2.innerHTML = content;

    return heading2;
}

export default dom;