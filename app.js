const request = require('request')
const api = require('./util/constants')

const url = api.API_CURRENT_WEATHER + "&query=37.8267,-122.4233"

request({ url: url, json: true }, (error, response) => {

    if (error) {
        console.log('Unable to connect to weather service!')
    } else if(response.body.error) {
        console.log('Unable to find location!')
    } else {
        console.log(response.body)
    }

})

//Geocoding

request({ url: api.API_MAPBOX_GEO, json: true }, (error, response) => {

    if (error) {
        console.log('Unable to connect to location services!')
    } else if(response.body.features.lenght === 0) {
        console.log('Unable to find location. Try another search.')
    } else {
        const lat = response.body.features[0].center[0]
        const long = response.body.features[0].center[1]
        console.log(lat, long)
    }

})

