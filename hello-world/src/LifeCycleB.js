import React, { Component } from 'react'

 class LifeCycleB extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'akash'
         }
         console.log("lyfecycle B constructor")
     }
     static getDerivedStateFromProps(props,state)
     {
         console.log("B dervided")
             return null
     }
     

componentDidMount()
{
    console.log("did mount B")
}
shouldComponentUpdate()
{
    console.log(" B should component update")
    return true
}
getSnapshotBeforeUpdate(prevProps,prevState)
{
console.log("B snapshot")
return null
}
componentDidUpdate(){
    console.log("B did upate")
}
    render() {
        console.log("lifecycle B rendered")
        return (
            <div>
                <h1></h1>
            </div>
        )
    }
}

export default LifeCycleB
