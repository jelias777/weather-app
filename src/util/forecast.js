const request = require('request')
const prop = require('./properties')

const forecast = (latitude, longitude, callback) => {

    const url = prop.CURRENT_WEATHER_API+ "&query=" + latitude + "," + longitude + "&units=m"

    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback('Unable to connect to weather service!')
        } else if(body.error) {
            callback('Unable to find location!')
        } else {
            callback(undefined, body.current.weather_descriptions + '. It is currently ' + body.current.temperature  + ' degress out. There is a ' + body.current.precip + '% chance of rain.')
        }

    })
}

const location = (latitude, longitude, callback) => {

    const url = prop.CURRENT_WEATHER_API+ "&query=" + latitude + "," + longitude + "&units=m"

    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback('Unable to connect to weather service!')
        } else if(body.error) {
            callback('Unable to find location!')
        } else {
            callback(undefined, body)
        }

    })
}

module.exports = { forecast, location }