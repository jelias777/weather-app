const API_KEY = ""

const API_BASE_URL = "http://api.weatherstack.com/"
const API_CURRENT_WEATHER = API_BASE_URL + "current?access_key=" + API_KEY
const API_HISTORICAL_WEATHER = API_BASE_URL + "historical?access_key=" + API_KEY
const API_WEATHER_FORECAST = API_BASE_URL + "forecast?access_key=" + API_KEY

module.exports = {
    API_BASE_URL: API_BASE_URL,
    API_CURRENT_WEATHER: API_CURRENT_WEATHER,
    API_HISTORICAL_WEATHER: API_HISTORICAL_WEATHER,
    API_WEATHER_FORECAST: API_WEATHER_FORECAST 
}