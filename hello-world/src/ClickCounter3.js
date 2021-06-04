import React, { useState } from 'react'

export const ClickCounter3 = () => {
    const initialcount=0
   const [count, setcount] = useState(initialcount)
 const handler0=()=>
 {
     setcount(initialcount)
 }
 const handler1=()=>
 {
    setcount((prevCount)=>{return prevCount+1 })
 }
 const handler2=()=>
 {
    setcount((prevCount)=>{return prevCount-1 })
 }
function handler3()
 {
     

     for(let i=0;i<5;i++)
     {
         
     setcount((prevCount)=>{console.log(prevCount) ;return prevCount+1 })
     
     }
 }

   return (
        <div>
    <h1>Count:{count}</h1> 
<button style={{backgroundColor:"red", color:"white"}} onClick={handler0}>Reset</button>  
<br/>    <br/>  
<button style={{backgroundColor:"green", color:"white"}} onClick={handler1}>Increment By One</button>  <br/>    <br/>         
<button style={{backgroundColor:"blue", color:"white"}} onClick={handler2}>Decrement By One</button>   <br/>  <br/>        
<button style={{backgroundColor:"darkgreen", color:"white"}} onClick={handler3}>Increment By Five </button>  <br/>    <br/>         
        </div>
    )
}
