const request = require('request')
const prop = require('./properties')

const geocode = (address, callback) => {

    const url= prop.MAPBOX_GEO_PLACES_API + encodeURIComponent(address) + ".json?access_token=" + prop.MAPBOX_KEY + "&limit=1"

    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback('Unable to connect to location services!')
        } else if(body.features.length === 0) {
            callback('Unable to find location. Try another search.')
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }

    })

}

module.exports = geocode