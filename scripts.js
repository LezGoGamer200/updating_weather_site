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
const N_URL =
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e4157904f6cd4d478fb9ba52cf4e6672";
fetch(N_URL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const articles = jsObject.articles;
    const a1 = articles[0];
    const a2 = articles[1];
    const a3 = articles[2];
    const a4 = articles[3];
    const a5 = articles[4];
    /*console.log(a1);
    console.log(a2);
    console.log(a3);
    console.log(a4);
    console.log(a5);*/
    document.getElementById("a1_img").src = a1.urlToImage;
    document.getElementById("a1_head").textContent = a1.title;
    document.getElementById("a1_desc").textContent = a1.description;
    document.getElementById("a1_author").textContent = a1.author;
    if (a1.author === null) {
      document.getElementById("a1_author").textContent = "Not Stated";
    }
    document.getElementById("a1_cont").textContent = a1.content;
    if (a1.content === null) {
      document.getElementById("a1_cont").textContent = "Information not given.";
    }
    document.getElementById("a1_source").textContent = a1.source.name;
    document.getElementById("a1_source").href = a1.url;

    document.getElementById("a2_img").src = a2.urlToImage;
    document.getElementById("a2_head").textContent = a2.title;
    document.getElementById("a2_desc").textContent = a2.description;
    document.getElementById("a2_author").textContent = a2.author;
    if (a2.author === null) {
      document.getElementById("a2_author").textContent = "Not Stated";
    }
    document.getElementById("a2_cont").textContent = a2.content;
    if (a2.content === null) {
      document.getElementById("a2_cont").textContent = "Information not given.";
    }
    document.getElementById("a2_source").textContent = a2.source.name;
    document.getElementById("a2_source").href = a2.url;

    document.getElementById("a3_img").src = a3.urlToImage;
    document.getElementById("a3_head").textContent = a3.title;
    document.getElementById("a3_desc").textContent = a3.description;
    document.getElementById("a3_author").textContent = a3.author;
    if (a3.author === null) {
      document.getElementById("a3_author").textContent = "Not Stated";
    }
    document.getElementById("a3_cont").textContent = a3.content;
    if (a3.content === null) {
      document.getElementById("a3_cont").textContent = "Information not given.";
    }
    document.getElementById("a3_source").textContent = a3.source.name;
    document.getElementById("a3_source").href = a3.url;

    document.getElementById("a4_img").src = a4.urlToImage;
    document.getElementById("a4_head").textContent = a4.title;
    document.getElementById("a4_desc").textContent = a4.description;
    document.getElementById("a4_author").textContent = a4.author;
    if (a4.author === null) {
      document.getElementById("a4_author").textContent = "Not Stated";
    }
    document.getElementById("a4_cont").textContent = a4.content;
    if (a4.content === null) {
      document.getElementById("a4_cont").textContent = "Information not given.";
    }
    document.getElementById("a4_source").textContent = a4.source.name;
    document.getElementById("a4_source").href = a4.url;

    document.getElementById("a5_img").src = a5.urlToImage;
    document.getElementById("a5_head").textContent = a5.title;
    document.getElementById("a5_desc").textContent = a5.description;
    document.getElementById("a5_author").textContent = a5.author;
    if (a5.author === null) {
      document.getElementById("a5_author").textContent = "Not Stated";
    }
    document.getElementById("a5_cont").textContent = a5.content;
    if (a5.content === null) {
      document.getElementById("a5_cont").textContent = "Information not given.";
    }
    if (a1.source.id === null) {
      document.getElementById("a1_source").textContent =
        "Information not given.";
    }
    if (a2.source.id === null) {
      document.getElementById("a2_source").textContent =
        "Information not given.";
    }
    if (a3.source.id === null) {
      document.getElementById("a3_source").textContent =
        "Information not given.";
    }
    if (a4.source.id === null) {
      document.getElementById("a4_source").textContent =
        "Information not given.";
    }
    if (a5.source.id === null) {
      document.getElementById("a5_source").textContent =
        "Information not given.";
    }
  });

