const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous"></link>
                <link href="/css/style.css" rel="stylesheet"/>
            </head>
            <body id="defaultBody" className='d-flex flex-column pb-4'>
                <nav className='navbar navbar-expand-lg'>
                    <div className='container-fluid'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <a href="/" className='nav-link active' aria-current="page">Home</a>
                            </li>
                            <li className='nav-item'>
                                <a href="/places" className='nav-link'>Places</a>
                            </li>
                            <li className='nav-item'>
                                <a href="/places/new" className='nav-link'>Add Place</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                {html.children}

                {/* Bootstrap Script */}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
            </body>
            <footer id="defFoot" className='d-flex justify-content-center'>
                <a href="https://www.linkedin.com/in/josh-rivera-900b24195/" className='p-1'><button className="btn btn-secondary">LinkedIn</button></a>
                <span className='fw-light pt-2 px-2'>Created by Josh Rivera</span>
            </footer>
        </html>
    )
}

module.exports = Def