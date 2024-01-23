const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [
        {
            name: 'H-Thai-ML',
            city: 'Chicago',
            state: 'IL',
            cuisines: 'Pizza, Hot dogs',
            pic: 'http://placekitten.com/250/250'
        },
        {
            name: 'Coding Cat Cafe',
            city: 'Pheonix',
            state: 'AZ',
            cuisines: 'Coffee, Bakery',
            pic: 'http://placekitten.com/250/250'
        }
    ]
    res.render('places/index', {places})
})

module.exports = router