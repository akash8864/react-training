import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
export class ParentComponent extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            greet:"hello"
       }
       this.parent=this.parent.bind(this)
   }
   parent(childname)
   {
       alert("hello parent" +" "+childname)
   }
   
    render() {
        return (
            <div>
                <ChildComponent greet={this.parent}/>
            </div>
        )
    }
}

export default ParentComponent
