import React, { Component } from 'react'

export class WithoutUseEffect extends Component {
  
    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
             name:''
        }
    }
    componentDidMount()
    {
        document.title=`click ${this.state.count}`
    }
    componentDidUpdate(PrevProps,PrevState)
    {
        if(PrevState.count!==this.state.count)
        {
            console.log('update document title')
        document.title=`click ${this.state.count}`
      
        }
    }
    
    render() {
        return (
            <div>
                 <input type="text" value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}></input>
                <button onClick={()=>{this.setState({count:this.state.count+1} )}}>Submit {this.state.count} times</button>
            </div>
        )
    }
}

export default WithoutUseEffect
