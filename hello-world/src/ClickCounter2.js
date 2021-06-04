import React, { useState } from 'react'

const ClickCounter2 = () => {
    const [count, setcount] = useState(0)
   const handler=()=>
   {
    setcount(count+1)
   }
    
    return (
        <div>
            <button onClick={handler}>click {count}</button>
        </div>
    )
}

export default ClickCounter2
