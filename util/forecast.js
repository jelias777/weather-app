const request = require('request')
const api = require('./constants')

const forecast = (latitude, longitude, callback) => {

    const url = api.API_CURRENT_WEATHER + "&query=" + latitude + "," + longitude + "&units=m"

    request({ url: url, json: true }, (error, response) => {

        if (error) {
            callback('Unable to connect to weather service!')
        } else if(response.body.error) {
            callback('Unable to find location!')
        } else {
            callback(undefined, response.body.current.weather_descriptions + '. It is currently ' + response.body.current.temperature  + ' degress out. There is a ' + response.body.current.precip + '% chance of rain.')
            //callback(undefined, response.body)
        }

    })
}

module.exports = forecast