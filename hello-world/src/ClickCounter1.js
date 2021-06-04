import React, { Component } from 'react'

export class ClickCounter1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    handler=()=>
    {
        this.setState((prevState)=>{return {count:prevState.count+1}})
    }
    render() {
        const {count}=this.state
        return (
            
            <div style={{backgroundColor: "lightblue"}}>
               <button onClick={this.handler}>click {count}</button> 
            </div>
        )
    }
}

export default ClickCounter1


