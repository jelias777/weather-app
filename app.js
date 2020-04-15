const geocode = require('./util/geocode')
const forecast = require('./util/forecast')

geocode('Pachuca', (error, data) => {

    if(error) {
        return console.log('Error: ', error)
    }

    forecast( data.latitude, data.longitude, (error, forecastData) => {

        if(error) {
            return console.log('Error: ', error)
        }

        console.log(data.location)
        console.log(forecastData)
    })
})