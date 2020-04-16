const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const publicDirectoryPath = express.static(path.join(__dirname, '../public'))
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Add hbs(handlebars) to express
app.set('view engine', 'hbs')

//set the path of views(templates)
app.set('views', viewPath)

//Set partials path
hbs.registerPartials(partialsPath)

//express.static function that takes the path of the folder we want to set as public
app.use(publicDirectoryPath)

app.get('', (req,res) => {
    res.render('index',{
        title: 'Weather App',
        name: "Jorge Elias"
    })
})

app.get('/about', (req,res) => {
    res.render('about',{
        title: "About Me",
        name: "Jorge Elias"
    })
})

app.get('/help', (req,res) => {
    res.render('help',{
        title: "Help",
        name: "Jorge Elias",
        helpText: "This is some helpful text."
    })
})

app.get('/weather', (req, res) => {
    res.send('<h1> Weather </h1>')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})