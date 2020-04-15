const geocode = require('./util/geocode')
const forecast = require('./util/forecast')

const https = require('https')
const api = require('./util/constants')

const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=" + api.MAPBOX_KEY + "&limit=1"

const request = https.request(url, (response) => {

    let data = ''

    //register a handler
    response.on('data', (chunk) => {
        data = data + chunk.toString()
        //console.log(chunk)
    })
    
    //register a handler
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    }) 

})

request.on('error', (error) => {
    console.log('An error ', error)
})

request.end()

const location = process.argv[2]

if(!location) {

    console.log('Please provide a location')

} else {

    geocode(location, (error, {latitude, longitude, location}) => {

        if(error) {
            return console.log('Error: ', error)
        }
    
        forecast( latitude, longitude, (error, forecastData) => {
    
            if(error) {
                return console.log('Error: ', error)
            }
    
            console.log(location)
            console.log(forecastData)
        })
    })
}

