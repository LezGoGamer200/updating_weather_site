const URL =
  "https://api.openweathermap.org/data/2.5/weather?lat=40.5308&lon=-112.2983&appid=cff8038d53ee960ae76f626ef3d64833&units=imperial";
let currentDate = new Date();
const options = {
  weekday: "long", // Full weekday name (e.g., "Wednesday")
  month: "long", // Full month name (e.g., "November")
  day: "numeric", // Day of the month (e.g., "12")
  year: "numeric", // Full year (e.g., "2025")
};
fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let weather = jsObject.weather;
    let weather_main = jsObject.main;
    let weather_wind = jsObject.wind;
    document.getElementById("dayTitle").textContent =
      currentDate.toLocaleDateString("eu-US", options);
    document.getElementById("Date").textContent =
      currentDate.toLocaleDateString();
    document.getElementById("data_high").innerHTML = weather_main.temp_max;
    document.getElementById("data_low").innerHTML = weather_main.temp_min;
    document.getElementById("data_current").innerHTML = weather_main.temp;
    document.getElementById("data_feels_like").innerHTML =
      weather_main.feels_like;
    document.getElementById("data_humidity").innerHTML = weather_main.humidity;
    document.getElementById("wind_data_deg").textContent = weather_wind.deg;
    document.getElementById("wind_data_speed").textContent = weather_wind.speed;
    document.getElementById("wind_data_gust").textContent = weather_wind.gust;
    document.getElementById("weatherIcon").alt = weather[0].description;
    document.getElementById("weather-desc").textContent =
      weather[0].description;
    document.getElementById(
      "weatherIcon"
    ).src = `https://openweathermap.org/img/wn/${weather[0].icon}.png`;
  });
