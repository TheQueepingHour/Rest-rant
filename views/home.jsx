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
                
            </main>
        </Def>
    )
}
{/* 
<div>
                    <img src="/images/dish-white-plate.jpg" alt="Dish on white ceramic plate" id="homePic"/>
                        Photo by <a href="https://unsplash.com/@jaywennington">Jay Wennington</a> on <a href="https://unsplash.com">UnSplash</a>
                    </div>
*/}
module.exports = home