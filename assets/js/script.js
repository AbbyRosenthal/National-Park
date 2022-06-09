//Yellowstone Button

var yellowstoneInfoBtn = document.getElementById("yellowstoneConfirm")


var getYellowstoneWeather = function () {
    lat = 44.4586;
    lon = -110.8292;
    var weatherApi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&units=imperial&appid=974e7f7c498a1d90f5f12aeb4fe7e9e2";
    var response = fetch(weatherApi)

    fetch(weatherApi).then(function (response) {
        response.json().then(function (data) {
            console.log(data)
            displayYellowstoneWeather(data)
        })
    })
}

function displayYellowstoneWeather(data) {
    var fiveDayTempDiv = document.getElementById("park-forecast")
    for (i = 0; i < 5; i++) {
        var date = data.daily[i].dt
        var humidity = data.daily[i].humidity
        var windSpeed = data.daily[i].wind_speed
        var temp = data.daily[i].temp.day
        var dayDiv = document.createElement("div")
        var dayDate = document.createElement("h3")
        dayDate.innerHTML = dayjs.unix(date).format('M/D/YYYY');
        var humiditiyEL = document.createElement("p")
        humiditiyEL.innerHTML = "Humidity: " + humidity + "%"
        var windSpeedEl = document.createElement("p")
        windSpeedEl.innerHTML = "Wind Speed: " + windSpeed + " mph "
        var tempEl = document.createElement("p")
        tempEl.innerHTML = "Temp: " + temp + " °F"
        var weatherIcon = document.createElement("img")
        var forecastIconUrl = "https://openweathermap.org/img/w/" + data.daily[i].weather[0].icon + ".png";
        weatherIcon.setAttribute("src", forecastIconUrl)
        var forecastIconDescription = data.daily[i].weather[0].description;
        dayDiv.append(dayDate, humiditiyEL, windSpeedEl, tempEl, forecastIconDescription, weatherIcon);
        fiveDayTempDiv.appendChild(dayDiv);
    }
}

yellowstoneInfoBtn.addEventListener("click", getYellowstoneWeather)