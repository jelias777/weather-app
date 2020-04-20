showPosition = (position) => {

    const image = document.querySelector('#weather-icon')
    const degrees = document.querySelector('#degrees')
    const city = document.querySelector('#location')
    const humidity = document.querySelector('#humidity')
    const wind = document.querySelector('#wind')
    const forecast = document.querySelector('#forecast')

    const url ='http://localhost:3000/weather/location?latitude=' + position.coords.latitude + '&longitude=' + position.coords.longitude

    fetch(url).then((response) => {

        response.json().then((data) => {

            if(data.error) {
                alert(data.error)
            } else {
                document.getElementById("degrees").style.visibility = "visible"

                image.src = data.body.current.weather_icons[0]
                degrees.textContent = data.body.current.temperature
                city.textContent = data.body.location.region + ", " + data.body.location.country
                humidity.textContent = 'Humidity: ' + data.body.current.humidity + '%'
                wind.textContent = 'Wind: ' + data.body.current.wind_speed + ' km/h'
                forecast.textContent = data.body.current.weather_descriptions[0] + '. It is currently ' + data.body.current.temperature  + ' degress out. There is a ' + data.body.current.precip + '% chance of rain.'
            }
        })

    })
}

getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition)
    } else {
      alert('Geolocation is not supported by this browser.')
    }
}

getLocation()
