import React, { Component } from 'react'

export class ClassClick extends Component {
  handler()
   {
       console.log("button clicked")
   }
    render() {
        return (
            <div>
               <button onClick={this.handler()}>Submit</button> 
            </div>
        )
    }
}

export default ClassClick
