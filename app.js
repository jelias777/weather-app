const request = require('request')

const url = 'http://api.openweathermap.org/data/2.5/weather?q=Mexico&units=metric&appid=6c9e958f6df5e873ccf34552a200e988'

request({ url: url }, (error, response) => {

    const data = JSON.parse(response.body)

    console.log(data)

})