import React from 'react'

function FunctionClick() {
function clickhandler()
{
console.log("button clicked")
}
    return (
        <div >
            <button onClick={clickhandler()}>Submit</button>
        </div>
    )
}

export default FunctionClick
