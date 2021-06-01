import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             comment:'',
             opt:''
        }
    }
    handleemailChange=(event)=>
    {
        this.setState({email:event.target.value})
    }
    handlecommentChange=(event)=>
    {
        this.setState({comment:event.target.value})
    }
    handleoptChange=(event)=>{
        this.setState({opt:event.target.value})
    }
    submit=(event)=>
    {
       
        alert(`${this.state.email} ${this.state.comment} ${this.state.opt}`)
        event.preventDefault();
    }
    render() {
        const {email,comment,opt}=this.state
        return (
            <div>
            <form onSubmit={this.submit}>
            <div className="mb-3">
            
            Enter Email address : <input  className="form-control" value={email} onChange={this.handleemailChange}></input>
          </div>
          <div className="mb-3">
            Textarea : 
            <textarea className="form-control" rows="3" value={comment} onChange={this.handlecommentChange}></textarea>
          </div>
         <select value={opt} onChange={this.handleoptChange}>
         <option value="default">Default</option>
             <option value="react">React</option>
             <option value="angular">Angular</option>
             <option value="vue">Vue</option>
         </select>
         <br></br> <br></br>
         <button type="submit">submit</button>
          </form>
          
         
          </div>
        )
    }
}

export default Form
