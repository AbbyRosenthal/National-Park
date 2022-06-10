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
            displayYellowstoneWeather(data);
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

function getYellowstoneAddress() {
    var addressApi = "https://developer.nps.gov/api/v1/visitorcenters?parkCode=yell&api_key=lcjncgJosjdbFjuEiis696LrCxnEgC7HVgdWIb6V"
    fetch(addressApi).then(function (response) {
        response.json().then(function (data) {
            console.log(data)
            displayYellowstoneAddress(data)
        })
    })
}

function displayYellowstoneAddress(data) {
    var visitorCenter = document.getElementById("visitor-center")
    var i = 0;
    var addressLineOne = data.data[i].addresses[i].line1
    var postalCode = data.data[i].addresses[i].postalCode
    var stateCode = data.data[i].addresses[i].stateCode
    console.log(addressLineOne, postalCode, stateCode)
    var addressDiv = document.createElement("div")
    var heading = document.createElement("h3")
    heading.innerHTML = " The Yellowstone Visitor Center is located at: "
    var address = document.createElement("p")
    address.innerHTML = addressLineOne + " <br> " + stateCode + " " + postalCode
    addressDiv.append(heading, address)
    visitorCenter.appendChild(addressDiv)
}

yellowstoneInfoBtn.addEventListener("click", getYellowstoneWeather)


//Yosemite Button

var yosemiteInfoBtn = document.getElementById("yosemiteConfirm")

var getYosemiteWeather = function () {
    lat = 37.8651;
    lon = -119.5383;
    var weatherApi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&units=imperial&appid=974e7f7c498a1d90f5f12aeb4fe7e9e2";
    var response = fetch(weatherApi)

    fetch(weatherApi).then(function (response) {
        response.json().then(function (data) {
            console.log(data)
            displayYosemiteWeather(data)
        })
    })
}

function displayYosemiteWeather(data) {
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

function getYosemiteAddress() {
    console.log("running")
    //RETURNS AN EMPTY ADDRESS ARRAY = HARD CODED THE ADDRESS IN FOR THIS ONE
    var addressApi = "https://developer.nps.gov/api/v1/visitorcenters?parkCode=yose&api_key=lcjncgJosjdbFjuEiis696LrCxnEgC7HVgdWIb6V"
    fetch(addressApi).then(function (response) {
        response.json().then(function (data) {
            console.log(data)
            displayYosemiteAddress(data)
        })
    })
}


function displayYosemiteAddress(data) {
    var visitorCenter = document.getElementById("visitor-center")
    var addressDiv = document.createElement("div")
    var heading = document.createElement("h3")
    heading.innerHTML = " The Yosemite Visitor Center is located at: " + "<br>"
    var address = document.createElement("p")
    address.innerHTML = " 9035 Village Drive " + "<br>" + " CA 95389"
    addressDiv.append(heading, address)
    visitorCenter.appendChild(addressDiv)
}

yosemiteInfoBtn.addEventListener("click", getYosemiteWeather)

//Glacier Button

var glacierInfoBtn = document.getElementById("glacierConfirm")

var getGlacierWeather = function () {
    lat = 58.6658;
    lon = -136.9002;
    var weatherApi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&units=imperial&appid=974e7f7c498a1d90f5f12aeb4fe7e9e2";
    var response = fetch(weatherApi)

    fetch(weatherApi).then(function (response) {
        response.json().then(function (data) {
            console.log(data)
            displayGlacierWeather(data)
        })
    })
}

function displayGlacierWeather(data) {
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

function getGlacierAddress() {
    var addressApi = "https://developer.nps.gov/api/v1/visitorcenters?parkCode=glac&api_key=lcjncgJosjdbFjuEiis696LrCxnEgC7HVgdWIb6V"
    fetch(addressApi).then(function (response) {
        response.json().then(function (data) {
            console.log(data)
            displayGlacierAddress(data)
        })
    })
}

function displayGlacierAddress(data) {
    var visitorCenter = document.getElementById("visitor-center")
    var i = 0;
    var addressLineOne = data.data[i].addresses[i].line1
    var postalCode = data.data[i].addresses[i].postalCode
    var stateCode = data.data[i].addresses[i].stateCode
    console.log(addressLineOne, postalCode, stateCode)
    var addressDiv = document.createElement("div")
    var heading = document.createElement("h3")
    heading.innerHTML = " The Glacier Visitor Center is located at: "
    var address = document.createElement("p")
    address.innerHTML = addressLineOne + " <br> " + stateCode + " " + postalCode
    addressDiv.append(heading, address)
    visitorCenter.appendChild(addressDiv)
}

glacierInfoBtn.addEventListener("click", getGlacierWeather)

//Grand Canyon Button

var grandCanyonInfoBtn = document.getElementById("grandCanyonConfirm")

var getGrandCanyonWeather = function () {
    lat = 36.0544;
    lon = -112.1401;
    var weatherApi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&units=imperial&appid=974e7f7c498a1d90f5f12aeb4fe7e9e2";
    var response = fetch(weatherApi)

    fetch(weatherApi).then(function (response) {
        response.json().then(function (data) {
            console.log(data)
            displayGrandCanyonWeather(data)
        })
    })
}

function displayGrandCanyonWeather(data) {
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
function getGrandCanyonAddress() {
    var addressApi = "https://developer.nps.gov/api/v1/visitorcenters?parkCode=grca&api_key=lcjncgJosjdbFjuEiis696LrCxnEgC7HVgdWIb6V"
    fetch(addressApi).then(function (response) {
        response.json().then(function (data) {
            console.log(data)
            displayGrandCanyonAddress(data)
        })
    })
}

function displayGrandCanyonAddress(data) {
    var visitorCenter = document.getElementById("visitor-center")
    var i = 0;
    var addressLineOne = data.data[i].addresses[i].line1
    var postalCode = data.data[i].addresses[i].postalCode
    var stateCode = data.data[i].addresses[i].stateCode
    console.log(addressLineOne, postalCode, stateCode)
    var addressDiv = document.createElement("div")
    var heading = document.createElement("h3")
    heading.innerHTML = " The Grand Canyon Visitor Center is located at: "
    var address = document.createElement("p")
    address.innerHTML = addressLineOne + " <br> " + stateCode + " " + postalCode
    addressDiv.append(heading, address)
    visitorCenter.appendChild(addressDiv)
}

grandCanyonInfoBtn.addEventListener("click", getGrandCanyonWeather)

//Zion Button

var zionInfoBtn = document.getElementById("zionConfirm")

var getZionWeather = function () {
    lat = 37.2982;
    lon = -113.0263;
    var weatherApi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&units=imperial&appid=974e7f7c498a1d90f5f12aeb4fe7e9e2";
    var response = fetch(weatherApi)

    fetch(weatherApi).then(function (response) {
        response.json().then(function (data) {
            console.log(data)
            displayZionWeather(data)
        })
    })
}

function displayZionWeather(data) {
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

function getZionAddress() {
    var addressApi = "https://developer.nps.gov/api/v1/visitorcenters?parkCode=zion&api_key=lcjncgJosjdbFjuEiis696LrCxnEgC7HVgdWIb6V"
    fetch(addressApi).then(function (response) {
        response.json().then(function (data) {
            console.log(data)
            displayZionAddress(data)
        })
    })
}

function displayZionAddress(data) {
    var visitorCenter = document.getElementById("visitor-center")
    var i = 0;
    var addressLineOne = data.data[2].addresses[i].line1
    var postalCode = data.data[2].addresses[i].postalCode
    var stateCode = data.data[2].addresses[i].stateCode
    console.log(addressLineOne, postalCode, stateCode)
    var addressDiv = document.createElement("div")
    var heading = document.createElement("h3")
    heading.innerHTML = " The Zion Visitor Center is located at: "
    var address = document.createElement("p")
    address.innerHTML = addressLineOne + " <br> " + stateCode + " " + postalCode
    addressDiv.append(heading, address)
    visitorCenter.appendChild(addressDiv)
}

zionInfoBtn.addEventListener("click", getZionWeather)