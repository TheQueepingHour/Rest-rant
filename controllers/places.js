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

module.exports = router