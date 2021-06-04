import React, { Component } from 'react'
import Input from './Input'

export class FocusInput extends Component {
    constructor(props) {
        super(props)
    this.componentRef=React.createRef()
    }
    clickhandler=()=>{
        this.componentRef.current.focusinput()
    }
    render() {
        return (
            <div>
                <Input ref={this.componentRef}></Input>
                <button type="submit" onClick={this.clickhandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
