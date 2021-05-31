import React from 'react'

function Person({akash}) {
    return (
        <div >
            <h1 >my name is {akash.firstname} and last name is {akash.lastname} and i am {akash.age }</h1>
        </div>
    )
}

export default Person
