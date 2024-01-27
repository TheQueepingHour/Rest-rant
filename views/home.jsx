const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div className="container-md d-flex flex-column align-items-center mb-3">
                    <h3 className="p3">Rant here!</h3>
                    <a href="/places">
                        <button className="btn-primary p-2">Places Page</button>
                    </a>
                </div>
                <div className="carousel slide" id="homeCarousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/images/dish-white-plate.jpg" alt="Dish on white ceramic plate" className="d-block w-100" id="carouselImgs"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/greenery-bar.jpg" alt="modern bar with overhead greenery" className="d-block w-100" id="carouselImgs"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/stone-cafe.jpg" alt="Old stone cafe building underneath blue sky" className="d-block w-100" id="carouselImgs"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </main>
        </Def>
    )
}

module.exports = home