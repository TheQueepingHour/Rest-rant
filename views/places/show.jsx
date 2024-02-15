const React = require('react')
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className='inactive'>
            Not yet rated
        </h3>
    )
    if(data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = sumRatings / data.place.comments.length
        rating = (
            <h3>
                {Math.round(averageRating)} stars
            </h3>
        )
    }
    if(data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className='border rounded col-sm-6 col-md-4 col-lg-3 mx-auto'>
                    <h2 className='rant'>{ c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main className='d-flex justify-content-evenly'>
                <div className='text-center col-sm-6 col-md-4 col-lg-3 p-1'>
                    <img src={data.place.pic} alt={data.place.name} className='indexImgs p-3'/>
                    <h3>Located in {data.place.city}, {data.place.state}</h3>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <h1 className='text-center'>{data.place.name}</h1>
                    <div>
                        <h2>Rating</h2>
                        {rating}
                    </div>
                    <div className="text-center">
                        <h2>Description</h2>
                        <h3>
                            {data.place.showEstablished()}
                        </h3>
                        <h4>
                            Serving {data.place.cuisines}
                        </h4>
                    </div>
                    <div className='d-flex flex-row justify-content-center mb-5'>
                        <a href={`/places/${data.id}/edit`} className='btn btn-warning px-2'>
                            <i className='bi bi-pencil'></i> Edit
                        </a>
                        <form method="POST" action={`/places/${data.id}?_method=DELETE`} className='px-2'>
                            <button type='submit' className='btn btn-danger'>
                                <i className='bi bi-trash'></i> Delete
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <div className='mb-5 row'>
                    <h2>Comments</h2>
                    {comments}
            </div>
            <form method="POST" action={`/places/${data.place.id}/comment`} className='row mx-auto container-fluid mb-5'>
                <div className='form-group container-fluid'>
                    <label htmlFor='content'>Rant Content</label>
                    <input className='form-control' id='content' name='content' required />
                </div>
                <div className='form-group col-sm-6 col-md-4 col-lg-3 p-1 mx-auto'>
                    <label htmlFor='author'>Author</label>
                    <input className='form-control' id='author' name='author' required />
                </div>
                <div className='form-group col-sm-6 col-md-4 col-lg-3 p-1 mx-auto'>
                    <label htmlFor='stars'>Rating</label>
                    <input type="range" className='form-range' min="0" max="5" step="0.5" id='stars' name='stars' required />
                </div>
                <div className='form-group col-sm-6 col-md-4 col-lg-3 p-1 mx-auto'>
                    <label htmlFor='rant' className='px-1'>Rant?</label>
                    <input type='checkbox' name='rant' id='rant' defaultChecked />
                </div>
                <input className='btn btn-primary' type='submit' value='Add Comment' />
            </form>
        </Def>
    )
}

module.exports = show