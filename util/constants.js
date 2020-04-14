const WEATHERSTACK_KEY = ""
const MAPBOX_KEY = ""

const API_BASE_URL = "http://api.weatherstack.com/"
const API_CURRENT_WEATHER = API_BASE_URL + "current?access_key=" + WEATHERSTACK_KEY
const API_HISTORICAL_WEATHER = API_BASE_URL + "historical?access_key=" + WEATHERSTACK_KEY
const API_WEATHER_FORECAST = API_BASE_URL + "forecast?access_key=" + WEATHERSTACK_KEY

const API_MAPBOX_GEO = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=" + MAPBOX_KEY + "&limit=1"

module.exports = {
    API_BASE_URL: API_BASE_URL,
    API_CURRENT_WEATHER: API_CURRENT_WEATHER,
    API_HISTORICAL_WEATHER: API_HISTORICAL_WEATHER,
    API_WEATHER_FORECAST: API_WEATHER_FORECAST,
    API_MAPBOX_GEO: API_MAPBOX_GEO 
}