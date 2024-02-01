const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous"></link>
                <link href="/css/style.css" rel="stylesheet"/>
            </head>
            <body id="defaultBody" className='d-flex flex-column'>
                {html.children}

                {/* Bootstrap Script */}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
            </body>
            <footer id="defFoot">
                <a href="https://www.linkedin.com/in/josh-rivera-900b24195/" className='mx-auto p-1'><button className="btn btn-secondary">LinkedIn</button></a>
            </footer>
        </html>
    )
}

module.exports = Def