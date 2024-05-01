const api_key = 'f934dc3a3e22bd52b408d047f49324bc';

export const urls = {
  //endpoint urls
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather
    lat=${lat}&lon=${lon}&units=matric`;
  },

  geocode(loca) {
    return `https://api.openweathermap.org/geo/1.0/direct?q=${loca}&limit=5`;
  },
};

const fetchData = function (url, callback) {
  fetch(`${url}&appid=${api_key}`)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.log(error));
};

fetchData(urls.geocode('london')),
  function (locations) {
    console.log(locations);
  };

//구조분해할당
