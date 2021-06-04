import React, { Component } from 'react'
import MemoComp from './MemoComp';
// import PureComp from './PureComp';
// import RegComp from './RegComp';
 class ParentComponent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'akash'
         }
     }
     componentDidMount(){
         setInterval(() => {
             this.setState({name:'ram'})
         }, 2000);
     }
    render() {
        console.log("**********Parentcomp***************");
        return (
            <div>
              parent component  
              <MemoComp name={this.state.name}></MemoComp>
            {/* <PureComp name={this.state.name}></PureComp> */}
        {/* <RegComp name={this.state.name}></RegComp> */}
            </div>
        )
    }
}

export default ParentComponent
