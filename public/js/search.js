searchLocation = ( location , callback) => {

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {

        response.json().then((data) => {
            callback(data)
        })
    })
}

const weatherForm = document.querySelector('#search-btn')
const searchInput = document.querySelector('input')

const image = document.querySelector('#weather-icon')
const degrees = document.querySelector('#degrees')
const city = document.querySelector('#location')
const humidity = document.querySelector('#humidity')
const wind = document.querySelector('#wind')
const forecast = document.querySelector('#forecast')

//if not type button change click for submit as eventlistener
//e = event
weatherForm.addEventListener('click', (e) => {
    
    //prevent reload browser for submit action
    //e.preventDefault()

    const location = searchInput.value

    searchLocation( location, (data) => {

        if(data.error) {
            alert(data.error)
        } else {
            image.src = data.body.current.weather_icons[0]
            degrees.textContent = data.body.current.temperature
            city.textContent = "City: " + data.location
            humidity.textContent = 'Humidity: ' + data.body.current.humidity + '%'
            wind.textContent = 'Wind: ' + data.body.current.wind_speed + ' km/h'
            forecast.textContent = data.body.current.weather_descriptions[0] + '. It is currently ' + data.body.current.temperature  + ' degress out. There is a ' + data.body.current.precip + '% chance of rain.'
        }

    })

})
