import React, { Component } from 'react'

export class counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
                 count:0
            
        }
    }
   IncreamentFive()
   {
       
        //    this.setState({count:this.state.count+1},()=>console.log(this.state.count))
        //    console.log(this.state.count)
        this.setState((a)=>({count:a.count+1}))
       // console.log(this.state.count)
   } 
   
    render() {
        return (
            <div>
               <h1> count-{this.state.count}</h1>
               <button onClick={()=>this.IncreamentFive()}>increase</button>
            </div>
        )
    }
}

export default counter
