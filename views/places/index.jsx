const React = require('react')
const Def = require('../default')

function index(data) {
    let placesFormatted = data.places.map((place) => {
        return(
            <div key={index} className="col-sm-6 col-md-4 col-lg-3 mx-auto text-center">
                <a href={`/places/${place.id}`}>
                    {place.name}
                </a>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name} className="img-fluid indexImgs"/>
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
                <p className="text-center">
                    Founded in {place.founded}
                </p>
            </div>
        )
    })
    return(
        <Def>
            <main>
                <h1>Places to Rant or Rave about</h1>
                <div className="row">
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = index