const currentTemp = document.querySelector("#temperature");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const wSpeed = document.querySelector("#windSpeed")

const url = "https://api.openweathermap.org/data/2.5/weather?lat=46.48&lon=30.74&appid=b409ee506ffe2f7f43e8a343d4018ab0&units=metric"

async function apiFetch() {
    try {
        const response = await fetch(url)
        if (response.ok){
            const data = await response.json()
            displayResults(data);
        } else {
            throw Error (await response.text())
        }
    } catch (error) {
        console.log(error)
    }
}

apiFetch();

function displayResults(data) {
    const temp = Math.round(data.main.temp)
    currentTemp.innerHTML = `${temp}&deg;C`
    const wind = data.wind.speed
    wSpeed.innerHTML = `${wind}`
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    let desc = data.weather[0].description
    let capDesc = titleCase(desc)

    weatherIcon.setAttribute("src", iconSrc)
    weatherIcon.setAttribute("alt", "Weather icon")
    windChill(temp.textContent, wind.textContent)
    captionDesc.textContent = capDesc

}

function titleCase(desc) {
    return desc.replace(/\b\w/g, function (char) {
        return char.toUpperCase()
    })
}

function windChill(temperature, windSpeed) {
    const chill = document.querySelector("#windChill");
    if (temperature <= 50 && windSpeed > 3) {
        // Convert wind speed to km/h (from m/s)
        const windKmH = windSpeed * 3.6;

        // Calculate wind chill in Celsius
        const calcWindChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(windKmH, 0.16) + 0.3965 * Math.pow(windKmH, 0.16);

        return chill.innerHTML = `${calcWindChill.toFixed(0)}°C`;
    } else {
        document.getElementById("windP").textContent = "";
        return chill.textContent = " and no wind chill at the moment.";
    }
}


async function forecastData() {
    const urlForecast = "https://api.openweathermap.org/data/2.5/forecast?lat=49.75&lon=6.66&appid=b409ee506ffe2f7f43e8a343d4018ab0&units=metric"

    try {
        const response = await fetch(urlForecast)
        if (response.ok) {
            const data = await response.json()
            displayForecast(data)
        } else {
            throw Error(response.text())
        }
    } catch (error) {
        console.log(error)
    }
}
forecastData()

function displayForecast(data) {
    // day 1
    const day1Date = document.querySelector("#day1D")
    const day1Temp = document.querySelector("#day1T")
    const day1Desc = document.querySelector("#day1Desc")
    
    const day1 = data.list[0].dt * 1000
    const dateObj = new Date(day1)
    const formatDate = dateObj.toDateString()
    
    const tempRound = Math.round(data.list[0].main.temp)
    const desc = data.list[0].weather[0].description
    const capDesc = titleCase(desc)
    
    day1Date.textContent = formatDate
    day1Temp.innerHTML = `${tempRound}&deg;C`
    day1Desc.textContent = capDesc

    // day 2
    const day2Date = document.querySelector("#day2D")
    const day2Temp = document.querySelector("#day2T")
    const day2Desc = document.querySelector("#day2Desc")

    const dtSec2 = data.list[8].dt
    const dateObj2 = new Date(dtSec2*1000)
    const formatDate2 = dateObj2.toDateString()

    const tempRound2 = Math.round(data.list[8].main.temp)
    const desc2 = data.list[8].weather[0].description
    const capDesc2 = titleCase(desc2)
    
    day2Date.textContent = formatDate2
    day2Temp.innerHTML = `${tempRound2}&deg;C`
    day2Desc.textContent = capDesc2

    // day 3
    const day3Date = document.querySelector("#day3D")
    const day3Temp = document.querySelector("#day3T")
    const day3Desc = document.querySelector("#day3Desc")
    
    const dtSec3 = data.list[16].dt
    const dateObj3 = new Date(dtSec3*1000)
    const formatDate3 = dateObj3.toDateString()
    
    const tempRound3 = Math.round(data.list[16].main.temp)
    const desc3 = data.list[16].weather[0].description
    const capDesc3 = titleCase(desc3)
    
    day3Date.textContent = formatDate3
    day3Temp.innerHTML = `${tempRound3}&deg;C`
    day3Desc.textContent = capDesc3
}