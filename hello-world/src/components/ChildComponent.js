import React from 'react'

 function ChildComponent(props) {
    return (
        <div>
            <button onClick={()=>props.greet('child')}>Submit</button>
        </div>
    )
}

export default ChildComponent