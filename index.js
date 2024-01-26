require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.static('public'))

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
    // res.send('Home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)