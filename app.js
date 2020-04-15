const geocode = require('./util/geocode')
const forecast = require('./util/forecast')

geocode('Querétaro', (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
})

forecast( -75.7088, 4.1545, (error,data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
})