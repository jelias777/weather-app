const PropertiesReader = require('properties-reader');
const path = require('path')

const propertiesPath = path.join(__dirname, '../../app.properties')

const prop = PropertiesReader(propertiesPath);

/*gets property from app.properties
You can also export this function using module.exports*/
getProperty = (pty) => { 
    return prop.get(pty) 
}

//call the getProperty method for each property
const PORT = getProperty('server.port')
const WEATHERSTACK_KEY = getProperty('weatherstack.key')
const MAPBOX_KEY = getProperty('mapbox.key')
const WEATHERSTACK_API = getProperty('weatherstack.api')
const MAPBOX_GEO_PLACES_API = getProperty('mapbox.geo.place.api')

const CURRENT_WEATHER_API = WEATHERSTACK_API + "current?access_key=" + WEATHERSTACK_KEY
const HISTORICAL_WEATHER_API = WEATHERSTACK_API + "historical?access_key=" + WEATHERSTACK_KEY
const WEATHER_FORECAST_API = WEATHERSTACK_API + "forecast?access_key=" + WEATHERSTACK_KEY

module.exports = {
    PORT:PORT,
    CURRENT_WEATHER_API: CURRENT_WEATHER_API,
    HISTORICAL_WEATHER_API: HISTORICAL_WEATHER_API,
    WEATHER_FORECAST_API: WEATHER_FORECAST_API,
    MAPBOX_GEO_PLACES_API: MAPBOX_GEO_PLACES_API,
    MAPBOX_KEY: MAPBOX_KEY
}