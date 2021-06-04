import React, { useState } from 'react'

const ClickCounterUsingUsestate = () => {
    const[name,changename]=useState("Welcome To Our World ")
   
   const handler=()=>{
    if(name==="Welcome To Our World ") 
    {  
    changename("hello jarvis")
    }
    else
    {
        changename("Welcome To Our World ")
    }
    }
    
    return (
        <div style={{backgroundColor: "red"}}>
           <h1>{name}</h1> 
           <button onClick={handler}>please click</button>
        </div>
    )
}

export default ClickCounterUsingUsestate
