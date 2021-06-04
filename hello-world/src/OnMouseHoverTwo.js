import React, { Component } from 'react'

export class OnMouseHoverTwo extends Component {
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
           const {count,handler}=this.props
        return (
            <div>
             <h1 onMouseOver={handler}>{count} on mousehover</h1>   
            </div>
        )
    }
}

export default OnMouseHoverTwo

