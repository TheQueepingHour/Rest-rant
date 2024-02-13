const React = require('react')
const Def = require('../default')

function edit_form(data) {
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form method="POST" action={`/places/${data.id}?_method=PUT`} className='row mx-auto container-sm'>
                    <div className="form-group col-sm-6 col-md-4 col-lg-3 p-1">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" id="name" name="name" defaultValue={data.place.name} required />
                    </div>
                    <div className="form-group col-sm-6 col-md-4 col-lg-3 p-1">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" type="url" id="pic" name="pic" defaultValue={data.place.pic} />
                    </div>
                    <div className="form-group col-sm-6 col-md-4 col-lg-3 p-1">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" defaultValue={data.place.city} />
                    </div>
                    <div className="form-group col-sm-6 col-md-4 col-lg-3 p-1">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" defaultValue={data.place.state} />
                    </div>
                    <div className="form-group col-sm-6 col-md-4 col-lg-3 p-1">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" defaultValue={data.place.cuisines} required />
                    </div>
                    <div className="form-group col-sm-6 col-md-4 col-lg-3 p-1">
                        <label htmlFor="founded">Founded Year</label>
                        <input className="form-control" id="founded" name="founded" defaultValue={data.place.founded} />
                    </div>
                    <input className="btn btn-info" type="submit" value="Confirm changes" />
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form