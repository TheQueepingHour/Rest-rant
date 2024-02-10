const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main className='d-flex justify-content-evenly'>
                <img src={data.place.pic} alt={data.place.name} className='indexImgs p-3'/>
                <div className='d-flex flex-column align-items-center p-5'>
                    <h1 className='text-center'>{data.place.name}</h1>
                    <div>
                        <h2>Rating</h2>
                        <p>Not rated</p>
                    </div>
                    <div>
                        <h2>Description</h2>
                        <p>Located in {data.place.city}, {data.place.state}, and serving {data.place.cuisines}</p>
                    </div>
                </div>
            </main>
            <div className='d-flex flex-column align-items-center mb-5'>
                    <h2>Comments</h2>
                    <p>No comments yet!</p>
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
        </Def>
    )
}

module.exports = show