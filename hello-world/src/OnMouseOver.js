import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'
export class OnMouseOver extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0
    //     }
    // }
    // handler=()=>
    // {
    //     this.setState((prevState)=>{return{count:prevState.count+1}})
    // }
    render() {
        // const {count}=this.state
        const {count,handler}=this.props
        return (
            <div>
                <h1 onMouseOver={handler}>mouseover {count}</h1>
            </div>
        )
    }
}

export default UpdatedComponent(OnMouseOver)
