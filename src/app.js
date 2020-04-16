const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = express.static(path.join(__dirname, '../public'))

//express.static function that takes the path of the folder we want to set
app.use(publicDirectoryPath)

app.get('/weather', (req, res) => {
    res.send('<h1> Weather </h1>')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})