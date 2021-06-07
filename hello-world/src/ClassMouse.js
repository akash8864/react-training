import React, { Component } from 'react'

 class ClassMouse extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              "x":0,
              "y":0
         }
     }
     
     logmouseposition=(e)=>{
        console.log(e) 
        this.setState({x:e.clientX,y:e.clientY})}
     
     componentDidMount()
     {
        window.addEventListener('mousemove',this.logmouseposition)
        
     }
     componentWillUnmount()
     {
         window.removeEventListener('mousemove',this.logmouseposition)
     }
    render() {
        return (
            <div>
              <h1>X- {this.state.x}</h1> 
              <h1> Y -{this.state.y}</h1>
            </div>
        )
    }
}

export default ClassMouse
