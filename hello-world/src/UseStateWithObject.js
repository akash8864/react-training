import React,{useState} from 'react'

export const UseStateWithObject = () => {
    const [name, setname] = useState({firstname:"",lastname:""})
   
    return (
        <div>
            Firstname:- <input type="text" value={name.firstname}
             onChange={
                (e)=>setname({...name,firstname:e.target.value})}></input>
            Lastname:- <input type="text" value={name.lastname} onChange={(e)=>setname({...name,lastname:e.target.value})}></input>
            <h1>your First Name Is:-{name.firstname}</h1>
            <h1>your Last Name Is:-{name.lastname}</h1>
            <h1>{JSON.stringify(name)}</h1>
        </div>
    )
}
