const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>Home</h1>
                <div>
                    <img src="/images/dish-white-plate.jpg" alt="Dish on white ceramic plate" id="homePic"/>
                    <div>
                        Photo by <a href="https://unsplash.com/@jaywennington">Jay Wennington</a> on <a href="https://unsplash.com">UnSplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home