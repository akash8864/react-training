import React, { Component } from 'react'
import axios from 'axios'
export class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id:'', 
            title:'',
           body:''
            
        }
    }
    handler=(e)=>
    {
        this.setState({[e.target.name]:[e.target.value]})
    }
    submit=(e)=>
    {
        e.preventDefault();
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state).then((response)=>{console.log(response)}).catch((error)=>{console.log(error)})
    }
    render() {
        const {id,title,body}=this.state
        return (
            <div>
                <form onSubmit={this.submit}>
                    <div>
                        <input type="text" name="id"  value={id} onChange={this.handler}></input>
                    </div>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.handler}></input>
                    </div>
                    <div>
                        <input type="text" name="body" value={body} onChange={this.handler}></input>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
