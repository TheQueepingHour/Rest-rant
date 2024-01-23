const React = require('react')
const Def = require('./default')

function newPlace() {
    return (
        <Def>
            <main>
                <h1>New Place Form</h1>
                <form></form>
            </main>
        </Def>
    )
}

module.exports = newPlace()