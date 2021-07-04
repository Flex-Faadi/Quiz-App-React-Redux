import React from 'react'

function Appbar(props) {
    return (
        <div className="text-light py-3 bg-dark text-center">
            <h3>{props.PageTitle}</h3>
        </div>
    )
}

export default Appbar
