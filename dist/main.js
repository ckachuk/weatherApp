/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dom = (function(){\r\n    const displayDataWeather = function(){\r\n\r\n    }\r\n    \r\n    const loadDataWeather = function(nameCity, country, temperature, description){\r\n        const hName = document.querySelector('#hCity');\r\n        const hCountry = document.querySelector('#hCountry');\r\n        const hTemperature = document.querySelector('#hTemperature');\r\n        const hDescription = document.querySelector('#hDescription');\r\n\r\n        hName.textContent = `City: ${nameCity}`;\r\n        hCountry.textContent = `Country: ${country}`;\r\n        hTemperature.textContent = `Temperature: ${temperature}`;\r\n        hDescription.textContent = `Description: ${description}`;\r\n    }\r\n    \r\n    const createPanel = function(){\r\n        const main = document.querySelector(\".main\");\r\n        const divPanel = document.createElement(\"div\");\r\n        const hName = domH2(\"hCity\", \"\");\r\n        const hCountry = domH2(\"hCountry\", \"\");\r\n        const hTemperature = domH2(\"hTemperature\", \"\");\r\n        const hDescription = domH2(\"hDescription\", \"\")\r\n\r\n    \r\n        main.appendChild(divPanel);\r\n        divPanel.appendChild(hName);\r\n        divPanel.appendChild(hCountry);\r\n        divPanel.appendChild(hTemperature);\r\n        divPanel.appendChild(hDescription);\r\n    }\r\n    \r\n    return {createPanel, loadDataWeather}    \r\n})();\r\n\r\nconst domH2 = function(nameID, content){\r\n    const heading2 = document.createElement('h2');\r\n    heading2.id = nameID;\r\n    heading2.innerHTML = content;\r\n\r\n    return heading2;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n//# sourceURL=webpack://demo/./src/dom.js?");

/***/ }),

/***/ "./src/weatherApp.js":
/*!***************************!*\
  !*** ./src/weatherApp.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n\r\nconst currentCountryWeather = new Object();\r\n\r\n\r\n(function weatherApp(){\r\n    \r\n    const buttonSearch = document.querySelector('.searchButton'); \r\n    const weatherAPIKey = \"d907fb01c4eb75b5f79e3814084f4a71\";\r\n    const giphyAPIKey = \"9nKZqJYnvDui5Vyrrth50XnAQTkL9O0S\";\r\n\r\n\r\n    const getCity = function(){\r\n        const textboxCity = document.querySelector('#searchCity');\r\n        \r\n        return textboxCity.value;        \r\n    }\r\n\r\n    const getGeocodingAPI = async function(city){\r\n        try{\r\n            const geocodingAPI = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${weatherAPIKey}`, {mode:'cors'})\r\n            const response = await geocodingAPI.json();\r\n           return response;\r\n\r\n        }catch(err){\r\n            console.log(err)\r\n        }\r\n    }\r\n\r\n    const getWeatherAPI = async function(){\r\n        try{  \r\n            const getWeatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${currentCountryWeather.lat}&lon=${currentCountryWeather.lon}&appid=${weatherAPIKey}`, {mode:'cors'})\r\n            const response = await getWeatherData.json();\r\n\r\n            return response;\r\n           \r\n        }catch(err){\r\n            console.log(err);\r\n        }\r\n     \r\n    }\r\n\r\n    const  getGiphyWeather = async function(){\r\n        try{\r\n            const getGiphyURL = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${giphyAPIKey}&s=sunny`, {mode: 'cors'})\r\n            const giphyData = await getGiphyURL.json();\r\n            \r\n            return giphyData;\r\n        \r\n        }catch(err){\r\n            console.log(err);\r\n        }\r\n    }\r\n\r\n    const weatherRequest = async function(){\r\n        const geocodingData = await getGeocodingAPI(getCity());\r\n        processGeocodingJson(geocodingData);\r\n\r\n        const weatherData = await getWeatherAPI();\r\n        processWeatherJson(weatherData);\r\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadDataWeather(currentCountryWeather.name, currentCountryWeather.country, currentCountryWeather.main.temp, currentCountryWeather.weatherDescription);\r\n\r\n        const giphyData = await getGiphyWeather();\r\n        showGiphy(giphyData.data.images.original.url);\r\n    }\r\n\r\n    const processGeocodingJson = function(json){\r\n        currentCountryWeather.country = json[0].country;\r\n        currentCountryWeather.lat = json[0].lat;\r\n        currentCountryWeather.lon = json[0].lon;\r\n        currentCountryWeather.name = json[0].name;\r\n    }\r\n\r\n    const processWeatherJson = function(json){\r\n        currentCountryWeather.main = json.main;\r\n        currentCountryWeather.weatherDescription = json.weather[0].description;\r\n    }\r\n\r\n    const showGiphy = function(url){\r\n        const img = document.querySelector('img');\r\n\r\n        img.src = url;\r\n    }\r\n    \r\n    buttonSearch.addEventListener('click', function(){\r\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createPanel();\r\n        weatherRequest();\r\n         \r\n    })\r\n    \r\n})();\n\n//# sourceURL=webpack://demo/./src/weatherApp.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/weatherApp.js");
/******/ 	
/******/ })()
;