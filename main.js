// function for current date
let currentDate = document.getElementById("currentDate");
function formatDate() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return now.toLocaleDateString("en-US", options);
}
console.log(formatDate());
// call the current date function
currentDate.textContent = formatDate();

let container = document.getElementById("searchBtn");
const API_KEY = "efe440c66edd0a3906be71c8be563536";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

function getWeather() {
  const cityInput = document.getElementById("cityInput").value;
  const url = `${API_URL}?q=${cityInput}&appid=${API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = data;
      console.log(weather);
      document.getElementById("cityName").textContent = `${data.name}`;
      document.getElementById(
        "weatherIcon"
      ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`;
      document.getElementById("temperature").textContent = `${Math.round(
        data.main.temp - 273.15
      )}°C`;
      document.getElementById(
        "description"
      ).textContent = `${data.weather[0].description}`;
      document.getElementById(
        "windSpeed"
      ).textContent = `${data.wind.speed}m/s`;
      document.getElementById(
        "humidity"
      ).textContent = `${data.main.humidity}%`;
      document.getElementById("visibility").textContent = `${(
        data.visibility / 1000
      ).toFixed(1)} km`;
      document.getElementById("feelsLike").textContent -
        `${Math.round(data.main.feels_like - 302.63)}°C`;
    })

    .catch((error) => {
      console.error("Error fetching weather data:", error);
      error.style.display = "block";
    });
}

// function to popular state
// Select all buttons with the class "city-btn"
const cityButtons = document.querySelectorAll(".city-btn");
const apiKey = "efe440c66edd0a3906be71c8be563536";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

// Add click event listener to each
cityButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const city = button.textContent.trim(); // get city name from button label
    fetchWeather(city);
  });
});

function fetchWeather(city) {
  const url = `${apiUrl}?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const we = data;
      console.log(we);
      document.getElementById("cityName").textContent = `${data.name}`;
      document.getElementById(
        "weatherIcon"
      ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`;
      document.getElementById("temperature").textContent = `${Math.round(
        data.main.temp - 273.15
      )}°C`;
      document.getElementById(
        "description"
      ).textContent = `${data.weather[0].description}`;
      document.getElementById(
        "windSpeed"
      ).textContent = `${data.wind.speed}m/s`;
      document.getElementById(
        "humidity"
      ).textContent = `${data.main.humidity}%`;
      document.getElementById("visibility").textContent = `${(
        data.visibility / 1000
      ).toFixed(1)} km`;
      document.getElementById("feelsLike").textContent = `${Math.round(
        data.main.feels_like - 273.15
      )}°C`;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      error.style.display = "block";
    });
}
// Function to control loading state and error message
function fetchWeather(city) {
  const spinner = document.getElementById("loading");
  const error = document.getElementById("error");
  const weatherContainer = document.getElementById("weatherDisplay");

  // Show spinner and hide everything else
  spinner.style.display = "block";
  error.style.display = "none";
  weatherContainer.style.display = "none";

  const url = `${apiUrl}?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      spinner.style.display = "none";
      weatherContainer.style.display = "block";

      document.getElementById("cityName").textContent = data.name;
      document.getElementById(
        "weatherIcon"
      ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`;
      document.getElementById("temperature").textContent = `${Math.round(
        data.main.temp - 273.15
      )}°C`;
      document.getElementById("description").textContent =
        data.weather[0].description;
      document.getElementById(
        "windSpeed"
      ).textContent = `${data.wind.speed} m/s`;
      document.getElementById(
        "humidity"
      ).textContent = `${data.main.humidity}%`;
      document.getElementById("visibility").textContent = `${(
        data.visibility / 1000
      ).toFixed(1)} km`;
      document.getElementById("feelsLike").textContent = `${Math.round(
        data.main.feels_like - 273.15
      )}°C`;
    })
    .catch((error) => {
      console.error("Error:", error);
      spinner.style.display = "none";
      error.style.display = "block";
    });
}

document.addEventListener("DOMContentLoaded", () => {
  fetchWeather("Lagos");
});
