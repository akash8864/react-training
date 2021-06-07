import React,{useEffect, useState} from 'react'
import axios from 'axios'
export const FethDataUseEffect = () => {
    const [states, setstate] = useState({})
    const [id, setid] = useState(1)
    const [button, setbutton] = useState(1)
    const handler=()=>
    {
       setbutton(id)
    }
    useEffect(() => {
       axios.get(`https://jsonplaceholder.typicode.com/posts/${button}`).then((res)=>
       {
           console.log(res)
        setstate(res.data)
        }).catch((err)=>{console.log(err)})
    }, [button])
    return (
        <div>
            <input type="text" value={id} onChange={e=>setid(e.target.value)}></input>
            <button onClick={handler}>Submit</button>
            {states.title}
            {/* {   states.map((state)=>(<h1 key={state.id}>{state.title}</h1>))} */}
        </div>
    )
}
