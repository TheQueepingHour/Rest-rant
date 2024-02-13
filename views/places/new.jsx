const React = require('react')
const Def = require('../default')

function new_form() {
    return (
        <Def>
            <main>
                <h1>Create a new place</h1>
                <form method="POST" action="/places" className='row mx-auto container-sm'>
                    <div className="form-group col-sm-6 col-md-4 col-lg-3 p-1">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" id="name" name="name" required />
                    </div>
                    <div className="form-group col-sm-6 col-md-4 col-lg-3 p-1">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" type="url" id="pic" name="pic" />
                    </div>
                    <div className="form-group col-sm-6 col-md-4 col-lg-3 p-1">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" />
                    </div>
                    <div className="form-group col-sm-6 col-md-4 col-lg-3 p-1">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" />
                    </div>
                    <div className="form-group col-sm-6 col-md-4 col-lg-3 p-1">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" required />
                    </div>
                    <div className="form-group col-sm-6 col-md-4 col-lg-3 p-1">
                        <label htmlFor="founded">Founded Year</label>
                        <input className="form-control" id="founded" name="founded" />
                    </div>
                    <input className="btn btn-primary p-2" type="submit" value="Add Place" />
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form