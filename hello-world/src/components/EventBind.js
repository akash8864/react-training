import React, { Component } from 'react'

 class EventBind extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message:"hello"
             
            }
            this.handler= this.handler.bind(this) 
     }
     
    //  handler()
    //  {
    //    this.setState({message:"hello world"})
      
    // console.log(this)
    //  }
    handler=()=>{this.setState({message:"goodbye!"})}
    render() {
        return (
            <div>
                {this.state.message}
                {/* <button onClick={this.handler.bind(this)}>Submit</button> */}
                {/* <button onClick={()=>this.handler()}>Submit</button> */}
                <button onClick={this.handler}>Submit</button>
            </div>
        )
    }
}

export default EventBind
