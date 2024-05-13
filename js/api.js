const api_key = 'f934dc3a3e22bd52b408d047f49324bc';

export const url = {
  //endpoint url
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
  },

  geocode(loca) {
    return `https://api.openweathermap.org/geo/1.0/direct?q=${loca}&limit=5`;
  },

  forecast(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric`;
  },
};

/**
 *
 * @param {string} url
 * @param {Function} callback
 */

export const fetchData = function (url, callback) {
  fetch(`${url}&appid=${api_key}`)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.log(error));
};

//구조분해할당
