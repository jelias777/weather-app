const path = require('path')
const express = require('express')
const hbs = require('hbs')
const prop = require('./util/properties')

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
        title: 'Weather',
        name: "Jorge Elias"
    })
})

app.get('/search', (req,res) => {
    res.render('search',{
        title: "Search",
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
    if(!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }
    res.send({
        address: req.query.address
    })
})

app.get('/products', (req, res) => {

    if(!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query)
    res.send({
        products: []
    })
})

app.get('/help/*', (req,res) => {
    res.render('404',{
        title: "404",
        description: "Help article not found",
        buttomText: "Go Help",
        link: "/help"
    })
})

app.get('*', (req, res) => {
    res.render('404',{
        title: "404",
        description: "Page not found",
        buttomText: "Go Home",
        link: "/"
    })
})

app.listen(prop.PORT, () => {
    console.log('Server is running on port ' + prop.PORT)
})