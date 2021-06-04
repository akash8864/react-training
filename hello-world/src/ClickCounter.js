import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'
export class ClickCounter extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0
    //     }
    // }
    // handler=()=>
    // {
    //     this.setState((prevState)=>{return {count:prevState.count+1}})
    // }
    render() {
        // const {count}=this.state
        const {count,handler}=this.props
        return (
            <div>
    <button onClick={handler}> clicked {count} times</button>
    
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter)
