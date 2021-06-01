import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

 class LifeCycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'akash'
         }
         console.log("lyfecycle a constructor")
     }
     static getDerivedStateFromProps(props,state)
     {
         console.log("A dervided")
             return null
     }
     
componentDidMount()
{
    console.log("did mount A")
}
shouldComponentUpdate()
{
    console.log(" A should component update")
    return true
}
getSnapshotBeforeUpdate(prevProps,prevState)
{
console.log("a snapshot")
return null
}
componentDidUpdate(){
    console.log("a did upate")
}
changeState=()=>
{
    this.setState({
        name:'jarvis'
    })
}
    render() {
        console.log("lifecycle a rendered")
        return (
            <div>
               <h5>lifecycle a</h5>
               <button onClick={this.changeState}>change state</button>
               <h5>lifecycle B</h5>
               <LifeCycleB></LifeCycleB>
            </div>
        )
    }
}

export default LifeCycleA
