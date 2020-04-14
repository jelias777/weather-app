const request = require('request')
const api = require('./util/constants')

const url = api.API_CURRENT_WEATHER + "&query=37.8267,-122.4233"

request({ url: url, json: true }, (error, response) => {

    console.log(response.body)

})

request({ url: api.API_MAPBOX_GEO, json: true }, (error, response) => {

    console.log(response.body)

})

//Geocoding