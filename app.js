const geocode = require('./util/geocode')
const forecast = require('./util/forecast')

const location = process.argv[2]

if(!location) {

    console.log('Please provide a location')

} else {

    geocode(location, (error, data) => {

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
}

