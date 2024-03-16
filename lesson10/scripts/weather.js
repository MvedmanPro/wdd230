

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.66&appid=b409ee506ffe2f7f43e8a343d4018ab0&units=imperial" 
//const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=b865574f47333eba1210cb2956e0e422&units=imperial"
async function apiFetch() {
    try {
        const response = await fetch(url)
        if (response.ok){
            const data = await response.json()
            //displayResults(data)
            displayResults(data);
        } else {
            throw Error (await response.text())
        }
    } catch (error) {
        console.log(error)
    }
}

apiFetch();
