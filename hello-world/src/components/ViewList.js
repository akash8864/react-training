import React from 'react'
import Person from './Person'

function ViewList() {
    const persons=
    [
        {
            id:1,
            firstname:"akash",
            lastname:"yadav",
            age:27,
            
        }
    ]
    const personlist=persons.map(person=><Person key={person.id} akash={person}/>)
    return (
        <div>
           {personlist}
        </div>
)
}

export default ViewList
