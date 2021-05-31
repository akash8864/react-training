import React,{Component} from "react"

class Message extends Component
{
    constructor()
    {
        super()
        this.state=
        {
            Message:"welcome visistor"
        }
    }
    changeMessage()
    {
       this.setState({Message:"thank you for subscribe"},console.log(Message))
    }
    render(){
        return (<>
        <h1>{this.state.Message}</h1>
        <button onClick={()=>this.changeMessage()}>submit</button></>
            )
    }
}
export default Message