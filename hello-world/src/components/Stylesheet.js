import React from 'react'
import  './myStyles.css'
 function Stylesheet(props) {
    if(props.primary)
    {
        var akash='primary'
    }
    else
    {
         akash=''
    }
    return (
        <div>
            <h1 className={`${akash} font-xl`} >Stylesheet</h1>
        </div>
    )
}
export default Stylesheet
