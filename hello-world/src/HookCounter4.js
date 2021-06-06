import React, { useState } from 'react'

export const HookCounter4 = () => {
    const [array, setarray] = useState([])
    const handler=()=>
    {
        setarray([...array,{id:array.length,value:Math.floor(Math.random()*10+1)}])
    }
    return (
        <div>
            <button onClick={handler}>submit</button>
            
                {array.map((arrays)=>(<h1 key={arrays.id}>{console.log(arrays.value)}{arrays.value}</h1>))}
           
        </div>
    )
}
