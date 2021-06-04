import React, { Component } from 'react'
import FRInput from './FRInput'

export class FRParentInput extends Component {
    constructor(props) {
        super(props)
    this.inputref=React.createRef()
    }
    clickhandler=()=>
    {
        this.inputref.current.focus()
    }
    render() {
        return (
            <div>
              <FRInput ref={this.inputref}></FRInput>
              <button onClick={this.clickhandler}>Focus Input</button>  
            </div>
        )
    }
}

export default FRParentInput
