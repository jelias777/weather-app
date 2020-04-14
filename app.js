const geocode = require('./util/geocode')

/*const url = api.API_CURRENT_WEATHER + "&query=37.8267,-122.4233"

request({ url: url, json: true }, (error, response) => {

    if (error) {
        console.log('Unable to connect to weather service!')
    } else if(response.body.error) {
        console.log('Unable to find location!')
    } else {
        console.log(response.body)
    }

})*/

geocode('Querétaro', (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
})