const React = require('react')
const Def = require('./default')

function error404() {
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <div className="d-flex flex-column align-items-center">
                    <img src="/images/funny-monkey.jpg" alt="Monkey holding handrail" id="monkey404"/>
                    <div>
                        Photo by <a href="https://unsplash.com/@jareddrice">Jared Rice</a> on <a href="https://unsplash.com">UnSplash</a>
                    </div>
                </div>
                <p className="text-center fs-5">Sorry, can't find this page!</p>
            </main>
        </Def>
    )
}

module.exports = error404