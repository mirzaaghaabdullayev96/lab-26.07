let info = document.getElementById("data-div");
let getWeatherbtn = document.getElementById("get-weather-btn");
let input = document.getElementById("input-id");

getWeatherbtn.addEventListener("click", function () {
  let city = input.value;
  if (city == "") {
    info.innerHTML = `<p> Please enter city name </p>`;
    return;
  }

  fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
    .then((city) => city.json())
    .then((citydata) => {
      if (citydata.results==undefined) {
        info.innerHTML = `<p> City not found </p>`;
        return;
      }

        fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${citydata.results[0].latitude}&longitude=${citydata.results[0].longitude}&current_weather=true&timezone=Europe/London`
        )
          .then((weather) => weather.json())
          .then((weatherInfo) => {
            info.innerHTML = `<h3>${city}</h3>
                  <p>Temperature: ${weatherInfo.current_weather.temperature} </p>
                  <p>Weather: ${weatherInfo.current_weather.weathercode}</p>
                  <p>Wind speed: ${weatherInfo.current_weather.windspeed} ${weatherInfo.current_weather_units.windspeed}</p>`;
          });
    });
});
