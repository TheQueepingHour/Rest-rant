const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [
        {
            name: 'H-Thai-ML',
            city: 'Chicago',
            state: 'IL',
            cuisines: 'Pizza, Hot dogs',
            pic: '/images/concrete-building.jpg'
        },
        {
            name: 'Coding Cat Cafe',
            city: 'Pheonix',
            state: 'AZ',
            cuisines: 'Coffee, Bakery',
            pic: '/images/cafe-ambiance.jpg'
        }
    ]
    res.render('places/index', {places})
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.post('/', (req, res) => {
    res.send('POST /places stub')
})

module.exports = router