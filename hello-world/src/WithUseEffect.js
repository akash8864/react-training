import React,{useState,useEffect} from 'react'

export const WithUseEffect = () => {
    const [count, setcount] = useState(0)
   const [name, setname] = useState('')
    // useEffect(() => {document.title=`${count}`})
    useEffect(() => {
        console.log("useeffet")
        {document.title=`${count}`}
        // return () => {
        //     cleanup }
    }
    , [count]
    )
        return (
            <div>
               <input type="text" value={name} onChange={(e)=>(setname(e.target.value))}></input>
             <button onClick={()=>{setcount(count+1 )}}>Submit{count} </button>
            </div>
        )
    
}
