const url = "https://api.openweathermap.org/data/2.5/forecast?lat=20.5000&lon=-86.9500&appid=b409ee506ffe2f7f43e8a343d4018ab0&units=metric";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherData) {
    // Display current temperature
    document.getElementById("currentTemp").textContent = weatherData.list[0].main.temp.toFixed(1);

    // Display current humidity
    document.getElementById("currentHumidity").textContent = weatherData.list[0].main.humidity;

    // Display next day's forecasted temperature at 15:00
    document.getElementById("nextDayTemp").textContent = weatherData.list[1].main.temp_max.toFixed(1);

    // Display weather condition
    document.getElementById("weatherMain").textContent = titleCase(weatherData.list[0].weather[0].main);
    document.getElementById("weatherDescription").textContent = weatherData.list[0].weather[0].description;

    // Set weather icon
    const iconCode = weatherData.list[0].weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
    document.getElementById("weatherIcon").src = iconUrl;
}

function titleCase(desc) {
    return desc.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });
}
