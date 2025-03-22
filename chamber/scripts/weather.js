const apiKey = "2a23647e7e985f85710ea31426c79fea";
const city = "Manila";
const country = "PH";

const weatherContainer = document.getElementById("weather-container");

async function fetchWeather() {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${apiKey}&units=metric`
        );
        if (!response.ok) throw new Error("Weather data not found");

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error("Weather fetch error:", error);
        weatherContainer.innerHTML = "<p style='color:red;'>Failed to load weather data.</p>";
    }
}

function displayWeather(data) {
    const today = data.list[0]; // Current weather
    const forecast = data.list.filter((item, index) => index % 8 === 0).slice(1, 4); // Next 3 days

    weatherContainer.innerHTML = `
        <p><strong>Location:</strong> ${data.city.name}, ${data.city.country}</p>
        <p><strong>Temperature:</strong> ${Math.round(today.main.temp)}°C</p>
        <p><strong>Conditions:</strong> ${today.weather[0].description}</p>
        <h3>3-Day Forecast:</h3>
        <div class="forecast">
            ${forecast.map(day => `
                <div class="forecast-item">
                    <p>${new Date(day.dt_txt).toLocaleDateString()}</p>
                    <p>${Math.round(day.main.temp)}°C</p>
                    <p>${day.weather[0].description}</p>
                </div>
            `).join('')}
        </div>
    `;
}

// Fetch weather on page load
fetchWeather();
