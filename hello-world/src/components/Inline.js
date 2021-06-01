import React from 'react'

function inline() {
    const heading=
    {
       fontSize:'72px',
       color:'blue'
    }
    return (
        <div>
            <h1 className="error">Error</h1>
            <h1 style={heading}>inline</h1>
        </div>
    )
}

export default inline
