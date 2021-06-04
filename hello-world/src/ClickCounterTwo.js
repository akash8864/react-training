import React, { Component } from 'react'

export class ClickCounterTwo extends Component {
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
                <button onClick={handler}>{count} click</button>
            </div>
        )
    }
}

export default ClickCounterTwo
